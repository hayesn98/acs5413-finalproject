import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";

const DEFAULT_REGION = {
    latitude: 35.19894,
    longitude: -97.44485,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
};

export default function MapScreen() {
    const params = useLocalSearchParams<{ latitude?: string; longitude?: string }>();

    const region: Region = {
        latitude: params.latitude ? Number(params.latitude) : DEFAULT_REGION.latitude,
        longitude: params.longitude ? Number(params.longitude) : DEFAULT_REGION.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                key={`${region.latitude},${region.longitude}`}
                style={StyleSheet.absoluteFillObject}
                provider={PROVIDER_GOOGLE}
                region={region}
            >
            <Marker coordinate={region} />
            </MapView>
        </View>
    );
}

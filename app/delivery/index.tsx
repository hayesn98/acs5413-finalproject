import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const tiles = [
    { id: "pizza", label: "Pizza", location: { latitude: 44.5013, longitude: -88.0622 } },
    { id: "drinks", label: "Drinks", location: { latitude: 35.19894, longitude: -97.44485 } },
];

export default function DeliveryScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            {tiles.map((tile) => (
                <View
                    key={tile.id}
                    style={{
                        padding: 20,
                        backgroundColor: "#ddcba4",
                        borderRadius: 16,
                    }}
                >
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>{tile.label}</Text>

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                padding: 10,
                                backgroundColor: "#841617",
                                borderRadius: 8,
                                alignItems: "center",
                            }}
                            onPress={() => router.push(`/delivery/${tile.id}`)}
                        >
                            <Text style={{ color: "white" }}>View Items</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                padding: 10,
                                backgroundColor: "#3b82f6",
                                borderRadius: 8,
                                alignItems: "center",
                            }}
                            onPress={() =>
                                router.push({
                                    pathname: "/map",
                                    params: tile.location,
                                })
                            }
                        >
                            <Text style={{ color: "white" }}>See Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

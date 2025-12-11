import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PickupScreen() {
    const items = [
    { id: "steakres", label: "Steak Restaurant", location: { latitude: 40.63713, longitude: -74.07557 } },
    { id: "sushires", label: "Sushi Restaurant", location: { latitude: 40.58807, longitude: -73.67123 } },
    { id: "seafoodres", label: "Seafood Restaurant", location: { latitude: 40.79062, longitude: -73.97246 }},
    { id: "britishpub", label: "British Pub", location: { latitude: 40.66774, longitude: -73.98734 }},
    { id: "indianres", label: "Indian Restaurant", location: { latitude: 40.76469, longitude: -73.01495 }},
    { id: "vietres", label: "Vietnamese Restaurant", location: { latitude: 41.01381, longitude: -73.80395 }},
    ];

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            {items.map((item) => (
                <View
                    key={item.id}
                    style={{
                        padding: 20,
                        backgroundColor: "#ddcba4",
                        borderRadius: 16,
                    }}
                >
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.label}</Text>

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                padding: 10,
                                backgroundColor: "#841617",
                                borderRadius: 8,
                                alignItems: "center",
                            }}
                            onPress={() => router.push(`/pickup/${item.id}`)}
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
                                    params: item.location,
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

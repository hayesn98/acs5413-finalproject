import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PickupScreen() {
    const items = [
        {
            id: "pizza",
            title: "Pizza",
            location: { latitude: 44.5013, longitude: -88.0622 },
        },
        {
            id: "drinks",
            title: "Drinks",
            location: { latitude: 35.19894, longitude: -97.44485 },
        },
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
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.title}</Text>

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

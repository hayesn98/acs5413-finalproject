import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const tiles = [
    { id: "pizzaff", label: "Pizza Fast Food", location: { latitude: 40.81472, longitude: -73.00007 } },
    { id: "burgerff", label: "Burger Fast Food", location: { latitude: 40.88316, longitude: -74.29085 } },
    { id: "coffeeshop", label: "Coffee Shop", location: { latitude: 40.75460, longitude: -74.03230 }},
    { id: "friedchicken", label: "Fried Chicken", location: { latitude: 40.75630, longitude: -74.17363 }},
    { id: "drinks", label: "Drinks", location: { latitude: 40.66113, longitude: -73.99708 }},
    { id: "tacoff", label: "Taco Fast Food", location: { latitude: 40.77224, longitude: -74.23100 }},
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

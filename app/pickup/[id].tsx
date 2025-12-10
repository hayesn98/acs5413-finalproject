import { addCartItem } from "@/firebase/firebaseCartAPI";
import { useLocalSearchParams } from "expo-router";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

type Tile = {
    label: string;
};

const tileSets: Record<string, Tile[]> = {
    pizza: [{ label: "Pepperoni" }, { label: "Margherita" }],
    drinks: [{ label: "Coke" }, { label: "Lemonade" }],
};

export default function PickupDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const tiles: Tile[] = id ? tileSets[id] || [] : [];

    async function handlePress(tileLabel: string) {
        try {
            await addCartItem(tileLabel.toLowerCase());
            Alert.alert("Added to cart", tileLabel);
        } catch (err) {
            console.error(err);
            Alert.alert("Error", "Failed to add item to cart");
        }
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            <Text style={{ fontSize: 26, marginBottom: 10 }}>
                {id?.toUpperCase()}
            </Text>

            {tiles.map((tile, index) => (
                <Pressable
                    key={index}
                    onPress={() => handlePress(tile.label)}
                >
                    <View
                        style={{
                            padding: 20,
                            backgroundColor: "#ddcba4",
                            borderRadius: 16,
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>{tile.label}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

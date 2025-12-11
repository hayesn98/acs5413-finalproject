import { useFocusEffect } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    deleteCartItem,
    fetchCartItems,
    updateCartItemQuantity
} from "../../firebase/firebaseCartAPI";


export default function CartScreen() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    async function reload() {
        const items = await fetchCartItems();
        setItems(items);
    }

    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            reload().finally(() => setLoading(false));
        }, [])
    );

    async function sendOrderNotification() {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
            alert("Enable notifications to receive order updates!");
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Your order is on its way!",
                body: "Thanks for checking out — your delivery is coming soon.",
            },
            trigger: null,
        });
    }

    function handleRemove(item: any) {
        Alert.alert(
            "Remove Item",
            `Do you want to remove one "${item.name}"?`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Yes",
                    onPress: async () => {
                        if (item.quantity > 1) {
                            await updateCartItemQuantity(item.id, item.quantity - 1);
                        } else {
                            await deleteCartItem(item.id);
                        }
                        reload();
                    }
                }
            ]
        );
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#323232" }}>
                <ActivityIndicator size="large" color="#841617" />
            </View>
        );
    }

    if (items.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#323232" }}>
                <Text style={{ fontSize: 18, color: "#f0f0f0" }}>Your cart is empty.</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            padding: 20,
                            marginBottom: 16,
                            backgroundColor: "#323232",
                            borderRadius: 12,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "#f0f0f0" }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                        <Text style={{ marginTop: 4, color: "#f0f0f0" }}>Quantity: {item.quantity}</Text>

                        <TouchableOpacity
                            style={{
                                marginTop: 10,
                                backgroundColor: "#841617",
                                padding: 10,
                                borderRadius: 8,
                                alignSelf: "flex-start",
                            }}
                            onPress={() => handleRemove(item)}
                        >
                            <Text style={{ color: "white" }}>Remove One</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            { }
            <View
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: "#841617",
                        padding: 16,
                        borderRadius: 12,
                        alignItems: "center",
                    }}
                    onPress={() =>
                        Alert.alert(
                            "Checkout",
                            "Do you want to checkout with these items?",
                            [
                                { text: "Cancel", style: "cancel" },
                                {
                                    text: "Yes",
                                    onPress: async () => {
                                        await sendOrderNotification();
                                    },
                                },
                            ]
                        )
                    }
                >
                    <Text style={{ color: "white", fontSize: 18 }}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

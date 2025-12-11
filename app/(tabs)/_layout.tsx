import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Notifications from "expo-notifications";
import { Tabs } from "expo-router";

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true,
            shouldShowBanner: true,
            shouldShowList: true,
        };
    }
});


export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#841617",
            headerShown: false,
            tabBarStyle: { backgroundColor: "#000000" },
        }}>
            <Tabs.Screen
                name="delivery"
                options={{
                    title: "Delivery",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="th-large" color={color} size={size} />
                    )
                }}
            />

            <Tabs.Screen
                name="pickup"
                options={{
                    title: "Pickup",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="th-large" color={color} size={size} />
                    )
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-cart" color={color} size={size} />
                    ),
                }}
            />

        </Tabs>
    );
}

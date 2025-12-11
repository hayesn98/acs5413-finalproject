import { Stack } from "expo-router";

export default function DeliveryStack() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: "Delivery Restaurants" }}
            />
            <Stack.Screen
                name="[id]"
                options={{ title: "Menu" }}
            />
        </Stack>
    );
}

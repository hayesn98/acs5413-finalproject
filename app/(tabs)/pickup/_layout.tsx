import { Stack } from "expo-router";

export default function PickupStack() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                animation: "slide_from_right",
                headerStyle: { backgroundColor: "#000000" },
                headerTitleStyle: { color: "#f0f0f0" },
                headerTintColor: "#f0f0f0",
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: "Pickup Restaurants" }}
            />
            <Stack.Screen
                name="[id]"
                options={{ title: "Menu" }}
            />           
        </Stack> 
    );
}

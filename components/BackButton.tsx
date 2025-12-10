import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function BackButton() {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, color: "#841617" }}>Back</Text>
        </TouchableOpacity>
    );
}

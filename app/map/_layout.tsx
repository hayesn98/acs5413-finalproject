import { Stack } from 'expo-router';
import React from 'react';
import BackButton from "../../components/BackButton";

const Layout = () => (
	<Stack>
		<Stack.Screen name="index" options={{ title: 'Restaurant Location', headerTitleAlign: 'center', headerLeft: () => (<BackButton />) }} />
	</Stack>
);

export default Layout;
import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/auth_context";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Text style={{ fontSize: 35.0 }}>Account Screen</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;

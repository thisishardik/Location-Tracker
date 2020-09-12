import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/auth_context";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<View
				style={{
					padding: 20.0,
					justifyContent: "center",
					alignSelf: "center",
					paddingBottom: 50.0,
				}}
			>
				<Text style={{ fontSize: 30.0 }}>Account Screen</Text>
			</View>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};
AccountScreen.navigationOptions = {
	title: "Account",
	tabBarIcon: <FontAwesome name="gear" size={20} />,
};
const styles = StyleSheet.create({});

export default AccountScreen;

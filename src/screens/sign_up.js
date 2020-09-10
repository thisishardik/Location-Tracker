import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/auth_context";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../components/auth_form";
import SignInScreen from "./sign_in";
import NavLink from "../components/nav_link";

const SignUpScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			{/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}
			<AuthForm
				headerText="Sign Up"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				// onSubmit={signup}
				onSubmit={({ email, password }) => signup({ email, password })}
			/>
			<NavLink
				routeName="SignIn"
				text="Already have an account? Sign In instead."
			/>
		</View>
	);
};

SignUpScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50.0,
		marginBottom: 150.0,
	},
	error: {
		fontSize: 16.0,
		color: "red",
		marginLeft: 15.0,
		marginTop: 15.0,
	},
	link: {
		fontSize: 16.0,
		color: "blue",
	},
});

export default SignUpScreen;

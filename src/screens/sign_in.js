import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { NavigationEvents } from "react-navigation";
import { Context } from "../context/auth_context";
import AuthForm from "../components/auth_form";
import NavLink from "../components/nav_link";

const SignInScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(Context);

	return (
		<View style={styles.container}>
			{/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}
			<AuthForm
				headerText="Sign In"
				errorMessage={state.errorMessage}
				submitButtonText="Sign In"
				// onSubmit={signin}
				onSubmit={({ email, password }) => signin({ email, password })}
			/>
			<NavLink
				routeName="SignUp"
				text="Don't have an account? Sign Up instead."
			/>
		</View>
	);
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;

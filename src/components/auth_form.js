import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Spacer>
				<Text h2>{headerText}</Text>
			</Spacer>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				label="Email"
				value={email}
				onChangeText={(newEmail) => setEmail(newEmail)}
			/>
			<Spacer />
			<Input
				autoCapitalize="none"
				secureTextEntry={true}
				autoCorrect={false}
				label="Password"
				value={password}
				onChangeText={(newPassword) => setPassword(newPassword)}
			/>
			{errorMessage ? (
				<Text style={styles.error}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</>
	);
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

export default AuthForm;

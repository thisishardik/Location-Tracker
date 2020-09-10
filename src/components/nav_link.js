import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Spacer from "./spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ text, routeName, navigation }) => {
	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
				<Spacer>
					<Text style={styles.link}>{text}</Text>
				</Spacer>
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	link: {
		fontSize: 16.0,
		color: "blue",
	},
});

export default withNavigation(NavLink);

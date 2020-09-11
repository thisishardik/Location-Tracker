import React, { useContext, useEffect, useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/map";
import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from "expo-location";
import "../helper_functions/_mockLocation";
import { Context as LocationContext } from "../context/location_context";
import useLocation from "../hooks/use_location";
import TrackForm from "../components/track_form";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
	const {
		state: { recording },
		addLocation,
	} = useContext(LocationContext);
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[recording]
	);
	const [err] = useLocation(isFocused || recording, callback);

	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Text h2>Create a Create</Text>
			<Map />

			{err ? (
				<Text style={{ color: "red", fontSize: 20.0 }}>
					Please enable Location Services
				</Text>
			) : null}
			<TrackForm />
		</SafeAreaView>
	);
};
TrackCreateScreen.navigationOptions = {
	title: "Add Track",
	tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

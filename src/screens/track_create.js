import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/map";
import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from "expo-location";
import "../helper_functions/_mockLocation";

const TrackCreateScreen = () => {
	const [err, setErr] = useState(null);

	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				(location) => {
					console.log(location);
				}
			);
		} catch (e) {
			setErr(e);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Text h2>Create a Create</Text>
			<Map />
			{err ? (
				<Text style={{ color: "red", fontSize: 20.0 }}>
					Please enable Location Services
				</Text>
			) : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

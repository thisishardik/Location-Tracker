import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/track_context";
import MapView, { Polyline } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

const TrackDetailsScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam("_id");

	const track = state.find((t) => t._id === _id);
	const initialCoords = track.locations[0].coords;

	return (
		<>
			<View style={{ padding: 20.0, alignSelf: "center" }}>
				<Text style={{ fontWeight: "600", fontSize: 30 }}>
					Your Track
				</Text>
			</View>
			<MapView
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...initialCoords,
				}}
				style={styles.map}
			>
				<Polyline
					strokeColor="blue"
					strokeWidth={2.5}
					coordinates={track.locations.map((loc) => loc.coords)}
				/>
			</MapView>
			<Text style={{ padding: 15.0, alignSelf: "center", fontSize: 35 }}>
				{track.name}
			</Text>
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 430,
	},
});

export default TrackDetailsScreen;

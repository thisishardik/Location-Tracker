import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { Context as TrackContext } from "../context/track_context";
import { ListItem } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { NavigationEvents } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);

	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("TrackDetail", {
									_id: item._id,
								})
							}
						>
							<ListItem chevron title={item.name} />
						</TouchableOpacity>
					);
				}}
			/>
		</>
	);
};
TrackListScreen.navigationOptions = {
	title: "Tracks",
};
const styles = StyleSheet.create({});

export default TrackListScreen;

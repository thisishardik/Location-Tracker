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
import { AntDesign } from "@expo/vector-icons";

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
							<View
								style={{
									paddingLeft: 15.0,
									paddingRight: 15.0,
									paddingTop: 15.0,
								}}
							>
								<ListItem
									rightIcon={
										<AntDesign
											name="right"
											size={20}
											color="black"
										/>
									}
									title={item.name}
								/>
							</View>
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

import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./spacer";
import { Context as LocationContext } from "../context/location_context";
import useSaveTrack from "../hooks/use_save_track";

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

	const [saveTrack] = useSaveTrack();

	return (
		<>
			<Spacer>
				<Input
					style={styles.input}
					value={name}
					placeholder="Enter name here"
					onChangeText={changeName}
				/>
			</Spacer>
			<Spacer>
				<View
					style={{
						marginLeft: 15.0,
						marginRight: 15.0,
						marginBottom: 15.0,
					}}
				>
					{recording ? (
						<Button
							title="Stop Recording"
							onPress={stopRecording}
						/>
					) : (
						<Button
							title="Start Recording"
							onPress={startRecording}
						/>
					)}
				</View>
				<Spacer>
					{!recording && locations.length ? (
						<Button title="Save Recording" onPress={saveTrack} />
					) : null}
				</Spacer>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		color: "#000",
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	buttonStyle: {
		backgroundColor: "red",
	},
});

export default TrackForm;

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
					value={name}
					placeholder="Enter name here"
					onChangeText={changeName}
				/>
			</Spacer>
			<Spacer>
				{recording ? (
					<Button title="Stop Recording" onPress={stopRecording} />
				) : (
					<Button title="Start Recording" onPress={startRecording} />
				)}
				<Spacer>
					{!recording && locations.length ? (
						<Button title="Save Recording" onPress={saveTrack} />
					) : null}
				</Spacer>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({});

export default TrackForm;

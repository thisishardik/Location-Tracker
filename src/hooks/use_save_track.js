import { useContext } from "react";
import { Context as TrackContext } from "../context/track_context";
import { Context as LocationContext } from "../context/location_context";
import { navigate } from "../helper_functions/navigation_ref";

export default () => {
	const { createTrack } = useContext(TrackContext);
	const {
		state: { locations, name },
		reset,
	} = useContext(LocationContext);

	const saveTrack = async () => {
		await createTrack(name, locations);
		reset();
		navigate("TrackList");
	};

	return [saveTrack];
};

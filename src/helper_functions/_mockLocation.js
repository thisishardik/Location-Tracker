import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increament) => {
	return {
		timestamp: 100000,
		coords: {
			heaading: 0,
			speed: 0,
			accuracy: 5,
			altitudeAccuracy: 5,
			altitude: 5,
			longitude: -122.0312186 + increament * tenMetersWithDegrees,
			latitude: 37.332332 + increament * tenMetersWithDegrees,
		},
	};
};

let counter = 0;
setInterval(() => {
	Location.EventEmitter.emit("Expo.locationChanged", {
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter),
	});
	counter++;
}, 1000);

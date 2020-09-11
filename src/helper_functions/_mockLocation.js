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
			longitude: 80.893675 + increament * tenMetersWithDegrees,
			latitude: 26.795822 + increament * tenMetersWithDegrees,
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

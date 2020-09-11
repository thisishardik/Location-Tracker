import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
	baseURL: "http://a9c39ad99908.ngrok.io",
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	}, // Will run automatically when making a request
	(e) => {
		return Promise.reject(e);
	} // Will run automatically when there is an error
);

export default instance;

import createDataContext from "./create_data_context";
import trackerAPI from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../helper_functions/navigation_ref";

const authReducer = (state, action) => {
	switch (action.type) {
		case "add_error":
			return { ...state, errorMessage: action.payload };
		// case "sign_up":
		// 	return { errorMessage: "", token: action.payload };
		case "sign_in":
			return { errorMessage: "", token: action.payload };
		case "clear_error_message":
			return { ...state, errorMessage: "" };
		case "sign_out":
			return { token: null, errorMessage: "" };
		default:
			return state;
	}
};

// Action Functions defined here

const tryLocalSignIn = (dispatch) => {
	return async () => {
		const token = await AsyncStorage.getItem("token");

		if (token) {
			dispatch({ type: "sign_in", payload: token });
			navigate("TrackList");
		} else {
			navigate("loginFlow");
		}
	};
};

const clearErrorMessage = (dispatch) => {
	return () => {
		dispatch({ type: "clear_error_message" });
	};
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const response = await trackerAPI.post("/signup", {
				email,
				password,
			});
			await AsyncStorage.setItem("token", response.data.token);
			console.log(`response.data.token: ${response.data.token}`);
			dispatch({ type: "sign_in", payload: response.data.token });
			// type === sign_up but both actions are same so sign_in

			navigate("TrackList");
		} catch (e) {
			console.log(e);
			dispatch({ type: "add_error", payload: "Something went wrong." });
		}
	};
};

const signin = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const response = await trackerAPI.post("/signin", {
				email,
				password,
			});
			await AsyncStorage.setItem("token", response.data.token);
			dispatch({ type: "sign_in", payload: response.data.token });

			navigate("TrackList");
		} catch (e) {
			console.log(e);
			dispatch({ type: "add_error", payload: "Something went wrong." });
		}
	};
};

const signout = (dispatch) => {
	return async () => {
		await AsyncStorage.removeItem("token");
		dispatch({ type: "sign_out" });

		navigate("loginFlow");
	};
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signup, signout, clearErrorMessage, tryLocalSignIn },
	{ token: null, errorMessage: "" }
);

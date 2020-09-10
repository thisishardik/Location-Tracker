import createDataContext from "./create_data_context";
import trackerAPI from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../helper_functions/navigation_ref";

const authReducer = (state, action) => {
	switch (action.type) {
		case "add_error":
			return { ...state, errorMessage: action.payload };
		case "sign_up":
			return { errorMessage: "", token: action.payload };
		case "sign_in":
			return { errorMessage: "", token: action.payload };
		case "clear_error_message":
			return { ...state, errorMessage: "" };
		default:
			return state;
	}
};

// Action Functions defined here

const clearErrorMessage = (dispatch) => {
	dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const response = await trackerAPI.post("/signup", {
				email,
				password,
			});
			await AsyncStorage.setItem("token", response.data.token);
			dispatch({ type: "sign_up", payload: response.data.token });

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
	return () => {
		//
	};
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signup, signout },
	{ token: null, errorMessage: "" }
);

import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/my_account";
import SignInScreen from "./src/screens/sign_in";
import SignUpScreen from "./src/screens/sign_up";
import TrackCreateScreen from "./src/screens/track_create";
import TrackDetailsScreen from "./src/screens/track_detail";
import TrackListScreen from "./src/screens/track_list";
import { Provider as AuthProvider } from "./src/context/auth_context";
import { setNavigator } from "./src/helper_functions/navigation_ref";
import ResolveAuthScreen from "./src/screens/resolve_auth_screen";

const switchNavigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		SignUp: SignUpScreen,
		SignIn: SignInScreen,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailsScreen,
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<AuthProvider>
			<App ref={(navigator) => setNavigator(navigator)} />
		</AuthProvider>
	);
};

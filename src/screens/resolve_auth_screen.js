import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/auth_context";

const ResolveAuthScreen = () => {
	const { tryLocalSignIn } = useContext(AuthContext);

	useEffect(() => {
		tryLocalSignIn();
	}, []);

	return null;
};

export default ResolveAuthScreen;

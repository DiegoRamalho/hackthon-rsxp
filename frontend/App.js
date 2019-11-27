import React from "react";
import Routes from "./src/routes";
import { StatusBar } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#282a36", "#44475a", "#44475a"]} style={{ flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </LinearGradient>
  );
}

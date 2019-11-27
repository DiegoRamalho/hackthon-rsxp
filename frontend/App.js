import React from "react";
import Routes from "./src/routes";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#bdedff", "#7d19ff", "#e111e8"]} style={{ flex: 1}}>
      <Routes />
    </LinearGradient>
  );
}

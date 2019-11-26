import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Step3(props) {
  return (
    <SafeAreaView style={S.container}>
      <TouchableOpacity style={S.iconContainer}>
        <Entypo name="emoji-sad" size={30} />
      </TouchableOpacity>

      <Text style={S.txt1}>
          OPS !!! O correu um erro ao analisar seu perfil.
      </Text>

      <TouchableOpacity style={S.nextIconContainer} onPress={() => {}}>
        <Entypo name="back-in-time" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  txt1: {
    fontSize: 16,
    fontWeight:"bold",
    lineHeight: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    margin:30
  },
  nextIconContainer: {
    marginTop: 30
  }
});

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export default function Step2(props) {
  function navigate() {
    props.navigation.navigate("Step3");
  }

  function navigateBack() {
    props.navigation.navigate("Board");
  }

  return (
    <SafeAreaView style={S.container}>
      {props.isCorrect ? (
        <>
          <Text style={S.txt1}>
            Oh, de acordo com seu perfil você realmente parece ser XXXX.
          </Text>
          <TouchableOpacity style={S.nextIconContainer} onPress={() => navigate()}>
            <FontAwesome5 name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={S.txt1}>
            Oh, de acordo com seu perfil você não seria
          </Text>

          <Text style={S.txtResult}>
            XXXXXXXX
          </Text>

          <Text style={S.txt2}>Você seria</Text>

          <View style={S.iconResult}>
            <FontAwesome5 name="user-secret" size={70} />
          </View>

          <TouchableOpacity style={S.nextIconContainer} onPress={() => navigateBack()}>
            <Entypo name="back-in-time" size={30} color="#fff" />
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  iconResult: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  txt1: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    color: "#fff"
  },
  txt2: {
    fontSize: 22,
    lineHeight: 20,
    marginVertical: 20,
    color: "#fff"
  },
  nextIconContainer: {
    marginTop: 30
  },
  txtResult: {
    fontSize: 16,
    fontWeight:"bold",
    lineHeight: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    color: "#fff"
  },
});

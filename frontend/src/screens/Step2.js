import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Step2(props) {
  function navigate() {
    props.navigation.navigate("Timeline");
  }

  return (
    <SafeAreaView style={S.container}>
      {props.isCorrect ? (
        <Text style={S.txt1}>
          Oh, de acordo com seu perfil você realmente parece ser XXXX.
        </Text>
      ) : (
        <>
          <Text style={S.txt1}>
            Oh, de acordo com seu perfil você não seria XXXX
          </Text>

          <Text style={S.txt2}>Você seria</Text>

          <View style={S.iconResult}>
            <FontAwesome5 name="user-secret" size={50} />
          </View>
        </>
      )}
      <TouchableOpacity style={S.nextIconContainer} onPress={() => navigate()}>
        <FontAwesome5 name="chevron-right" size={30} />
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
  iconResult: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  txt1: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 20,
    paddingHorizontal: 10
  },
  txt2: {
    fontSize: 22,
    lineHeight: 20,
    marginVertical: 20
  },
  nextIconContainer: {
    marginTop: 30
  }
});

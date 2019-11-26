import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export default function Step3(props) {
  function navigate() {
    props.navigation.navigate("Step3");
  }

  return (
    <SafeAreaView style={S.container}>
      {props.isCorrect ? (
        <Text style={S.txt1}>
            Temos algumas empresas/cursos gratuitos. Gostaria de dar uma olhada neles?
        </Text>
      ) : (
        <>
          <TouchableOpacity style={S.iconContainer}>
            <Entypo name="emoji-sad" size={30} />
          </TouchableOpacity>

          <Text style={S.txt1}>
             OPS..
          </Text>

          <Text style={S.txt1}>
             Não temos empresas parceiras com esse perfil.
          </Text>
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
    fontWeight:"bold",
    lineHeight: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    margin:30
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

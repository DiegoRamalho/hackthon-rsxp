import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import img from '../../assets/img2.jpg'



export default function Step2(props) {

  const area = props.navigation.getParam('area');
  const areaInicial = props.navigation.getParam('areaInicial');

  function navigate() {
    props.navigation.navigate("Step3", {area: area});
  }

  function navigateBack() {
    props.navigation.navigate("Board");
  }

  return (
    <SafeAreaView style={S.container}>
      { (area === areaInicial) ? (
        <>
          <TouchableOpacity style={S.iconContainer}>
            <Entypo name="emoji-happy" size={70} color="#fff" />
          </TouchableOpacity>
          <Text style={S.txt1}>
            Oh, de acordo com seu perfil você realmente parece ser { area }.
          </Text>
        </>
      ) : (
        <>
          <Text style={S.txt1}>
            Oh, de acordo com seu perfil você não seria
          </Text>

          <Text style={S.txtResult}>
            {areaInicial}
          </Text>

          <Text style={S.txt2}>Você seria</Text>

          <Image
            style={S.avatar}
            source={img}
          />

          <Text style={S.txtResult}>
            {area}
          </Text>
        </>
      )}

      <TouchableOpacity style={S.nextIconContainer} onPress={() => navigate()}>
        <FontAwesome5 name="chevron-right" size={30} color="#fff" />
      </TouchableOpacity>
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
  avatar: {
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
    fontWeight:"bold",
    lineHeight: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    margin:30,
    color: '#fff'
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

import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Step1(props) {
  const image = props.navigation.getParam('image')
  function navigate() {
    props.navigation.navigate('Board')
  }

  return (
    <SafeAreaView style={S.container}>
      <Image
        style={S.avatar}
        source={{ uri: image }}
      />
      <View style={S.body}>
        <View style={S.bodyContent}>
          <Text style={S.txtTitle}>Hmmmmm</Text>
          <Text style={S.txt}>Você parece que vai ser XXXX.</Text>
          <Text style={S.txt}>Vamos conferir?</Text>
          <TouchableOpacity style={S.nextIconContainer} onPress={() => navigate()}>
            <FontAwesome5 name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    alignItems: "center",
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
  body: {
    marginTop: 40
  },
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  txt: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 20,
    color: '#fff'
  },
  nextIconContainer: {
    marginTop: 30
  },
  txtTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 20,
    marginVertical: 20,
    color: '#fff'
  }
});

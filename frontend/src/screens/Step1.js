import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Step1(props) {

  function navigate() {
    props.navigation.navigate('Step2')
  }

  return (
    <View style={S.container}>
      <View style={S.header}></View>
      <Image
        style={S.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={S.body}>
        <View style={S.bodyContent}>
          <Text style={S.txtTitle}>Hmmmmm</Text>
          <Text style={S.txt}>Você parece que vai ser XXXX.</Text>
          <Text style={S.txt}>Vamos conferir?</Text>
          <TouchableOpacity style={S.nextIconContainer} onPress={() => navigate()}>
            <FontAwesome5 name="chevron-right" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const S = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
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
    marginVertical: 20
  },
  nextIconContainer: {
    marginTop: 30
  },
  txtTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 20,
    marginVertical: 20
  },
  navigation: {
    alignItems: "center",
    alignContent: "space-between"
  }
});

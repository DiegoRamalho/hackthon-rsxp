import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Card({ post }) {

  return (
    <View style={S.container}>
      <View style={S.infoContainer}>
        <Image style={S.imgAvatar} source={{ uri: post.user.image }} />
        <Text style={S.txtComent}>{post.mensage}</Text>
      </View>
      <View style={S.btnContainer}>
        <TouchableOpacity
          style={S.iconsContainer}
          onPress={() => {}}
          style={{ marginRight: 10 }}
        >
          <FontAwesome5 name="heart" size={23} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={S.iconsContainer} onPress={() => {}}>
          <FontAwesome5 name="comment" size={23} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999",
    marginBottom: 6
  },
  infoContainer: {
    flexDirection: "row"
  },
  imgAvatar: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15
  },
  txtComent: {
    color: "#fff",
    flex: 1,
    flexWrap: "wrap"
  },
  iconsContainer: {
    flexDirection: "row",
  }
});

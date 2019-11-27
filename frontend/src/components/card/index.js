import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Card({ post }) {

  function like(post) {

  }

  return (
    <View style={S.container}>
      <View style={S.infoContainer}>
        <Image style={S.imgAvatar} source={{ uri: 'https://api.adorable.io/avatars/100/user-avatar.png' }} />
        <Text style={{flex: 1, flexWrap: 'wrap'}}>Seu amigo Emanoel irá fazer uma visita a Google.</Text>
      </View>
      <View style={S.btnContainer}>
        <TouchableOpacity onPress={() => like(post)} style={{marginRight: 10}}>
          <FontAwesome5 name="heart" size={23} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="comment" size={23} />
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
    borderColor: '#ddd',
    marginBottom: 6
  },
  infoContainer: {
    flexDirection: 'row',
  },
  imgAvatar: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  }
});

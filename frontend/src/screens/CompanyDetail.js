import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Video } from "expo-av";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CompanyDetail(props) {
  const company = props.navigation.getParam("company");
  return (
    <SafeAreaView>
      <Video
        source={{ uri: company.video }}
        rate={1.0}
        volume={1.0}
        resizeMode="cover"
        isLooping
        useNativeControls={true}
        style={{ height: 200 }}
      />

      <View style={S.infoContainer}>
        <Text style={S.companyName}>{company.name}</Text>
        <Text style={S.companyEmail}>{company.email}</Text>
        <ScrollView>
          <Text style={S.companyBio}>{company.bio}</Text>
        </ScrollView>
      </View>
      <TouchableOpacity style={S.actBtn} onPress={() => {}}>
        <FontAwesome5 name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  infoContainer: {
    margin: 15
  },
  companyName: {
    fontSize: 20,
    marginBottom: 5
  },
  companyEmail: {
    fontSize: 18,
    color: "#aaa",
    marginBottom: 15
  },
  companyBio: {
    color: "#ccc"
  },
  actBtn: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: '#3498ff'
  }
});

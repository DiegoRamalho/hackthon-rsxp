import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import calendar from "../../assets/calendar.jpeg";

export default function CompanyDetail(props) {
  const company = props.navigation.getParam("company");
  return (
    <LinearGradient
      colors={["#282a36", "#44475a", "#44475a"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          }}
          rate={1.0}
          volume={1.0}
          resizeMode="cover"
          isLooping
          useNativeControls={true}
          style={{ height: 200 }}
        />

        <View style={S.infoContainer}>
          <ScrollView>
            <Text style={S.companyName}>{company.name}</Text>
            <Text style={S.companyEmail}>{company.email}</Text>
            <Text style={S.companyBio}>{company.bio}</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={calendar} style={{ marginTop: 30, height: 200 }} />
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={S.actBtn} onPress={() => {}}>
          <FontAwesome5 name="plus" size={25} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const S = StyleSheet.create({
  infoContainer: {
    margin: 15
  },
  companyName: {
    fontSize: 20,
    marginBottom: 5,
    color: "#fff",
    fontWeight: "bold"
  },
  companyEmail: {
    fontSize: 18,
    color: "#fff",
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
    backgroundColor: "#ff5555"
  }
});

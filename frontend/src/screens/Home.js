import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  View
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Home(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermissionAsync = async () => {
      if (Platform.OS === "ios") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    getPermissionAsync();
  }, []);

  function navigate() {
    props.navigation.navigate("Step1", { image });
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <SafeAreaView style={S.container}>
      <TouchableOpacity style={S.iconContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={S.userImg} />
        ) : (
          <FontAwesome5 name="camera-retro" size={70} />
        )}
      </TouchableOpacity>
      <Text style={S.txt}>Tire uma foto para começarmos</Text>

      <View style={S.nextContainer}>
        <TouchableOpacity onPress={() => navigate()}>
          <FontAwesome5 name="chevron-right" size={30} color="#fff" />
        </TouchableOpacity>
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
  iconContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  userImg: {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  txt: {
    fontSize: 18,
    lineHeight: 20,
    marginVertical: 20,
    color: "#fff"
  },
  nextContainer: {
    flex: 1,
    marginTop: 30,
    color: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 35
  }
});

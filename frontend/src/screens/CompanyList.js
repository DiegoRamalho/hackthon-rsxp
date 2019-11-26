import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform
} from "react-native";

import companyAvatar from "../../assets/company-avatar.png";

const DATA = [
  {
    id: 1,
    name: "Projetus TI",
    email: "test@mail.com",
    image: companyAvatar,
    bio: '',
    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  },
  {
    id: 2,
    name: "Projetus TI",
    email: "test@mail.com",
    image: companyAvatar,
    bio: '',
    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  },
  {
    id: 3,
    name: "Projetus TI",
    email: "test@mail.com",
    image: companyAvatar,
    bio: 'Much of Video and Audio have common APIs that are documented in AV documentation. This page covers video-specific props and APIs. We encourage you to skim through this document to get basic video working, and then move on to AV documentation for more advanced functionality. The audio experience of video (such as whether to interrupt music already playing in another app, or whether to play sound while the phone is on silent mode) can be customized using the Audio API.',
    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  }
];

export default function CompanyList(props) {

  function navigate(company) {
    props.navigation.navigate('CompanyDetail', { company })
  }

  function renderCompany({ item }) {
    return item.empty ? null : (
      <TouchableOpacity
        key={item.id}
        style={S.companyContainer}
        onPress={() => navigate(item)}
      >
        <Image source={item.image} style={S.companyImg} />
        <View style={S.companyInfo}>
          <Text style={S.companyName}>{item.name}</Text>
          <Text style={S.companyEmail}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={S.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => String(item.id)}
        renderItem={renderCompany}
      />
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 30 : 6
  },
  companyContainer: {
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  companyImg: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5
  },
  companyInfo: {
    flexDirection: "column"
  },
  companyName: {
    fontSize: 16
  },
  companyEmail: {
    fontSize: 14,
    color: "#aaa"
  }
});

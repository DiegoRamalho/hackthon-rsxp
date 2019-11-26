import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Platform, ScrollView } from "react-native";
import Card from '../components/card'

import CompanyItem from '../components/companyItem'

import companyAvatar from '../../assets/company-avatar.png'

const DATA = [
  {
    id: 1,
    name: "Non Sollicitudin LLC",
    email: "eget.lacus.Mauris@nequesed.org",
    image: companyAvatar,
    bio: '',
    video: ''
  },
  {
    id: 2,
    name: "Scelerisque Dui Suspendisse Company",
    email: "Aenean.sed@tristiqueaceleifend.org",
    image: companyAvatar,
    bio: '',
    video: ''
  },
  {
    id: 3,
    name: "Nascetur Limited",
    email: "lorem.sit.amet@utquam.ca",
    image: companyAvatar,
    bio: '',
    video: ''
  },
  {
    id: 4,
    name: "Non Ltd",
    email: "aliquet.Phasellus@et.ca",
    image: companyAvatar,
    bio: '',
    video: ''
  },
  {
    id: 5,
    name: "A Tortor Incorporated",
    email: "Donec@morbitristiquesenectus.ca",
    image: companyAvatar,
    bio: '',
    video: ''
  },
  {
    id: 6,
    name: "Eget Volutpat Ornare Ltd",
    email: "quis.arcu@eu.com",
    image: companyAvatar,
    bio: '',
    video: ''
  },
  {
    id: 7,
    name: "Dignissim Pharetra PC",
    email: "diam@cubilia.net",
    image: companyAvatar,
    bio: '',
    video: ''
  }
];

export default function Timeline() {
  return (
    <SafeAreaView style={S.container}>
      <View style={S.companyContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <CompanyItem item={item} />}
          keyExtractor={item => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView style={S.timelineContainer} showsVerticalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'android' ? 24 : 0
  },
  companyContainer: {
    height: 70,
    backgroundColor: '#3498ff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timelineContainer: {
    flex: 2,
    marginHorizontal: 15,
    marginTop: 15
  }
});

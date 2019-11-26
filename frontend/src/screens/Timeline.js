import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import Card from '../components/card'

const DATA = [
  {
    id: 1,
    name: "Non Sollicitudin LLC",
    email: "eget.lacus.Mauris@nequesed.org",
    image: "URL"
  },
  {
    id: 2,
    name: "Scelerisque Dui Suspendisse Company",
    email: "Aenean.sed@tristiqueaceleifend.org",
    image: "URL"
  },
  {
    id: 3,
    name: "Nascetur Limited",
    email: "lorem.sit.amet@utquam.ca",
    image: "URL"
  },
  {
    id: 4,
    name: "Non Ltd",
    email: "aliquet.Phasellus@et.ca",
    image: "URL"
  },
  {
    id: 5,
    name: "A Tortor Incorporated",
    email: "Donec@morbitristiquesenectus.ca",
    image: "URL"
  },
  {
    id: 6,
    name: "Eget Volutpat Ornare Ltd",
    email: "quis.arcu@eu.com",
    image: "URL"
  },
  {
    id: 7,
    name: "Dignissim Pharetra PC",
    email: "diam@cubilia.net",
    image: "URL"
  }
];

export default function Timeline() {
  return (
    <SafeAreaView style={S.container}>
      <View style={S.companyContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={S.timelineContainer}>
        <Card />
      </View>
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1
  },
  companyContainer: {
    flex: 1
  },
  timelineContainer: {
    flex: 2
  }
});

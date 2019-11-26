import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function CompanyItem({ item }) {
  return (
    <View style={S.container}>
      <Image style={S.img} source={item.image} />
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    marginHorizontal: 6
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
})

import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CompanyItem({ item, navigate }) {
  return (
    <TouchableOpacity style={S.container} onPress={() => navigate}>
      <Image style={S.img} source={{ uri: item.image }} />
    </TouchableOpacity>
  );
}

const S = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 60,
    height: 60,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 30,
  }
})

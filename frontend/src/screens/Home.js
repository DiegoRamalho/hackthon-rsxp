import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home(props) {

  function navigate() {
    props.navigation.navigate('Step1')
  }

  return (
    <SafeAreaView style={S.container}>
      <TouchableOpacity style={S.iconContainer} onPress={() => {}}>
        <FontAwesome5 name="camera-retro" size={30} />
      </TouchableOpacity>
      <Text style={S.txt}>Tire uma foto para começarmos</Text>
      <TouchableOpacity style={S.nextIconContainer} onPress={() => {}}>
        <FontAwesome5 name="chevron-right" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  txt: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 20,
  },
  nextIconContainer: {
    marginTop: 30
  }
})

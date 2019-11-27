import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import api from '../services/api'

export default function Board(props) {
  const areaInicial = props.navigation.getParam('areaInicial');
  const [data, setData]  = useState(null);
  const [options, setOptions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      setLoading(true)
      const response = await api.get('/questions')
      const { data } = response
      setData(data);
      setOptions(data.options);
      setLoading(false);
    }

    getQuestions()
  }, [])

  function getNextQuestion(item){
    if(item && item.next){
      setData(item.next);
      setOptions(item.next.options);
    }else{
      props.navigation.navigate("Step2", {area: item.area, areaInicial: areaInicial});
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading? (
        <ActivityIndicator size="large" color="#fff" />
      ):(
        <>
        <View style={styles.containerQuestion}>
        <View style={styles.item}>
          <View style={styles.balloon}>
            <Text style={styles.txtMsg}>{data ? data.text : null}</Text>
          </View>
        </View>
      </View>

      <FlatList style={styles.list}
        data={options}
        keyExtractor= {item => String(item.code)}
        renderItem={({item}) => {
          return (
              <>
                <TouchableOpacity style={styles.containerAnswer} onPress={() => getNextQuestion(item)}>
                  <View style={styles.infoContainer}>
                    <Image style={styles.imgAvatar} source={{ uri: item.image}} />
                    <Text style={styles.txtAnswer}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              </>
          )}}/>
        </>
      )}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerQuestion: {
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    marginBottom: 6
  },
  containerAnswer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    marginBottom: 6
  },
  infoContainer: {
    flexDirection: 'row',
  },
  imgAvatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10
  },
  container:{
    flex:1,
    marginTop:24,
  },
  list:{
    paddingHorizontal: 10,
  },
  item: {
    marginVertical: 0,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:4,
    padding:5,
    alignSelf: "stretch",
  },
  balloon: {
    maxWidth: 250,
    padding: 5,
    borderRadius: 4,
  },
  txtMsg:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold"
  },
  txtAnswer:{
    color:"#fff",
    flex: 1,
    flexWrap: 'wrap'
  }
});

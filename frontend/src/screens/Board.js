import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const DATA = {
  code: 1,
  text: "Question 1",
  options: [
    {
      code: 1,
      description:"Answer 1",
      image: "https://api.adorable.io/avatars/85/test@adorable.io.png",
      next:{
          code: 2,
          text: "Question 2",
          options: [
            {
              code: 2.1,
              description:"Answer 2.1",
              image: "https://api.adorable.io/avatars/85/test@adorable.io.png"
            },
            {
              code: 2.2,
              description:"Answer 2.2",
              image: "https://api.adorable.io/avatars/85/test@adorable.io.png"
            },
            {
              code: 2.3,
              description:"Answer 2.3",
              image: "https://api.adorable.io/avatars/85/test@adorable.io.png",
            }
          ]
      }
    },
    {
      code: 2,
      description:"Answer 2",
      image: "https://api.adorable.io/avatars/85/test@adorable.io.png",
      next:{
        code: 3,
        text: "Question 3",
        options: [
          {
            code: 3.1,
            description:"Answer 3.1",
            image: "https://api.adorable.io/avatars/85/test@adorable.io.png"
          },
          {
            code: 3.2,
            description:"Answer 3.2",
            image: "https://api.adorable.io/avatars/85/test@adorable.io.png"
          },
          {
            code: 3.3,
            description:"Answer 3.3",
            image: "https://api.adorable.io/avatars/85/test@adorable.io.png",
          }
        ]
    }
    },
    {
      code: 3,
      description:"Answer 3",
      image: "https://api.adorable.io/avatars/85/ts@adorable.io.png" ,
    }
  ]
};

export default function Board(props) {

  const [data, setData]  = useState(DATA);
  const [options, setOptions] = useState(DATA.options);

  // useEffect(() => {
  //   setData(DATA);
  //   setOptions(DATA.options);
  // }, [])

  function getNextQuestion(item){
    if(item && item.next){
      setData(item.next);
      setOptions(item.next.options);
    }else{
      props.navigation.navigate("Step2");
    }
  }

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.containerQuestion}>
          <View style={styles.item}>
            <View style={styles.balloon}>
              <Text style={styles.txtMsg}>{data.text}</Text>
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
                      <Text style={{flex: 1, flexWrap: 'wrap'}}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
                </>
            )}}/>
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
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
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
  }
});

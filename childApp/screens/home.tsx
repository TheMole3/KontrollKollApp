import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import SvgUri from 'expo-svg-uri'

import SafeViewAndroid from "../../components/SafeViewAndroid";
import Background from "../../components/background";

import homeStyle from "../stylesheets/homeStyle";
import globalStyle from "../../stylesheets/globalStyle"

import emojis from '../../assets/emoji/emojis'
import taskImage from '../../assets/taskImages/taskImages'


const colorValues = [
  "#54478C", "#058BA8", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"
]

let lastColor: boolean|string = false;
const ToDo = ({props}:any) => {
    return (
      <TouchableOpacity style={[homeStyle.TodoView]}
        onPress={() => {
          props.navigation.navigate('Camera', {"task": props.item})
        }}
      >
        <SvgUri
          style={homeStyle.taskPic}
          source={taskImage[props.item.icon]}
        />
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:20, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.item.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:15, marginRight:10, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.item.points + "p"}</Text>
      </TouchableOpacity >
    )
}

export default function HomeScreen({navigation}:any) {
  const renderItem = ({item, index}:any) => (
    <ToDo props={{item, navigation, index}} />
  );

  const [isLoading, setLoading] = useState(true);
  const [DATA, setData] = useState();

  useEffect(() => {
    fetch("https://kontroll.melo.se/getTasks?id=" + global.pId).then((response) => response.json()).then((response) => {
      setData( response[0] );
      setLoading( false )
    })
  }, [])

  if (isLoading) {
    return <Background/>;
  }

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
        <View style={globalStyle.container}>
          <SvgUri
          style={homeStyle.profilePic}
          source={emojis[DATA.profilePic]}
          />
          <View style={{flex:.11, alignItems:'center', justifyContent: "center"}}>
            <Text style={homeStyle.pointsText}>{DATA.points}p</Text>
          </View>
          <FlatList
          data={DATA.tasks}
          renderItem={( item, index ) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          style={{width:"80%", flex:50}}
          />
        </View>
      </SafeAreaView>
      <Background></Background>
    </View>
  );
}
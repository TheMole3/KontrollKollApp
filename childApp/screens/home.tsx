import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import SvgUri from 'expo-svg-uri'

import SafeViewAndroid from "../../components/SafeViewAndroid";
import Background from "../../components/background";

import homeStyle from "../stylesheets/homeStyle";
import globalStyle from "../../stylesheets/globalStyle"

import emojis from '../../assets/emoji/emojis'
import taskImage from '../../assets/taskImages/taskImages'
import { useIsFocused } from '@react-navigation/native';

// Task item
const ToDo = ({props}:any) => {
    return (
      <TouchableOpacity style={[homeStyle.TodoView]} // Clickable object
        onPress={() => {
          props.navigation.navigate('Camera', {"task": props.item}) // Navigate to camera and send item info with
        }}
      >
        <SvgUri // Icon for task
          style={homeStyle.taskPic}
          source={taskImage[props.item.icon]}
        />
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:20, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.item.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:15, marginRight:10, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.item.points + "p"}</Text>
      </TouchableOpacity >
    )
}

export default function HomeScreen({navigation}:any) {
  const renderItem = ({item, index}:any) => ( // Render into flatlist
    <ToDo props={{item, navigation, index}} />
  );

  // Get the tasks from kontroll.melo.se before loading app
  const [isLoading, setLoading] = useState(true);
  const [DATA, setData] = useState();
  useEffect(() => { 
    fetch("https://kontroll.melo.se/getTasks?id=" + global.pId).then((response) => response.json()).then((response) => {
      setData( response[0] );
      setLoading( false )
    })
  }, [])

  const isFocused = useIsFocused() // When focused re-render tasks
  useEffect(() => {
    setLoading( true )
    fetch("https://kontroll.melo.se/getTasks?id=" + global.pId).then((response) => response.json()).then((response) => {
      setData( response[0] );
      setLoading( false )
    })
  } , [isFocused])

  if (isLoading) {
    return <Background/>;
  }

  // Filter out tasks that are done
  var taskData = DATA.tasks.filter(function( obj ) {
    return !obj.done;
  });

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
            data={taskData}
            extraData={taskData}
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
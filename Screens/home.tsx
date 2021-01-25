
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SafeViewAndroid from "../components/SafeViewAndroid";

const DATA = require("example-data.json");

const colorValues = [
  "#54478C", "#058BA8", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"
]
var randomColor = (lastColor: String|Boolean = false) => {
  let color = colorValues[Math.floor(Math.random()*colorValues.length)]
  if(color == lastColor) return randomColor(lastColor); else return color;
}

let lastColor: boolean|string|undefined = false;
const ToDo = ({props}) => {
    var color = randomColor(lastColor || false)
    lastColor = color
    return (
      <View style={[styles.TodoView, {backgroundColor: color}]}>
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:20, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:15, marginRight:10, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.points + "p"}</Text>
      </View>
    )
}

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <ToDo props={item} />
  );

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
        <View style={styles.container}>
          <View style={{flex:.11, alignItems:'center', justifyContent: "center"}}>
            <Text style={styles.pointsText}>5600p</Text>
          </View>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width:"80%", flex:50}}
          />
        </View>
      </SafeAreaView>
      <LinearGradient
          colors={['#2C699A', "#54478C", "#058BA8", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: .5, y: 1 }}
          locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9]}
        ></LinearGradient>
    </View>
  );
}

const styles = require("./stylesheets/homeStyle.tsx")
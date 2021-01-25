
import React from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';

import SafeViewAndroid from "../components/SafeViewAndroid";
import Background from "../components/background";

import homeStyle from "../stylesheets/homeStyle";
import globalStyle from "../stylesheets/globalStyle"

const DATA = require("../example-data.json");
console.log(DATA)

const colorValues = [
  "#54478C", "#058BA8", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"
]
function randomColor(lastColor: String|Boolean = false):any {
  let color = colorValues[Math.floor(Math.random()*colorValues.length)]
  if(color == lastColor) return randomColor(lastColor); else return color;
}

let lastColor: boolean|string = false;
const ToDo = ({props}:any) => {
    var color = randomColor(lastColor || false)
    lastColor = color
    return (
      <View style={[homeStyle.TodoView, {backgroundColor: color}]}>
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:20, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:15, marginRight:10, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.points + "p"}</Text>
      </View>
    )
}

export default function HomeScreen() {
  const renderItem = ({item}:any) => (
    <ToDo props={item} />
  );

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
        <View style={globalStyle.container}>
          <View style={{flex:.11, alignItems:'center', justifyContent: "center"}}>
            <Text style={homeStyle.pointsText}>5600p</Text>
          </View>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width:"80%", flex:50}}
          />
        </View>
      </SafeAreaView>
      <Background></Background>
    </View>
  );
}
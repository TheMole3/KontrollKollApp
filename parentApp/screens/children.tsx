import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import globalStyle from "../../stylesheets/globalStyle"

import SafeViewAndroid from "../../components/SafeViewAndroid";
import SvgUri from 'expo-svg-uri';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function childrenScreen({navigation}:any) {
    return (
        <View style={{flex:1}}>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
          <View style={globalStyle.container}>
            <View style={{
                position: "absolute",
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "80%",
            }}>
                <TouchableOpacity style={profileContainerStyle}>
                    <SvgUri
                        source={require('../../assets/emoji/cactus.svg')}
                    />
                    <Text style={profileText}>Adam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={profileContainerStyle}>
                    <SvgUri
                        source={require('../../assets/emoji/penguin.svg')}
                    />
                    <Text style={profileText}>Hugo</Text>
                </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <LinearGradient
        colors={['#7400B8', "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB"]}
        style={globalStyle.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: .5, y: 1 }}
        locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]}
      ></LinearGradient>
      </View>
    );
}

var profileContainerStyle = {
    width: 120,
    height: 120,
    backgroundColor: "#f6f7c3CC",
    borderRadius: 50,
    padding: 10,
    paddingBottom: 40,
}
var profileText = {
    fontFamily: "Oswald-Regular",
    fontSize: 20,
    alignSelf: "center",
    bottom: 1,
}
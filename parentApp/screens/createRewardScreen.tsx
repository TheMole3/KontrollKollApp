import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import globalStyle from "../../stylesheets/globalStyle"

import SafeViewAndroid from "../../components/SafeViewAndroid";

export default function childrenScreen({navigation}:any) {
    return (
        <View style={{flex:1}}>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
          <View style={globalStyle.container}>

          </View>
        </SafeAreaView>
        <LinearGradient
        colors={['#7400B8', "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB"]}
        style={globalStyle.linearGradient}
        start={{ x: .2, y: 0 }}
        end={{ x: .7, y: 1 }}
        locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]}
      ></LinearGradient>
      </View>
    );
}
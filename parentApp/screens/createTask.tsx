import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';

import globalStyle from "../../stylesheets/globalStyle"

import SafeViewAndroid from "../../components/SafeViewAndroid";
import Background from "../../components/background";

export default function childrenScreen({navigation}:any) {
    return (
        <View style={{flex:1}}>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
          <View style={globalStyle.container}>

          </View>
        </SafeAreaView>
        <Background></Background>
      </View>
    );
}
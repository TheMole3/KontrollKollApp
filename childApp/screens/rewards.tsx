import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import SafeViewAndroid from "../../components/SafeViewAndroid";
import Background from "../../components/background";

import globalStyle from "../../stylesheets/globalStyle"

export default function rewardsScreen() {
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>

      </SafeAreaView>
      <Background></Background>
    </View>
  )
}
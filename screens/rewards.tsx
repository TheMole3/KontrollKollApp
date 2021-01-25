import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import SafeViewAndroid from "../components/SafeViewAndroid";
import Background from "../components/background";

export default function rewardsScreen() {
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>

      </SafeAreaView>
      <Background></Background>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    zIndex: -5,
    elevation: -5,
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  }
});

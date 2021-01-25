import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SafeViewAndroid from "../components/SafeViewAndroid";

export default function rewardsScreen() {
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>

      </SafeAreaView>
      <LinearGradient
          colors={['#2C699A', '#fff']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: .5, y: 1 }}
          locations={[0.3,1]}
      ></LinearGradient>
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

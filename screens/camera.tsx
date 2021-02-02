import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import SafeViewAndroid from "../components/SafeViewAndroid";
import Background from "../components/background";

export default function rewardsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
      <Camera style={{height:"40vw", width:"30vw"}} ratio={'4:3'} type={type}>
        <View>
          <TouchableOpacity 
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
  }
});

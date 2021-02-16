import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';

import globalStyle from "../../stylesheets/globalStyle"

import SafeViewAndroid from "../../components/SafeViewAndroid";
import Background from "../../components/parentBackground";
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
        <Background></Background>
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
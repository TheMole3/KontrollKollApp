import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';

import globalStyle from "../../stylesheets/globalStyle"

import SafeViewAndroid from "../../components/SafeViewAndroid";
import Background from "../../components/parentBackground";
import SvgUri from 'expo-svg-uri';

export default function childrenScreen({navigation}:any) {
    return (
        <View style={{flex:1}}>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
          <View style={globalStyle.container}>
            <View>
                <View>
                    <SvgUri>
                        
                    </SvgUri>
                </View>
            </View>
          </View>
        </SafeAreaView>
        <Background></Background>
      </View>
    );
}
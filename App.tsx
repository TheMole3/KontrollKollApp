import locale from "./language/sv_SE.json"

import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import globalStyle from "./stylesheets/globalStyle"

import { SafeAreaView } from "react-native-safe-area-context";
import Background from "./components/background";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeViewAndroid from "./components/SafeViewAndroid";

const pcChoose = createStackNavigator();

function SelectScreen({navigation}) { 
  return (
    <View style={globalStyle.container}>
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
          <TouchableOpacity
            style={{backgroundColor: "pink",
            marginLeft: 5,
            marginRight: 5,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 0.5,
            borderColor: "#66614f",
            borderRadius: 5,
            marginBottom:10,
            padding:15,
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
          }}
          onPress={() => {
            navigation.navigate("Parent")
          }}
          >
            <Text style={{fontSize:20, fontFamily: "Oswald-Regular"}}>{locale.startScreen.parent}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: "lightblue",
            marginLeft: 5,
            marginRight: 5,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 0.5,
            borderColor: "#66614f",
            borderRadius: 5,
            marginBottom:10,
            padding:15,
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
          }}
          onPress={() => {
            navigation.navigate("Child")
          }}
          >
            <Text style={{fontSize:20, fontFamily: "Oswald-Regular"}}>{locale.startScreen.child}</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
};

var ChildScreen = require("./childApp/childView").default;
var ParentScreen = require("./parentApp/parentView").default;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Light': require('./assets/fonts/Oswald-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <pcChoose.Navigator>
          <pcChoose.Screen name="Select" options={{headerShown: false}} component={SelectScreen} />
          <pcChoose.Screen  name="Child" options={{headerShown: false}} component={ChildScreen} />
          <pcChoose.Screen name="Parent" options={{headerShown: false}} component={ParentScreen} />
        </pcChoose.Navigator>
      </NavigationContainer>
    )
  }
}
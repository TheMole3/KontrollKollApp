global.pId = 1

import locale from "./language/sv_SE.json"

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

var RewardsScreen = require("./screens/rewards.tsx").default;

var UnimplementedScreen = function() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{locale.error.notImplemented}</Text>
    </View>
  );
}

const TaskStack = createStackNavigator();

var HomeScreen = require("./screens/home.tsx").default;
var CameraScreen = require("./screens/camera.tsx").default;
var ImageScreen = require("./screens/photo.tsx").default;
function TaskStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen  name="Home" options={{headerShown: false}} component={HomeScreen} />
      <TaskStack.Screen name="Camera" options={({ route }) => ({ title: route.params.task.title })} component={CameraScreen} />
      <TaskStack.Screen name="Image" component={ImageScreen} />
    </TaskStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const forFade = ({ current }:any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  let [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Light': require('./assets/fonts/Oswald-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="tasks" options={{title: locale.pages.tasks}} component={TaskStackScreen} />
          <Tab.Screen name="rewards" options={{title: locale.pages.rewards}} component={RewardsScreen} />
          <Tab.Screen name="chat" options={{title: locale.pages.chat}} component={UnimplementedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
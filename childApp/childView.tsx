global.pId = 1

import locale from "../language/sv_SE.json"

import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

var RewardsScreen = require("./screens/rewards.tsx").default;

var UnimplementedScreen = function() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{locale.error.notImplemented}</Text>
    </View>
  );
}

const TaskStack = createStackNavigator();

var HomeScreen = require("./screens/home").default;
var CameraScreen = require("./screens/camera").default;
var ImageScreen = require("./screens/photo").default;
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

  return (
      <Tab.Navigator>
        <Tab.Screen name="tasks" 
          options={{
            title: locale.pages.tasks, 
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={require('../assets/tasks.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }} 
          component={TaskStackScreen} 
        />
        <Tab.Screen name="rewards" 
          options={{
            title: locale.pages.rewards,
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={require('../assets/rewardTrophy.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),  
          }} 
          component={RewardsScreen} 
        />
        <Tab.Screen name="chat" 
          options={{
            title: locale.pages.chat,
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={require('../assets/chat.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }} 
          component={UnimplementedScreen} 
        />
      </Tab.Navigator>
  );
}
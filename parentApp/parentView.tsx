global.pId = 1

import locale from "../language/sv_SE.json"

import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

var UnimplementedScreen = function() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{locale.error.notImplemented}</Text>
    </View>
  );
}

const TaskStack = createStackNavigator();

var ChildrenScreen = require("./screens/children.tsx").default;
var CreateRewardScreen = require("./screens/createTask.tsx").default;
var CreateTaskScreen = require("./screens/createRewardScreen.tsx").default;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="children" 
          options={{
            title: locale.pages.yourChildren, 
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={require('../assets/childPhoto.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }} 
          component={ChildrenScreen} 
        />
        <Tab.Screen name="createReward"
            options={{
            title: locale.pages.createReward, 
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
            component={CreateRewardScreen}
        />
        <Tab.Screen name="createTask"
            options={{
            title: locale.pages.createTask, 
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
            component={CreateTaskScreen}
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
            component={CreateTaskScreen}
        />
      </Tab.Navigator>
  );
}
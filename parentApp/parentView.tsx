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


var ChildTaskList = require("./screens/childTaskList.tsx").default;
var ChildSelect = require("./screens/childSelect.tsx").default;
var ChildRewards = require("./screens/childRewards.tsx").default;
var PictureScreen = require("./screens/picture.tsx").default;

const childStack = createStackNavigator();
function childrenStack() {
  return (
    <childStack.Navigator>
      <childStack.Screen  name="childSelect" options={{headerShown: false}} component={ChildSelect} />
      <childStack.Screen  name="childTaskList" options={{headerShown: false}} component={ChildTaskList} />
      <childStack.Screen  name="childRewardList" options={{headerShown: false}} component={ChildRewards} />
      <childStack.Screen name="Picture" options={({ route }) => ({ title: route.params.task.title })} component={PictureScreen} />
    </childStack.Navigator>
  );
}


var CreateRewardScreen = require("./screens/createReward.tsx").default;
var CreateTaskScreen = require("./screens/createTask.tsx").default;

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
          component={childrenStack} 
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
      </Tab.Navigator>
  );
}
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

var HomeScreen = require("./screens/home.tsx").default;

console.log(HomeScreen)

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Not Inplemented!</Text>

    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Uppgifter" component={HomeScreen} />
        <Tab.Screen name="Belöningar" component={SettingsScreen} />
        <Tab.Screen name="Chatt" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

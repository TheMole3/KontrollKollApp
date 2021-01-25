import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

var HomeScreen = require("./screens/home.tsx").default;
var RewardsScreen = require("./screens/rewards.tsx").default;

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
          <Tab.Screen name="Uppgifter" component={HomeScreen} />
          <Tab.Screen name="Belöningar" component={RewardsScreen} />
          <Tab.Screen name="Chatt" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

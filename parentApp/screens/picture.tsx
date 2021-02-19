import locale from "../../language/sv_SE.json"

import * as React from 'react';
import {View, Image, ToastAndroid} from'react-native';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';    

export default function notification({ route, Navigator }) {
   const { photo, task } = route.params;
   console.log("https://kontroll.melo.se" + task.pic)

   return (
      <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
        <Image source={{ uri: "https://kontroll.melo.se/" + task.pic }} style={{width:380,height:550}}/>
      </View>
   );
}
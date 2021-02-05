import * as React from 'react';
import {View ,Image} from'react-native';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';    

export default function notification({ route, navigation }) {
   const { photo, task } = route.params;

   manipulateAsync(
      photo.uri,
       [{ resize: { width: 1200 } }],
       { compress: 0.7, format: SaveFormat.JPEG }
   ).then((photo) => {
      let localUri = photo.uri;
      let filename = localUri.split('/').pop();
    
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
    
      // Upload the image using the fetch and FormData APIs
      let formData = new FormData();
      // Assume "photo" is the name of the form field the server expects
      formData.append('photo', { "uri": localUri, name: filename, type: type });
    
      fetch("http://kontroll.melo.se/finishTask/" + task.id + "/" + global.pId, {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      }).then((response) => response)
      .then((responseData) => { 
          console.log("response: " + responseData.status);
      }).catch((err) => { console.log(err)});
   })

   return (
      <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
      
      <Image source={{ uri: photo.uri }} style={{width:380,height:550}}/>
      </View>
   );
}
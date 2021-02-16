import locale from "../../language/sv_SE.json"

import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function cameraScreen({navigation, route}:any) {
  const {task} = route.params;

  var camera:any; 
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>{locale.error.noCameraAccess}</Text>;
  }

  var snap = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync({skipProcessing: true});
      camera.pausePreview()
      navigation.navigate('Image', {'photo':photo, 'task':task})
      camera.resumePreview()
    }
  };

  return (
    <View style={{flex:1, backgroundColor: "black"}}>
        <View style={styles.container}>
          <Text style={{position: "absolute",color:"white", zIndex: 5, elevation: 5}}>{locale.camera.takeAPic}</Text>
          <Camera style={styles.camera} type={type} ref={ref => {
            camera = ref;
          }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonFlip}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>

                   <Image 
                   style={{
                     width: 60,
                     height: 60
                   }}
                   source={require("../../assets/cameraFlip.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonSnap}
                onPress={() => {
                  snap()
                }}>
                <Image 
                   style={{
                     width: 80,
                     height: 80
                   }}
                   source={require("../../assets/takePicture.png")}></Image>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
    marginLeft: -120,
    marginRight: -120,
  },
  buttonFlip: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#FFFFFF9F",
    borderRadius: 100,
    padding: 13
  },
  buttonSnap: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#FFFFFF9F",
    borderRadius: 100,
    padding: 3
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

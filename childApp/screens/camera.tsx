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
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>

                   <Image 
                   style={{
                     width: 100,
                     height: 100
                   }}
                   source={require("../../assets/cameraFlip.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  snap()
                }}>
                <Text style={styles.text}> {locale.camera.snap} </Text>
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
    margin: 20,
  },
  button: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#1F65D8",
    borderRadius: 10,
    width: 1,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

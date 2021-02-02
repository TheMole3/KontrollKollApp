import locale from "../language/sv_SE.json"

import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
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
      console.log(photo)
      navigation.navigate('Image', {'photo':photo, 'task':task})
      camera.resumePreview()
    }
  };

  return (
    <View style={{flex:1, backgroundColor: "black"}}>
        <View style={styles.container}>
          <Text style={{position: "absolute",color:"white", zIndex: 5, elevation: 5}}>Ta en bild där du gör uppgiften:{"\n"}{task.title}</Text>
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
                <Text style={styles.text}> {locale.camera.turn} </Text>
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
    flex: 0.5,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

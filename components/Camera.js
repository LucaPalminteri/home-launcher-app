import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
const camera = <Icon name="camera" size={20} color={"#fff"} />;
export default function CameraExample() {
  let n = null;
  const [hasPermission, setHasPermission] = useState(n);
  let d = Camera.Constants.Type.back;
  const [type, setType] = useState(d);

  useEffect(() => {
        (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      let z = status === "granted";
      setHasPermission(z);
    })();
  }, []);
  let x = hasPermission === null;
  let y = hasPermission === false;
  if (x) {
    return <View />;
  }
  if (y) {
    return <Text>Camera permission is not there</Text>;
  }

  
  return (
    <View style={cameraStyle.mainView}>
        <View >
            <Text>hiiii</Text>
        </View>
      <Camera style={[cameraStyle.childView]} type={type}>
        <View style={[cameraStyle.deepView]}>
          <TouchableOpacity
            style={[cameraStyle.touchStyle]}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            {camera}
            <Text style={[cameraStyle.textStyle]}> Rotate Camera </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const cameraStyle = StyleSheet.create({
    mainView: {
      height: 700,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#0f0',
      borderWidth: 2
    },
    childView: {
      flex: 1,
      position: 'relative',
      bottom: 200,
    },
    textStyle: {
      fontSize: 18,
      marginBottom: 10,
      color: "white",
    },
    deepView: {
      flex: 1,
      backgroundColor: "#000",
      flexDirection: "row",
    },
    touchStyle: {
      flex: 0.1,
      alignSelf: "flex-end",
      alignItems: "center",
      backgroundColor: '#f00'
    },
  });

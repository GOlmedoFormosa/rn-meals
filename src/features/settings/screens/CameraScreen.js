import React, { useRef } from "react";
import { Text, Button, View } from "react-native";
import { ProfileCamera, ContainerCamera } from "./CameraScreen.styles";

export const CameraScreen = ({ navigation }) => {
  // const cameraRef = useRef();
  const [permission, requestPermission] = ProfileCamera.useCameraPermissions();
  console.log("permission", permission);
  if (permission === null) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <ContainerCamera>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </ContainerCamera>
    );
  }

  return (
    <ContainerCamera>
      <ProfileCamera />
    </ContainerCamera>
  );
};

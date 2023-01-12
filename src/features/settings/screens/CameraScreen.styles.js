import { Camera, CameraType } from "expo-camera";
// import { View } from "react-native";
import styled from "styled-components";

export const ContainerCamera = styled(Camera).attrs({ type: CameraType.front })`
  flex: 1;
  justifycontent: "center";
`;

export const ProfileCamera = styled(Camera).attrs({ type: CameraType.front })`
  flex: 1;
`;

import React, { useEffect } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageInput = (props) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert("You need to allow request");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        props.onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageClicked = () => {
    if (!props.imageURI) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this?", [
        { text: "Yes", onPress: () => props.onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={imageClicked}>
      <View style={styles.container}>
        {!props.imageURI && (
          <MaterialCommunityIcons name="camera" size={40} color={colors.dark} />
        )}
        {props.imageURI && (
          <Image style={styles.image} source={{ uri: props.imageURI }} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;

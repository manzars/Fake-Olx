import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TestingImg = () => {
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("manzar");

  useEffect(() => {
    console.log(url);
  }, [url]);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageClicked = () => {
    selectImage();
  };

  const setUpload = () => {
    const proto = {
      uri: image,
      type: `image/${image.split(".")[1]}`,
      name: "manzar.jpg",
    };
    console.log(image);
    const data = new FormData();
    data.append("file", proto);
    data.append("upload_preset", "fake-olx");
    data.append("cloud_name", "manzar");

    fetch("https://api.cloudinary.com/v1_1/manzar/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url));
  };

  return (
    <SafeAreaView style={styles.touch}>
      <TouchableWithoutFeedback onPress={imageClicked}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="camera" size={40} color="#000" />
        </View>
      </TouchableWithoutFeedback>
      <Button title="Press" onPress={setUpload} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  touch: {
    paddingTop: 50,
    flex: 1,
  },
});

export default TestingImg;

// const Blob = RNFetchBlob.polyfill.Blob;
//     const fs = RNFetchBlob.fs;
//     window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
//     window.Blob = Blob;

//     let uploadBlob = null;
//     const imageRef = firebase.storage().ref("/assets").child(Imgname);
//     let mime = "image/jpg";
//     fs.readFile(uri, "base64")
//       .then((data) => {
//         return Blob.build(data, { type: `${mime};BASE64` });
//       })
//       .then((blob) => {
//         uploadBlob = blob;
//         return imageRef.put(blob, { contentType: mime });
//       })
//       .then(() => {
//         uploadBlob.close();
//         return imageRef.getDownloadURL();
//       })
//       .then((url) => {
//         console.log(url);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

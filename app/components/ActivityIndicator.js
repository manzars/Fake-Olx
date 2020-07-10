import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = (props) => {
  if (!props.visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
};

export default ActivityIndicator;

import React from "react";
import ImageInputList from "./ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

const FormImagePicker = (props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const addHandle = (uri) => {
    setFieldValue(props.name, [...values[props.name], uri]);
  };

  const removeHandle = (uri) => {
    setFieldValue(
      props.name,
      values[props.name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <View style={styles.container}>
      <ImageInputList
        imageURIs={values[props.name]}
        onAddImage={addHandle}
        onRemoveImage={removeHandle}
      />
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default FormImagePicker;

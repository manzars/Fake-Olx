import React from "react";
import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const AppFormField = (props) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        {...props}
        onChangeText={handleChange(props.name)}
        onBlur={() => setFieldTouched(props.name)}
      />
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </React.Fragment>
  );
};

export default AppFormField;

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyle from "../config/styles";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import PickerItem from "./PickerItem";
import ListItemSeperator from "./ListItemSeperator";

const AppPicker = (props) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState();

  const handleClick = (name) => {
    setVisible(false);
    setCategory(name);
  };

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          {props.icon && (
            <MaterialCommunityIcons
              name={props.icon}
              style={styles.icon}
              size={25}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {category ? category : props.placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalClose}>
          <MaterialCommunityIcons
            name="close"
            size={50}
            color={colors.dark}
            onPress={() => setVisible(false)}
          />
        </View>
        <FlatList
          data={props.items}
          keyExtractor={(item) => item.value.toString()}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <PickerItem
              text={item.label}
              handleClick={() => handleClick(item.label)}
            />
          )}
        />
      </Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  modalClose: {
    flexDirection: "row-reverse",
    margin: 10,
  },
});

export default AppPicker;

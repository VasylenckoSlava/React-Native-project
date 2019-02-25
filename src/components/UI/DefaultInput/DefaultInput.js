import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 4,
    padding: 5,
    margin: 8
  }
});

export default DefaultInput;

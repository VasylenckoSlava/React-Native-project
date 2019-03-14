import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  picker: {
    width: 100
  }
});

class PushNotificationsScreen extends Component {
  state = {
    seconds: 5
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Choose your notification time in seconds
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({ seconds })}
        >
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
        </Picker>
      </View>
    );
  }
}

export default PushNotificationsScreen;

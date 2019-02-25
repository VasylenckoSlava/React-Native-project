import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <View style={styles.drawerItem}>
          <Icon
            name="ios-log-out"
            size={30}
            color="#aaa"
            style={styles.drawerItemIcon}
          />
          <Button title="Sign out" style={styles.drawerItemIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 52,
    flex: 1,
    backgroundColor: "white"
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    margin: 10
  }
});

export default SideDrawer;

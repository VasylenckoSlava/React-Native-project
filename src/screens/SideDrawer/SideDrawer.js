import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Button, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { authLogout } from "../../store/actions";

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
            name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
            size={30}
            color="#aaa"
            style={styles.drawerItemIcon}
          />
          <Button
            title="Sign out"
            style={styles.drawerItemIcon}
            onPress={this.props.onLogout}
          />
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

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SideDrawer);

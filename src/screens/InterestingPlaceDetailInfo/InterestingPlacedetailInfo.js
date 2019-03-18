import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Stars from "../../components/Stars/Stars";

class InterestingPlaceDetailInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <View style={styles.info}>
            <Text style={styles.name}>{this.props.place.name}</Text>
            <Text style={styles.address}>{this.props.place.address}</Text>
            <Stars />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  infoHeader: {
    flexDirection: "row"
  },
  info: {
    marginTop: 20
  },
  name: {
    fontSize: 24
  },
  address: {
    color: "grey",
    marginBottom: 5
  }
});

export default InterestingPlaceDetailInfo;

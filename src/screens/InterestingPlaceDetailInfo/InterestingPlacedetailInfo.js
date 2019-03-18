import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Stars from "../../components/Stars/Stars";

class InterestingPlaceDetailInfo extends Component {
  addReview = () => {
    this.props.navigator.showModal({
      screen: "awesome-places.AddReview",
      title: "Add Review"
    });
  };
  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <View style={styles.info}>
            <Text style={styles.name}>{this.props.place.name}</Text>
            <Text style={styles.address}>{this.props.place.address}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this.addReview}>
                Add Review
              </Text>
            </TouchableOpacity>
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
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10
  },
  buttonText: {
    color: "#0066cc",
    fontSize: 12,
    textAlign: "center"
  }
});

export default InterestingPlaceDetailInfo;

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetailScreen = props => {
  return (
      <View style={styles.container}>
          <View>
              <Image source={props.selectedPlace.image} style={styles.placeImage} />
              <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
          </View>
        <View style={styles.deleteButton}>
            <TouchableOpacity onPress={props.onItemDeleted}>
              <View>
                <Icon size={30} name="ios-trash" color="red" />
              </View>
            </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 32
  },
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default PlaceDetailScreen;

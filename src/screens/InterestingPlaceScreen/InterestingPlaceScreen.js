import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import InterestingPlaceReview from "../../components/InterestingPlaceReview";

const restraints = [
  { name: "React cafe", address: "123 Anywhere st" },
  { name: "Fancy cafe", address: "799 Anywhere st" },
  { name: "Taco cafe", address: "550 Anywhere st" },
];

class InterestingPlaceScreen extends Component {
  state = {
    search: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>Place Review</Text>
        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({
              search: text
            });
          }}
          value={this.state.search}
        />
        <FlatList
          data={restraints.filter(place => {
            return (
              !this.state.search ||
              place.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <InterestingPlaceReview
                place={item}
                index={index}
                navigator={this.props.navigator}
            />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    // marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  }
});

export default InterestingPlaceScreen;

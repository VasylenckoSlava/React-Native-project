import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class AddReview extends Component {
  state = {
    name: "",
    rating: 0,
    comment: "",
    review: "",
    submitting: false
  };

  submitReview = props => {
    this.setState({
      submitting: true
    });
    fetch(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAhDNARMjr_D3PdHS-e_Nj8Abrk4Xplcrk",
      {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          rating: this.state.rating,
          comment: this.state.comment
        })
      }
    )
      .then(response => response.json())
      .then(result => {
        this.setState({ submitting: false }, () => {
          this.props.navigator.dismissModal();
        });
      })
      .catch(error => {
        this.setState({
          submitting: false
        });
      });
  };
  close = () => {
    this.props.navigator.dismissModal();
  };
  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <View style={styles.root}>
          <TouchableOpacity style={styles.button} onPress={this.close}>
            <Icon name="ios-close" size={30} color="#0066CC" />
          </TouchableOpacity>
          <Text style={styles.addReview}>Add Review</Text>
          <TextInput
            style={styles.input}
            placeholder="Name (optional)"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
          <Text style={styles.rating}>Your Rating:</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => {
              return (
                <TouchableOpacity
                  onPress={() => this.setState({ rating: i })}
                  style={styles.startButton}
                  key={i}
                >
                  <Icon
                    name={"ios-star"}
                    color={this.state.rating >= i ? "#FFD64C" : "#CCCCCC"}
                    size={40}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Review"
            value={this.state.review}
            onChangeText={review => this.setState({ review })}
            multiline={true}
            numberOfLines={5}
          />

          {this.state.submitting && (
            <ActivityIndicator size="large" color="#0066CC" />
          )}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitReview}
            disabled={this.state.submitting}
          >
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  button: {
    paddingHorizontal: 10
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center"
  },
  startButton: {
    padding: 5
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center"
  }
});

export default AddReview;

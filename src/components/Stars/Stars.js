import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Stars extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Icon name="ios-star" color="#FFD64C" />
                <Icon name="ios-star" color="#FFD64C" />
                <Icon name="ios-star" color="#FFD64C" />
                <Icon name="ios-star-half" color="#FFD64C" />
            </View>
        );
    }
}

export default Stars;

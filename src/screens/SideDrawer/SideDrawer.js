import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from "react-native";

class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
                <Text>SideDrawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        flex: 1,
        backgroundColor: "white",

    }
});

export default SideDrawer;

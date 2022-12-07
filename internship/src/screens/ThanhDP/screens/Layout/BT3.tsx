import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";


const BT3 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.square} />
            <View style={[styles.square, { backgroundColor: "white" }]} />
            <View style={styles.square} />
        </View>
    )
}
export default BT3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "white"
    },
    square: {
        backgroundColor: "lightblue",
        width: 100,
        height: 100,
    }
});


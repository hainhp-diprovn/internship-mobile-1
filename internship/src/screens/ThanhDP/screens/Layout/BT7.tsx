import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";

const squareSize = 50

const BT7 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
        </View>
    )
}

export default BT7

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
    },
    square: {
        backgroundColor: "blue",
        width: squareSize,
        height: squareSize

    }
});


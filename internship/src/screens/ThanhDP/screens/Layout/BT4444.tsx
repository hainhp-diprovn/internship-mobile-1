import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";
import { responsive } from "../../../../ultils/reponsive"

const BT4444 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
        </View>
    )
}

export default BT4444

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    square: {
        backgroundColor: "pink",
        width: responsive.width(40),
        height: responsive.width(40)
    }
});


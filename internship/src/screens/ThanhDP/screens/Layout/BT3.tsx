import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";

const BT3 = () => {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const [orientation, setOrientation] = useState("PORTRAIT");

    useEffect(() => {
        Dimensions.addEventListener("change", ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
                console.log("PORTRAIT" + ", width:" + windowWidth + ", height:" + windowHeight)
            } else {
                setOrientation("LANDSCAPE")
                console.log("LANDSCAPE" + ", width:" + windowWidth + ", height:" + windowHeight)

            }
        })

    }, [orientation]);



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


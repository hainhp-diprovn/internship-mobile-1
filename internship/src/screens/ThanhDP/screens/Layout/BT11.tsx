import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";

const BT11 = () => {

    const squareSize = 160

    function size(designSize: number) {
        const DESIGN_SCREEN_WIDTH = 375
        const DEVICE_SCREEN_WIDTH = Dimensions.get("window").width
        const widthPercent = DEVICE_SCREEN_WIDTH / DESIGN_SCREEN_WIDTH
        const result = designSize * widthPercent

        return Number(result.toFixed(1))
    }

    const [orientation, setOrientation] = useState("PORTRAIT");

    useEffect(() => {
        Dimensions.addEventListener("change", ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }
        })
    }, [orientation]);


    return (
        <View style={styles.container}>
            <View style={[styles.square, { width: size(squareSize), height: size(squareSize) }]} />
        </View>
    )
}

export default BT11

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    square: {
        backgroundColor: "pink"
    }
});


import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";

const BT2 = () => {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const hcnWidth = windowWidth - 80
    const hcnHeight = windowHeight - 80

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
            <View style={[styles.hcn, { width: hcnWidth, height: hcnHeight }]} />
        </View>
    )
}
export default BT2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    hcn: {
        backgroundColor: "pink"
    }
});


import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from "react-native";

const BaiTap5pppp = () => {

    const [orientation, setOrientation] = useState("PORTRAIT");
    const boxSize = 70  

    useEffect(() => {
        Dimensions.addEventListener("change", ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }
        })
    }, [orientation]);

    function designSize(boxSize: number) {
        const DESIGN_SCREEN_WIDTH = 375
        const DEVICE_SCREEN_WIDTH = Dimensions.get("window").width
        const widthPercent = DEVICE_SCREEN_WIDTH / DESIGN_SCREEN_WIDTH
        const result = boxSize * widthPercent

        return Number(result.toFixed(1))
    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.viewFix}/>

            <View style={[styles.box, { width: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>

            <View style={[styles.box, { width: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>
                
            <View style={[styles.box, { width: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>
                
            <View style={[styles.box, { width: designSize(boxSize)}]} />
            
                <View style={styles.viewFix}/>
        </SafeAreaView>
    )
}

export default BaiTap5pppp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    viewFix: {
        flex:1
    },
    box: {
        backgroundColor: "#6495ed",
        aspectRatio: 1/1
    }

});
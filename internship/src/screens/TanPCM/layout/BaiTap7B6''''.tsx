import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from "react-native";

const BaiTap7B6pppp = () => {

    const boxSize = 90  

    function designSize(boxSize: number) {
        const DESIGN_SCREEN_HEIGHT = 812
        const DEVICE_SCREEN_HEIGHT = Dimensions.get("window").height
        const heightPercent = DEVICE_SCREEN_HEIGHT / DESIGN_SCREEN_HEIGHT
        const result = boxSize * heightPercent

        return Number(result.toFixed(1))
    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.viewFix}/>

            <View style={[styles.box, { height: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>

            <View style={[styles.box, { height: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>
                
            <View style={[styles.box, { height: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>
                
            <View style={[styles.box, { height: designSize(boxSize)}]} />

                <View style={styles.viewFix}/>
                
            <View style={[styles.box, { height: designSize(boxSize)}]} />
            
                <View style={styles.viewFix}/>
        </SafeAreaView>
    )
}

export default BaiTap7B6pppp

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
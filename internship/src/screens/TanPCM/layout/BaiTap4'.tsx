import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const BaiTap4p = () => {

    const [orientation, setOrientation] = useState("PORTRAIT");
    const DESIGN_SCREEN_WIDTH = Dimensions.get('window').width;

    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }
        })
    }, [orientation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 30 * 4) / 3}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 30 * 4) / 3}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 30 * 4) / 3}]} />
            <View style={styles.view} />
        </SafeAreaView>
    )
}

export default BaiTap4p

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        width: 30
    },
    box: {
        backgroundColor: "#ff1493",
        aspectRatio: 1/1
    }
});
import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const BaiTap7pB4 = () => {

    const DESIGN_SCREEN_HEIGHT = Dimensions.get('window').height;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 100 * 4) / 3}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 100 * 4) / 3}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 100 * 4) / 3}]} />
            <View style={styles.view} />
        </SafeAreaView>
    )
}

export default BaiTap7pB4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        backgroundColor: "white",
        height: 100
    },
    box: {
        backgroundColor: "#ff1493",
        aspectRatio: 1/1
    }
});
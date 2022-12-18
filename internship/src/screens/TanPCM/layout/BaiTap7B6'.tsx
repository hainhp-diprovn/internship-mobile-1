import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const BaiTap7B6pp = () => {

    const DESIGN_SCREEN_HEIGHT = Dimensions.get('window').height;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 50 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 50 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 50 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 50 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { height: (DESIGN_SCREEN_HEIGHT - 50 * 6) / 5}]} />
            <View style={styles.view} />
        </SafeAreaView>
    )
}

export default BaiTap7B6pp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        backgroundColor: "white",
        height: 50
    },
    box: {
        backgroundColor: "#ff1493",
        aspectRatio: 1/1
    }
});
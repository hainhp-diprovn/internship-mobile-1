import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const BaiTap6p = () => {

    const DESIGN_SCREEN_WIDTH = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 20 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 20 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 20 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 20 * 6) / 5}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 20 * 6) / 5}]} />
            <View style={styles.view} />
        </SafeAreaView>
    )
}

export default BaiTap6p

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        backgroundColor: "white",
        width: 20
    },
    box: {
        backgroundColor: "#ff1493",
        aspectRatio: 1/1
    }
});
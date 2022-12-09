import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const BaiTap4ppp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1} />

                <View style={styles.box} />

            <View style={styles.view2} />

                <View style={styles.box} />

            <View style={styles.view2} />

                <View style={styles.box} />

            <View style={styles.view1} />
        </SafeAreaView>
    )
}

export default BaiTap4ppp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    view1: {
        flex: 1
    },
    view2: {
        width:40
    },
    box: {
        width:100,
        height:100,
        backgroundColor: "red",
    }
});
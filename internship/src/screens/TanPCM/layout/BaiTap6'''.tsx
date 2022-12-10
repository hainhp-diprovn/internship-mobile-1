import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const BaiTap6ppp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewFix} />

                <View style={styles.box} />

            <View style={styles.view1} />

                <View style={styles.box} />

            <View style={styles.view1} />

                <View style={styles.box} />

            <View style={styles.view1} />

                <View style={styles.box} />

            <View style={styles.view1} />

                <View style={styles.box} />

            <View style={styles.viewFix} />
        </SafeAreaView>
    )
}

export default BaiTap6ppp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    viewFix: {
        flex: 1
    },
    view1: {
        width:20
    },
    box: {
        width:60,
        height:60,
        backgroundColor: "red",
    }
});
import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const BaiTap4pp = () => {
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

export default BaiTap4pp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    view1: {
        width:30
    },
    view2: {
        flex: 1
    },
    box: {
        width:100,
        height:100,
        backgroundColor: "pink",
    }
});
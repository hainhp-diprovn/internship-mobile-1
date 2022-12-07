import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const BT444 = () => {

    return (
        <View style={styles.container}>
            <View style={[styles.square, { backgroundColor: 'white', width: 50 }]} />
            <View style={[styles.square, { width: 80, height: 80 }]} />
            <View style={[styles.square, { backgroundColor: 'white', flex: 1 }]} />
            <View style={[styles.square, { width: 80, height: 80 }]} />
            <View style={[styles.square, { backgroundColor: 'white', flex: 1 }]} />
            <View style={[styles.square, { width: 80, height: 80 }]} />
            <View style={[styles.square, { backgroundColor: 'white', width: 50 }]} />
        </View>
    )
}

export default BT444

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    square: {
        backgroundColor: 'pink',
    }
});


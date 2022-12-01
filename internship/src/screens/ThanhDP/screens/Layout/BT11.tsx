import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const BT11 = () => {
    const windowWidth = Dimensions.get('window').width;
    const squareWidth = windowWidth - 80
    const squareHeight = windowWidth - 80
    return (
        <View style={styles.container}>
            <View style={[styles.square, { width: squareWidth, height: squareHeight }]} />
        </View>
    )
}
export default BT11

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    square: {
        backgroundColor: 'pink'
    }
});


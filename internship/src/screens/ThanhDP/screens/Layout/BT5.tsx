import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

const BT5 = () => {

    return (
        <View style={styles.container}>
            <View style={[styles.square, { width: 50, height: 50 }]} />
            <View style={[styles.square, { width: 50, height: 50 }]} />
            <View style={[styles.square, { width: 50, height: 50 }]} />
            <View style={[styles.square, { width: 50, height: 50 }]} />
        </View>
    )
}

export default BT5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: 'row',
    },
    square: {
        backgroundColor: 'blue',
    }
});


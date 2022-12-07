import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const BT44 = () => {

    const [orientation, setOrientation] = useState("PORTRAIT");
    const DEVICE_SCREEN_WIDTH = Dimensions.get('window').width;

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
        <View style={styles.container}>
            <View style={[styles.square, { backgroundColor: 'white', width: 50 }]} />
            <View style={[styles.square, { width: (DEVICE_SCREEN_WIDTH - 50 * 4) / 3, height: (DEVICE_SCREEN_WIDTH - 50 * 4) / 3 }]} />
            <View style={[styles.square, { backgroundColor: 'white', width: 50 }]} />
            <View style={[styles.square, { width: (DEVICE_SCREEN_WIDTH - 50 * 4) / 3, height: (DEVICE_SCREEN_WIDTH - 50 * 4) / 3 }]} />
            <View style={[styles.square, { backgroundColor: 'white', width: 50 }]} />
            <View style={[styles.square, { width: (DEVICE_SCREEN_WIDTH - 50 * 4) / 3, height: (DEVICE_SCREEN_WIDTH - 50 * 4) / 3 }]} />
            <View style={[styles.square, { backgroundColor: 'white', width: 50 }]} />
        </View>
    )
}

export default BT44

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    square: {
        backgroundColor: 'blue',
    }
});


import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const BT33 = () => {

    const [orientation, setOrientation] = useState("PORTRAIT");

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
            <View style={[styles.square, { marginHorizontal: 30 }]} />
            <View style={{ flex: 1 }} />
            <View style={[styles.square, { marginHorizontal: 30 }]} />
        </View>
    )
}
export default BT33

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    square: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    }
});


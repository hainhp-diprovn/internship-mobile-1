import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const BT33 = () => {

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


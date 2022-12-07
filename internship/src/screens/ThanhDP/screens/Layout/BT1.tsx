import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const squareSize = 200

const BT1 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.square} />
        </View>
    )
}

export default BT1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    square: {
        height: squareSize,
        width: squareSize,
        backgroundColor: 'pink'
    }
});


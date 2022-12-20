import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const BaiTap7pppB4 = () => {
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

export default BaiTap7pppB4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    view1: {
        flex: 1
    },
    view2: {
        height:40
    },
    box: {
        width:100,
        height:100,
        backgroundColor: "red",
    }
});
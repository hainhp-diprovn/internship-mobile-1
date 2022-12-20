import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const BaiTap7B5ppp = () => {
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

            <View style={styles.viewFix} />
        </SafeAreaView>
    )
}

export default BaiTap7B5ppp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    viewFix: {
        flex: 1
    },
    view1: {
        height:40
    },
    box: {
        width:80,
        height:80,
        backgroundColor: "red",
    }
});
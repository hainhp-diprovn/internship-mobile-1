import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const BaiTap7B5pp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1} />

                <View style={styles.box} />

            <View style={styles.view2} />

                <View style={styles.box} />

            <View style={styles.view2} />

                <View style={styles.box} />

            <View style={styles.view2} />

                <View style={styles.box} />
                
            <View style={styles.view1} />
        </SafeAreaView>
    )
}

export default BaiTap7B5pp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    view1: {
        height:50
    },
    view2: {
        flex: 1
    },
    box: {
        width:70,
        height:70,
        backgroundColor: "pink",
    }
});
import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
} from 'react-native';

const BaiTap7B4 = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
        </SafeAreaView>
    )
}

export default BaiTap7B4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    box: {
        width:100,
        height:100,
        backgroundColor: "#2f4f4f"
    }
});
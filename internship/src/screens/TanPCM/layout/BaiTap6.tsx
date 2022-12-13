import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
} from 'react-native';

const BaiTap6 = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
        </SafeAreaView>
    )
}

export default BaiTap6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    box: {
        width:50,
        height:50,
        backgroundColor: "#2f4f4f"
    }
});
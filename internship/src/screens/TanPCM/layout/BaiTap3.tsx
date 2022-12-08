import React from 'react';
import { StyleSheet, SafeAreaView,View } from 'react-native';

const BaiTap3 = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={ styles.boxView1}></View>
            <View style={ styles.boxView2}></View>
        </SafeAreaView>
    )
}

export default BaiTap3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    boxView1: {
        width:100,
        aspectRatio:1/1,
        backgroundColor:"blue",
        marginHorizontal:30

    },
    boxView2: {
        width:100,
        aspectRatio:1/1,
        backgroundColor:"blue",
        marginHorizontal:30

    },
})
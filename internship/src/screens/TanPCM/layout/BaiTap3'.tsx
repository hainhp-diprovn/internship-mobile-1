import React from 'react';
import { StyleSheet, SafeAreaView,View } from 'react-native';

const BaiTap3p = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={ styles.boxView}></View>
            <View style={ styles.box}/>
            <View style={ styles.boxView}></View>
        </SafeAreaView>
    )
}

export default BaiTap3p

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    boxView: {
        width:100,
        aspectRatio:1/1,
        marginHorizontal:40,
        backgroundColor:"red"
    },
    box: {
        flex: 1,
    }
})
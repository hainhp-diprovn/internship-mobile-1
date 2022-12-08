import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';

const BaiTap2 = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const hcnHeight = windowHeight - 150
    const hcnWidth = windowWidth - 150
     return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.imgView, {height: hcnHeight, width: hcnWidth}]} />
        </SafeAreaView>
    )
}

export default BaiTap2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    imgView: {
        backgroundColor: "#00ffff",
    }
})
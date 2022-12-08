import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native'

const BaiTap1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgView} />
        </SafeAreaView>
    )
}
export default BaiTap1
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgView: {
        height: 300,
        width: 300,
        backgroundColor: "blue",
    }
})
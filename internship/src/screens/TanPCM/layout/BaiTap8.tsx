import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

const BaiTap8_Layout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxHeader}>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
            </View>
            <View style={styles.box3}/>

        </SafeAreaView>
    )
}
export default BaiTap8_Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: "space-between",
    },
    boxHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        flex:1,
    },
    box1: {
        backgroundColor: "green",
        flex: 1,
        marginHorizontal: 10
    },
    box2: {
        backgroundColor: "orange",
        flex: 1,
        marginHorizontal: 10

    },
    box3: {
        backgroundColor: "blue",
        flex: 1,
        marginVertical:30,
        marginHorizontal:10

    }
})
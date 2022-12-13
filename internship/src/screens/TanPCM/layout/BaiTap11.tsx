import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

const BaiTap11Layout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={styles.viewRow1}>
                    <View style={{backgroundColor:"green", flex: 1, marginHorizontal:5}}/>
                    <View style={{backgroundColor: "blue",flex: 1, marginHorizontal:5}}/>

                </View>
                <View style={styles.viewRow2}>
                    <View style={{backgroundColor:"red", flex: 1, marginHorizontal:5}}/>
                    <View style={{backgroundColor:"red", flex: 1, marginHorizontal:5}}/>
                    <View style={{backgroundColor:"red", flex: 1, marginHorizontal:5}}/>

                </View>
                <View style={styles.viewRow3}>
                    <View style={{backgroundColor:"orange", flex:4, marginHorizontal:5}}/>
                    <View style={{flex: 5, marginHorizontal:5}}>
                        <View style={{backgroundColor: "blue", flex: 1, marginBottom:5}}/>
                        <View style={{backgroundColor: "blue", flex: 1, marginVertical:5}}/>
                        <View style={{backgroundColor: "blue", flex: 1, marginVertical:5}}/>
                        <View style={{backgroundColor: "blue", flex: 1, marginVertical:5}}/>
                        <View style={{backgroundColor: "blue", flex: 1, marginVertical:5}}/>
                        <View style={{backgroundColor: "blue", flex: 1, marginVertical:5}}/>
                        <View style={{backgroundColor: "blue", flex: 1, marginTop:5}}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default BaiTap11Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        margin:20,
    },
    viewRow1: {
        flex:2,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical:10
    },
    viewRow2:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around",

    },
    viewRow3:{
        flex: 7,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical:10

        
    }
})
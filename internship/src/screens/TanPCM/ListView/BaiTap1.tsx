import React from "react";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import { responsive } from '../../../ultils/reponsive'

const BaiTap1 = () => {
    
    const data : number[] = []

    for(let i = 1 ; i <= 100; i++ ){
        data.push(i)
    }
    
    const renderItems = item => {
        return (
            <View key = {item} style={[styles.box]}>
                <Text style={styles.text}>{item}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem = {({index}) => renderItems(index + 1)}
                    numColumns={5}
                    showsVerticalScrollIndicator = {false}
                />
        </SafeAreaView>
    )
}
export default BaiTap1
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
    },
    box: {
        width: responsive.WIDTH / 5 - 2*5,
        aspectRatio: 1 / 1,
        backgroundColor: "#ff7f50",
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    text: {
        alignSelf: "center",
        fontSize: 20,
        color: "white"
    }
})
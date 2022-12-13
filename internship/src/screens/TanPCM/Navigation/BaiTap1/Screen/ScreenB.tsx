import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { iconLeft } from '../../../url';

const ScreenB = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity 
                style={{flex: 1}}
                onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={iconLeft}/>
                </TouchableOpacity>
                <View style={{flex: 1, alignItems:"center", justifyContent: "center"}}>
                    <Text style={styles.title}>Screen B</Text>
                </View>
                <View style={{flex: 1}}/>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity 
                style={{marginVertical:20}}
                onPress={() => {
                    navigation.navigate("ScreenC")
                }}>
                    <Text style={styles.button}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{marginVertical:20}}
                onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={styles.button}>Pre</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ScreenB

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize:20,
        fontWeight: "bold",
    },
    viewButton:{
        flex: 1, 
        alignSelf: "center", 
        justifyContent: "center" 
    },
    button:{
        paddingHorizontal: 40,
        paddingVertical:10, 
        backgroundColor: "#1e90ff", 
        color:"white", 
        borderWidth:1, 
        borderColor:"blue",
        fontWeight: "600",
        fontSize:20,
        textAlign: "center"
    }
})
import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {screenName} from '../../../../../navigators/screens-name'

const ScreenA = () => {
    const navi = useNavigation<any>();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Screen A</Text>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    onPress={() => { navi.navigate(screenName.ScreenB_PCMT) }}>
                    <Text style={styles.button}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ScreenA

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    viewButton: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: "#1e90ff",
        color: "white",
        borderWidth: 1,
        borderColor: "blue"
    }
})
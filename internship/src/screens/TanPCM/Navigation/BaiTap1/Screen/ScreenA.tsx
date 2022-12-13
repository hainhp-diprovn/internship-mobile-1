import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, StyleSheet } from 'react-native'

const ScreenA = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Screen A</Text>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("ScreenB") }}>
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
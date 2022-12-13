import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { iconLeft } from '../../../url';

const ScreenE = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Image source={iconLeft} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.title}>Screen E</Text>
                </View>
                <View style={{ flex: 1 }} />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={{ marginVertical: 20 }}
                    onPress={() => {
                        navigation.pop(2)
                    }}>
                    <Text style={styles.button}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginVertical: 20 }}
                    onPress={() => {
                        navigation.pop(3)
                    }}>
                    <Text style={styles.button}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginVertical: 20 }}
                    onPress={() => {
                        navigation.pop(1)
                    }}>
                    <Text style={styles.button}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginVertical: 20 }}
                    onPress={() => {
                        navigation.popToTop()
                    }}>
                    <Text style={styles.button}>Root</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ScreenE

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
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
        borderColor: "blue",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center"
    }
})
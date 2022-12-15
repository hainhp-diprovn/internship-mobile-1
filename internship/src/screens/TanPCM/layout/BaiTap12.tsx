import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const BaiTap12Layout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewHeader}>
                <Text style={styles.textNumber}>9999,9</Text>
            </View>
            <View style={styles.viewBottom}>
                <View style={styles.viewRow}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]}>
                        <Text style={[styles.textButton, { color: "black" }]}>AC</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]}>
                        <Text style={[styles.textButton, { color: "black" }]}>+/_</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]}>
                        <Text style={[styles.textButton, { color: "black" }]}>%</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF9933" }]}>
                        <Text style={styles.textButton}>/</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.viewRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>7</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>8</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>9</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF9933" }]}>
                        <Text style={styles.textButton}>X</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.viewRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>4</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>5</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>6</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF9933" }]}>
                        <Text style={styles.textButton}>-</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.viewRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>1</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>2</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>3</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF9933" }]}>
                        <Text style={styles.textButton}>+</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.viewRow}>
                    <TouchableOpacity style={styles.button0}>
                        <Text style={styles.textButton0}>0</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>.</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF9933" }]}>
                        <Text style={styles.textButton}>=</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default BaiTap12Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    viewHeader: {
        flex: 2,
        padding: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    viewBottom: {
        flex: 5,
        padding: 20,
    },
    textNumber: {
        color: "white",
        fontSize: 70,
    },
    viewRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        width: "23%",
        aspectRatio: 1,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#303030"
    },
    textButton: {
        color: "white",
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    textButton0: {
        color: "white",
        justifyContent: "center",
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 30
    },
    button0: {
        width: "46%",
        aspectRatio: 2 / 1,
        borderRadius: 40,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#303030"
    }
})
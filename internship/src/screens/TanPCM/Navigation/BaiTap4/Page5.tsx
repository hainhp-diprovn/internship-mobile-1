import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import HeaderNavigation from "../../Components/HeaderNavi"
import { useNavigation } from "@react-navigation/native";
import { iconLeft } from "../../url";

const Page5 = () => {
    const navi = useNavigation<any>()

    const HeaderLeft = () => {
        return (
            <TouchableOpacity
                style={styles.containerHeader}
                onPress={() => navi.goBack()}>
                <Image source={iconLeft} />
                <Text style={styles.textP4}>Back</Text>
            </TouchableOpacity>
        )
    }
    const HeaderMiddle = () => {
        return (
            <View style={[styles.containerHeader, { justifyContent: "flex-start" }]}>
                <Text style={styles.textMid}>Mid 1</Text>
                <Text style={styles.textMid}>Mid 2</Text>
            </View>
        )
    }
    const HeaderRight = () => {
        return (
            <View style={styles.containerHeader}>
                <Text style={styles.textP4}>Right</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderNavigation
                childrenLeft={<HeaderLeft />}
                childrenMiddle={<HeaderMiddle />}
                childrenRight={<HeaderRight />}
            />
            <View style={styles.viewMain}>

                <Text style={styles.text}>Page 5</Text>
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => {
                        navi.goBack()
                    }}>
                    <Text style={styles.textButton}>Pre</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: "#1e90ff" }}
                    onPress={() => {
                        navi.popToTop()
                    }}>
                    <Text style={styles.textButton}>Root</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Page5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    viewMain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "600"
    },
    textButton: {
        fontSize: 24,
        fontWeight: "600",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "center",
        color: "white"
    },

    viewButton: {
        marginVertical: 20,
        backgroundColor: "#1e90ff",
    },
    containerHeader: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textP4: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2196F3"
    },
    textMid:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#2196F3",
        paddingHorizontal: 10
    }
})
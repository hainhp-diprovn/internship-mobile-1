import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import HeaderNavigation from "../../Components/HeaderNavi"
import { screenName } from '../../../../navigators/screens-name'
import { useNavigation } from "@react-navigation/native";
import { iconChef } from "../../url"
const Page4 = () => {
    const navi = useNavigation<any>()

    const HeaderLeft = () => {
        return (
            <View style={styles.containerHeader}/>
        )
    }
    const HeaderMiddle = () => {
        return (
            <View style={styles.containerHeader}>
                <Text style={styles.textP4}>Bar Button Test</Text>
            </View>
        )
    }
    const HeaderRight = () => {
        return (
            <View style={styles.containerHeader}>
                <Image source={iconChef}/>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderNavigation
                childrenLeft={<HeaderLeft/>}
                childrenMiddle={<HeaderMiddle/>}
                childrenRight={<HeaderRight />}
            />
            <View style={styles.viewMain}>
                <Text style={styles.text}>Page 4</Text>
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => {
                        navi.navigate(screenName.ScreenPage5_PCMT)
                    }}
                >
                    <Text style={styles.textButton}>Next Page</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: "#1e90ff" }}
                    onPress={() => {
                        navi.goBack()
                    }}>
                    <Text style={styles.textButton}>Pre</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Page4

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
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textP4: {
        fontSize: 20,
        fontWeight: "bold",
    },
})
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import HeaderNavigation from "../../Components/HeaderNavi"
import {screenName} from '../../../../navigators/screens-name'

const Page1 = () => {
    const navi = useNavigation<any>()

    const AllViewHeader = () => {
        return(
            <View style={styles.viewheaderMiddle}>
                <Text style={styles.textHeader}>Gradient NavigationBar</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderNavigation
                allViewHeader={<AllViewHeader/>}
                imageUrl={"https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"}
            />
            <View style={styles.viewMain}>
                <Text style={styles.text}>Page 1</Text>
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => {
                        navi.navigate(screenName.ScreenPage2_PCMT)
                    }}>
                    <Text style={styles.textButton}>Next Page</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Page1

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
    viewheaderMiddle: {
        flex:1,
        justifyContent: "center"
    },
    textHeader: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }
})
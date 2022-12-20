import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, TextInput, Image } from "react-native";
import HeaderNavigation from "../../Components/HeaderNavi"
import { screenName } from '../../../../navigators/screens-name'
import { useNavigation } from "@react-navigation/native";
import { iconSBT4 } from "../../url";

const Page3 = () => {
    const navi = useNavigation<any>()
    const ViewHeader = () => {
        return (
            <View style={styles.containerHeader}>
                <View style={styles.viewSearch} >
                    <Image source={iconSBT4} />
                    <TextInput
                        style={{ paddingLeft: 5, width: 270 }}
                        placeholderTextColor={'#696969'}
                        placeholder="Search"
                    />
                </View>
                <TouchableOpacity >
                    <Text style={styles.txtCancel}>Cancel</Text>
                </TouchableOpacity>
            </View>

        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderNavigation
                allViewHeader={<ViewHeader />} />
            <View style={styles.viewMain}>
                <Text style={styles.text}>Page 3</Text>
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => {
                        navi.navigate(screenName.ScreenPage4_PCMT)
                    }}>
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
export default Page3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    containerHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal:10
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
    viewSearch: {
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#a9a9a9", 
        padding: 5
    },
    txtCancel: {
        justifyContent: "flex-end",
        fontWeight: "600",
        fontSize:16,
        paddingLeft:10,
        color: "#3F4088"
    }
})
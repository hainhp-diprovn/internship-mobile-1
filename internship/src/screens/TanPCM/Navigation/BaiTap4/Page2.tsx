import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image} from "react-native";
import HeaderNavigation from "../../Components/HeaderNavi"
import { screenName } from '../../../../navigators/screens-name'
import { iconRBT4, iconSBT4 } from "../../url";

const Page2 = () => {
    const navi = useNavigation<any>()

    const HeaderLeft = () => {
        return (
            <View style={[styles.containerHeader,{alignItems:"flex-start"}]}>
                <Image
                source={iconSBT4}/>
            </View>
        )
    }
    const HeaderMiddle = () => {
        return (
            <View style={styles.containerHeader}>
                <Text style={styles.textMiddle}>News Feed</Text>
            </View>
        )
    }
    const HeaderRight = () => {
        return (
            <View style={[styles.containerHeader,{alignItems:"flex-end"}]}>
                <Image
                source={iconRBT4}/>
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
                <Text style={styles.text}>Page 2</Text>
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => {
                        navi.navigate(screenName.ScreenPage3_PCMT)
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
export default Page2

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
        backgroundColor: "#15189D",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    textMiddle: {
        fontWeight: "bold",
        fontSize:18,
        color: "white",
    }

})
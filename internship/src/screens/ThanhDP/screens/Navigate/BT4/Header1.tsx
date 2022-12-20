import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from '../../../component/Header'

const Header1 = () => {
    const navi = useNavigation<any>()

    const AllViewHeader = () => {
        return (
            <View style={styles.containerFullHeader}>
                <Text style={styles.txt}>Gradient NavigationBar</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                fullHeader={<AllViewHeader />}
                imgURL={"https://pixy.org/download/56870/"}
            />
        </View>
    )
}
export default Header1

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerFullHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }
})
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import Header from '../../../component/Header'
import Icon from 'react-native-vector-icons/AntDesign';


const Header3 = () => {
    const navi = useNavigation<any>()

    const AllViewHeader = () => {
        return (
            <View style={styles.containerFullHeader}>
                <View style={styles.containerTop}>
                    <View style={styles.viewSearch}>
                        <TouchableOpacity>
                            <Icon
                                name="search1"
                                size={25}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Search"
                        />
                    </View>
                    <TouchableOpacity >
                        <Text style={styles.txtCancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBottom}>
                    <TouchableOpacity style={[styles.btnOption, { backgroundColor: "#8FA2FF" }]}>
                        <Text>option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnOption}>
                        <Text>option 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                fullHeader={<AllViewHeader />}
            />
        </View>
    )
}
export default Header3

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerFullHeader: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"
    },
    containerTop: {
        flex: 1,
        backgroundColor: "#C3D2F3",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 15,
        flexDirection: "row"
    },
    containerBottom: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    viewSearch: {
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#E0E4F4",
        paddingLeft: 10,
        width: "85%",
        height: "70%",
        alignItems: "center"
    },
    txtCancel: {
        marginLeft: 10,
        fontSize: 16,
        color: "black"
    },
    btnOption: {
        width: "50%",
        height: "70%",
        borderWidth: 2,
        borderColor: "#C3D2F3",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})
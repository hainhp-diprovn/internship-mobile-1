import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Header from '../../../component/Header'
import Icon from 'react-native-vector-icons/AntDesign';

const Header5 = () => {

    const ViewLeft = () => {
        return (
            <TouchableOpacity style={styles.btnBack}>
                <Icon
                    name="left"
                    size={35}
                    color="white"
                />
                <Text style={styles.txtTitle}>Back</Text>
            </TouchableOpacity>
        )
    }

    const ViewMiddle = () => {
        return (
            <View style={{ width: "100%", flexDirection: "row" }}>
                <TouchableOpacity>
                    <Text style={[styles.txtTitle, { marginLeft: 10 }]}>Mid 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.txtTitle, { marginLeft: 10 }]}>Mid 2</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const ViewRight = () => {
        return (
            <TouchableOpacity>
                <Text style={styles.txtTitle}>Right</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                childrenLeft={<ViewLeft />}
                childrenMiddle={<ViewMiddle />}
                childrenRight={<ViewRight />}
                containerColor={"#4251F5"}
            />
        </View>
    )
}
export default Header5

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    },
    btnBack: {
        flexDirection: "row",
        alignItems: "center"
    }

})
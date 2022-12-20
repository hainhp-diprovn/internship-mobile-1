import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Header from '../../../component/Header'
import Icon from 'react-native-vector-icons/AntDesign';

const Header4 = () => {

    const ViewMiddle = () => {
        return (
            <Text style={styles.txtTitle}>Bar Button Test</Text>
        )
    }

    const ViewRight = () => {
        return (
            <TouchableOpacity>
                <Icon
                    name="addusergroup"
                    size={35}
                    color="blue"
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                childrenMiddle={<ViewMiddle />}
                childrenRight={<ViewRight />}
            />
        </View>
    )
}
export default Header4

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    }

})
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Header from '../../../component/Header'
import Icon from 'react-native-vector-icons/AntDesign';

const Header2 = () => {

    const ViewLeft = () => {
        return (
            <TouchableOpacity>
                <Icon
                    name="search1"
                    size={35}
                    color="white"
                />
            </TouchableOpacity>
        )
    }

    const ViewMiddle = () => {
        return (
            <Text style={styles.txtTitle}>News Feed</Text>
        )
    }

    const ViewRight = () => {
        return (
            <TouchableOpacity>
                <Icon
                    name="addusergroup"
                    size={35}
                    color="white"
                />
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
export default Header2

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    }

})
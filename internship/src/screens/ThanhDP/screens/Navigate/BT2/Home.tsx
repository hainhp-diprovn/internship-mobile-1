import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../../navigators/screens-name'
import { useRoute } from '@react-navigation/native';
import Header from '../../../component/Header'

const Home = () => {

    const route = useRoute<any>();
    const navi = useNavigation<any>();
    let recive = route.params

    const ViewLeft = () => {
        return (
            <TouchableOpacity
                onPress={() => { navi.navigate(screenName.Login_DPT) }}
            >
                <Text style={styles.txtBTN}>Logout</Text>
            </TouchableOpacity>
        )
    }

    const ViewMiddle = () => {
        return (
            <Text style={styles.txtTitle}>Home</Text>
        )
    }

    const ViewRight = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navi.navigate(screenName.Edit_DPT, {
                        username: recive?.username,
                    })
                }}
            >
                <Text style={styles.txtBTN}>Edit</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                childrenRight={<ViewRight />}
                childrenMiddle={<ViewMiddle />}
                childrenLeft={<ViewLeft />}
            />
            <View style={styles.containerWelcome}>
                <Text style={styles.txt}>{"Welcome: " + recive?.username}</Text>
                {
                    recive?.newPass !== undefined ? <Text style={[styles.txt, { fontSize: 18 }]}>{"New Pass: " + recive?.newPass}</Text> : <></>
                }
            </View>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        fontSize: 35,
        fontWeight: "600",
        color: "black"
    },
    containerWelcome: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
        flex: 1
    },
    txtBTN: {
        fontSize: 18,
        fontWeight: "bold",
        color: "lightblue"
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    }
})
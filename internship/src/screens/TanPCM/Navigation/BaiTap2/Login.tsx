import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, TextInput, Image, Text, DeviceEventEmitter } from 'react-native';
import { screenName } from '../../../../navigators/screens-name'

const Login = () => {

    DeviceEventEmitter.addListener("change", (eventInfo) => {
        onSelect(eventInfo)
    })

    const [getUserName, setUserName] = useState("")
    const [getPassword, setPassword] = useState("")
    const [info, setInfo] = useState([
        {
            email: "User1@gmail.com",
            password: "1234"
        },
        {
            email: "User2@gmail.com",
            password: "12345"
        },
        {
            email: "User3@gmail.com",
            password: "123456"
        },
        {
            email: "User4@gmail.com",
            password: "1234567"
        },
        {
            email: "User5@gmail.com",
            password: "12345678"
        },
    ])

    const passwordRef = useRef<TextInput>(null);
    const usernameRef = useRef<TextInput>(null);

    const handleLogin = () => {
        if (getUserName == "" || getPassword == "") {
            alert("Please enter your username and password")
        } else if (getUserName != info[0].email || getPassword != info[0].password) {
            alert("Password is incorrect")
        } else {
            setUserName("");
            setPassword("");
            navi.navigate(screenName.ScreenHome_PCMT, info[0])
            console.log("info", info[0]);
        }
    }

    const onSelect = item => {
        const newItem = info.map(obj => obj.email === item.email ? { ...obj, email: item.email } : obj);
        setInfo(newItem)
    }
    const navi = useNavigation<any>()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <View style={{ flex: 1 }} />
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // navi.navigate(screenName.ScreenHome_PCMT, {
                        //     username: getUserName,
                        //     password: getPassword
                        // })
                        handleLogin()

                    }}
                >
                    <Text style={styles.textDone}>Done</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'#696969'}
                    placeholder="User Name"
                    value={getUserName}
                    onChangeText={setUserName}
                    // returnKeyType="next"
                    onSubmitEditing={() => {
                        getUserName != "" ? passwordRef.current && passwordRef.current.focus() : usernameRef.current && usernameRef.current.focus()
                    }}
                // blurOnSubmit={false}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'#696969'}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={getPassword}
                    onChangeText={setPassword}
                    // ref={passwordRef}
                    // returnKeyType="done"
                    onSubmitEditing={() => {
                        !!getPassword ? handleLogin() : passwordRef.current && passwordRef.current.focus();
                    }}
                // blurOnSubmit={!!password ? true : false}
                />
            </View>
        </SafeAreaView>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    titleHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textDone: {
        alignSelf: "flex-end",
        fontSize: 18,
        fontWeight: "400",
        color: "#1e90ff"
    },
    inputView: {
        paddingTop: 10,
        alignItems: "center",
        margin: 25,
        marginBottom: 15,
    },
    input: {
        marginVertical: 10,
        padding: 15,
        paddingLeft: 32,
        backgroundColor: "white",
        borderRadius: 20,
        width: "100%",
        fontWeight: "600",
        borderWidth: 1,
    },
    button: {
        flex: 1,
        alignSelf: "center"
    }
})
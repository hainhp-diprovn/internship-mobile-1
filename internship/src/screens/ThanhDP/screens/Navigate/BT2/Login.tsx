import React, { useState, useRef } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../../navigators/screens-name'
import Icon from 'react-native-vector-icons/Entypo'
import Header from '../../../component/Header'

const Login = () => {

    const navi = useNavigation<any>();
    const [username, setUsername] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [notify, setNotify] = useState<string>("")
    const [securePass, setSecurePass] = useState<boolean>(false)
    const passRef = useRef<any>();
    const users = [
        {
            username: "1",
            pass: "1"
        },
        {
            username: "user1",
            pass: "123456"
        },
        {
            username: "user2",
            pass: "654321"
        },
        {
            username: "user3",
            pass: "111111"
        },
    ]

    const checkLogin = (email: string, password: string): boolean => {
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === email) && (users[i].pass === password)) {
                return true
            }
        }
        return false
    }

    const handleLogin = () => {
        if (checkLogin(username, pass)) {
            navi.navigate(screenName.Home_DPT, {
                username: username,
            })
            setNotify("")
            setUsername("")
            setPass("")
        }
        else if ((username === "") || (pass === "")) {
            setNotify("Không được để trống email hay password")
        }
        else {
            setNotify("Sai tài khoản hoặc mật khẩu rồi bạn ơi")
        }
    }

    const ViewLeft = () => {
        return (
            <TouchableOpacity
                onPress={handleLogin}
            >
                <Text style={styles.txtDone}>Done</Text>
            </TouchableOpacity>
        )
    }

    const ViewMiddle = () => {
        return (
            <Text style={styles.txtLogin}>Login</Text>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
            accessible={false}>
            <View style={styles.container}>
                <Header
                    childrenRight={<ViewLeft />}
                    childrenMiddle={<ViewMiddle />}
                />
                <View style={styles.containerTXTInput}>
                    <TextInput
                        style={styles.txtInput}
                        value={username}
                        placeholder={"Nhập email"}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passRef.current.focus();
                        }}
                        blurOnSubmit={false}
                        onChangeText={(text) => {
                            setUsername(text)
                        }}
                    />
                    <View style={styles.containerPassword}>
                        <TextInput
                            style={styles.txtInput}
                            ref={passRef}
                            placeholder="Nhập mật khẩu"
                            value={pass}
                            secureTextEntry={securePass}
                            onChangeText={(text) => {
                                setPass(text)
                            }}
                            onSubmitEditing={handleLogin}
                        />
                        <TouchableOpacity
                            style={styles.btnSecurePass}
                            onPress={() => {
                                setSecurePass(!securePass)
                            }}>
                            <Icon
                                name={securePass ? "eye-with-line" : "eye"}
                                size={28}
                                color={"#9CA1A3"} />
                        </TouchableOpacity>
                    </View>
                    {
                        notify !== "" ? <Text style={styles.txtNotify}>{notify}</Text> : <></>
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTXTInput: {
        justifyContent: "space-around",
        alignItems: "center",
        height: 200,
        paddingTop: 20
    },
    txtInput: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    txtNotify: {
        fontSize: 16,
        color: "red",
        fontWeight: "bold"
    },
    containerPassword: {
        width: '100%',
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    btnSecurePass: {
        position: "absolute",
        top: 20,
        right: 48
    },
    txtDone: {
        fontSize: 18,
        fontWeight: "bold",
        color: "lightblue"
    },
    txtLogin: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    }
})
import React, { useState, useRef } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../../navigators/screens-name'
import { useRoute } from '@react-navigation/native';
import Header from '../../../component/Header'

const Edit = () => {

    const route = useRoute<any>();
    let recive = route.params
    const navi = useNavigation<any>();
    const [newUsername, setNewUsername] = useState<string>(recive.username)
    const [newPass, setNewPass] = useState<string>("")
    const [confirmPass, setConfirmPass] = useState<string>("")
    const [notify, setNotify] = useState<string>("")
    const newPassRef = useRef<any>();
    const confirmPassRef = useRef<any>();

    const ViewLeft = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navi.navigate(screenName.Home_DPT, {
                        username: recive.username,
                    })
                }}
            >
                <Text style={styles.txtBTN}>Cancel</Text>
            </TouchableOpacity>
        )
    }

    const ViewMiddle = () => {
        return (
            <Text style={styles.txtTitle}>Edit</Text>
        )
    }

    const ViewRight = () => {
        return (
            <TouchableOpacity
                onPress={checkDone}
            >
                <Text style={styles.txtBTN}>Done</Text>
            </TouchableOpacity>
        )
    }

    const checkDone = () => {
        if ((newUsername !== "") && (newPass !== "") && (confirmPass !== "") && (newPass === confirmPass)) {
            navi.navigate(screenName.Home_DPT, {
                username: newUsername,
                newPass: newPass
            })
            setNotify("")
        }
        else if ((newPass !== confirmPass)) {
            setNotify("Mật khẩu mới và xác nhận mật khẩu không giống nhau")
        }
        else {
            setNotify("Không được để trống bất cứ trường nào")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
            accessible={false}>
            <View style={styles.container}>
                <Header
                    childrenRight={<ViewRight />}
                    childrenMiddle={<ViewMiddle />}
                    childrenLeft={<ViewLeft />}
                />
                <View style={styles.containerTXTInput}>
                    <TextInput
                        defaultValue={newUsername}
                        style={styles.txtInput}
                        placeholder={"Nhập email mới"}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            newPassRef.current.focus();
                        }}
                        blurOnSubmit={false}
                        onChangeText={(txt) => {
                            setNewUsername(txt)
                        }}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder={"Nhập mật khẩu mới"}
                        ref={newPassRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            confirmPassRef.current.focus();
                        }}
                        blurOnSubmit={false}
                        onChangeText={(txt) => {
                            setNewPass(txt)
                        }}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder={"Xác nhận mật khẩu mới"}
                        ref={confirmPassRef}
                        onChangeText={(txt) => {
                            setConfirmPass(txt)
                        }}
                        onSubmitEditing={checkDone}
                    />
                    {
                        notify !== "" ? <Text style={styles.txtNotify}>{notify}</Text> : <></>
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Edit

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        fontSize: 20,
        fontWeight: "600",
        color: "black"
    },
    containerTXTInput: {
        justifyContent: "space-around",
        alignItems: "center",
        height: 300,
        width: "100%",
        backgroundColor: "pink"
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
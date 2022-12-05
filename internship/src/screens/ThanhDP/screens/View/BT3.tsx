import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

const BT3 = () => {

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [notify, setNotify] = useState("")
    const [securePass, setSecurePass] = useState(false)

    const handleLogin = () => {
        if (pass == "" || username == "") {
            setNotify("Không được để trống Username hoặc Pass")
        } else {
            ((pass != "Admin123") || (username != "Admin")) ? setNotify("Nhập sai username và password") : setNotify("")
        }
    }

    const passRef = useRef<any>();

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
            accessible={false}>
            <View style={styles.container}>
                <TextInput
                    style={styles.txtInput}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => {
                        setUsername(text)
                    }}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passRef.current.focus();
                    }}
                    blurOnSubmit={false}
                />
                <View style={styles.containerPassword}>
                    <TextInput
                        style={[styles.txtInput, { marginBottom: 0 }]}
                        ref={passRef}
                        placeholder="Pass"
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
                <Text style={styles.txtAlert}>{notify}</Text>
                <View style={styles.containerBTN}>
                    <TouchableOpacity
                        style={styles.BTN}
                        onPress={handleLogin}
                    >
                        <Text style={styles.txtBTN}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.viewEmpty} />
                    <TouchableOpacity
                        style={styles.BTN}
                        onPress={() => {
                            setPass("")
                            setUsername("")
                        }}
                    >
                        <Text style={styles.txtBTN}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

}
export default BT3
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    txtInput: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10
    },
    containerBTN: {
        flexDirection: 'row',
        width: '100%'
    },
    BTN: {
        height: 45,
        width: '40%',
        borderRadius: 10,
        backgroundColor: '#faa885',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    txtBTN: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    txtAlert: {
        marginVertical: 15,
        marginBottom: 25,
        fontSize: 16,
        color: 'red'
    },
    viewEmpty: {
        flex: 1
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
});

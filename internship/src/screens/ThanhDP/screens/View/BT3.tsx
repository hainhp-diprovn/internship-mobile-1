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

const BT3 = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [notify, setNotify] = useState("")
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
            // console.log('hi')
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
                <TextInput
                    style={styles.txtInput}
                    ref={passRef}
                    placeholder="Pass"
                    value={pass}
                    onChangeText={(text) => {
                        setPass(text)
                    }}
                    onSubmitEditing={handleLogin}
                />
                <Text style={styles.txtAlert}>
                    {
                        notify
                    }
                </Text>
                <View style={styles.containerBTN}>
                    <TouchableOpacity
                        style={styles.BTN}
                        onPress={handleLogin}
                    >
                        <Text style={styles.txtBTN}>{'Login'}</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity
                        style={styles.BTN}
                        onPress={() => {
                            setPass("")
                            setUsername("")
                        }}
                    >
                        <Text style={styles.txtBTN}>{'Clear'}</Text>
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
    }
});

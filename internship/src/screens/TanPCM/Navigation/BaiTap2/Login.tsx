import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState} from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, TextInput, Image, Text } from 'react-native';
import {screenName} from '../../../../navigators/screens-name'

const Login = () => {

    const [getUserName, setUserName] = useState("")
    const [getPassword, setPassword] = useState("")
    const navi = useNavigation<any>()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <View style={{flex: 1}}/>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    navi.navigate(screenName.ScreenHome_PCMT, {
                        username: getUserName,
                        password: getPassword
                    })
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
            // onSubmitEditing={() => {
            //   username != "" ? passwordRef.current && passwordRef.current.focus() : usernameRef.current && usernameRef.current.focus()
            // }}
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
            // onSubmitEditing={() => {
            //   !!password ? handleLogin() : passwordRef.current && passwordRef.current.focus() ;
            // }}
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
        paddingHorizontal:20,
        paddingVertical:10
    },
    title: {
        fontSize:20,
        fontWeight: "bold",
    },
    titleHeader: {
        flex: 1, 
        alignItems:"center", 
        justifyContent: "center"
    },
    textDone: {
        alignSelf:"flex-end",
        fontSize:18,
        fontWeight: "400",
        color:"#1e90ff"
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
        alignSelf:"center"
      }
})
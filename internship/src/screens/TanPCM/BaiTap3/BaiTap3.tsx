import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

const BaiTap3 = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [notification, setNotification] = useState<string>("");
  const handleLogin = () => {

    if (username === "" || password === "") {
      setNotification("Please enter your username and password")
    } else if (username !== "Admin" || password !== "Admin123") {
      setNotification("Wrong username and password")
    } else {
      setUsername("");
      setPassword("");
      setNotification("");
      alert("Login success");
    }
  }
  const reset = () => {
    setUsername("");
    setPassword("");
    setNotification("");
  }
  const passwordRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#696969'}
            placeholder="Enter Your Email"
            value={username}
            onChangeText={setUsername}
            returnKeyType="next"
            onSubmitEditing={() => {
              username != "" ? passwordRef.current && passwordRef.current.focus() : usernameRef.current && usernameRef.current.focus()
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#696969'}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            returnKeyType="done"
            onSubmitEditing={() => {
              !!password ? handleLogin() : passwordRef.current && passwordRef.current.focus() ;
            }}
            blurOnSubmit={!!password ? true : false}
          />
        </View>
        <View>
          <Text style={styles.textNotifi}>{notification}</Text>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.buttonView}>
            <Text
              style={styles.textLogin}
              onPress={() => handleLogin()}
            >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Text
              style={styles.textLogin}
              onPress={reset}
            >Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BaiTap3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    paddingTop: 30
  },
  textNotifi: {
    color: "red",
    textAlign: "center"
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
    borderRadius: 100,
    width: "100%",
    fontWeight: "600",
  },
  loginButton: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 25,
  },
  buttonView: {
    backgroundColor: "#00bfff",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
  },
  textLogin: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
    padding: 20,
  },

});

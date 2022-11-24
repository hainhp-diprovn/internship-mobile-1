import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {imgLogin, shape} from '../../../url';
export default loginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={shape} style={styles.imgHeader} />
      <View style={styles.header}>
        <Text style={styles.text1}>Welcome back!</Text>
        <Text style={styles.text2}>Let's help you meet your tasks</Text>
      </View>
      <Image source={imgLogin} style={styles.img} />

      <View style={styles.inputView}>
        <TextInput
          placeholderTextColor={'#696969'}
          placeholder="Enter Your Email"
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={'#696969'}
          placeholder="Confrom Password"
          style={styles.input}
        />
      </View>
      <Text style={styles.forget}>Forget Password</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.loginText}>
        <Text style={styles.textSign1}>Don't have an account ? </Text>
        <Text style={styles.textSign2}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    position: 'relative',
  },
  header: {
    alignItems: 'center',
    marginTop: 85,
  },
  imgHeader: {
    position: 'absolute',
    top: 0,
    left: -10,
  },
  text1: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  text2: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 15,
  },
  img: {
    alignSelf: 'center',
    marginTop: 25,
  },
  inputView: {
    paddingTop: 10,
    alignItems: 'center',
    margin: 25,
    marginBottom: 15,
  },
  input: {
    marginVertical: 10,
    padding: 15,
    paddingLeft: 32,
    backgroundColor: 'white',
    borderRadius: 100,
    width: '100%',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#FAA885',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 25,
    borderRadius: 15,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  loginText: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 20,
  },
  forget: {
    textAlign: 'center',
    color: '#B83F0B',
    fontWeight: '600',
    fontSize: 20,
  },
  button: {
    fontWeight: '600',
  },
  textSign2: {
    color: '#AD491E',
    fontWeight: '800',
    fontSize: 18,
  },
  textSign1: {
    fontSize: 18,
  },
});

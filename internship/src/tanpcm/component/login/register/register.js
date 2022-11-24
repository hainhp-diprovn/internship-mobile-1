import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {shape} from '../../../url';

export default registerPage = () => {
  return (
    <View style={styles.container}>
      <Image source={shape} style={styles.imgHeader} />
      <View style={styles.header}>
        <Text style={styles.text1}>Welcome onboard!</Text>
        <Text style={styles.text2}>Let's help you meet your tasks</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholderTextColor={'#696969'}
          placeholder="Enter Your Full Name"
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={'#696969'}
          placeholder="Enter Your Email"
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={'#696969'}
          placeholder="Enter Your Password"
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={'#696969'}
          placeholder="Confrom Password"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
      <View style={styles.registerText}>
        <Text style={styles.textSign1}>Already have account ? </Text>
        <Text style={styles.textSign2}>Sign In</Text>
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
    marginTop: 130,
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
  inputView: {
    paddingTop: 50,
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
  registerButton: {
    backgroundColor: '#FAA885',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 25,
    borderRadius: 15,
  },
  registerText: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 20,
  },
  textButton: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
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

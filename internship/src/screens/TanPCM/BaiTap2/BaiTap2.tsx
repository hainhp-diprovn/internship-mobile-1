import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const BaiTap2 = () => {
  return (
    <View style={styles.container}>
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
      <View style={styles.loginButton}>
        <TouchableOpacity >
            <Text style={styles.textLogin} >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textLogin}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BaiTap2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    position: 'relative',
    paddingTop:30
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
    justifyContent: "space-around",
    flexDirection:"row",
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 25,
    borderRadius: 15,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    backgroundColor: "gray",
    padding:20,
  },

});

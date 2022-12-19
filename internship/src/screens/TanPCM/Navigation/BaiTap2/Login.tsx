import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  DeviceEventEmitter,
} from 'react-native';
import {screenName} from '../../../../navigators/screens-name';

const Login = () => {
  const navi = useNavigation<any>();

  const [getUserName, setUserName] = useState('');
  const [getPassword, setPassword] = useState('');
  const [info, setInfo] = useState([
    {
      email: 'User1@gmail.com',
      password: '1234',
    },
    {
      email: 'User2@gmail.com',
      password: '12345',
    },
    {
      email: 'User3@gmail.com',
      password: '123456',
    },
    {
      email: 'User4@gmail.com',
      password: '1234567',
    },
    {
      email: 'User5@gmail.com',
      password: '12345678',
    },
  ]);

  const checkInfo = (email: string, password: string) => {
    for (let i = 0; i < info.length; i++) {
      if (info[i].email === email && info[i].password === password) {
        navi.navigate(screenName.ScreenHome_PCMT, {
          username: getUserName,
          password: getPassword,
        });
      } else {
        setUserName('');
        setPassword('');
        console.log('Email and password is incorrect');
      }
    }
  };

  const passwordRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={{flex: 1}} />
        <View style={styles.titleHeader}>
          <Text style={styles.title}>Login</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkInfo(getUserName, getPassword);
          }}>
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
          returnKeyType="next"
          onSubmitEditing={() => {
            getUserName != ''
              ? passwordRef.current && passwordRef.current.focus()
              : usernameRef.current && usernameRef.current.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#696969'}
          placeholder="Password"
          secureTextEntry={true}
          value={getPassword}
          onChangeText={setPassword}
          ref={passwordRef}
          returnKeyType="done"
          onSubmitEditing={() => {
            !!getPassword
              ? checkInfo(getUserName, getPassword)
              : passwordRef.current && passwordRef.current.focus();
          }}
          blurOnSubmit={!!getPassword ? true : false}
        />
      </View>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textDone: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "400",
    color: "#1e90ff",
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
    alignSelf: "center",
  },
});

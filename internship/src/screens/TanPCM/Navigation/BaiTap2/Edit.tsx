import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

const Login = () => {
  const navi = useNavigation<any>();
  const route = useRoute<any>();

  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const item = route.params;
  item.onSetUser(newName);

  const passwordRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);

  const checkPassword = (password: string, confirm: string) => {
    if (password === confirm) {
      navi.goBack();
    } else {
      alert("Password and confirmation doesn't match");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navi.goBack();
          }}>
          <Text style={styles.textLogout}>Cancel</Text>
        </TouchableOpacity>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>Edit</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkPassword(newPassword, confirmPassword);
          }}>
          <Text style={styles.textDone}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#696969'}
          placeholder={item.infoName}
          // value={user}
          onChangeText={setNewName}
          returnKeyType="next"
          onSubmitEditing={() => {
            newName != ''
              ? passwordRef.current && passwordRef.current.focus()
              : usernameRef.current && usernameRef.current.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#696969'}
          placeholder={item.infoPass}
          secureTextEntry={true}
          // value={password}
          onChangeText={setNewPassword}
          ref={passwordRef}
          returnKeyType="next"
          textContentType={'oneTimeCode'}
          onSubmitEditing={() => {
            newPassword != ''
              ? passwordRef.current && passwordRef.current.focus()
              : passwordRef.current && passwordRef.current.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#696969'}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
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
  textDone: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "400",
    color: "#1e90ff",
  },
  textLogout: {
    alignSelf: "flex-start",
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
  titleHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

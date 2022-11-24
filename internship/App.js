import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FlexBox from './src/tanpcm/component/boxMain/boxMain';
import ViewBT1 from './src/tanpcm/component/viewBT1/view1'
import LoginStart from './src/tanpcm/component/login/loginStart/loginStart'
import Login from './src/tanpcm/component/login/login/login'
import Register from './src/tanpcm/component/login/register/register'
import Dashboard from './src/tanpcm/component/login/dashboard/dashboard'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <FlexBox/> */}
        {/* <ViewBT1/> */}
        {/* <LoginStart/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        <Dashboard/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  } 
});

export default App;

import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {screenName} from '../../../../navigators/screens-name'


const Home = () => {
  const navi = useNavigation<any>()
  const route = useRoute<any>()
  const itemInfo = route.params
  
  const [userName, setUserName] = useState(itemInfo.username)
  
  const onSetUser = (userName: string) => {
    setUserName(userName)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navi.popToTop();
          }}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>Home</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navi.navigate(screenName.ScreenEdit_PCMT, {
              infoName: itemInfo.username ,
              infoPass: itemInfo.password,
              onSetUser: (userName : string) => onSetUser(userName)
            });
          }}>
          <Text style={styles.textEdit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.username}>
        <Text style={styles.text}>
          Welcome
        </Text>
        <Text style={styles.text}>
          {userName}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Home;
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
  textEdit: {
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
  username: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24, 
    fontWeight: "600", 
    paddingVertical: 5
  },
  titleHeader: {
    flex: 1, 
    alignItems:"center", 
    justifyContent: "center"
},
button:{
  flex: 1, 
  alignSelf: "center"
}
});

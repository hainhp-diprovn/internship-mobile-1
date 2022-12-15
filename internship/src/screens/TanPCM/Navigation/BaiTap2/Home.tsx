import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect} from 'react';
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

//   useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{flex: 1, alignSelf: 'center'}}
          onPress={() => {
            navi.popToTop();
          }}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.title}>Home</Text>
        </View>
        <TouchableOpacity
          style={{flex: 1, alignSelf: 'center'}}
          onPress={() => {
            navi.navigate(screenName.ScreenEdit_PCMT, {
              infoName: itemInfo.username ,
              infoPass: itemInfo.password,
            });
          }}>
          <Text style={styles.textEdit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.username}>
        <Text style={{fontSize: 24, fontWeight: '600', paddingVertical: 5}}>
          Welcome
        </Text>
        <Text style={{fontSize: 24, fontWeight: '600', paddingVertical: 5}}>
          {itemInfo.username}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textEdit: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: '400',
    color: '#1e90ff',
  },
  textLogout: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '400',
    color: '#1e90ff',
  },
  username: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

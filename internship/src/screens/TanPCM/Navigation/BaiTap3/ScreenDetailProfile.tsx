import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  DeviceEventEmitter,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {iconLeft} from '../../url';

const DetailScreen = () => {
  const navi = useNavigation<any>();
  const route = useRoute<any>();
  const [item, setItem] = useState(route.params.item);
  let data = route.params.item;

  const updateValue = () => {
    setItem({...item, name: ''});
    navi.goBack();
    DeviceEventEmitter.emit('changeName', {...data, name: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.flex1}
          onPress={() => {
            navi.goBack();
          }}>
          <Image source={iconLeft} />
        </TouchableOpacity>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <TouchableOpacity
          style={styles.viewButtonDone}
          onPress={() => updateValue()}>
          <Text style={styles.textDone}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewImg}>
        <Image style={styles.image} source={route.params.item.image} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#696969'}
          placeholder={data.name}
          onChangeText={setItem}
          value={item}
        />
      </View>
    </SafeAreaView>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  viewTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewButtonDone: {
    flex: 1,
    alignSelf: "center",
  },
  textDone: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "400",
    color: "#1e90ff",
  },
  viewImg: {
    alignSelf: "center",
    marginTop: 40,
  },
  image: {
    height: 200,
    width: 150,
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
});

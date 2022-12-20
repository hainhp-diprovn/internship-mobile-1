import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import { responsive } from '../../../../../ultils/reponsive'
import { useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'
import { screenName } from '../../../../../navigators/screens-name'

const User = (props) => {

  const navi = useNavigation<any>();

  const [name, setName] = React.useState<string>(props?.name)

  const handleSetName = (name) => {
    setName(name)
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navi.navigate(screenName.ScreenDetailProfile_DPT, {
          setName: (name: string) => handleSetName(name),
          img: props.img,
          id: props.id,
          name: name
        })

      }}
    >
      <View style={styles.containerUser}>
        <FastImage
          style={styles.img}
          source={{
            uri: props.img,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <View style={styles.viewText}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const ScreenProfile = () => {

  const navi = useNavigation<any>();
  const route = useRoute<any>();
  const avatars = "https://vtv1.mediacdn.vn/thumb_w/650/2022/9/23/1652155217doan-gioi-thieu-teaser-avatar-2-tieu-de-ngay-phat-1663908206183474513814-crop-16639082132171187084960.png"
  const users = [
    { id: 1, name: "Name 1", image: avatars },
    { id: 2, name: "Name 2", image: avatars },
    { id: 3, name: "Name 3", image: avatars },
    { id: 4, name: "Name 4", image: avatars },
    { id: 5, name: "Name 5", image: avatars },
    { id: 6, name: "Name 6", image: avatars },
    { id: 7, name: "Name 7", image: avatars },
    { id: 8, name: "Name 8", image: avatars },
    { id: 9, name: "Name 9", image: avatars },
    { id: 10, name: "Name 10", image: avatars },
    { id: 11, name: "Name 11", image: avatars },
    { id: 12, name: "Name 12", image: avatars },
    { id: 13, name: "Name 13", image: avatars },
    { id: 14, name: "Name 14", image: avatars },
    { id: 15, name: "Name 15", image: avatars },
    { id: 16, name: "Name 16", image: avatars },
    { id: 17, name: "Name 17", image: avatars },
    { id: 18, name: "Name 18", image: avatars },
    { id: 19, name: "Name 19", image: avatars },
    { id: 20, name: "Name 20", image: avatars },
    { id: 21, name: "Name 21", image: avatars },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={({ item }) => <User name={item.name} img={item.image} id={item.id} />}
      />
    </View>
  );
};

export default ScreenProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerUser: {
    width: responsive.WIDTH / 3 - 25,
    height: (responsive.WIDTH / 3 - 25) * 1.5,
    margin: 10
  },
  viewText: {
    height: '20%',
    width: '100%',
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  img: {
    height: '80%',
    width: '100%',
  },

});

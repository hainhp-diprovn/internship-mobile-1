import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {avatars, img2, img3} from '../url';

const  BaiTap1 = () => {
  const data = [
    {
      title: 'Number 1',
      name: 'Devin',
      image: avatars,
    },
    {
      title: 'Number 2',
      name: 'Dan',
      image: img2,
    },
    {
      title: 'Number 3',
      name: 'Dominic',
      image: img3,
    },
    {
      title: 'Number 4',
      name: 'Jackson',
      image: avatars,
    },
    {
      title: 'Number 5',
      name: 'James',
      image: img3,
    },
    {
      title: 'Number 6',
      name: 'Joel',
      image: img2,
    },
    {
      title: 'Number 7',
      name: 'John',
      image: avatars,
    },
    {
      title: 'Number 8',
      name: 'Jillian',
      image: img2,
    },
    {
      title: 'Number 9',
      name: 'Jimmy',
      image: img3,
    },
    {
      title: 'Number 10',
      name: 'Julie',
      image: avatars,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.listItem}
                onPress={() => console.log(item.name)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default BaiTap1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  listItem: {
    padding: 10,
  },
  image: {
    height: 150,
    width: 100,
  },
  text: {
    backgroundColor: 'blue',
    fontSize: 20,
    textAlign: 'center',
    width: 100,
  },
});
const dataImage = [
  'avatar',
  'tt-1',
  'tt-3',
  'avatar',
  'tt-1',
  'tt-3',
  'avatar',
  'tt-1',
  'tt-3',
  'avatar',
];

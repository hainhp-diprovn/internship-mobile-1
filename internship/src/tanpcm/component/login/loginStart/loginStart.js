import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {img, shape} from '../../../url';

export default loginStart = () => {
  return (
    <View style={styles.container}>
      <Image source={shape} style={styles.imgHeader} />
      <Image source={img} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.text1}>Get things done with ToDo</Text>
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
        </Text>
      </View>
      <TouchableOpacity style={styles.loginStarButton}>
        <Text style={styles.textLoginStart}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    position: 'relative',
  },
  image: {
    alignSelf: 'center',
    marginTop: 150,
  },
  imgHeader: {
    position: 'absolute',
    top: 0,
    left: -10,
  },
  info: {
    padding: 60,
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginStarButton: {
    backgroundColor: '#FAA885',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 25,
    borderRadius: 15,
  },
  textLoginStart: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  text1: {
    fontWeight: '600',
    fontSize: 20,
  },
  text2: {
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: '#FAA885',
    marginRight: 25,
    marginLeft: 25,
  },
});

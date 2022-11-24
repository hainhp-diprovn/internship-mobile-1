import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';
import { avatars, img2, img3 } from './../../url';

const ViewBT1 = () => {
  return (
      <ScrollView>
        <Image  
          style={styles.image}
          source = {avatars}
        />
        <Text style={styles.text}>Phù Chí Minh Tân</Text>
        <Button
          style={styles.button}
          title='Next To Box'
          // onPress={() => navigation.push('BoxMain')}
        />
        <View style={styles.about}>
          <TextInput
            placeholder="Email address"
            style={styles.input}
          />
          <TextInput
            placeholder="Create password"
            style={styles.input}
          />
        </View>
        <Image  
          style={styles.listImg}
          source = {img2}
        />
        <Image
          style={styles.listImg}
          source = {img3}
      />
      <Image
          style={styles.listImg}
          source = {img2}
        />
      </ScrollView>
  );
};

const styles = StyleSheet.create({

  button: {
    borderWidth:1,
  },
  image: {
    borderRadius: 100,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  listImg : {
    paddingTop:10,
    width: 300,
    height: 400,
    alignSelf: "center",
  },
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    with: '100%',
  },
  text: {
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 30,
    paddingTop: 20,
  },
  about: {
    paddingTop: 20,
  },
});

export default ViewBT1;

import React from 'react';
import {StyleSheet,Image,Text, SafeAreaView} from 'react-native'
import { avatars } from '../url';

const BaiTap1 = () => {
    return (
          <SafeAreaView style={styles.container}>
              <Image source={avatars} style={styles.image} />
              <Text style={styles.text}>Name</Text>
          </SafeAreaView>
    )
}
export default BaiTap1

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 20,
      },
      image: {
        height: 150,
        width: 110,
      },
      text: {
        backgroundColor: "blue",
        fontSize: 20,
        textAlign: "center",
        width: 110,
        height:30
      },
})

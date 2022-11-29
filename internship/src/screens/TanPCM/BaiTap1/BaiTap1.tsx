import React from 'react';
import {StyleSheet,Image,Text, SafeAreaView, View} from 'react-native'
import { avatars } from '../url';

const BaiTap1 = () => {
    return (
          <SafeAreaView style={styles.container}>
            <View style={styles.avatar}>
              <Image source={avatars} style={styles.image} />
              <Text style={styles.text}>Name</Text>
            </View>
          </SafeAreaView>
    )
}
export default BaiTap1

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        margin: 20,
      },
      avatar: {
        height: 150,
        width: 110,
        
      },
      image: {
        width:"100%",
        height: 150, 
      },
      text: {
        backgroundColor: "blue",
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 10
      },
})

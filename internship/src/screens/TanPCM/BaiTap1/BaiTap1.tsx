import React from 'react';
import {StyleSheet,TouchableOpacity,Image,Text} from 'react-native'

const BaiTap1 = (props) => {
    return (
            <TouchableOpacity style={styles.listItem}
                onPress={() => alert(props.name)}>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.text}>{props.title}</Text>
          </TouchableOpacity>
    )
}
export default BaiTap1

const styles = StyleSheet.create({
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
})
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import FastImage from 'react-native-fast-image'
const User = (props) => {
    const [showName, setShowName] = useState(false)
    return (
        <View style={styles.container}>
            <FastImage
                onTouchStart={() => { setShowName(!showName) }}
                style={styles.img}
                source={{
                    uri: props.img != null ? props.img : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={styles.viewText}>
                {
                    showName &&
                    <Text style={styles.text}>{props.name != null ? props.name : "Anonymous"}</Text>
                }
            </View>
        </View>
    )
}
export default User

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 125,
        marginHorizontal: 5,
        marginVertical: 10,
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


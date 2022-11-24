import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
const CustomBTN = (props) => {
    return (
        <TouchableOpacity style={styles.viewBTN}>
            <Text style={styles.txt}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    viewBTN: {
        height: 60,
        width: '80%',
        borderRadius: 10,
        marginVertical: 25,
        backgroundColor: '#faa885',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default CustomBTN
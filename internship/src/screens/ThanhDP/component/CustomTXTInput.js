import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';
const CustomTXTInput = (props) => {
    return (
        <TextInput
            style={styles.txtInput}
            placeholderTextColor="#797979"
            placeholder={props.text}
        />
    )
}

const styles = StyleSheet.create({
    txtInput: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10
    },
});

export default CustomTXTInput
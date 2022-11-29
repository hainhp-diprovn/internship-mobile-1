import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image'
const AbsoluteView = (props) => {
    return (
        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'lightgreen' }}>
            <FastImage
                style={styles.imgHorizontal}
                source={require('../img/Ellipse_ngang.png')}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <FastImage
                style={styles.imgVertical}
                source={require('../img/Ellipse_doc.png')}
                resizeMode={FastImage.resizeMode.stretch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgVertical: {
        height: '50%',
        width: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    imgHorizontal: {
        height: '100%',
        width: '20%',
        position: 'absolute',
        top: 0,
        left: 0,
    }
});

export default AbsoluteView
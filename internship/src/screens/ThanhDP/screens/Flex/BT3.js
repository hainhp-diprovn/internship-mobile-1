import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import CustomBTN from '../../component/CustomBTN'
import FastImage from 'react-native-fast-image'
const BT3 = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 2,
                flexDirection: 'row',
            }}>
                <FastImage
                    style={{
                        height: '50%',
                        width: '60%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    source={require('../img/Ellipse_ngang.png')}
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <FastImage
                    style={{
                        height: '100%',
                        width: '20%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    source={require('../img/Ellipse_doc.png')}
                    resizeMode={FastImage.resizeMode.stretch}
                />

            </View>
            <View style={{ flex: 2, width: '100%' }} >
                <FastImage
                    style={{
                        height: '100%',
                        width: '50%',
                        alignSelf: 'center',
                        position: 'absolute',
                        top: -35,
                    }}
                    source={require('../img/logo_login.png')}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
            <View style={{ flex: 2, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginBottom: 30 }}>{'Get things done with ToDo'}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>{'Lorem ipsum dolor sit amet,'}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>{'consectetur adipiscing elit. Amet.'}</Text>
            </View>
            <View style={{ flex: 2, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <CustomBTN text={'Get Started'} />
            </View>
        </View >
    )
}

export default BT3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
});



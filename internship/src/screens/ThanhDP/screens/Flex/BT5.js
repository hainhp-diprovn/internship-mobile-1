import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomTXTInput from '../../component/CustomTXTInput'
import CustomBTN from '../../component/CustomBTN'
import FastImage from 'react-native-fast-image'

const BT5 = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topView}>
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
                    <View style={{ flex: 1 }} />
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>{'Welcome Back'}</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>{'Let’s help you meet your tasks'}</Text>
                    </View>
                </View>
                <View style={styles.middleView} >
                    <FastImage
                        style={{
                            height: '80%'
                        }}
                        source={require('../img/my_notifications.png')}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View style={styles.bottomView}>
                    <CustomTXTInput text={'Enter your Email'} />
                    <CustomTXTInput text={'Confirm your Password'} />
                    <TouchableOpacity>
                        <Text style={{ color: '#d08e71', fontWeight: 'bold', fontSize: 15 }} >{'Forgot Password'}</Text>
                    </TouchableOpacity>
                    <CustomBTN text={'Register'} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>{'Already have an account?'}</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#b05128', fontWeight: 'bold', fontSize: 15 }} >{' Sign Up'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}

export default BT5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    topView: {
        height: 150
    },
    middleView: {
        height: 300,
        width: '100%',
        justifyContent: 'center'
    },
    bottomView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});



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

const BT4 = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 200 }}>
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
                <View style={styles.viewText} >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginBottom: 20 }}>{'Welcome on board'}</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>{'Let’s help you meet your tasks'}</Text>
                </View>
                <View style={styles.bottomView} onLayout={(event) => {
                    // console.log("event", event.nativeEvent.layout.height);
                }}>
                    <CustomTXTInput text={'Enter your Full name'} />
                    <CustomTXTInput text={'Enter your Email'} />
                    <CustomTXTInput text={'Enter your Password'} />
                    <CustomTXTInput text={'Confirm your Password'} />
                    <CustomBTN text={'Register'} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>{'Already have an account?'}</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#b05128', fontWeight: 'bold', fontSize: 15 }} >{' Sign Up'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default BT4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    viewText: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50
    },
    bottomView: {
        marginTop: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});



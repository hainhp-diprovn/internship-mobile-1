import React , {useState,useRef}from 'react';
import {SafeAreaView, View , StyleSheet, Image,TouchableOpacity, Animated} from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { monkey } from '../url';

const BaiTap6 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgView}>
                <ReactNativeZoomableView
                    maxZoom = {2.0}
                    minZoom = {0.5}
                    zoomStep = {0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    captureEvent={true}
                    >
                    <Image
                    source={monkey}
                    style={styles.image}
                    />
                </ReactNativeZoomableView>
            </View>
        </SafeAreaView>
    )
}

export default BaiTap6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    imgView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 170,
        width: 150,

    },
})
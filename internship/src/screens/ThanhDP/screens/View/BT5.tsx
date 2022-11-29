import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Animated
} from 'react-native';
import { GestureHandlerStateChangeEvent, PinchGestureHandler } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image'

const windowWidth = Dimensions.get('window').width;
const maxSlider = 50
const widthSlider = windowWidth / maxSlider


const BT5 = () => {
    let scale = new Animated.Value(1)
    const onZoomEventFunction = Animated.event(
        [{
            nativeEvent: { scale }
        }],
        {
            useNativeDriver: true
        }
    )

    return (
        <View style={styles.container}>
            <PinchGestureHandler
                onGestureEvent={onZoomEventFunction}
            >
                <Animated.Image
                    style={styles.img}
                    source={{
                        uri: "https://media.gq.com/photos/62fd35143f91baeb482811d2/master/w_1600%2Cc_limit/GQ0922_Nike_59.jpg",
                    }}
                    resizeMode={"contain"}
                />
            </PinchGestureHandler>
        </View>
    );

}
export default BT5
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    slider: {
        width: '100%',
        height: 40,
        backgroundColor: 'pink'
    },
    img: {
        height: '100%',
        width: '100%',
    },

});

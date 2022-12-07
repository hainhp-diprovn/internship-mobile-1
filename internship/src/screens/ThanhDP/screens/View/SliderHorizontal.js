import { transform } from '@babel/core';
import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, TextInput } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedProps
} from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const paddingContainerSlider = 20
const lengthTrack = windowWidth - paddingContainerSlider * 2
const thumbHeight = 40
const thumbWidth = 50

const Slider = () => {

    const position = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = position.value;
        },
        onActive: (event, ctx) => {
            if (ctx.startX + event.translationX < 0) {
                position.value = 0
            }
            else if (ctx.startX + event.translationX > lengthTrack) {
                position.value = lengthTrack
            }
            else {
                position.value = ctx.startX + event.translationX;
            }
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }]
    }))

    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
        width: lengthTrack - position.value
    }))

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
    const percent = useAnimatedProps(() => {
        return {
            text: `${Number(position.value / lengthTrack).toFixed(1) * 100}%`
        }
    })


    return (

        <View style={styles.container}>
            <GestureHandlerRootView style={styles.containerSlider}>
                <View style={styles.trackFront} />
                <Animated.View style={[styles.trackBehind, sliderStyle]} />
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.thumb, animatedStyle]}>
                        <AnimatedTextInput
                            style={{ fontSize: 14, color: "black", width: 40, height: 40 }}
                            defaultValue="0"
                            animatedProps={percent}
                            textAlign="center"
                            editable={false}
                        />
                    </Animated.View>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    );

}
export default Slider
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    containerSlider: {
        width: "100%",
        height: 200,
        backgroundColor: "pink",
        justifyContent: 'center',
        paddingHorizontal: paddingContainerSlider
    },
    trackBehind: {
        width: lengthTrack,
        height: 3,
        backgroundColor: '#a5a5a5',
    },
    trackFront: {
        width: lengthTrack,
        height: 3,
        backgroundColor: 'red',
        position: "absolute",
        left: 8
    },
    thumb: {
        position: "absolute",
        left: 5,
        height: thumbHeight,
        width: thumbWidth,
        borderWidth: 3,
        borderColor: "red",
        borderRadius: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }

});

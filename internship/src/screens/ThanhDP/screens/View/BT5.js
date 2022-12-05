import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    useAnimatedProps,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { PanGestureHandler } from 'react-native-gesture-handler';

const RangeSlider = () => {
    const position = useSharedValue(0)
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = position.value
        },
        onActive: (e, ctx) => {
            if (ctx.startX + e.translationX < 0) {
                position.value = 0
            }
            else if (ctx.startX + e.translationX >= 300) {
                position.value = 300
            }
            else {
                position.value = ctx.startX + e.translationX
            }
            console.log(position.value)
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
    }))

    const sliderStyle = useAnimatedGestureHandler(() =>
    ({
        transform: [{ translateX: position.value }],
        width: position.value,
    }))

    const AnimatedText = Animated.createAnimatedComponent(Text)

    const valueLabel = useAnimatedProps(() => {
        return {
            text: Math.floor(position.value)
        }
    })

    return (
        <Animated.View style={[styles.currentSlider, sliderStyle]}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.thumb, animatedStyle]}>

                    <AnimatedText
                        animatedProps={valueLabel}
                        value={valueLabel}
                    />

                </Animated.View>
            </PanGestureHandler>
        </Animated.View>

    )
}

const BT5 = () => {

    return (
        <GestureHandlerRootView style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.containerSlider} />

            <RangeSlider />
        </GestureHandlerRootView>

    );

}
export default BT5
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 40,
        backgroundColor: 'green'
    },
    containerSlider: {
        width: 300,
        height: 8,
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        position: 'absolute',

    },
    currentSlider: {
        width: 300,
        height: 8,
        backgroundColor: 'pink',
        borderRadius: 20,
        justifyContent: 'center'
    },
    thumb: {
        height: 40,
        width: 40,
        borderWidth: 5,
        backgroundColor: 'red',
        borderColor: 'pink',
        borderRadius: 100,
        position: 'absolute',
        left: -10
    }

});

import { transform } from "@babel/core";
import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import { GestureHandlerRootView, PanGestureHandler, TextInput } from "react-native-gesture-handler"
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedProps
} from "react-native-reanimated";

const windowHeight = Dimensions.get("window").height;
const paddingContainerSlider = 40
const lengthTrack = windowHeight - paddingContainerSlider * 2
const widthTrack = 10
const thumbHeight = 40
const thumbWidth = 50

const SliderVertical = () => {

    const position = useSharedValue(lengthTrack)

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = position.value;
        },
        onActive: (event, ctx) => {
            if (ctx.startY + event.translationY < 0) {
                position.value = 0
            }
            else if (ctx.startY + event.translationY > lengthTrack) {
                position.value = lengthTrack
            }
            else {
                position.value = ctx.startY + event.translationY
            }
            console.log("length: " + Number(lengthTrack - position.value))
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: position.value }]
    }))

    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: 0 }],
        height: lengthTrack - position.value
    }))

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
    const percent = useAnimatedProps(() => {
        return {
            text: `${Number((lengthTrack - position.value) / lengthTrack).toFixed(1) * 100}%`
        }
    })


    return (

        <GestureHandlerRootView style={styles.containerSlider}>
            <View style={styles.trackFront} />
            <Animated.View style={[styles.trackBehind, sliderStyle]} />
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.thumb, animatedStyle]}>
                    <AnimatedTextInput
                        style={{ fontSize: 14, color: "black", width: thumbWidth, height: thumbHeight }}
                        defaultValue="0"
                        animatedProps={percent}
                        textAlign="center"
                        editable={false}
                    />
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>

    );

}
export default SliderVertical

const styles = StyleSheet.create({
    containerSlider: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    trackBehind: {
        width: widthTrack,
        backgroundColor: "red",
        position: "absolute",
        bottom: paddingContainerSlider,
    },
    trackFront: {
        width: widthTrack,
        height: lengthTrack,
        backgroundColor: "#a5a5a5",
    },
    thumb: {
        position: "absolute",
        top: 0,
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

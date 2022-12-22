import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
    GestureHandlerRootView,
    PanGestureHandler,
    TextInput,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedProps,
} from 'react-native-reanimated';

const windowHeight = Dimensions.get('window').height;
const paddingSlider = 80;
const length = windowHeight - paddingSlider * 2;

const BaiTap5 = () => {
    const position = useSharedValue(length);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx: any) => {
            ctx.startY = position.value;
        },
        onActive: (event, ctx) => {
            if (ctx.startY + event.translationY < 0) {
                position.value = 0;
            } else if (ctx.startY + event.translationY > length) {
                position.value = length;
            } else {
                position.value = ctx.startY + event.translationY;
            }
        },
    });

    const animated = useAnimatedStyle(() => ({
        transform: [{ translateY: position.value }],
    }));

    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: 0 }],
        height: length - position.value,
    }));

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
    
    const percent = useAnimatedProps(() => {
        const percentNumber = (((length - position.value) / length) * 100).toFixed()
        return {
            text: `${percentNumber}%`,
        };
    });

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.front} />
            <Animated.View style={[styles.behind, sliderStyle]} />
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.thumb, animated]}>
                    <AnimatedTextInput
                        style={styles.boxAnimated}
                        defaultValue="0"
                        animatedProps={percent}
                        editable={false}
                    />
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};
export default BaiTap5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    behind: {
        width: 10,
        backgroundColor: "#800000",
        position: "absolute",
        bottom: 80,
    },
    front: {
        width: 10,
        height: length,
        backgroundColor: "#dcdcdc",
    },
    thumb: {
        position: "absolute",
        top: 60,
        height: 40,
        width: 80,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    boxAnimated: {
        fontSize: 14,
        width: 80,
        height: 40,
        textAlign:"center"

    },
});

import React from 'react';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';
import { monkey } from '../url';
import {
    LongPressGestureHandler,
    PinchGestureHandler,
    RotationGestureHandler,
    State,
} from 'react-native-gesture-handler';

const BaiTap6 = () => {
    let scale = new Animated.Value(1);
    const rotate = new Animated.Value(0);
    let lastRotate = 0;

    const rotateStr = rotate.interpolate({
        inputRange: [-100, 100],
        outputRange: ['-100rad', '100rad'],
    });
    const onRotateGestureEvent = Animated.event(
        [{ nativeEvent: { rotation: rotate } }],
        { useNativeDriver: true },
    );
    const onGestureEvent = Animated.event(
        [{ nativeEvent: { scale: scale } }],
        { useNativeDriver: true }
    );

    const onPinchHandlerStateChange = event => {
        if (event.state === State.ACTIVE) {
            scale.setValue(1);
            rotate.setValue(0);
        }
    };
    const onRotateHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            lastRotate += event.nativeEvent.rotation;
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <LongPressGestureHandler
                onHandlerStateChange={({ nativeEvent }) => {
                    if (nativeEvent.state === State.ACTIVE) {
                        onPinchHandlerStateChange(nativeEvent)
                    }
                }}
                minDurationMs={2000}>
                <Animated.View style={styles.flex1}>
                    <RotationGestureHandler
                        onGestureEvent={onRotateGestureEvent}
                        onHandlerStateChange={onRotateHandlerStateChange}>
                        <Animated.View style={styles.flex1}>
                            <PinchGestureHandler
                                onGestureEvent={onGestureEvent}
                                onHandlerStateChange={onPinchHandlerStateChange}>
                                <Animated.View style={styles.imgView}>
                                    <Animated.Image
                                        style={[
                                            styles.image,
                                            {
                                                transform: 
                                                [{ scale: scale }, 
                                                { rotate: rotateStr }],
                                            },
                                        ]}
                                        resizeMode="contain"
                                        source={monkey}
                                    />
                                </Animated.View>
                            </PinchGestureHandler>
                        </Animated.View>
                    </RotationGestureHandler>
                </Animated.View>
            </LongPressGestureHandler>
        </SafeAreaView>
    );
};
export default BaiTap6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flex1:{
        flex: 1,
    },
    imgView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 170,
        width: 150,
    },
});

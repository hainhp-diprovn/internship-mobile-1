import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Image,
    Button,
} from 'react-native';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';


const BT7 = () => {
    const doubleTapRef = useRef(null);
    const [numberOfTap, setNumberOfTap] = useState(0)
    const fadeAnim = useRef(new Animated.Value(0)).current;

    let startFadeOut = setTimeout(() => {
        fadeOut()
    }, 5000);

    const fadeIn = () => {
        clearTimeout(startFadeOut)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start(() => {
            startFadeOut
        });
    };
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.viewAnimated, { opacity: fadeAnim }]}>
                <Text style={styles.txt}>
                    {numberOfTap == 1 ? "Tôi là giày" : (numberOfTap == 2 ? "Giày là tôi" : "")}
                </Text>
            </Animated.View>
            <GestureHandlerRootView style={styles.gestureView}>
                <TapGestureHandler
                    numberOfTaps={1}
                    waitFor={doubleTapRef}
                    onActivated={() => {
                        fadeIn()
                        setNumberOfTap(1)
                    }}>
                    <TapGestureHandler
                        ref={doubleTapRef}
                        numberOfTaps={2}
                        onActivated={() => {
                            fadeIn()
                            setNumberOfTap(2)
                        }}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: "https://media.gq.com/photos/62fd35143f91baeb482811d2/master/w_1600%2Cc_limit/GQ0922_Nike_59.jpg",
                            }}
                            resizeMode={"contain"}
                        />
                    </TapGestureHandler>
                </TapGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
}
export default BT7

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
    viewAnimated: {
        height: 80,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "lightblue",
        position: "absolute",
        top: 100,
        left: 10,
    },
    txt: {
        fontWeight: "bold",
        fontSize: 16
    },
    gestureView: {
        height: 300,
        width: '100%',
    }

});

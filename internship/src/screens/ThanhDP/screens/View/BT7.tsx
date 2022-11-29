import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Image,
    Button
} from 'react-native';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';




const BT7 = () => {
    const doubleTapRef = useRef(null);
    const [showNotify, setShowNotify] = useState(false)
    const [numberOfTap, setNumberOfTap] = useState(0)
    const animatedValue = useRef(new Animated.Value(10))

    useEffect(() => {
        moveView()
        setTimeout(() => {
            setShowNotify(false)
            animatedValue.current = new Animated.Value(10)
        }, 5000);
        console.log(animatedValue.current)
    }, [showNotify])

    const moveView = () => {
        Animated.timing(
            animatedValue.current,
            {
                toValue: 300,
                duration: 5000,
                useNativeDriver: false,
            }
        ).start()
    }
    return (

        <View style={styles.container}>
            {
                showNotify &&

                <Animated.View style={{
                    height: 80,
                    width: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    backgroundColor: "lightblue",
                    position: "absolute",
                    top: 100,
                    left: animatedValue.current
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {
                            numberOfTap == 1 ? "Tôi là giày" : (numberOfTap == 2 ? "Giày là tôi" : "")
                        }
                    </Text>
                </Animated.View>


            }
            <GestureHandlerRootView style={{ height: 300, width: '100%' }}>
                <TapGestureHandler
                    numberOfTaps={1}
                    waitFor={doubleTapRef}
                    onActivated={() => {
                        setNumberOfTap(1)
                        setShowNotify(true)
                    }}>
                    <TapGestureHandler
                        ref={doubleTapRef}
                        numberOfTaps={2}
                        onActivated={() => {
                            setNumberOfTap(2)
                            setShowNotify(true)
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

            <Button
                title="Click"
                onPress={() => {
                    setShowNotify(true)
                    moveView()
                }}
            />
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

});

import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { monkey } from '../url';

const BaiTap7 = () => {

    const doubleTapRef = useRef(null);
    const [notification, setNotification] = useState<boolean>(false)
    const [numberOfTap, setNumberOfTap] = useState<number>(0);
    const [numberTimeOut, setNumberTimeOut] = useState<number>(0)

    useEffect(() => {
        const clearTime = setTimeout(() => {
            setNotification(false)
        }, numberTimeOut);
        return () => {
            clearTimeout(clearTime)
        }
    }, [notification, numberTimeOut])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notification}>
                {
                    notification &&
                    <TouchableOpacity style={styles.viewMessage}
                        onPress={() => {
                            setNotification(true)
                        }}>
                        <Text style={styles.textMessage}>
                            {
                                numberOfTap === 1 ? " Tôi là khỉ " : (numberOfTap === 2 ? " Khỉ là tôi " : "")
                            }
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            <GestureHandlerRootView
                style={styles.tap}>
                <TapGestureHandler
                    numberOfTaps={1}
                    waitFor={doubleTapRef}
                    onActivated={() => {
                        setNumberOfTap(1)
                        setNotification(true)
                        setNumberTimeOut(5000)
                    }}>
                    <TapGestureHandler
                        ref={doubleTapRef}
                        numberOfTaps={2}
                        onActivated={() => {
                            setNumberOfTap(2)
                            setNotification(true)
                            setNumberTimeOut(5000)
                        }}>
                        <Image
                            style={styles.image}
                            source={monkey}
                        />
                    </TapGestureHandler>
                </TapGestureHandler>
            </GestureHandlerRootView>
        </SafeAreaView>

    );

}
export default BaiTap7

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    notification: {
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
    },
    image: {
        alignSelf: "center",
        height: 230,
        width: 200,
    },
    viewMessage: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00bfff",
        height: 130,
        width: 220,
        borderRadius: 30,
    },
    textMessage: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
    },
    tap: {
        alignItems: "center",
        flex: 2,
        paddingTop: 20,
    }
});

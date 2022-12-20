import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';

const boxHeight = 100

const BaiTap10 = () => {

    const [selected, setSelected] = useState<number>(NaN)
    const prevSelected = useRef<number>(selected)

    const zoomAnimated = useRef(new Animated.Value(boxHeight)).current;
    const Zoom = () => {
        Animated.timing(zoomAnimated, {
            toValue: boxHeight * 2,
            duration: 500,
            useNativeDriver: false
        }).start();
    };
    const zoomOut = () => {
        Animated.timing(zoomAnimated, {
            toValue: boxHeight,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    const zoomAnimated1 = useRef(new Animated.Value(boxHeight)).current;
    const Zoom1 = () => {
        Animated.timing(zoomAnimated1, {
            toValue: boxHeight * 2,
            duration: 500,
            useNativeDriver: false
        }).start();
    };
    const zoomOut1 = () => {
        Animated.timing(zoomAnimated1, {
            toValue: boxHeight,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    const zoomAnimated2 = useRef(new Animated.Value(boxHeight)).current;
    const Zoom2 = () => {
        Animated.timing(zoomAnimated2, {
            toValue: boxHeight * 2,
            duration: 500,
            useNativeDriver: false
        }).start();
    };
    const zoomOut2 = () => {
        Animated.timing(zoomAnimated2, {
            toValue: boxHeight,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    const zoomAnimated3 = useRef(new Animated.Value(boxHeight)).current;
    const Zoom3 = () => {
        Animated.timing(zoomAnimated3, {
            toValue: boxHeight * 2,
            duration: 500,
            useNativeDriver: false
        }).start();
    };
    const zoomOut3 = () => {
        Animated.timing(zoomAnimated3, {
            toValue: boxHeight,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    const autoZoom = (indexCurrent: number, indexPrev: number) => {
        if (indexCurrent != indexPrev) {
            switch (indexCurrent) {
                case 0:
                    Zoom()
                    break;
                case 1:
                    Zoom1()
                    break;
                case 2:
                    Zoom2()
                    break;
                case 3:
                    Zoom3()
                    break;
            }

            switch (indexPrev) {
                case 0:
                    zoomOut()
                    break;
                case 1:
                    zoomOut1()
                    break;
                case 2:
                    zoomOut2()
                    break;
                case 3:
                    zoomOut3()
                    break;
            }
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setSelected(0)
                    prevSelected.current = selected
                    autoZoom(0, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.box, { backgroundColor: "#228b22", width: zoomAnimated }]} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setSelected(1)
                    prevSelected.current = selected
                    autoZoom(1, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.box, { backgroundColor: "#8a2be2", width: zoomAnimated1 }]} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setSelected(2)
                    prevSelected.current = selected
                    autoZoom(2, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.box, { backgroundColor: "#ffe4c4", width: zoomAnimated2 }]} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setSelected(3)
                    prevSelected.current = selected
                    autoZoom(3, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.box, { backgroundColor: "#d2691e", width: zoomAnimated3 }]} />
            </TouchableOpacity>
        </View>
    )
}

export default BaiTap10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    box: {
        width: boxHeight,
        aspectRatio:1/1
    }
});


import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Button
} from 'react-native';

const squareHeight = 80

const BT10 = () => {

    const [selected, setSelected] = useState<number>(NaN)
    const prevSelected = useRef<number>(selected)

    const zoomAnimated = useRef(new Animated.Value(squareHeight)).current;
    const zoomTo = () => {
        Animated.timing(zoomAnimated, {
            toValue: squareHeight * 2,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };
    const zoomNho = () => {
        Animated.timing(zoomAnimated, {
            toValue: squareHeight,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

    const zoomAnimated1 = useRef(new Animated.Value(squareHeight)).current;
    const zoomTo1 = () => {
        Animated.timing(zoomAnimated1, {
            toValue: squareHeight * 2,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };
    const zoomNho1 = () => {
        Animated.timing(zoomAnimated1, {
            toValue: squareHeight,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

    const zoomAnimated2 = useRef(new Animated.Value(squareHeight)).current;
    const zoomTo2 = () => {
        Animated.timing(zoomAnimated2, {
            toValue: squareHeight * 2,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };
    const zoomNho2 = () => {
        Animated.timing(zoomAnimated2, {
            toValue: squareHeight,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

    const zoomAnimated3 = useRef(new Animated.Value(squareHeight)).current;
    const zoomTo3 = () => {
        Animated.timing(zoomAnimated3, {
            toValue: squareHeight * 2,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };
    const zoomNho3 = () => {
        Animated.timing(zoomAnimated3, {
            toValue: squareHeight,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

    const autoZoom = (indexCurrentChoose: number, indexPrevChoose: number) => {
        if (indexCurrentChoose != indexPrevChoose) {
            console.log("indexCurrentChoose: " + indexCurrentChoose)
            console.log("indexPrevChoose: " + indexPrevChoose)
            switch (indexCurrentChoose) {
                case 0:
                    zoomTo()
                    break;
                case 1:
                    zoomTo1()
                    break;
                case 2:
                    zoomTo2()
                    break;
                case 3:
                    zoomTo3()
                    break;
            }

            switch (indexPrevChoose) {
                case 0:
                    zoomNho()
                    break;
                case 1:
                    zoomNho1()
                    break;
                case 2:
                    zoomNho2()
                    break;
                case 3:
                    zoomNho3()
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
                <Animated.View style={[styles.square, { backgroundColor: "pink", width: zoomAnimated, height: zoomAnimated }]} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setSelected(1)
                    prevSelected.current = selected
                    autoZoom(1, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.square, { backgroundColor: "red", width: zoomAnimated1, height: zoomAnimated1 }]} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setSelected(2)
                    prevSelected.current = selected
                    autoZoom(2, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.square, { backgroundColor: "lightblue", width: zoomAnimated2, height: zoomAnimated2 }]} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setSelected(3)
                    prevSelected.current = selected
                    autoZoom(3, prevSelected.current)
                }}
            >
                <Animated.View style={[styles.square, { backgroundColor: "green", width: zoomAnimated3, height: zoomAnimated3 }]} />
            </TouchableOpacity>
        </View>
    )
}

export default BT10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: 'column',
    },
    square: {
        width: squareHeight,
        height: squareHeight
    }
});


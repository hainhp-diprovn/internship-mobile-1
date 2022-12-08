import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';

const BaiTap3pp = () => {

    const [orientation, setOrientation] = useState("PORTRAIT");
    const DESIGN_SCREEN_WIDTH = Dimensions.get('window').width;

    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }
        })
    }, [orientation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH  - 30 * 3) / 2}]} />
            <View style={styles.view} />
            <View style={[styles.box, 
                { width: (DESIGN_SCREEN_WIDTH - 30 * 3) / 2 }]} />
            <View style={styles.view} />
        </SafeAreaView>
    )
}

export default BaiTap3pp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    view: {
        backgroundColor: "white",
        width: 30
    },
    box: {
        backgroundColor: '#1e90ff',
        aspectRatio:1/1,
    }
});
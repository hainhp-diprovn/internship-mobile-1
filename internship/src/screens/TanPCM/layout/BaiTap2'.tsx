import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';

const BaiTap2p = () => {
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const hcnHeight = windowHeight - 100
    const hcnWidth = windowWidth - 100

    const [orientation, setOrientation] = useState("PORTRAIT");

    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")

            }
        })

    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.imgView, { height: hcnHeight, width: hcnWidth }]}></View>
        </SafeAreaView>
    )
}

export default BaiTap2p

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imgView: {
        backgroundColor: "#6495ed",
    }
})
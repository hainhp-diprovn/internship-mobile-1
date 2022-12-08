import React, {useState, useEffect} from 'react';
import { SafeAreaView, View , StyleSheet, Dimensions} from 'react-native';

const BaiTap1p = () => {

    const sizeBox = 200

    function designSize(size: number) {
        const DESIGN_SCREEN_WIDTH = 375
        const DEVICE_SCREEN_WIDTH = Dimensions.get("window").width
        const widthPercent = DEVICE_SCREEN_WIDTH / DESIGN_SCREEN_WIDTH
        const result = size * widthPercent

        return Number(result.toFixed(1))
    }

    const [orientation, setOrientation] = useState("PORTRAIT");

    useEffect(() => {
        Dimensions.addEventListener("change", ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }
        })
    }, [orientation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.imgView, {width : designSize(sizeBox)}]}></View>
        </SafeAreaView>
    )
}

export default BaiTap1p

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    imgView: {
        aspectRatio:1/1,
        backgroundColor:"#6495ed"
    }
})
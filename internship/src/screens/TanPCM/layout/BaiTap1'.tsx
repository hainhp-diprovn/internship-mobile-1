import React from 'react';
import { SafeAreaView, View , StyleSheet} from 'react-native';

const BaiTap1p = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgView}></View>
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
        paddingTop:"70%",
        aspectRatio:1/1,
        backgroundColor:"#6495ed"
    }
})
import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { iconLeft } from '../../../url';
import { useNavigation } from '@react-navigation/native';
import {screenName} from '../../../../../navigators/screens-name'


const ScreenE = () => {
    const navi = useNavigation<any>()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity 
                style={styles.flex1}
                onPress={() => {
                    navi.goBack()
                }}>
                    <Image source={iconLeft} />
                </TouchableOpacity>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Screen E</Text>
                </View>
                <View style={styles.flex1} />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.mrVertical}
                    onPress={() => {
                        navi.navigate(screenName.ScreenC_PCMT)
                    }}>
                    <Text style={styles.button}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mrVertical}
                    onPress={() => {
                        navi.navigate(screenName.ScreenB_PCMT)
                    }}>
                    <Text style={styles.button}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mrVertical}
                    onPress={() => {
                        navi.navigate(screenName.ScreenD_PCMT)
                    }}>
                    <Text style={styles.button}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mrVertical}
                    onPress={() => {
                        navi.popToTop()
                    }}>
                    <Text style={styles.button}>Root</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ScreenE

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex1: {
        flex: 1
    },
    mrVertical: {
        marginVertical: 20
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    viewTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    viewButton: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: "#1e90ff",
        color: "white",
        borderWidth: 1,
        borderColor: "blue",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center"
    }
})
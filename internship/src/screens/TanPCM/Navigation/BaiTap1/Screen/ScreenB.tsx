import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../../navigators/screens-name'
import { iconLeft } from '../../../url'

const ScreenB = () => {
    const navi = useNavigation<any>();

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
                    <Text style={styles.title}>Screen B</Text>
                </View>
                <View style={styles.flex1} />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.mrVertical}
                    onPress={() => {
                        navi.navigate(screenName.ScreenC_PCMT)
                    }}>
                    <Text style={styles.button}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mrVertical}
                    onPress={() => {
                        navi.goBack()
                    }}>
                    <Text style={styles.button}>Pre</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ScreenB

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
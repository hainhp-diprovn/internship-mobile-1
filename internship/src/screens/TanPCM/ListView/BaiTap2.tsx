import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import { responsive } from '../../../ultils/reponsive';

const BT2 = () => {

    const data: number[] = [50, 60, 80, 30, 150, 120, 100, 90, 80, 60, 80, 100, 120, 150, 100, 150, 200, 100, 100]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.box, { height: item }]}>
                                <Text style={styles.txt}>{index + 1}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    )
}
export default BT2

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        flexWrap: "wrap",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
        fontSize: 25,
        fontWeight: "600",
        color: "black"
    },
    box: {
        width: responsive.WIDTH / 3 - 5 * 3,
        backgroundColor: "#8fbc8f",
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1
    },

})
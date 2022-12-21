import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { responsive } from '../../../../ultils/reponsive'

const marHorizon = 6

const BT2 = () => {

    const arr_square = [200, 150, 120, 100, 80, 60, 60, 80, 100, 120, 150, 200, 250, 250]

    return (
        <View style={styles.container}>
            {
                arr_square.map((item, index) => {
                    return (
                        <View key={index} style={[styles.square, { height: item }]}>
                            <Text style={styles.txt}>{index + 1}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}
export default BT2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    txt: {
        fontSize: 25,
        fontWeight: "600",
        color: "black"
    },
    square: {
        width: responsive.WIDTH / 3 - marHorizon * 3,
        backgroundColor: "pink",
        margin: marHorizon,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1
    },

})
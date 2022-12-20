import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { responsive } from '../../../../ultils/reponsive'

const marHorizon = 3

const BT1 = () => {

    const arr_square = Array(100).fill(0)

    return (
        <View style={styles.container}>
            <FlatList
                data={arr_square}
                showsVerticalScrollIndicator={false}
                numColumns={5}
                renderItem={({ item, index }) =>
                    <View key={index} style={styles.square}>
                        <Text style={styles.txt}>{index + 1}</Text>
                    </View>}
            />
        </View>
    )
}
export default BT1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    txt: {
        fontSize: 25,
        fontWeight: "600",
        color: "black"
    },
    square: {
        width: responsive.WIDTH / 5 - marHorizon * 5,
        height: responsive.WIDTH / 5 - marHorizon * 5,
        backgroundColor: "pink",
        margin: 5,
        alignItems: "center",
        justifyContent: "center"
    },

})
import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

const BTso11 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.itemInTopContainer} />
                <View style={[styles.itemInTopContainer, { backgroundColor: "blue" }]} />
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.itemInMiddleContainer} />
                <View style={styles.itemInMiddleContainer} />
                <View style={styles.itemInMiddleContainer} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.itemLeftInBottomContainer} />
                <View style={styles.rightBottomContainer}>
                    <View style={styles.itemInRightBottomContainer} />
                    <View style={styles.itemInRightBottomContainer} />
                    <View style={styles.itemInRightBottomContainer} />
                    <View style={styles.itemInRightBottomContainer} />
                    <View style={styles.itemInRightBottomContainer} />
                    <View style={styles.itemInRightBottomContainer} />
                    <View style={styles.itemInRightBottomContainer} />
                </View>
            </View>
        </View>
    )
}

export default BTso11

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topContainer: {
        flex: 2,
        flexDirection: "row",
        paddingVertical: 3
    },
    itemInTopContainer: {
        flex: 1,
        backgroundColor: "green",
        marginHorizontal: 3
    },
    middleContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 3
    },
    itemInMiddleContainer: {
        flex: 1,
        backgroundColor: "red",
        marginHorizontal: 3
    },
    bottomContainer: {
        flex: 7,
        flexDirection: "row",
        paddingVertical: 3,
        paddingBottom: 6
    },
    itemLeftInBottomContainer: {
        flex: 1,
        backgroundColor: "orange",
        marginHorizontal: 3
    },
    rightBottomContainer: {
        flex: 1.5,
        marginHorizontal: 3
    },
    itemInRightBottomContainer: {
        flex: 1,
        backgroundColor: "lightblue",
        marginBottom: 5
    }
});


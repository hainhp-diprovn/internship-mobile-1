import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

const BT8 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topLeftView} />
                <View style={styles.topRightView} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomView} />
            </View>
        </View>
    )
}

export default BT8

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    topContainer: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 20
    },
    topRightView: {
        flex: 1,
        backgroundColor: "red",
        marginLeft: 10
    },
    topLeftView: {
        flex: 1,
        backgroundColor: "green",
        marginRight: 10
    },
    bottomView: {
        flex: 1,
        backgroundColor: "orange",
    },
    bottomContainer: {
        flex: 1,
    }
});


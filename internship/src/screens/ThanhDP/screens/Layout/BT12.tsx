import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const BT12 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.txtInput}>0005</Text>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.rowItem}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txtBTN}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.txtBTN, { fontSize: 40 }]}>+/_</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txtBTN}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "orange" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowItem}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "orange" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowItem}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "orange" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowItem}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "orange" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowItem}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333", flexGrow: 0.6, alignItems: "flex-start", paddingLeft: 30 }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#333333" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "orange" }]}>
                        <Text style={[styles.txtBTN, { color: "white" }]}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BT12

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "black",
    },
    btn: {
        backgroundColor: "#a5a5a5",
        height: 80,
        width: 80,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    txtBTN: {
        fontSize: 45,
        fontWeight: "600",
        color: "black"
    },
    rowItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    topView: {
        flex: 3,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    bottomView: {
        flex: 5,
        flexDirection: "column"
    },
    txtInput: {
        fontSize: 120,
        fontWeight: "200",
        color: "white"
    }
});


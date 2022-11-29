import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';


const BT2 = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "white", flex: 2 }}>
                <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: "pink", flex: 1 }}>
                        <View style={{ backgroundColor: "white", flex: 3, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: "white", flex: 1 }}>
                                <View style={{ backgroundColor: "#a2a2a2", flex: 1 }} />
                                <View style={{ backgroundColor: "#ff9c30", flex: 1 }} />
                                <View style={{ backgroundColor: "#6a8995", flex: 1 }} />
                            </View>
                            <View style={{ backgroundColor: "#00aff1", flex: 2 }} />
                        </View>
                        <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: "#e94f71", flex: 1 }} />
                            <View style={{ backgroundColor: "#65a95e", flex: 1 }} />
                            <View style={{ backgroundColor: "#ffde58", flex: 1 }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", flex: 1 }} />
                </View>
                <View style={{ backgroundColor: "black", flex: 1 }} />
                <View style={{ backgroundColor: "#ffde58", flex: 1 }} />
                <View style={{ backgroundColor: "white", flex: 1 }} />
            </View>
            <View style={{ backgroundColor: "#e94f71", flex: 1 }} />
        </View>
    )
}

export default BT2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
});



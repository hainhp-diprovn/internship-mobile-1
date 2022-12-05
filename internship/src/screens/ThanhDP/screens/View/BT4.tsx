import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import Slider from '@react-native-community/slider';

const BT4 = () => {
    const [red, setRed] = useState<Number>(0)
    const [blue, setBlue] = useState<Number>(0)
    const [green, setGreen] = useState<Number>(0)

    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{"Color(R: " + red + ", G: " + green + ", B: " + blue + ")"}</Text>
            <View style={[styles.viewShowColor, { backgroundColor: "rgb(" + red + "," + green + "," + blue + ")" }]} />
            <View style={styles.viewColor}>
                <Text style={[styles.txtColor, { color: 'red' }]}>RED</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={255}
                    thumbTintColor="red"
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="gray"
                    step={1}
                    onValueChange={(value) => {
                        setRed(value)
                    }}
                />
            </View>
            <View style={styles.viewColor}>
                <Text style={[styles.txtColor, { color: 'green' }]}>GREEN</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={255}
                    thumbTintColor="green"
                    minimumTrackTintColor="green"
                    maximumTrackTintColor="gray"
                    step={1}
                    onValueChange={(value) => {
                        setGreen(value)
                    }}
                />
            </View>
            <View style={styles.viewColor}>
                <Text style={[styles.txtColor, { color: 'blue' }]}>BLUE</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={255}
                    thumbTintColor="blue"
                    minimumTrackTintColor="blue"
                    maximumTrackTintColor="gray"
                    step={1}
                    onValueChange={(value) => {
                        setBlue(value)
                    }}
                />
            </View>
        </View>
    );

}
export default BT4
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    txtColor: {
        fontSize: 16,
        fontWeight: "bold",
    },
    viewColor: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    viewShowColor: {
        height: 400,
        borderRadius: 50,
        width: '80%',
        marginVertical: 30
    },
    txtTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black"
    },
    slider: {
        width: "85%",
        height: 40
    }
});

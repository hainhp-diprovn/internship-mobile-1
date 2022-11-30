import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';

const BaiTap4 = () => {
  const [redColor, setRedColor] = useState<number>(0);
  const [greenColor, setGreenColor] = useState<number>(0);
  const [blueColor, setBlueColor] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textIndex}>Color ( R: {redColor}, G: {greenColor}, B: {blueColor} )</Text>
      <View style={[styles.boxColor, { backgroundColor: `rgb(${redColor},${greenColor},${blueColor})` }]} />
      <View style={styles.line}>
        <Text style={styles.nameColor}>Red</Text>
        <View>
          <View style={styles.number}>
            <Text>0</Text>
            <Text>255</Text>
          </View>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor="#105ecc"
            maximumTrackTintColor="#507fcc"
            step={1}
            value={redColor}
            thumbTintColor="#00bfff"
            onValueChange={(redColor) => setRedColor(redColor)}
          />
        </View>

      </View>
      <View style={styles.line}>
        <Text style={styles.nameColor}>Green</Text>
        <View>
          <View style={styles.number}>
            <Text>0</Text>
            <Text>255</Text>
          </View>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor="#105ecc"
            maximumTrackTintColor="#507fcc"
            step={1}
            value={greenColor}
            thumbTintColor="#00bfff"
            onValueChange={(greenColor) => setGreenColor(greenColor)}
          />
        </View>
      </View>
      <View style={styles.line}>
        <Text style={styles.nameColor}>Blue</Text>
        <View>
          <View style={styles.number}>
            <Text>0</Text>
            <Text>255</Text>
          </View>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor="#105ecc"
            maximumTrackTintColor="#507fcc"
            step={1}
            value={blueColor}
            thumbTintColor="#00bfff"
            onValueChange={(blueColor) => setBlueColor(blueColor)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BaiTap4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  number: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  nameColor: {
    fontWeight: "600"
  },
  textIndex: {
    textAlign: "center",
    padding: 20,
    fontSize: 18,
    fontWeight: "bold"
  },
  boxColor: {
    alignSelf: "center",
    height: 400,
    width: "80%",
    borderRadius: 30,
    marginBottom: 30
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});

import React from "react";
import { StyleSheet, Text, View, SectionList, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { responsive } from '../../../../ultils/reponsive'
const arr_square = Array(15).fill(0)

const DATA = [
    {
        title: "Main dishes",
        data: arr_square
    },
    {
        title: "Sides",
        data: arr_square
    },
    {
        title: "Drinks",
        data: arr_square
    },
    {
        title: "Desserts",
        data: arr_square
    }
];


const BT3 = () => (
    <View style={styles.container}>
        <SectionList
            showsVerticalScrollIndicator={false}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) =>
                <></>
            }
            renderSectionHeader={({ section }) => (
                <>
                    <Text style={styles.header}>{section.title}</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {
                            section.data.map((item, index) => {
                                return (
                                    <View key={index} style={{ width: 40, height: 40, backgroundColor: "blue", margin: 10, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.title}>{index + 1}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    {/* <FlatList
                            data={section.data}
                            showsVerticalScrollIndicator={false}
                            numColumns={6}
                            renderItem={({ item, index }) =>
                                <View style={{ width: 40, height: 40, backgroundColor: "blue", margin: 10, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={styles.title}>{index + 1}</Text>
                                </View>
                            }
                        /> */}
                </>
            )}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        margin: 8,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24,
        color: "white"
    }
});

export default BT3;
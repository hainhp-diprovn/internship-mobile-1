import React, { useState } from "react";
import { StyleSheet, Text, View, SectionList, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const arr_square = ["red", "blue", "pink", "orange", "black", "yellow", "gray", "brown", "purple",
    "#CEF09A", "#A2BDFA", "#AD6AFA", "#D590E0", "#F0E2CE", "#0AFAB5"]

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


const BT4 = () => {

    const [currentData, setCurrentData] = useState<number>(0)

    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{currentData + 1 + "/" + arr_square.length}</Text>
            <View style={styles.containerViewItem}>
                <TouchableOpacity
                    onPress={() => {
                        (currentData == 0) ? setCurrentData(arr_square.length - 1) : setCurrentData(currentData - 1)
                    }}
                >
                    <Icon
                        name="left"
                        size={50}
                        color="blue"
                    />
                </TouchableOpacity>
                <View style={[styles.img, { backgroundColor: arr_square[currentData] }]} />
                <TouchableOpacity
                    onPress={() => {
                        (currentData == arr_square.length - 1) ? setCurrentData(0) : setCurrentData(currentData + 1)
                    }}
                >
                    <Icon
                        name="right"
                        size={50}
                        color="blue"
                    />
                </TouchableOpacity>
            </View>
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
                        {/* <View style={{ flexDirection: "row" }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    section.data.map((item, index) => {
                                        return (

                                            <View key={index} style={{ width: 40, height: 40, backgroundColor: item, margin: 10, alignItems: "center", justifyContent: "center" }}>
                                                <Text style={styles.title}>{index + 1}</Text>
                                            </View>

                                        )
                                    })
                                }
                            </ScrollView>
                        </View> */}
                        <FlatList
                            data={section.data}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            renderItem={({ item, index }) =>
                                <View style={{ width: 40, height: 40, backgroundColor: item, margin: 10, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={styles.title}>{index + 1}</Text>
                                </View>
                            }
                        />
                    </>
                )}
            />
        </View>
    )
};

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
    },
    containerViewItem: {
        height: "40%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        height: '100%',
        width: '80%',
    },
    txtTitle: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        color: "black",
        marginVertical: 5
    },
});

export default BT4;
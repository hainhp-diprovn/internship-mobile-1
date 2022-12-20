import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { avatars } from '../url';
const BaiTap14Layout = () => {
    
    const DESIGN_SCREEN_WIDTH = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={[{ height: 150, flexDirection: "row" }]}>
                    <Image source={avatars} style={styles.avatarImg} />
                    <View style={{ flex: 3 }}>
                        <View style={styles.viewText}>
                            <Text style={{ fontSize: 20 }}>Name</Text>
                        </View>
                        <View style={styles.viewText}>
                            <Text style={{ fontSize: 20 }}>1/1/1990</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginHorizontal: 20 }}>
                    <Text style={{ paddingVertical: 20 }}>
                        {"Chó Husky là giống chó rất ưa thích vận động do tổ tiên của chúng sống ở một trong những nơi lạnh giá nhất là Siberia," +
                            "ở đây chó Husky nguyên thủy được phối giống bởi người Chukchi ở Đông Bắc Á" +
                            "nhằm mục đích kéo xe hàng trên một quãng đường dài trong điều kiện lạnh giá khắc nghiệt." +
                            "Giống chó này được đưa tới Alaska trong thời kì khai thác vàng ở Nome rồi sau đó trở nên phổ biến ở Hoa Kỳ và Canada" +
                            " Ban đầu Husky được nuôi để làm chó kéo xe nhưng về sau chúng trở thành thú nuôi làm cảnh trong gia đình."}</Text>
                    <View style={styles.viewImg}>
                        <Text style={{ fontSize: 20 }}>Image</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={{ backgroundColor: "#228b22", borderWidth: 1, borderColor: "green" }}>
                            <Text style={styles.textButton}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#ff8c00", borderWidth: 1, borderColor: "#ff4500" }}>
                            <Text style={styles.textButton}>Report</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginVertical: 10, justifyContent: "space-between" }}>
                    <Text style={{ marginHorizontal: 20, textDecorationLine: "underline", fontWeight: "bold" }}>Photos</Text>
                    <View style={styles.viewPhoto}>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                    </View>
                    <View style={styles.viewPhoto}>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                    </View>
                    <View style={styles.viewPhoto}>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                        <View 
                            style={[styles.box,{ width: (DESIGN_SCREEN_WIDTH - 20 * 4) / 3 }]} >
                            <Text>Image</Text>
                        </View>
                            <View style={styles.view} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default BaiTap14Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    viewText: {
        flex: 1, 
        marginVertical: 5, 
        justifyContent: "center"
    },
    avatarImg: {
        flex: 2, 
        aspectRatio: 1 / 1, 
        marginRight: 20, 
        alignSelf: "center"
    },
    viewButton: {
        marginVertical: 20, 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    textButton: {
        paddingHorizontal: 40, 
        paddingVertical: 10, 
        color: "white"
    },
    box: {
        backgroundColor: "#1e90ff",
        aspectRatio: 1 / 1,
        justifyContent: "center", 
        alignItems: "center"

    },
    viewImg: {
        aspectRatio: 2 / 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#1e90ff"
    },
    viewPhoto: {
        marginVertical: 5, 
        flexDirection: "row", 
        justifyContent: "center"
    },
    view: {
        width: 20
    },
})
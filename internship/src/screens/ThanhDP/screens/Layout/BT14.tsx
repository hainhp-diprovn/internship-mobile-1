import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { responsive } from '../../../../ultils/reponsive'

const BT14 = () => {

    const avatars = "https://vtv1.mediacdn.vn/thumb_w/650/2022/9/23/1652155217doan-gioi-thieu-teaser-avatar-2-tieu-de-ngay-phat-1663908206183474513814-crop-16639082132171187084960.png"
    const arr_square = Array(12).fill(0)

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerTop}>
                    <FastImage
                        style={styles.img}
                        source={{
                            uri: avatars,
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                    <View style={styles.containerTxtTop}>
                        <Text style={styles.txtTop}>Name</Text>
                        <Text style={styles.txtTop}>1/1/1990</Text>
                    </View>
                </View>
                <View style={styles.containerMiddle}>
                    <Text style={styles.txtTitleMiddle}>
                        Avatar (còn được tiếp thị là James Cameron's Avatar) là một bộ phim khoa học viễn tưởng năm 2009 của Hoa Kỳ do James Cameron
                        viết kịch bản và đạo diễn, với sự tham gia của các diễn viên Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez và Sigourney
                        Weaver. Phim lấy bối cảnh vào giữa thế kỷ 22 khi con người đang định cư Pandora, một mặt trăng sinh sống tươi tốt của một người khổng lồ
                        khí trong hệ sao Alpha Centauri, để khai thác khoáng chất có giá trị là unibtanium. Việc mở rộng khai thác mỏ tại cụm làng đang đe dọa
                        sự tồn tại của tộc người bản địa Na’vi ở Pandora. Tiêu đề của bộ phim đề cập đến ứng dụng công nghệ gen trong việc lai DNA giữa người Na’vi
                        và người Trái Đất của một nhóm nghiên cứu sự tương tác với người bản địa ở Pandora.</Text>
                    <View style={styles.viewImgMiddle}>
                        <Text style={styles.txtTop}>Image</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.viewBTN}>
                            <Text style={styles.textButton}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.viewBTN, { backgroundColor: "#ff8c00" }]}>
                            <Text style={styles.textButton}>Report</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.txtPhotos}>Photos</Text>
                <View style={styles.containerListImage}>
                    {
                        arr_square.map((item, index) => {
                            return (
                                <View key={index} style={styles.itemIMG}>
                                    <Text style={[styles.txtTop, { fontSize: 16 }]}>Image</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
export default BT14

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    containerListImage: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    itemIMG: {
        width: responsive.WIDTH / 3 - 10 * 3,
        height: responsive.WIDTH / 3 - 10 * 3,
        backgroundColor: "pink", margin: 8,
        alignItems: "center",
        justifyContent: "center"
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
    viewImgMiddle: {
        height: "50%",
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
    img: {
        height: "100%",
        width: "50%",
    },
    containerTop: {
        paddingTop: 10,
        width: "100%",
        height: 150,
        flexDirection: "row",
    },
    containerTxtTop: {
        width: "50%",
        justifyContent: "center",
        paddingLeft: 15
    },
    txtTop: {
        fontSize: 25,
        fontWeight: "600",
        color: "black"
    },
    containerMiddle: {
        width: "100%",
        height: 700,
        padding: 15,
        flexDirection: "column",
    },
    txtTitleMiddle: {
        fontSize: 14,
        fontWeight: "400",
        marginVertical: 15
    },
    viewBTN: {
        backgroundColor: "#228b22",
        borderWidth: 1,
        borderColor: "green"
    },
    txtPhotos: {
        marginHorizontal: 20,
        textDecorationLine: "underline",
        fontWeight: "bold"
    }

})
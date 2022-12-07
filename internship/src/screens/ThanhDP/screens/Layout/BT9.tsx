import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/AntDesign';


const BT9 = () => {

    const [currentData, setCurrentData] = useState<number>(0)

    const MockData = [
        {
            id: 1,
            img: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/unnamed_12.jpg",
            title: "Tom và Jerry (tiếng Anh: Tom and Jerry) là một series phim hoạt hình của Mỹ " +
                "được chiếu trên truyền hình và rạp hát với nhiều thể loại từ phim ngắn cho tới phim dài." +
                " Được sản xuất bởi William Hanna và Joseph Barbera cho hãng phim MGM, phim là cuộc đối đầu vô tận giữa chú mèo Tom và chú chuột" +
                " Jerry mang tới vô vàn tiếng cười cho khán giả. Hanna và Barbera viết kịch bản đồng thời làm đạo diễn cho 114 tập phim Tom & Jerry" +
                " tại xưởng phim MGM trong thời gian từ những năm 1940 cho tới năm 1958 (năm xưởng phim hoạt hình của hãng đóng cửa). Phiên bản gốc của Tom & Jerry" +
                " đoạt giải Oscar cho thể loại phim hoạt hình ngắn 7 lần. Tom & Jerry có lượng khán giả đông đảo trên toàn thế giới với đủ mọi thành phần từ trẻ em cho tới thanh niên," +
                " người lớn và được công nhận là một trong những huyền thoại điện ảnh sống mãi trong lòng công chúng và lịch sử điện ảnh Mỹ. Năm 2000, tạp chí TIME công bố Tom & Jerry là một trong" +
                " những show truyền hình hay nhất mọi thời đại." +
                " Bắt đầu từ năm 1960 của thế kỉ XX, để tiếp tục thành công của 114 tập phim đầu, MGM đã giao quyền sản xuất cho Hãng phim Rembrandt" +
                " được điểu hành bởi Gene Deith tại Bắc Âu.Sau đó đến năm 1963 bộ phim lại được giao cho một xưởng phim của Hollywood là Sib- Tower 12" +
                " của Chuck Jones.Loạt phim kết thúc vào năm 1967 nâng tổng số tập lên 161. Sau này để phục vụ cho các kênh phim hoạt hình, hai nhà sản xuất" +
                " ban đầu là Hanna - Barbera tiếp tục sản xuất Tom & Jerry trong những năm 70 cho tới đầu năm 90. Và tiếp theo đó là hai bộ phim dài Tom & Jerry" +
                " ra mắt khán giả là Tom and Jerry: The Movie vào năm 1993 và Tom & Jerry: the Masion Cat vào năm 2000. Tập phim Tom & Jerry mới nhất là tập The Karate Guard đã ra mắt lần đầu tại Los Angeles" +
                " vào ngày 27 / 12 / 2005 và Tom và Jerry được sản xuất bởi Warner Bros từ 2006.[1] Hiện nay, WTBS đang bảo vệ bản quyền sản xuất Tom và Jerry."
        },
        {
            id: 2,
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
            title: "Curry is the son of former NBA player Dell Curry and the older brother of current NBA player Seth Curry." +
                " He played college basketball for the Davidson Wildcats, where he set career scoring records for Davidson and the Southern" +
                " Conference, was twice named conference player of the year, and set the single-season NCAA record during his sophomore year for most three-pointers made." +
                " Curry was selected by the Warriors with the seventh overall pick in the 2009 NBA draft."
        },
        {
            id: 3,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/947.png",
            title: "Allen Iverson is a proffesional Basketball player"
        },
        {
            id: 4,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
            title: "Lamelo Ball LaMelo LaFrance Ball (born August 22, 2001) is an American professional basketball player for the Charlotte Hornets of the National Basketball Association (NBA). He was selected by the Hornets with the third overall pick of the 2020 NBA draft. Ball was voted the NBA Rookie of the Year in 2021 and named an NBA All-Star the following season in 2022."
        },
        {
            id: 5,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png",
            title: "Ja Morant aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  ccccccccccccccc",
        },
        {
            id: 6,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png",
            title: "Trae Young",
        },
        {
            id: 7,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
            title: "Kyrie Irving",
        },
        {
            id: 8,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
            title: "Luka Doncic",
        },
        {
            id: 9,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
            title: "Kevin Durant",
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{currentData + 1 + "/" + MockData.length}</Text>
            <View style={styles.containerViewItem}>
                <TouchableOpacity
                    onPress={() => {
                        (currentData == 0) ? setCurrentData(MockData.length - 1) : setCurrentData(currentData - 1)
                    }}
                >
                    <Icon
                        name="left"
                        size={50}
                        color="blue"
                    />
                </TouchableOpacity>
                <FastImage
                    style={styles.img}
                    source={{
                        uri: MockData[currentData].img,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <TouchableOpacity
                    onPress={() => {
                        (currentData == MockData.length - 1) ? setCurrentData(0) : setCurrentData(currentData + 1)
                    }}
                >
                    <Icon
                        name="right"
                        size={50}
                        color="blue"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.txt, { color: "black" }]}>{MockData[currentData].title}</Text>
                </ScrollView>
            </View>
            <View style={styles.containerBTN}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BT9

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
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
    viewContent: {
        width: "80%",
        maxHeight: "40%",
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 15
    },
    containerBTN: {
        width: "80%",
        height: "40%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20
    },
    btn: {
        width: 100,
        height: 50,
        backgroundColor: "lightblue",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        color: "white",
        fontSize: 18
    }
});



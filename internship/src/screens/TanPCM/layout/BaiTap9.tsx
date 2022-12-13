import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView

} from 'react-native';
import { iconLeft, iconRight } from '../url'

const BaiTap9 = () => {

    const [count, setCount] = useState<number>(0)

    const HuskyData = [
        {
            id: 1,
            img: 'https://www.hoaipet.com/wp-content/uploads/2021/06/cho-husky-4.jpg',
            desc: "Chó Husky Sibir là một giống chó cỡ trung thuộc nòi chó kéo xe có nguồn gốc từ vùng Đông Bắc Sibir, Nga. Xét theo đặc điểm di truyền, chó Husky được xếp vào dòng Spitz" +
                "Chó Husky có hai lớp lông dày, tai dựng hình tam giác và thường có những điểm nhận dạng khác nhau trên lông" +
                "Từ năm 1908, chúng được du nhập vào Alaska trong thời kỳ khai thác vàng và được sử dụng là chó kéo xe và chó đua xe." +
                "Ở đây, xe kéo bởi vì chó Husky nhanh chóng trở thành phương tiện phổ biến lúc bây giờ. Năm 1930, việc xuất khẩu chó ở Siberia bị dừng lại"
        },
        {
            id: 2,
            img: 'https://startuanit.net/wp-content/uploads/2021/08/hinh-nen-cho-husky-sibir-ngao-ngo-cho-may-tinh-15.jpg',
            desc: "Chó Husky là giống chó rất ưa thích vận động do tổ tiên của chúng sống ở một trong những nơi lạnh giá nhất là Siberia," +
                "ở đây chó Husky nguyên thủy được phối giống bởi người Chukchi ở Đông Bắc Á nhằm mục đích kéo xe hàng trên một quãng đường dài trong điều kiện lạnh giá khắc nghiệt"
        },
        {
            id: 3,
            img: 'https://vuipet.com/wp-content/uploads/2021/04/cho-ngao.jpg',
            desc: "Giống chó này được đưa tới Alaska trong thời kì khai thác vàng ở Nome rồi sau đó trở nên phổ biến ở Hoa Kỳ và Canada." +
                "Từ năm 1908, chúng được du nhập vào Alaska trong thời kỳ khai thác vàng và được sử dụng là chó kéo xe và chó đua xe."
        },
        {
            id: 4,
            img: 'https://static2.yan.vn/YanNews/2167221/202110/husky-ngao-tro-ve-kem-buc-thu-sau-3-ngay-mat-tich-khien-chu-bat-cuoi-98283137.jpg',
            desc: "Ban đầu Husky được nuôi để làm chó kéo xe nhưng về sau chúng trở thành thú nuôi làm cảnh trong gia đình."
        },
        {
            id: 5,
            img: 'https://petto.vn/wp-content/uploads/2019/07/5bc4227e0da29-maxresdefault-600x450.jpg',
            desc: "Chó Husky Sibir là một giống chó cỡ trung thuộc nòi chó kéo xe có nguồn gốc từ vùng Đông Bắc Sibir, Nga. Xét theo đặc điểm di truyền, chó Husky được xếp vào dòng Spitz" +
                "Chó Husky có hai lớp lông dày, tai dựng hình tam giác và thường có những điểm nhận dạng khác nhau trên lông"
        },
        {
            id: 6,
            img: 'https://img.yeupet.vn/2018/12/cach-nhan-biet-mot-chu-cho-husky-thuan-chung.jpeg',
            desc: "Chó Husky là giống chó rất ưa thích vận động do tổ tiên của chúng sống ở một trong những nơi lạnh giá nhất là Siberia," +
                "ở đây chó Husky nguyên thủy được phối giống bởi người Chukchi ở Đông Bắc Á nhằm mục đích kéo xe hàng trên một quãng đường dài trong điều kiện lạnh giá khắc nghiệt",
        },
        {
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEO6MSeh3L68FJiQhaYiTEaJTJ2Kqxe0gLgw&usqp=CAU',
            desc: "Giống chó này được đưa tới Alaska trong thời kì khai thác vàng ở Nome rồi sau đó trở nên phổ biến ở Hoa Kỳ và Canada."
        },
        {
            id: 8,
            img: 'https://tunglocpet.com/wp-content/uploads/2020/08/gia-cho-husky-05.jpg',
            desc: "Chó Husky Sibir là một giống chó cỡ trung thuộc nòi chó kéo xe có nguồn gốc từ vùng Đông Bắc Sibir, Nga. Xét theo đặc điểm di truyền, chó Husky được xếp vào dòng Spitz" +
                "Chó Husky có hai lớp lông dày, tai dựng hình tam giác và thường có những điểm nhận dạng khác nhau trên lông"
        },
        {
            id: 9,
            img: 'https://vuipet.com/uploads/images/giong-cho/cho-husky/ban-cho-husky-3.jpg',
            desc: "Chó Husky Sibir là một giống chó cỡ trung thuộc nòi chó kéo xe có nguồn gốc từ vùng Đông Bắc Sibir, Nga. Xét theo đặc điểm di truyền, chó Husky được xếp vào dòng Spitz" +
                "Chó Husky có hai lớp lông dày, tai dựng hình tam giác và thường có những điểm nhận dạng khác nhau trên lông"
        },
        {
            id: 10,
            img: 'https://petnhatrang.com/wp-content/uploads/2020/10/C%C3%A1ch-nu%C3%B4i-ch%C3%B3-Husky-kh%E1%BB%8Fe-m%E1%BA%A1nh-%E1%BB%9F-Vi%E1%BB%87t-Nam-Pet-Nha-Trang.jpg',
            desc: "Giống chó này được đưa tới Alaska trong thời kì khai thác vàng ở Nome rồi sau đó trở nên phổ biến ở Hoa Kỳ và Canada."
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>{count + 1 + "/" + HuskyData.length}</Text>
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => {
                        (count == 0) ? setCount(HuskyData.length - 1) : setCount(count - 1)
                    }}
                >
                    <Image source={iconLeft}/>
                </TouchableOpacity>

                <View >
                    <Image
                        style={{ height: 200, width: 300 }}
                        source={{
                            uri: HuskyData[count].img
                        }} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        (count == HuskyData.length - 1) ? setCount(0) : setCount(count + 1)
                    }}
                >
                    <Image source={iconRight}/>
                </TouchableOpacity>

            </View>
                <View style={styles.viewContent}>
                    <Text style={{fontSize:16}}>{HuskyData[count].desc}</Text>
                </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Share</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default BaiTap9

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    viewItem: {
        height: 250,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        color: "black",
        marginVertical: 10
    },
    viewContent: {
        width: "80%",
        maxHeight: "40%",
        borderWidth: 1,
        borderColor: "#1278CE",
        padding: 15
    },
    viewButton: {
        paddingTop: 20,
        width: "80%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#1278CE",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20
    }
});
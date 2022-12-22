import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { iconLeft, iconRight } from '../url';

const ListItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image
                source={{
                    uri: item.uri,
                }}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    );
};

const BaiTap4 = () => {
    const [count, setCount] = useState<number>(0)

    const HuskyData = [
        {
            id: 1,
            img: 'https://mayvesinhmiennam.com/wp-content/uploads/2021/06/k3.jpg',
        },
        {
            id: 2,
            img: 'https://www.hoaipet.com/wp-content/uploads/2021/06/cho-husky-4.jpg',
        },
        {
            id: 3,
            img: 'https://vuipet.com/wp-content/uploads/2021/04/cho-ngao.jpg',
        },
        {
            id: 4,
            img: 'https://static2.yan.vn/YanNews/2167221/202110/husky-ngao-tro-ve-kem-buc-thu-sau-3-ngay-mat-tich-khien-chu-bat-cuoi-98283137.jpg',
        },
        {
            id: 5,
            img: 'https://petto.vn/wp-content/uploads/2019/07/5bc4227e0da29-maxresdefault-600x450.jpg',
        },
        {
            id: 6,
            img: 'https://img.yeupet.vn/2018/12/cach-nhan-biet-mot-chu-cho-husky-thuan-chung.jpeg',
        },
        {
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEO6MSeh3L68FJiQhaYiTEaJTJ2Kqxe0gLgw&usqp=CAU',
        },
        {
            id: 8,
            img: 'https://tunglocpet.com/wp-content/uploads/2020/08/gia-cho-husky-05.jpg',
        },
        {
            id: 9,
            img: 'https://vuipet.com/uploads/images/giong-cho/cho-husky/ban-cho-husky-3.jpg',
        },
        {
            id: 10,
            img: 'https://petnhatrang.com/wp-content/uploads/2020/10/C%C3%A1ch-nu%C3%B4i-ch%C3%B3-Husky-kh%E1%BB%8Fe-m%E1%BA%A1nh-%E1%BB%9F-Vi%E1%BB%87t-Nam-Pet-Nha-Trang.jpg',
        },
    ]
    const SECTIONS = [
        {
            title: 'List Image',
            data: [
                {
                    key: '1',
                    text: 'Img 1',
                    uri: 'https://picsum.photos/id/1/200',
                },
                {
                    key: '2',
                    text: 'Img 2',
                    uri: 'https://picsum.photos/id/10/200',
                },

                {
                    key: '3',
                    text: 'Img 3',
                    uri: 'https://picsum.photos/id/1002/200',
                },
                {
                    key: '4',
                    text: 'Img 4',
                    uri: 'https://picsum.photos/id/1006/200',
                },
                {
                    key: '5',
                    text: 'Img 5',
                    uri: 'https://picsum.photos/id/1008/200',
                },
                {
                    key: '6',
                    text: 'Img 1',
                    uri: 'https://picsum.photos/id/1011/200',
                },
                {
                    key: '7',
                    text: 'Img 2',
                    uri: 'https://picsum.photos/id/1012/200',
                },

                {
                    key: '8',
                    text: 'Img 3',
                    uri: 'https://picsum.photos/id/1013/200',
                },
                {
                    key: '9',
                    text: 'Img 4',
                    uri: 'https://picsum.photos/id/1015/200',
                },
                {
                    key: '10',
                    text: 'Img 5',
                    uri: 'https://picsum.photos/id/1016/200',
                },
            ],
        },
        {
            title: 'Siêu Nhân Deka',
            data: [
                {
                    key: '1',
                    text: 'Trắng',
                    uri: 'https://cf.shopee.vn/file/1386186838a45667d4a8a473c1a70483',
                },
                {
                    key: '2',
                    text: 'Đỏ',
                    uri: 'https://cf.shopee.vn/file/c0ec95143e0543652aa4d044733c9df6',
                },

                {
                    key: '3',
                    text: 'Xanh',
                    uri: 'https://cf.shopee.vn/file/d9c145b8333b6944a8f878dfd12def76_tn',
                },
                {
                    key: '4',
                    text: 'Lá',
                    uri: 'https://cf.shopee.vn/file/f48a019a379852d24f4cdb6d595f5b6b',
                },
                {
                    key: '5',
                    text: 'Hồng',
                    uri: 'https://cf.shopee.vn/file/a21ded359b76e4acbf8532d94b1e6b5c',
                },
                {
                    key: '6',
                    text: 'Vàng',
                    uri: 'https://cf.shopee.vn/file/ae49bd7c69386afe0c62a3ff3b622cb5_tn',
                },
            ],
        },
        {
            title: "Siêu Nhân Cuồng Phong",
            data: [
                {
                    key: '1',
                    text: 'Đỏ',
                    uri: 'https://i1.sndcdn.com/artworks-000346985259-o2vzwc-t500x500.jpg',
                },
                {
                    key: '2',
                    text: 'Đen',
                    uri: 'https://redeal.vn/anh-sieu-nhan-cuong-phong/imager_4_11134_700.jpg',
                },

                {
                    key: '3',
                    text: 'Xanh',
                    uri: 'https://lh4.ggpht.com/-qGjwE0-jxGU/V5u4ZA_RbRI/AAAAAABviuQ/2x6PG0741GA/w1000-h800/image',
                },
                {
                    key: '4',
                    text: 'Vàng',
                    uri: 'https://truthan.vn/hinh-anh-sieu-nhan-gao-trang/imager_39368.jpg',
                },
            ]
        },
        {
            title: "Siêu Nhân Gao",
            data: [
                {
                    key: '1',
                    text: 'Đỏ',
                    uri: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
                },
                {
                    key: '2',
                    text: 'Vàng',
                    uri: 'https://i.pinimg.com/736x/d6/c7/4c/d6c74c0f2f084f90b0ccf9eeb4da0d41.jpg',
                },

                {
                    key: '3',
                    text: 'Tím',
                    uri: 'https://miro.medium.com/max/480/0*2ut8QGcYdruY5AZ_.jpg',
                },
                {
                    key: '4',
                    text: 'Lá',
                    uri: 'https://miro.medium.com/max/960/0*cmr2RNgPZKRT-imy.jpg',
                },
            ]
        },
        {
            title: "Chó Corgi",
            data: [
                {
                    key: '1',
                    text: '1',
                    uri: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi130.jpg',
                },
                {
                    key: '2',
                    text: '2',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJc7hgT9iatKyiWHAC6H9lL6yX0IoDfVUp_lU67SrVfHZbW4GvxVV58TBsgB-pMQJYsM&usqp=CAU',
                },

                {
                    key: '3',
                    text: '3',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-FlPGYvD3OmpBbHJfn_xPUPnRg6gZXc_Q2mxIl2TCbo5xW-yAcPVrOuqQWFSlxooLKc&usqp=CAU',
                },
                {
                    key: '4',
                    text: '4',
                    uri: 'https://dogily.vn/wp-content/uploads/2022/04/corgi-vang-trang-duc-4-600x450.png',
                },
            ]
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.viewItem}>
                    <TouchableOpacity
                        onPress={() => {
                            (count == 0) ? setCount(HuskyData.length - 1) : setCount(count - 1)
                        }}
                    >
                        <Image source={iconLeft} />
                    </TouchableOpacity>

                    <View>
                        <Image
                            style={styles.img}
                            source={{
                                uri: HuskyData[count].img
                            }} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            (count == HuskyData.length - 1) ? setCount(0) : setCount(count + 1)
                        }}
                    >
                        <Image source={iconRight} />
                    </TouchableOpacity>

                </View>
                <SectionList
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    stickySectionHeadersEnabled={false}
                    sections={SECTIONS}
                    showsVerticalScrollIndicator={false}
                    renderSectionHeader={({ section }) => (
                        <>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                            <FlatList
                                horizontal
                                data={section.data}
                                renderItem={({ item }) => <ListItem item={item} />}
                                showsHorizontalScrollIndicator={false}

                            />
                        </>
                    )}
                    renderItem={() => {
                        return null
                    }}
                />
            </View>
        </SafeAreaView>
    );
};


export default BaiTap4

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewItem: {
        height: 250,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        height: 200,
        width: 300,
        borderRadius: 10
    },
    sectionHeader: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: "800",
        color: "black",
    },
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 150,
        height: 150,
    },
    itemText: {
        marginTop: 5,
        color: "black",
    },
});
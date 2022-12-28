import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
    FlatList,
} from 'react-native';
import { responsive } from '../../../ultils/reponsive'


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

const BaiTap3 = () => {

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
            title: 'Sieu Nhan Deka',
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
            title: "Sieu Nhan Cuong Phong",
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
        },
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
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({ section }) => (
                    <View style={{ flex: 1 }}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.textHeader}>{section.title}</Text>
                        </View>
                        <FlatList
                            data={section.data}
                            renderItem={({ item }) => <ListItem item={item} />}
                            showsHorizontalScrollIndicator={false}
                            numColumns={6}
                        />
                    </View>

                )}
                renderItem={() => {
                    return null
                }}
            // renderItem={({ item, section }) => {
            //     console.log("Section", section.data);
            //     return (
            //         <FlatList
            //             data={section.data}
            //             renderItem={({ item }) => <ListItem item={item} />}
            //             showsHorizontalScrollIndicator={false}
            //             numColumns={6}
            //         />
            //     );
            // }}
            />
        </SafeAreaView>
    );
};
export default BaiTap3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sectionHeader: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: "#6495ed",
    },
    textHeader: {
        fontSize: 18,
        fontWeight: "600",
        color: "black",
    },
    item: {
        width: responsive.WIDTH / 6 - 3 * 5,
        height: 70,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    itemPhoto: {
        width: 50,
        height: 50,
    },
    itemText: {
        paddingTop: 5,
        color: "black",
    },
});
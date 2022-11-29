import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

const BT1 = () => {
    return (
        <View>
            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}>
                <View style={styles.view}>
                    <Image
                        source={{ uri: 'https://icdn.dantri.com.vn/thumb_w/640/2020/05/12/1-1589297346311.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.txt}>
                        Kurt Cobain
                    </Text>
                    <Text style={[styles.txt, { fontSize: 20, marginBottom: 40 }]}>
                        Aberdeen, Washington, Hoa Kỳ
                    </Text>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='Email address'
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder='Create password'
                    />
                    <Image
                        source={{ uri: 'https://file.tinnhac.com/resize/600x-/music/2017/02/23/istNovoselicDaveGrohlSuitStyle-e1cf.jpg' }}
                        style={styles.image1}
                        resizeMode='contain'
                    />
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', marginBottom: 60 }}>
                        <Image
                            source={{ uri: 'https://file.tinnhac.com/resize/600x-/music/2017/02/23/istNovoselicDaveGrohlSuitStyle-e1cf.jpg' }}
                            style={{ flex: 0.5, height: 100 }}
                            resizeMode='contain'
                        />
                        <Image
                            source={{ uri: 'https://file.tinnhac.com/resize/600x-/music/2017/02/23/istNovoselicDaveGrohlSuitStyle-e1cf.jpg' }}
                            style={{ flex: 0.5, height: 100 }}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default BT1

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,

    },
    scroll: {
        width: '100%',

    },
    view: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        marginVertical: 40,
        borderRadius: 100,
        height: 200,
        width: 200,
    },
    image1: {
        height: 300,
        width: '90%',
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    txtInput: {
        borderWidth: 3,
        padding: 10,
        width: '90%',
        marginBottom: 20
    }

});



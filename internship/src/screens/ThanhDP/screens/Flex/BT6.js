import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Button,
    ActivityIndicator
} from 'react-native';
import axios from 'axios'
import FastImage from 'react-native-fast-image'
const ItemView = (props) => {
    return (
        <View style={{ flexDirection: 'column', width: 300, height: 500, borderRadius: 10, padding: 10, borderWidth: 1, margin: 5 }}>
            <FastImage
                style={{
                    borderRadius: 10,
                    flex: 1
                }}
                source={{
                    uri: props.img,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16 }}>{props.name}</Text>
            </View>
            <TouchableOpacity
                style={{
                    width: '100%',
                    borderRadius: 10,
                    backgroundColor: 'gray',
                    alignItems: "center",
                    height: 40,
                    justifyContent: "center"
                }}
            >
                <Text sty>{"Choose"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const BT6 = () => {
    const [data, setData] = useState(null)
    const [loading, setIsLoading] = useState(false)
    const getData = async () => {
        let url = 'https://pbl6-ads-service.herokuapp.com/api/v1/advertisements'
        try {
            setIsLoading(true);
            const response = await axios.get(url);
            if (response.status === 200) {
                setData(response.data.advertisements);
                setIsLoading(false);
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View style={styles.container}>
            {
                loading ?
                    <ActivityIndicator size="large" color="#00ff00" />
                    :
                    <View>
                        <View style={styles.bottomView}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                keyExtractor={item => item.Id}
                                renderItem={({ item }) => <ItemView name={item.title} img={item.imagePath} />}
                            />
                        </View>
                        <Button
                            title='Click me'
                            color={"blue"}
                            onPress={() => {
                                console.log(data)
                            }}
                        />
                    </View>
            }
        </View >
    )
}

export default BT6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        // flexDirection: 'column',
        // justifyContent: 'center',

    },
    topView: {
        height: '20%',
        backgroundColor: '#cf7751',
        justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});



import React, { useState } from 'react';
import {
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'
import { screenName } from '../../../../../navigators/screens-name'
import Header from '../../../component/Header'
import Icon from 'react-native-vector-icons/AntDesign';

const ScreenProfileDetail = () => {

    const navi = useNavigation<any>();
    const route = useRoute<any>();
    const receive = route.params
    const [name, setName] = useState<string>(receive?.name)

    const ViewLeft = () => {
        return (
            <TouchableOpacity
                onPress={() => { navi.navigate(screenName.ScreenProfile_DPT) }}
            >
                <Icon
                    name="left"
                    size={50}
                    color="blue"
                    style={styles.icon}
                />
            </TouchableOpacity>
        )
    }

    const ViewMiddle = () => {
        return (
            <Text style={styles.txtTitle}>Profile</Text>
        )
    }

    const ViewRight = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navi.goBack();
                    receive.setName(name);
                }}
            >
                <Text style={styles.txtBTN}>Done</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
            accessible={false}>
            <View style={styles.container}>
                <Header
                    childrenRight={<ViewRight />}
                    childrenMiddle={<ViewMiddle />}
                    childrenLeft={<ViewLeft />}
                />
                <View style={styles.containerInside}>
                    <FastImage
                        style={styles.img}
                        source={{
                            uri: receive?.img,
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                    <TextInput
                        style={styles.txtInput}
                        defaultValue={receive.name}
                        placeholder={"Nhập email"}
                        returnKeyType="next"
                        onChangeText={(text) => {
                            setName(text)
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ScreenProfileDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInside: {
        alignItems: "center",
        flex: 1
    },
    img: {
        height: 250,
        width: 250,
        marginVertical: 20
    },
    txtInput: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    txtBTN: {
        fontSize: 18,
        fontWeight: "bold",
        color: "lightblue"
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    },
    icon: {
        position: "absolute",
        left: -60,
        top: -25
    }
});

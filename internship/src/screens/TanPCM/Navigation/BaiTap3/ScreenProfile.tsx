import React, { useState } from 'react';
import { TouchableOpacity, Text, SafeAreaView, StyleSheet, Image, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../navigators/screens-name'
import { avatars } from '../../url';

const UserItem = (props) => {
    const navi = useNavigation<any>();

    const [name, setName] = React.useState<string>(props?.name)

    const handleSetName = (name) => {
        setName(name)
    }
    return (
        <TouchableOpacity style={styles.listItem}
            onPress={() => navi.navigate(screenName.ScreenDetailProfile_PCMT, 
                {
                setName: (name: string) => handleSetName(name),
                id: props.id,
                image: props.image,
                name: name

            })}>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const ProfileScreen = () => {

    const data = [
        { id: 1, name: "Name 1", image: avatars },
        { id: 2, name: "Name 2", image: avatars },
        { id: 3, name: "Name 3", image: avatars },
        { id: 4, name: "Name 4", image: avatars },
        { id: 5, name: "Name 5", image: avatars },
        { id: 6, name: "Name 6", image: avatars },
        { id: 7, name: "Name 7", image: avatars },
        { id: 8, name: "Name 8", image: avatars },
        { id: 9, name: "Name 9", image: avatars },
        { id: 10, name: "Name 10", image: avatars },
        { id: 11, name: "Name 11", image: avatars },
        { id: 12, name: "Name 12", image: avatars },
        { id: 13, name: "Name 13", image: avatars },
        { id: 14, name: "Name 14", image: avatars },
        { id: 15, name: "Name 15", image: avatars },
        { id: 16, name: "Name 16", image: avatars },
        { id: 17, name: "Name 17", image: avatars },
        { id: 18, name: "Name 18", image: avatars },
        { id: 19, name: "Name 19", image: avatars },
        { id: 20, name: "Name 20", image: avatars },
        { id: 21, name: "Name 21", image: avatars },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewItem}>
                <Text style={styles.title}>Home</Text>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <UserItem name={item.name} image={item.image} id={item.id} />}
                    numColumns={3}
                />
            </View>
        </SafeAreaView>
    )
}
export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    viewItem: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    viewButton: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    listItem: {
        padding: 10,
    },
    image: {
        height: 150,
        width: 110,
    },
    text: {
        backgroundColor: "blue",
        textAlign: "center",
        fontSize: 20,
        width: 110,
        paddingVertical: 5,
        color: "white",
    },
})
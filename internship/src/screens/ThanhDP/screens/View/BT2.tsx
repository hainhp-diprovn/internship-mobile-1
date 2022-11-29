import React from 'react';
import {
    View,
    StyleSheet,
    FlatList

} from 'react-native';
import User from './BT1'


const BT2 = () => {

    const User_Info = [
        {
            id: 1,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
            name: "Lebron James"
        },
        {
            id: 2,
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
            name: "Stephen Curry"
        },
        {
            id: 3,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/947.png",
            name: "Allen Iverson"
        },
        {
            id: 4,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
            name: "Lamelo Ball"
        },
        {
            id: 5,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png",
            name: "Ja Morant",
        },
        {
            id: 6,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png",
            name: "Trae Young",
        },
        {
            id: 7,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
            name: "Kyrie Irving",
        },
        {
            id: 8,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
            name: "Luka Doncic",
        },
        {
            id: 9,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
            name: "Kevin Durant",
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={User_Info}
                // keyExtractor={item => item.id}
                numColumns={3}
                renderItem={({ item }) => <User name={item.name} img={item.img} />}
            />
        </View>
    )
}


export default BT2


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
});



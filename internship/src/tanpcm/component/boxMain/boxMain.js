import React from "react";
import { View } from "react-native"

export default FlexBox = () => {
    return (
        <View style={{flexDirection:'row',flex: 1}}>
            <View style={{ backgroundColor: 'red',flex:2}}>
                <View style={{ backgroundColor: 'white', flexDirection:'row',flex:1}}>
                    <View style={{ flexDirection:'row',flex:1}}>
                        <View style={{ flexDirection:'column',backgroundColor:'blue',flex:1}}>
                            <View style={{backgroundColor:'gray',flex:1}}/>
                            <View style={{backgroundColor:'yellow',flex:1}}/>
                            <View style={{backgroundColor:'gray',flex:1}}/>
                            <View style={{backgroundColor:'purple',flex:1}}/>
                        </View>
                        <View style={{ flexDirection:'column',flex:2}}>
                            <View style={{backgroundColor:'blue',flex:3}}/>
                            <View style={{backgroundColor:'yellow',flexDirection:'row',flex:1}}>
                                <View style={{backgroundColor:'green',flex:1}}/>
                                <View style={{backgroundColor:'yellow',flex:1}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'orange',flex:1}}></View>
                </View>
                <View style={{backgroundColor: 'black',flex:1}}></View>
                <View style={{backgroundColor: 'yellow',flex:1}}></View>
                <View style={{backgroundColor: 'orange',flex:1}}></View>
            </View>
            <View style={{backgroundColor: 'red',flex:1}}></View>
        </View>
    )
}

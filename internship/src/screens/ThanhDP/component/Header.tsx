import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';


const Header = ({ childrenLeft, childrenRight, childrenMiddle, fullHeader, imgURL, containerColor }: any) => {
    return (

        <View style={styles.container}>
            {
                React.isValidElement(fullHeader) ?
                    <ImageBackground
                        source={{ uri: imgURL }}
                        style={styles.containerInside}>
                        {fullHeader}
                    </ImageBackground>
                    :
                    <View style={[styles.containerInside, { backgroundColor: containerColor }]}>
                        <View style={styles.leftContainer}>
                            {childrenLeft}
                        </View>
                        <View style={styles.middleContainer}>
                            {childrenMiddle}
                        </View>
                        <View style={styles.rightContainer}>
                            {childrenRight}
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        borderBottomWidth: 2
    },
    containerInside: {
        flex: 1,
        flexDirection: "row"
    },
    leftContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    middleContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    rightContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

});

export default Header
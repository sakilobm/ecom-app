import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg';
import { FontFamily } from "../GlobalStyles";

const BottomBarNavigation = () => {
    return (
        <TouchableOpacity>
            <Svg width="390" height="114" viewBox="0 0 390 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0 57.23C0 27.8319 23.8319 4 53.23 4H133.911C138.444 4 142.929 4.92757 147.091 6.72564L155.812 10.4938C161.226 12.833 167.061 14.0397 172.959 14.0397H218.893C223.272 14.0397 227.607 13.1743 231.65 11.4933L243.548 6.5464C247.592 4.86538 251.927 4 256.306 4H336.77C366.168 4 390 27.8319 390 57.23V80.77C390 99.1224 375.122 114 356.77 114H33.23C14.8776 114 0 99.1224 0 80.77V57.23Z" fill="black" />
                <Path d="M174.953 4H215.047" stroke="#D7D7D7" stroke-width="8" stroke-linecap="round" />
                <View style={styles.bottomBar} >
                    <View style={styles.circleContainer}>
                        <Text style={styles.circleText}> 1 </Text>
                    </View>
                    <View style={styles.cartTextContainer}>
                        <Text style={styles.cartText}>Cart<Text style={styles.cartTextCounter}> 1 Item</Text>
                        </Text>
                    </View>
                    <View style={styles.cartImageContiner}>
                        <Image style={styles.cartImage} source={require('../assets/png/cartImage.png')} />
                    </View>
                </View>
            </Svg>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    bottomBar: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    circleContainer: {
        height: 43,
        width: 43,
        backgroundColor: '#FFEC89',
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        fontSize: 14,
        fontFamily: FontFamily.ralewayMedium,
    },
    cartTextContainer: {
        right: 50,
    },
    cartText: {
        width: 50,
        fontSize: 17,
        fontFamily: FontFamily.rocknRollOne,
        color: 'white',
    },
    cartTextCounter: {
        fontSize: 14,
        fontFamily: FontFamily.rocknRollOne,
        color: 'rgba(255, 255, 255, 0.4)',
    },
    cartImageContiner: {
        bottom: 5,
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderColor: '#D74343',
        borderWidth: 2,
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    cartImage: {
        height: 35,
        width: 35,
    },
})
export default BottomBarNavigation;
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Svg, { Path, Rect, Ellipse, Defs, Pattern, Use, SvgXml } from 'react-native-svg';

const BottomBarNavigation = () => {
    const svgXml = `<svg width="405" height="113" viewBox="8 0 405 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M182 4H223.944" stroke="#A7A7A7" stroke-width="8" stroke-linecap="round"/>
    <path d="M0 34C0 17.4315 13.4315 4 30 4H140.52C144.734 4 148.9 4.8877 152.748 6.60528L164.899 12.0289C168.747 13.7464 172.913 14.6341 177.127 14.6341H225.553C229.341 14.6341 233.095 13.9166 236.617 12.5194L252.758 6.1148C256.28 4.71758 260.034 4 263.822 4H375C391.569 4 405 17.4315 405 34V83C405 99.5685 391.569 113 375 113H30C13.4315 113 0 99.5685 0 83V34Z" fill="#1A1A1A"/>
    </svg>    
    `
    return (
        <>
            <SvgXml style={styles.svgCon} xml={svgXml} throwIfNamespace={false} />
            <View style={styles.bottomBar} >
                <TouchableOpacity style={styles.circleContainer}>
                    <Text style={styles.circleText}> 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartTextContainer}>
                    <Text style={styles.cartText}>Cart<Text style={styles.cartTextCounter}> 1 Item</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartImageContainer}>
                    <Image style={styles.cartImage} source={require('../assets/png/cartImage.png')} />
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    svgCon: {
        position: 'absolute',
        bottom: 0,
    },
    bottomBar: {
        bottom: 20,
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
        fontFamily: 'Raleway-Medium',
    },
    cartTextContainer: {
        right: 50,
    },
    cartText: {
        width: 50,
        fontSize: 17,
        fontFamily: 'RocknRoll One',
        color: 'white',
    },
    cartTextCounter: {
        fontSize: 14,
        fontFamily: 'RocknRoll One',
        color: 'rgba(255, 255, 255, 0.4)',
    },
    cartImageContainer: {
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
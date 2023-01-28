import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg';
import { FontFamily } from "./GlobalStyles";

const HeaderBar = () => { 
    return (
            <View style={styles.header} >
                <Text style={styles.watermark}>
                    Order From The
                    Best Of
                </Text>
                {/* //TODO: Title Should be Run Dynamicly Rendered */}
                <Text style={styles.mugsTitle}>Mugs</Text>
                <TouchableOpacity style={styles.svgCont}>
                    <Svg width="69" height="95" viewBox="0 0 69 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="2" y="2" width="65" height="91" rx="32.5" fill="white" stroke="black" stroke-width="4" />
                        <Path d="M27 40L41 40" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <Path d="M22 49H46" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <Path d="M27 58L41 58" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </Svg>
                </TouchableOpacity>
            </View>
    )
}
const styles = StyleSheet.create({
    watermark: {
        width: 250,
        top: 40,
        left: 30,
        fontSize: 30,
        color: 'black',
        fontFamily: FontFamily.raleway,
    },
    header: {
        top: 15,
        flexDirection: 'row',
        marginBottom: 90,
    },
    svgCont: {
        right: 30,
        top: 40,
    },
    textu: {
        display: 'flex',
        fontSize: 26,
        color: 'black',

    },
    mugsTitle: {
        color: '#DBBF2E',
        right: 110,
        top: 76,
        fontSize: 30,
        fontFamily: FontFamily.raleway,
    }
});
export default HeaderBar;
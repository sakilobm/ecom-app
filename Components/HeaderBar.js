import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg';
import { FontFamily } from "./GlobalStyles";

const HeaderBar = () => {
    const [selectedButton, setSelectedButton] = useState('all');
    const buttons = ['all', 'mugs', 'frames', 'albums'];
    {/* //TODO: Title Should be Run Dynamicly Rendered */ }
    return (
        <View style={styles.header} >
            <View style={styles.watermarkContainer}>
                <Text style={styles.watermark}>
                    Order From The
                    Best Of <Text style={styles.mugsTitle}> Mugs</Text>
                </Text>
            </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
    },
    watermarkContainer: {
        marginLeft: 20,
    },
    watermark: {
        width: 250,
        top: 40,
        fontSize: 30,
        color: 'black',
        fontFamily: FontFamily.ralewayMedium,
        fontWeight: 'normal',
    },
    svgCont: {
        top: 40,
        marginRight: 5,
    },
    mugsTitle: {
        color: '#DBBF2E',
        fontFamily: FontFamily.ralewayBold,
        fontWeight: '200',
    },

});
export default HeaderBar;
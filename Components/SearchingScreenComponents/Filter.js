import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontFamily } from "../../GlobalStyles";
import { Svg, Path, Rect } from 'react-native-svg';

const Filter = () => {
    return (
        <View style={{ alignItems: 'flex-end', right: 20, marginBottom: 10, }} >
            <View style={styles.filterContainer}>
                <Text style={styles.title}> <Text style={{ fontWeight: '800', fontFamily: FontFamily.ralewayMedium }} >245 </Text>Items</Text>
                <TouchableOpacity style={{ left: 10 }} >
                    <Svg width="56" height="43" viewBox="0 0 56 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="55.2708" y="0.729736" width="41.7778" height="55.2064" rx="20.8889" transform="rotate(90 55.2708 0.729736)" fill="white" />
                        <Path d="M38.0001 17.15H32.6001" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M23.6 17.15H20" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M27.2 20.3C28.9397 20.3 30.35 18.8897 30.35 17.15C30.35 15.4103 28.9397 14 27.2 14C25.4604 14 24.05 15.4103 24.05 17.15C24.05 18.8897 25.4604 20.3 27.2 20.3Z" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M37.9999 27.05H34.3999" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M25.4 27.05H20" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M30.7999 30.2C32.5396 30.2 33.9499 28.7897 33.9499 27.05C33.9499 25.3103 32.5396 23.9 30.7999 23.9C29.0602 23.9 27.6499 25.3103 27.6499 27.05C27.6499 28.7897 29.0602 30.2 30.7999 30.2Z" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    filterContainer: {
        width: 172,
        height: 49,
        backgroundColor: '#EDEDED',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    title: {
        left: 15,
        fontSize: 12,
        fontFamily: FontFamily.ralewayMedium,
        fontWeight: 'normal',
    }

});
export default Filter;
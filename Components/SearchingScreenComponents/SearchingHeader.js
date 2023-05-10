import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Svg, Path, Rect } from 'react-native-svg';

const SearchingHeader = () => {
    return (
        <View style={styles.HeadContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Mugs {"\n"}<Text style={{ fontFamily: 'Raleway-Medium' }} >Collection</Text></Text>
            </View>
            <TouchableOpacity View style={styles.svgContainer}>
                <Svg width="69" height="95" viewBox="0 0 69 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect x="2" y="2" width="65" height="91" rx="32.5" stroke="#F3F3F3" strokeWidth="6" />
                    <Path d="M39.8551 38.7896L39.8553 38.7898L39.8598 38.7839C40.2158 38.3209 40.1759 37.6635 39.7416 37.2444C39.2657 36.7852 38.4955 36.7852 38.0196 37.2444L28.2584 46.6642L28.2582 46.664L28.2533 46.6695L28.145 46.7906L28.1447 46.7905L28.1402 46.7964C27.7842 47.2593 27.8241 47.9167 28.2584 48.3358L38.0196 57.7556L38.0194 57.7558L38.0251 57.7604L38.1506 57.865L38.1504 57.8652L38.1564 57.8695C38.633 58.2108 39.3087 58.1733 39.7416 57.7556L39.7418 57.7558L39.7467 57.7503L39.8551 57.6291L39.8553 57.6293L39.8598 57.6234C40.2158 57.1604 40.1759 56.503 39.7416 56.0839L30.8461 47.5L39.7416 38.9161L39.7418 38.9163L39.7467 38.9108L39.8551 38.7896Z"
                        fill="black" stroke="black" stroke-width="8" />
                </Svg>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    HeadContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'Raleway',
        fontSize: 39,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
    },
    svgContainer: {
        marginTop: 60,
    },
    titleContainer: {
    },

    // container1: {
    //     marginTop: 10,
    //     flex: 1,
    //     backgroundColor: 'green',
    // },
    // filterContainer: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: 172,
    //     height: 49,
    //     backgroundColor: '#EDEDED',
    //     borderRadius: 30,
    // },
    // title2: {
    //     fontSize: 14,
    //     fontFamily: FontFamily.ralewayMedium,
    //     color: '#000000',
    // }
});
export default SearchingHeader;
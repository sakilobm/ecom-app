import React from 'react'
import { Text, View, StyleSheet, Dimensions, Animated, } from 'react-native'
import { FontFamily } from '../GlobalStyles';
import data from './data';
const { width, height } = Dimensions.get('window');
const TICKER_HEIGHT = 40;

const Ticker = ({ scrollX }) => {
    const inputRange = [-width, 0, width];
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
    });
    return (
        <View style={styles.tickerContainer}>
            <Animated.View style={{ transform: [{ translateY }] }}>
                {data.map(({ type }, index) => {
                    return (
                        <Text key={index} style={styles.tickerText}>
                            {type}
                        </Text>
                    );
                })}
            </Animated.View>
        </View>
    );
};
const styles = StyleSheet.create({
    tickerContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
        overflow: 'hidden',
        height: TICKER_HEIGHT,
    },

    tickerText: {
        fontSize: TICKER_HEIGHT,
        lineHeight: TICKER_HEIGHT,
        textTransform: 'uppercase',
        fontWeight: '800',
    },

})
export default Ticker;
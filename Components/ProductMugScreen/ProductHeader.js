import React from 'react'
import { Text, View, StyleSheet, Dimensions, Animated, } from 'react-native'
import { FontFamily } from '../GlobalStyles';
import data from './data';
import { StatusBar } from 'expo-status-bar';
import Circle from './Circle';
import Ticker from './Ticker';
import Item from './Item';
import Pagination from './Pagination';

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;

const ProductHeader = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <StatusBar style='auto' hidden />
            <Circle scrollX={scrollX} />
            <Animated.FlatList
                keyExtractor={(item) => item.key}
                data={data}
                renderItem={({ item, index }) => (
                    <Item {...item} index={index} scrollX={scrollX} />
                )}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            />
            {/* LOGO */}
            {/* <Image
                style={styles.logo}
                source={require('../../assets/png/1.png')}
            /> */}
            <Pagination scrollX={scrollX} />
            <Ticker scrollX={scrollX} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        opacity: 0.9,
        height: LOGO_HEIGHT,
        width: LOGO_WIDTH,
        resizeMode: 'contain',
        position: 'absolute',
        left: 10,
        bottom: 10,
        transform: [
            { translateX: -LOGO_WIDTH / 2 },
            { translateY: -LOGO_HEIGHT / 2 },
            { rotateZ: '-90deg' },
            { translateX: LOGO_WIDTH / 2 },
            { translateY: LOGO_HEIGHT / 2 },
        ],
    },
});

export default ProductHeader;
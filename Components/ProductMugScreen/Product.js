import React from 'react'
import { View, StyleSheet, Animated, } from 'react-native'
import data from './data';
import Item from './Item';

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;

const Product = ({ scrollX }) => {

    return (
        <View style={styles.container}>
            <Animated.FlatList
                keyExtractor={(item) => item.key}
                data={data}
                renderItem={({ item, index }) => (
                    <Item item={item} index={index} scrollX={scrollX} />
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

export default Product;
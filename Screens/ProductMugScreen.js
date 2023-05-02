import React from 'react';
import { View, StyleSheet, Animated } from 'react-native'
import Product from '../Components/ProductMugScreen/Product'
import Ticker from '../Components/ProductMugScreen/Ticker'
import Circle from '../Components/ProductMugScreen/Circle'
import Pagination from '../Components/ProductMugScreen/Pagination'


const ProductMugScreen = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <Ticker scrollX={scrollX} />
            <Circle scrollX={scrollX} />
            <Product scrollX={scrollX}/>
            <Pagination scrollX={scrollX} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
export default ProductMugScreen;
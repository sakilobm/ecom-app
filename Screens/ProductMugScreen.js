import React from 'react';
import { View, StyleSheet } from 'react-native'
import ProductHeader from '../Components/ProductMugScreen/ProductHeader'

const ProductMugScreen = () => {
    return (
        <View style={styles.container}>
            <ProductHeader />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
export default ProductMugScreen;
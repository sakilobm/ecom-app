import React from 'react';
import { View, StyleSheet } from 'react-native'
import ProductHeader from '../Components/ProductMugScreen/ProductHeader'
// import Filter from '../Components/ProductMugScreen/Filter'
// import SmallCards from '../Components/ProductMugScreen/SmallCards'

const ProductMugScreen = () => {
    return (
        <View style={styles.container}>
            <ProductHeader />
            {/* <Filter /> */}
            {/* <SmallCards /> */}
            {/* <BottomBarNavigation /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
export default ProductMugScreen;
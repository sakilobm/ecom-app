import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProductMugDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Raleway-Bold', }}>ProductMugDetailsScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default ProductMugDetailsScreen
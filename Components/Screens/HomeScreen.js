import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// import CategoryBar from '../CategoryBar';
import HeaderBar from '../HeaderBar';
import TabBarCategory from '../TabBarCategory';
import Card from '../Card';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBar />
            <TabBarCategory/>
            <Card/>
            {/* <CategoryBar /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
export default HomeScreen;
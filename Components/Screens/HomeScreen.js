import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// import CategoryBar from '../CategoryBar';
import HeaderBar from '../HomeScreenComponents/HeaderBar';
import TabBarCategory from '../HomeScreenComponents/TabBarCategory';
import Card from '../HomeScreenComponents/Card';
import BottomBarNavigation from '../HomeScreenComponents/BottomBarNavigation';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBar />
            <TabBarCategory />
            <Card />
            <BottomBarNavigation />
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
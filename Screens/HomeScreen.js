import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// import CategoryBar from '../CategoryBar';
import HeaderBar from '../Components/HomeScreenComponents/HeaderBar';
import TabBarCategory from '../Components/HomeScreenComponents/TabBarCategory';
import Card from '../Components/HomeScreenComponents/Card';
import BottomBarNavigation from '../Components/BottomBarNavigation';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderBar />
            <TabBarCategory />
            <Card navigation={navigation}/>
            <BottomBarNavigation />
            {/* <CategoryBar /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});
export default HomeScreen;
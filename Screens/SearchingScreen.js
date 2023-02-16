import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import SearchingHeader from '../Components/SearchingScreenComponents/SearchingHeader'
import Filter from '../Components/SearchingScreenComponents/Filter'
import SmallCards from '../Components/SearchingScreenComponents/SmallCards'
import BottomBarNavigation from '../Components/BottomBarNavigation'

const SearchingScreen = () => {
    return (
        <View style={styles.container}>
            <SearchingHeader />
            <Filter />
            <SmallCards />
            <BottomBarNavigation />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
export default SearchingScreen;
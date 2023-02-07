import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import SearchingHeader from '../SearchingScreenComponents/SearchingHeader'
// import Filter from '../SearchingScreenComponents/Filter'
// import SmallCards from '../SearchingScreenComponents/SmallCards'
// import BottomBarNavigation from '../BottomBarNavigation'

const SearchingScreen = () => {
    return (
        <View style={styles.container}>
            <SearchingHeader />
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
export default SearchingScreen;
import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Path, Rect } from 'react-native-svg';
import CategoryBar from '../CategoryBar';
import { FontFamily } from "../GlobalStyles";
import HeaderBar from '../HeaderBar';
// import CustomTabBar from '../CustomTabBar';

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBar/>
            <CategoryBar />
            {/* <CustomTabBar/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
});
export default HomeScreen;
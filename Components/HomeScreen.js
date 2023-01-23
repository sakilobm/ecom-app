import React, { useCallback } from 'react';
// import { HomeTitle, WaterMark } from '../Styles/appStyles'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Menu from '../assets/svg/Menu.svg'
import Svg, { Path, Rect } from 'react-native-svg';
import { Touchable } from 'react-native';
SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
        'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container} onLayout={onLayoutRootView} >
            <View style={styles.header} >
                <Text style={styles.watermark}>
                    Order from the
                    best of Mugs
                </Text>
                <TouchableOpacity style={styles.svgCont}>
                    <Svg width="69" height="95" viewBox="0 0 69 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="2" y="2" width="65" height="91" rx="32.5" fill="white" stroke="black" stroke-width="4" />
                        <Path d="M27 40L41 40" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <Path d="M22 49H46" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <Path d="M27 58L41 58" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    watermark: {
        width: 250,
        top: 40,
        left: 30,
        fontSize: 30,
        color: 'black',
        fontFamily: 'Raleway-Medium',
    },
    header: {
        top: 15,
        flexDirection: 'row',
    },
    svgCont: {
        left: 30,
        top: 40,
    }
});
export default HomeScreen;
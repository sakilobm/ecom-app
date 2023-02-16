import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react';
// import ParallaxRender from './Components/ParallaxRender'
import HomeScreen from './Screens/HomeScreen'
import { Container } from './Styles/appStyles'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SearchingScreen from './Screens/SearchingScreen';

export default function App() {
  //Auto Font Loader
  const [fontsLoaded] = useFonts({
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    "Raleway": require("./assets/fonts/Raleway.ttf"),
    "RocknRoll One": require("./assets/fonts/RocknRoll_One.ttf"),
    "Urbanist": require("./assets/fonts/Urbanist.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
    "Ruslan Display": require("./assets/fonts/Ruslan_Display.ttf"),
    "Rubik Mono One": require("./assets/fonts/Rubik_Mono_One.ttf"),
    "Righteous": require("./assets/fonts/Righteous.ttf"),
    "Purple Purse": require("./assets/fonts/Purple_Purse.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //Auto Font Loader -END

  return (
    <Container onLayout={onLayoutRootView} >
      <StatusBar style="auto" />
      <HomeScreen />
      {/* <SearchingScreen /> */}
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react';
import { Container } from './Styles/appStyles'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Components 
// import ParallaxRender from './Components/ParallaxRender'
// import HomeScreen from './Screens/HomeScreen'
import SearchingScreen from './Screens/SearchingScreen';
import ProductMugScreen from './Screens/ProductMugScreen';

export default function App() {
  //Auto Font Loader
  const [fontsLoaded] = useFonts({
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
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
      {/* <HomeScreen /> */}
      {/* <SearchingScreen /> */}
      <ProductMugScreen />
    </Container>
  );
}


import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react';
import { Container } from './Styles/appStyles'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Components 
// import ParallaxRender from './Components/ParallaxRender'
import HomeScreen from './Screens/HomeScreen'
import SearchingScreen from './Screens/SearchingScreen';
import ProductMugScreen from './Screens/ProductMugScreen';
import AddToCartScreen from './Screens/AddToCartScreen';
import ProductMugDetailsScreen from './Screens/ProductMugDetailsScreen';
import WelcomeScreen from './Screens/OnboardingScreen/WelcomeScreen';
import SecOnboardScreen from './Screens/OnboardingScreen/SecOnboardScreen';
import TrdOnboardScreen from './Screens/OnboardingScreen/TrdOnboardScreen';
import FouOnboardScreen from './Screens/OnboardingScreen/FouOnboardScreen';
import FitOnboardScreen from './Screens/OnboardingScreen/FitOnboardScreen';
import DotInversionScreen from './Screens/DotInvertionScreen';
import ProductFrameScreen from './Screens/ProductFrameScreen';
import ProductFrameDetailScreen from './Screens/ProductFrameDetailScreen';
import BottomSheet from './Components/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Container onLayout={onLayoutRootView}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchingScreen} />
            <Stack.Screen name="Mug" component={ProductMugScreen} />
            <Stack.Screen name="MugDetail" component={ProductMugDetailsScreen} />
            <Stack.Screen name="Cart" component={AddToCartScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SecOnboard" component={SecOnboardScreen} />
            <Stack.Screen name="TrdOnboard" component={TrdOnboardScreen} />
            <Stack.Screen name="FouOnboard" component={FouOnboardScreen} />
            <Stack.Screen name="FitOnboard" component={FitOnboardScreen} />
            <Stack.Screen name="DotInversion" component={DotInversionScreen} />
            <Stack.Screen name="ProductFrame" component={ProductFrameScreen} />
            <Stack.Screen name="ProductFrameDetail" component={ProductFrameDetailScreen} />
            <Stack.Screen name="BottomSheet" component={BottomSheet} />
          </Stack.Navigator>
          <StatusBar style="auto" />
          {/* <HomeScreen /> */}
          {/* <SearchingScreen /> */}
          {/* <ProductMugScreen /> */}
          {/* <AddToCartScreen /> */}
        </Container>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


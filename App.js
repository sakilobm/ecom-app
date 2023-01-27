import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import ParallaxRender from './Components/ParallaxRender'
import HomeScreen from './Components/Screens/HomeScreen'
import { Container } from './Styles/appStyles'

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <HomeScreen />
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

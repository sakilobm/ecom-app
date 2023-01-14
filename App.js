import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ParallaxRender from './Components/ParallaxRender'
import styled from "styled-components/native";
// import WaterMark, Container from './Components/StyledComponents'

const WaterMark = styled.Text`
 font-size: 16px;
 color: #fff;
 font-size: 30px;
`;
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <ParallaxRender />
      <WaterMark> Created By Sakil </WaterMark>
    </Container>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

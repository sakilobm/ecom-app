import styled from "styled-components/native";
import Constants from "expo-constants";
// Colors
export const colors = {
    primary: "#332424",
    secondary: "#DBBF2E",
    tertiary: "#E6E6E6",
    alternative: "#999999",
    //myColors
    //Cards
    skyBlue: "#2C9CBF",
    royalBlack: "#3F3F3F",
    darkOrange: "#B9944F",
    darkGreen: "#96B249",
    lightRed: "#FFCDCA",
    lightViolet: "#DDCDFE",
};

const statusBarHeight = Constants.statusBarHeight;

//...................................................
//.................App js............................
//...................................................

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: 'center';
  justify-content: 'center';
`;

export const WaterMark = styled.Text`
 font-size: 16px;
 color: #fff;
 font-size: 30px;
 top: 50px; 
`;
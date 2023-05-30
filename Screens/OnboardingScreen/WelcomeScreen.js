import * as React from "react";
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import { WhiteDoodles, Wave } from '../../Components/OnboardingScreenComponent/Svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('screen');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const staticWidth = 260; // Width in pixels
const staticHeight = 355; // Height in pixels
const widthPercentage = (staticWidth / screenWidth) * 100;
const heightPercentage = (staticHeight / screenHeight) * 100;

const Welcome = ({ navigation }) => {

    return (
        <>
            <LinearGradient
                style={styles.welcome}
                locations={[0, 1]}
                start={{ x: 0, y: 0 }} // Starting point at left
                end={{ x: 1, y: 0 }} // Ending point at right
                colors={["#2b8fe3", "#ea3690"]}
            >
                <SvgXml xml={Wave} />
                <Text style={styles.welcomeTitle}>WELCOME</Text>
                <View style={{ flex: .55, marginTop: hp('5%'), }}>
                    <LottieView
                        source={require('../../assets/animations/74935-remote-job.json')} // Replace with the path to your animation JSON file
                        autoPlay
                        loop
                    />
                </View>
                <Image source={require('../../assets/png/Welcome_Doodle_Dots.png')} style={styles.doodleDots} />
                <TouchableOpacity onPress={() => navigation.navigate('SecOnboard')} style={styles.backBtn}>
                    <AntDesign name="rightcircle" size={wp('16')} color="white" />
                </TouchableOpacity>
                <SvgXml xml={WhiteDoodles} style={styles.doodleDotsBottom} />
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        height: hp('100%'),
        // backgroundColor: "transparent",
        // overflow: "hidden",
        width: wp('100%'),
    },
    welcomeTitle: {
        marginTop: hp('10%'),
        color: 'white',
        fontWeight: '400',
        fontSize: wp('14%'),
        fontFamily: 'Rubik Mono One',
        alignSelf: 'center',

    },
    doodleDots: {
        position: 'absolute',
        width: widthPercentage,
        height: heightPercentage,
        top: hp('35%'),
        alignSelf: 'center',
    },
    backBtn: {
        position: 'absolute',
        bottom: hp('17%'),
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        shadowOpacity: 0.8, // Opacity of the shadow
        shadowRadius: 8, // Radius of the shadow
        shadowOffset: {
            width: 0, // Horizontal offset of the shadow
            height: 2, // Vertical offset of the shadow
        },
        elevation: 8, // Android shadow elevation
    },
    doodleDotsBottom: {
        position: 'absolute',
        bottom: hp('1%'),
        left: wp('1%'),
    },
});

export default Welcome;

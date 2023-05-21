import * as React from "react";
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import { WhiteDoodles, Wave } from '../../Components/OnboardingScreenComponent/Svg'

const { width, height } = Dimensions.get('screen');

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
                <View style={{ flex: .6, marginTop: 50, }}>
                    <LottieView
                        source={require('../../assets/animations/74935-remote-job.json')} // Replace with the path to your animation JSON file
                        autoPlay
                        loop
                    />
                </View>
                <Image source={require('../../assets/png/Welcome_Doodle_Dots.png')} style={styles.doodleDots} />
                <TouchableOpacity onPress={() => navigation.navigate('SecOnboard')} style={styles.backBtn}>
                    <AntDesign name="rightcircle" size={65} color="white" />
                </TouchableOpacity>
                <SvgXml xml={WhiteDoodles} width={414} height={118} style={styles.doodleDotsBottom} />
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        height: height * 2,
        // backgroundColor: "transparent",
        // overflow: "hidden",
        width: "100%",
    },
    welcomeTitle: {
        marginTop: 90,
        color: 'white',
        fontWeight: '400',
        fontSize: 46,
        fontFamily: 'Rubik Mono One',
        alignSelf: 'center',

    },
    doodleDots: {
        position: 'absolute',
        width: 260.56,
        height: 355.12,
        top: '35%',
        alignSelf: 'center',
    },
    backBtn: {
        position: 'absolute',
        bottom: 130,
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
        bottom: -1,
        left: -140,
    },
});

export default Welcome;

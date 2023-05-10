import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
import { Raleway } from '../../../assets/fonts/Raleway-Bold.ttf'
const Welcome = () => {
    //   const navigation = useNavigation();
    return (
        <LinearGradient
            style={styles.welcome}
            locations={[0, 1]}
            colors={["#2b8fe3", "#ea3690"]}
        >
            <Image
                style={[styles.vectorIcon, styles.iconPosition]}
                resizeMode="cover"
                // ../assets/vector3.png
                source={require("../../../assets/svg/Vector.png")}
            />
            <Text style={styles.welcome1}>Welcome</Text>
            <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../../../assets/svg/Frame.png")}
            />
            <Image
                style={[styles.doodleDotsIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../../../assets/svg/Doodle Dots8.png")}
            />
            <Image
                style={styles.pinkSmallDot}
                resizeMode="cover"
                source={require("../../../assets/svg/Pink Small Dot.png")}
            />
            <Image
                style={styles.doodleDotsIcon1}
                resizeMode="cover"
                source={require("../../../assets/svg/Doodle Dots.png")}
            />
            <Text style={[styles.onboarding, styles.slideUpPosition]}>
                Onboarding
            </Text>
            <Pressable
                style={[styles.slideUp, styles.slideUpPosition]}
                // () => navigation.navigate("PhotosToMemories3")
                onPress={() => ("")}
            >
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../../../assets/svg/Slide Up.png")}
                />
            </Pressable>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    iconPosition: {
        left: 0,
        position: "absolute",
    },
    slideUpPosition: {
        left: 88,
        position: "absolute",
    },
    vectorIcon: {
        top: 0,
        width: 414,
        height: 118,
    },
    welcome1: {
        top: 191,
        left: 44,
        fontSize: 56,
        fontFamily: 'Raleway',
        color: Color.white,
        textAlign: "center",
        width: 338,
        height: 57,
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {
            width: 0,
            height: 4,
        },
        textShadowRadius: 4,
        position: "absolute",
    },
    frameIcon: {
        top: 293,
        left: 21,
        width: 373,
        height: 373,
        position: "absolute",
        overflow: "hidden",
    },
    doodleDotsIcon: {
        top: 788,
        width: 158,
        height: 158,
    },
    pinkSmallDot: {
        top: 660,
        left: 285,
        width: 2,
        height: 2,
        position: "absolute",
    },
    doodleDotsIcon1: {
        top: 289,
        left: 75,
        width: 261,
        height: 355,
        position: "absolute",
    },
    onboarding: {
        top: -63,
        fontSize: FontSize.size_3xl,
        fontFamily: 'Ruslan Display',
        color: Color.black,
        textAlign: "left",
    },
    icon: {
        height: "100%",
        width: "100%",
    },
    slideUp: {
        top: 707,
        width: 235,
        height: 189,
    },
    welcome: {
        flex: 1,
        height: 896,
        backgroundColor: "transparent",
        overflow: "hidden",
        width: "100%",
    },
});

export default Welcome;

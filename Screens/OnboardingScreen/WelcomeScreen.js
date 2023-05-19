import * as React from "react";
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('screen');

const Welcome = ({ navigation }) => {
    const svgXml = `
    <svg width="117" height="108" viewBox="0 0 117 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter id="dropShadow" x="-10" y="-10" width="150" height="150">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset in="blur" dx="2" dy="4" result="offsetBlur" />
            <feFlood flood-color="#000000" flood-opacity="0.3" result="offsetColor" />
            <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur" />
            <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#dropShadow)">
    <g filter="url(#filter0_d_313_334)">
    <mask id="mask0_313_334" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-45" y="0" width="158" height="158">
    <circle cx="34" cy="79" r="79" fill="white"/>
    </mask>
    <g mask="url(#mask0_313_334)">
    <circle cx="15.8363" cy="3.4626" r="3.4626" fill="white"/>
    <circle cx="15.8363" cy="24.9306" r="3.4626" fill="white"/>
    <circle cx="15.8363" cy="46.3989" r="3.4626" fill="white"/>
    <circle cx="15.8363" cy="67.8669" r="3.4626" fill="white"/>
    <circle cx="15.8363" cy="89.3352" r="3.4626" fill="white"/>
    <circle cx="15.8363" cy="110.803" r="3.4626" fill="white"/>
    <circle cx="35.2269" cy="3.4626" r="3.4626" fill="white"/>
    <circle cx="35.2269" cy="24.9306" r="3.4626" fill="white"/>
    <circle cx="35.2269" cy="46.3989" r="3.4626" fill="white"/>
    <circle cx="35.2269" cy="67.8669" r="3.4626" fill="white"/>
    <circle cx="35.2269" cy="89.3352" r="3.4626" fill="white"/>
    <circle cx="35.2269" cy="110.803" r="3.4626" fill="white"/>
    <circle cx="54.6174" cy="3.4626" r="3.4626" fill="white"/>
    <circle cx="54.6174" cy="24.9306" r="3.4626" fill="white"/>
    <circle cx="54.6174" cy="46.3989" r="3.4626" fill="white"/>
    <circle cx="54.6174" cy="67.8669" r="3.4626" fill="white"/>
    <circle cx="54.6174" cy="89.3352" r="3.4626" fill="white"/>
    <circle cx="54.6174" cy="110.803" r="3.4626" fill="white"/>
    <circle cx="74.008" cy="3.4626" r="3.4626" fill="white"/>
    <circle cx="74.008" cy="24.9306" r="3.4626" fill="white"/>
    <circle cx="74.008" cy="46.3989" r="3.4626" fill="white"/>
    <circle cx="74.008" cy="67.8669" r="3.4626" fill="white"/>
    <circle cx="74.008" cy="89.3352" r="3.4626" fill="white"/>
    <circle cx="74.008" cy="110.803" r="3.4626" fill="white"/>
    <circle cx="93.3985" cy="3.4626" r="3.4626" fill="white"/>
    <circle cx="93.3985" cy="24.9306" r="3.4626" fill="white"/>
    <circle cx="93.3985" cy="46.3989" r="3.4626" fill="white"/>
    <circle cx="93.3985" cy="67.8669" r="3.4626" fill="white"/>
    <circle cx="93.3985" cy="89.3352" r="3.4626" fill="white"/>
    <circle cx="93.3985" cy="110.803" r="3.4626" fill="white"/>
    <circle cx="112.789" cy="3.4626" r="3.4626" fill="white"/>
    <circle cx="112.789" cy="24.9306" r="3.4626" fill="white"/>
    <circle cx="112.789" cy="46.3989" r="3.4626" fill="white"/>
    <circle cx="112.789" cy="67.8669" r="3.4626" fill="white"/>
    <circle cx="112.789" cy="89.3352" r="3.4626" fill="white"/>
    <circle cx="112.789" cy="110.803" r="3.4626" fill="white"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_313_334" x="-49" y="0" width="166" height="165.202" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_313_334"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_313_334" result="shape"/>
    </filter>
    </defs>
    </g>
</svg>
    `;
    const wave = `<svg width="414" height="118" viewBox="0 0 414 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_313_146)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 51L23 64.0465C46 77.093 92 102 138 96.0698C184 90.1395 230 51 276 47.4419C322 42.6977 368 72.3488 391 87.7674L414 102V0H391C368 0 322 0 276 0C230 0 184 0 138 0C92 0 46 0 23 0H0V51Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 51L23 64.0465C46 77.093 92 102 138 96.0698C184 90.1395 230 51 276 47.4419C322 42.6977 368 72.3488 391 87.7674L414 102V0H391C368 0 322 0 276 0C230 0 184 0 138 0C92 0 46 0 23 0H0V51Z" />
    </g>
    <defs>
    <filter id="filter0_d_313_146" x="-8" y="0" width="430" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="8"/>
    <feGaussianBlur stdDeviation="4"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_313_146"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_313_146" result="shape"/>
    </filter>
    </defs>
    </svg>
    `;

    return (
        <>
            <LinearGradient
                style={styles.welcome}
                locations={[0, 1]}
                start={{ x: 0, y: 0 }} // Starting point at left
                end={{ x: 1, y: 0 }} // Ending point at right
                colors={["#2b8fe3", "#ea3690"]}
            >
                <SvgXml xml={wave} width={414} height={118} />
                <Text style={styles.welcomeTitle}>WELCOME</Text>
                <View style={{ flex: .6, marginTop: 50, }}>
                    <LottieView
                        source={require('../../assets/animations/74935-remote-job.json')} // Replace with the path to your animation JSON file
                        autoPlay
                        loop
                    />
                </View>
                <Image source={require('../../assets/png/Welcome_Doodle_Dots.png')} style={styles.doodleDots} />
                <TouchableOpacity onPress={() => navigation.navigate('SecOnboardScreen')} style={styles.backBtn}>
                    <AntDesign name="rightcircle" size={65} color="white" />
                </TouchableOpacity>
                <SvgXml xml={svgXml} width={414} height={118} style={styles.doodleDotsBottom} />
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

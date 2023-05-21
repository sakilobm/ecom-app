import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { PinkBubble, Photographer, StarDots } from '../../Components/OnboardingScreenComponent/Svg'

const { width, height } = Dimensions.get('screen');

const SecOnboardScreen = ({ navigation }) => {
    return (
        <View style={{ width: width, height: height, }}>
            <Text style={styles.skip}>Skip</Text>
            <View style={{ marginTop: width / 2.9, }}>
                <SvgXml style={{ alignSelf: 'center', }} xml={PinkBubble} />
                {/* TODO: Find Correct Animation In LottieFiles */}
                <SvgXml style={{ alignSelf: 'center', position: 'absolute', marginTop: 40, }} xml={Photographer} width={298} height={199} />
            </View>
            <View style={{ marginTop: 35, marginLeft: 30, marginRight: -20, }}>
                <Text style={styles.bigTitleTop}>Preserve your</Text>
                <Text style={styles.bigTitleDown}>Memories</Text>
                <Text style={styles.subTitle}>We make your photos to lovable {'\n'}memories with our products</Text>
            </View>
            <SvgXml xml={StarDots} width={319.56} height={722.12} style={{ alignSelf: 'center', position: 'absolute', marginTop: 80, }} />
            <TouchableOpacity onPress={() => navigation.navigate('TrdOnboard')} style={styles.backBtn}>
                <AntDesign name="rightcircle" size={65} color="black" />
            </TouchableOpacity>
            <Image source={require('../../assets/png/Blue_Doodle_Dots.png')} style={styles.doodleDots} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    skip: {
        fontSize: 21,
        color: 'black',
        fontFamily: 'DM Sans',
        fontWeight: '800',
        position: 'absolute',
        right: 20,
        top: 50,
        textShadowColor: 'rgba(96, 96, 96, 0.7)',
        textShadowOffset: {
            width: 1,
            height: 3,
        },
        textShadowRadius: 8,
    },
    png: {
        position: 'absolute',
        height: 199,
        width: 298,
        zIndex: 2,
        alignSelf: 'center',
    },
    bigTitleTop: {
        fontSize: 45,
        fontStyle: 'normal',
        color: '#FF2E93',
        fontFamily: 'Raleway-Medium',
    },
    bigTitleDown: {
        marginTop: -5,
        fontSize: 45,
        color: '#142664',
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 5,
        fontSize: 18,
        color: 'black',
        fontFamily: 'Raleway-Bold',
    },
    backBtn: {
        position: 'absolute',
        bottom: width / 3.3,
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
    doodleDots: {
        marginTop: '37%',
    },
})
export default SecOnboardScreen
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { PinkBubble, Photographer, StarDots, BlueDoodle } from '../../Components/OnboardingScreenComponent/Svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('screen');

const SecOnboardScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.skip}>Skip</Text>
            <View style={{ marginTop: hp('13%'), }}>
                <SvgXml style={{ alignSelf: 'center', }} xml={PinkBubble} />
                {/* TODO: Find Correct Animation In LottieFiles */}
                <SvgXml style={{ alignSelf: 'center', position: 'absolute', marginTop: hp('5%'), }} xml={Photographer} />
            </View>
            <View style={{ marginTop: hp('0%'), marginLeft: wp('6%'), marginRight: wp('4%'), }}>
                <Text style={styles.bigTitleTop}>Preserve your</Text>
                <Text style={styles.bigTitleDown}>Memories</Text>
                <Text style={styles.subTitle}>We make your photos to lovable {'\n'}memories with our products</Text>
            </View>
            <SvgXml xml={StarDots} style={{ alignSelf: 'center', position: 'absolute', marginTop: hp('10%'), }} />
            <TouchableOpacity onPress={() => navigation.navigate('TrdOnboard')} style={styles.backBtn}>
                <AntDesign name="rightcircle" size={wp('17%')} color="black" />
            </TouchableOpacity>
            <Image source={require('../../assets/png/Blue_Doodle_Dots.png')} style={styles.doodleDots} />
        </View>
    )
}
const styles = StyleSheet.create({
    skip: {
        fontSize: wp('6%'),
        color: 'black',
        fontFamily: 'DM Sans',
        fontWeight: '800',
        position: 'absolute',
        right: wp('6%'),
        top: wp('11%'),
        textShadowColor: 'rgba(96, 96, 96, 0.7)',
        textShadowOffset: {
            width: 1,
            height: 3,
        },
        textShadowRadius: 8,
    },
    bigTitleTop: {
        fontSize: wp('11%'),
        fontStyle: 'normal',
        color: '#FF2E93',
        fontFamily: 'Raleway-Medium',
    },
    bigTitleDown: {
        marginTop: -5,
        fontSize: wp('11%'),
        color: '#142664',
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 5,
        fontSize: wp('5%'),
        color: 'black',
        fontFamily: 'Raleway-Bold',
    },
    backBtn: {
        position: 'absolute',
        bottom: hp('15%'),
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
        marginTop: hp('20%'),
    },
})
export default SecOnboardScreen
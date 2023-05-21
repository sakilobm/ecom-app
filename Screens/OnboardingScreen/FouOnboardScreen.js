import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { FouBubble, FouSticker, WhiteDoodles, TrdStar } from '../../Components/OnboardingScreenComponent/Svg'

const { width, height } = Dimensions.get('screen');

const SecOnboardScreen = ({ navigation }) => {
    return (
        <View style={{ width: width, height: height, backgroundColor: '#FF2E93', }}>
            <Text style={styles.skip}>Skip</Text>
            <View style={{ marginTop: width / 3, }}>
                <SvgXml style={{ alignSelf: 'center', }} xml={FouBubble} />
                <SvgXml style={{ alignSelf: 'center', position: 'absolute', }} xml={FouSticker} />
            </View>
            <View style={{ marginTop: 30, marginLeft: 25, marginRight: -20, }}>
                <Text style={styles.bigTitleTop}>Frame Your</Text>
                <Text style={styles.bigTitleDown}>Memories</Text>
                <Text style={styles.subTitle}>Frames are made from high-quality materials & lot of variety</Text>
            </View>
            <SvgXml xml={TrdStar} width={319.56} height={722.12} style={{ alignSelf: 'center', position: 'absolute', marginTop: 80, }} />
            <TouchableOpacity onPress={() => navigation.navigate('FitOnboard')} style={styles.backBtn}>
                <AntDesign name="rightcircle" size={65} color="white" />
            </TouchableOpacity>
            <SvgXml xml={WhiteDoodles} width={414} height={118} style={styles.doodleDotsBottom} />
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
        color: 'white',
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
        color: 'white',
        fontFamily: 'Raleway-Medium',
    },
    bigTitleDown: {
        marginTop: -5,
        fontSize: 45,
        color: '#1A1464',
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 5,
        fontSize: 20,
        color: '#4D0C4A',
        fontFamily: 'Raleway-Bold',
    },
    backBtn: {
        position: 'absolute',
        bottom: width / 3.5,
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
    doodleDotsBottom: {
        position: 'absolute',
        bottom: 0,
        left: -140,
    },
})
export default SecOnboardScreen
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { TrdBubble, TrdSticker, WhiteDoodles, TrdStar } from '../../Components/OnboardingScreenComponent/Svg'

const { width, height } = Dimensions.get('screen');

const SecOnboardScreen = ({ navigation }) => {
    return (
        <View style={{ width: width, height: height, backgroundColor: '#00E6B3', }}>
            <Text style={styles.skip}>Skip</Text>
            <View style={{ marginTop: width / 3, }}>
                <SvgXml style={{ alignSelf: 'center', }} xml={TrdBubble} />
                <SvgXml style={{ alignSelf: 'center', position: 'absolute', }} xml={TrdSticker} />
            </View>
            <View style={{ marginTop: 50, marginLeft: 30, marginRight: -20, }}>
                <Text style={styles.bigTitleTop}>Custom Your</Text>
                <Text style={styles.bigTitleDown}>Creations</Text>
                <Text style={styles.subTitle}>Get a personalized product with {'\n'}your own photos or designs</Text>
            </View>
            <SvgXml xml={TrdStar} width={319.56} height={722.12} style={{ alignSelf: 'center', position: 'absolute', marginTop: 80, }} />
            <TouchableOpacity onPress={() => navigation.navigate('FouOnboard')} style={styles.backBtn}>
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
        fontSize: 18,
        color: '#1D4D0C',
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
    doodleDotsBottom: {
        position: 'absolute',
        bottom: 0,
        left: -140,
    },
})
export default SecOnboardScreen
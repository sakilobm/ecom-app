import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';

const ProductFrameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSide}>
                <AntDesign onPress={() => navigation.goBack()} style={styles.close} name="closecircleo" size={40} color="white" />
                <Text style={styles.tittle}>Frame</Text>
            </View>
            <Image style={styles.frame} source={require('../assets/png/Blue_Frame.png')}></Image>
            <View style={styles.bottomSide}>
                <View style={styles.slideBtnContainer}>
                    <AntDesign name="leftcircleo" size={40} color="white" />
                    <AntDesign name="rightcircleo" size={40} color="white" />
                </View>
                <View style={styles.detailsCon}>
                    <Text style={styles.firstTitle}>FINALIST</Text>
                    <Text style={styles.secondTitle}>WOODEN FRAME</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductFrameDetail')} style={styles.moreBtn}>
                    <Text style={styles.moreBtnText}>MORE STATE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    topSide: {
        width: wp('100%'),
        height: hp('45%'),
        backgroundColor: '#1D1A1A',
    },
    close: {
        alignSelf: 'flex-end',
        top: hp('6%'),
        right: wp('6%'),
    },
    tittle: {
        fontFamily: 'Rubik Mono One',
        color: '#4A4A4A',
        fontSize: wp('20%'),
        alignSelf: 'center',
        marginTop: hp('10%'),
    },
    bottomSide: {
        backgroundColor: '#0085AF',
        width: wp('100%'),
        height: hp('65%'),
    },
    slideBtnContainer: {
        marginTop: hp('3%'),
        marginRight: hp('3%'),
        marginLeft: hp('3%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    frame: {
        position: 'absolute',
        zIndex: 1,
        top: hp('32%'),
        marginLeft: hp('10%'),
        width: wp('60%'),
        height: hp('60%'),
    },
    detailsCon: {
        alignSelf: 'center',
        marginTop: hp('23%'),
    },
    firstTitle: {
        textAlign: 'center',
        fontFamily: 'Righteous',
        marginBottom: hp('1.5%'),
    },
    secondTitle: {
        fontFamily: 'Righteous',
        color: 'white',
        fontSize: wp('5%'),
    },
    moreBtn: {
        width: wp('30%'),
        height: hp('4%'),
        marginTop: hp('8%'),
        borderRadius: 30,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreBtnText: {
        fontSize: 9,
        fontFamily: 'RocknRoll One',
    },
})
export default ProductFrameScreen
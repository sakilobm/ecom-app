import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';

const ProductFrameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSide}>
                <Text style={styles.tittle}>Frame</Text>
            </View>
            <Image style={styles.frame} source={require('../assets/png/Blue_Frame.png')}></Image>
            <View style={styles.bottomSide}>
                <AntDesign onPress={() => navigation.goBack()} style={styles.close} name="closecircleo" size={40} color="white" />
                <View style={styles.detailsCon}>
                    <Text style={styles.firstTitle}>SIZE</Text>
                    <Text style={styles.firstTitle}>12 X 18</Text>
                    <Text style={styles.firstTitle}>NAME</Text>
                    <Text style={styles.firstTitle}>WOODEN FRAME</Text>
                    <Text style={styles.firstTitle}>NAME</Text>
                </View>
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
    tittle: {
        fontFamily: 'Rubik Mono One',
        color: '#4A4A4A',
        fontSize: wp('20%'),
        alignSelf: 'center',
        marginTop: hp('15%'),
    },
    frame: {
        position: 'absolute',
        zIndex: 1,
        top: hp('32%'),
        marginLeft: hp('-10%'),
        width: wp('60%'),
        height: hp('60%'),
    },
    bottomSide: {
        backgroundColor: '#0085AF',
        width: wp('100%'),
        height: hp('65%'),
    },

    close: {
        alignSelf: 'flex-end',
        marginTop: hp('8%'),
        marginRight: wp('5%'),
    },
    detailsCon: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: hp('5%'),
    },
    firstTitle: {
        fontFamily: 'Righteous',
        marginBottom: hp('5%'),
        color: 'white',
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
        fontSize: 8,
        fontFamily: 'RocknRoll One',
    },
})
export default ProductFrameScreen
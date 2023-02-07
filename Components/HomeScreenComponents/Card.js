import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, } from 'react-native'
import React from 'react';
import { FontFamily } from "../../GlobalStyles";
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
const data = [
    { key: 'Double Color', rate: '₹779.00', cateConClr: 'white', category: 'Coffee Cup', color: "#3F3F3F", image: require('../../assets/png/1.png') },
    { key: 'Imaged Cup', rate: '₹679.00', cateConClr: 'white', category: 'Coffee Cup', color: "#2C9CBF", image: require('../../assets/png/2.png') },
    { key: 'Dark Russel', rate: '₹679.00', cateConClr: 'white', category: 'Coffee Cup', color: "#B9944F", image: require('../../assets/png/3.png') },
    { key: 'Leaf Design', rate: '₹999.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#96B249", image: require('../../assets/png/4.png') },
    { key: 'Plain red Cup', rate: '₹879.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#FFC0BB", image: require('../../assets/png/5.png') },
    { key: 'Deep Rever', rate: '₹779.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#DDCDFE", image: require('../../assets/png/6.png') },
];
const Card = () => {

    return (
        <>
            <View style={styles.Container} >
                <Text style={styles.subTitleBoldy}>Mugs<Text style={styles.subTitle}> Collections </Text></Text>
                <TouchableOpacity>
                    <FontAwesome name="long-arrow-right" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { overflow: 'hidden' }]} >
                        {/* TODO: Cards Rotation Animation : YT SAVE LIST NAME : OBM APP */}
                        <View style={[styles.card, { backgroundColor: item.color }]}>
                            <View style={[styles.cardImageContainer]}>
                                <Image source={item.image} style={styles.cardImage} />
                            </View>
                            <BlurView intensity={250}
                                style={styles.blurContainer} />
                            {/* <View style={styles.blurContainer} /> */}
                            <View style={{ position: 'absolute', }} >
                                <View style={styles.cardTextContainer}>
                                    <Text style={styles.cardText}>{item.key}</Text>
                                </View>
                                <View style={[styles.categoryContainer, { backgroundColor: item.cateConClr }]} >
                                    <Text style={[styles.category, { color: item.color }]} >{item.category}</Text>
                                </View>
                            </View>
                            <BlurView
                                intensity={150}
                                style={styles.buyContainer}
                            >
                                <Text style={styles.buyText}>{item.rate}</Text>
                                <TouchableOpacity>
                                    <Image style={styles.buyIcon} source={require('../../assets/png/Buy.png')} ></Image>
                                </TouchableOpacity>
                            </BlurView>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.FlatList}
            />
        </>
    )
}
const styles = StyleSheet.create({
    FlatList: {
        marginTop: 10,
        // backgroundColor: 'grey',
    },
    Container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
    },
    subTitleBoldy: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subTitle: {
        fontWeight: 'normal',
    },
    card: {
        marginTop: 20,
        marginLeft: 20,
        width: 324,
        height: 406,
        borderRadius: 50,
    },
    blurContainer: {
        borderBottomRightRadius: 90,
        borderTopLeftRadius: 50,
        backgroundColor: 'white',
        opacity: 0.5,
        position: 'absolute',
        width: 200,
        height: 200,
        top: 0,
        left: 0,
        bottom: 200,
    },
    cardContainer: {
        marginRight: 10,
    },
    cardText: {
        fontSize: 30,
        fontFamily: FontFamily.raleway,
        color: 'white',
        // shadow
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',

    },
    cardTextContainer: {
        width: 150,
        marginTop: 35,
        marginLeft: 40,
        marginRight: 10,
        lineHeight: 40,
    },
    cardImage: {
        width: 500,
        height: 500,
    },
    buyContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 44,
        top: 300,
        left: '9%',
        width: 250,
        height: 70,
        color: 'rgba(255, 255, 255, 0.6) )',
    },
    buyText: {
        fontSize: 20,
        fontFamily: FontFamily.purplePurse,
    },
    categoryContainer: {
        width: 125,
        height: 40,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // Shadow Properties
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    category: {
        fontSize: 14,
        fontFamily: FontFamily.ralewayMedium,
    },
    bottomBarContainer: {
        height: 110,
        width: 390,
        backgroundColor: 'black',
        left: 0,
        top: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cartCounter: {
        height: 43,
        width: 43,
        top: 25,
        backgroundColor: '#FFEC89',
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },




});
export default Card;


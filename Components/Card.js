import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, } from 'react-native'
import React, { useState } from 'react';
import { FontFamily } from "./GlobalStyles";
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
const data = [
    { key: 'Double Color', rate: '₹779.00', cateConClr: 'white', category: 'Coffee Cup', color: "#3F3F3F", image: require('../assets/png/1.png') },
    { key: 'Imaged Cup', rate: '₹679.00', cateConClr: 'white', category: 'Coffee Cup', color: "#2C9CBF", image: require('../assets/png/2.png') },
    { key: 'Dark Russel', rate: '₹679.00', cateConClr: 'white', category: 'Coffee Cup', color: "#B9944F", image: require('../assets/png/3.png') },
    { key: 'Leaf Design', rate: '₹999.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#96B249", image: require('../assets/png/4.png') },
    { key: 'Plain red Cup', rate: '₹879.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#FFC0BB", image: require('../assets/png/5.png') },
    { key: 'Deep Rever', rate: '₹779.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#DDCDFE", image: require('../assets/png/5.png') },
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
                    <View style={[styles.cardContainer]} >
                        {/* TODO: Cards Rotation Animation : YT SAVE LIST NAME : OBM APP */}
                        <View style={[styles.card, { backgroundColor: item.color }]}>
                            {/* <View style={[styles.cardImageContainer, { overflow: 'hidden' }]}>
                                    <Image source={item.image} style={styles.cardImage} />
                                </View> */}
                            <BlurView
                                intensity={80}
                                style={styles.blurContainer}
                            >
                                <View style={styles.cardTextContainer}>
                                    <Text style={styles.cardText}>{item.key}</Text>
                                </View>
                                <View style={[styles.categoryContainer, { backgroundColor: item.cateConClr }]} >
                                    <Text style={[styles.category, { color: item.color }]} >{item.category}</Text>
                                </View>
                            </BlurView>
                            <BlurView
                                intensity={100}
                                style={styles.buyContainer}
                            >
                                <Text style={styles.buyText}>{item.rate}</Text>
                                <TouchableOpacity>
                                    <Image style={styles.buyIcon} source={require('../assets/png/Buy.png')} ></Image>
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
            <View style={styles.bottomBarContainer}>
                <Image style={styles.bottomBar} source={require('../assets/png/Bottom Navigation.png')} >
                </Image>
            </View>
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
        marginTop: 40,
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
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 200,

    },
    cardContainer: {
        // backgroundColor: 'black',
    },
    cardText: {
        fontSize: 30,
        fontFamily: FontFamily.raleway,
        color: 'white',

        // shadow
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        elevation: 5,

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
        top: 0,
        resizeMode: 'contain',
    },
    buyContainer: {
        flexDirection: 'row',
        // position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 44,
        top: 300,
        left: '9%',
        width: 250,
        height: 70,
    },
    buyText: {
        fontSize: 20,
        fontFamily: FontFamily.purplePurse,
    },
    cardImageContainer: {
        width: 400,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',

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
        
    },
    bottomBar: {
        width: '100%',
        height: '5%',
    },
});
export default Card;


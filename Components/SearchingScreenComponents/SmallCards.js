import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { FontFamily } from "../GlobalStyles";
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Filter from './Filter';
const data = [
    { key: 'Double \nColor', rate: '₹779.00', cateConClr: 'white', category: 'Coffee Cup', color: "#3F3F3F", image: require('../../assets/png/1.png') },
    { key: 'Imaged \nCup', rate: '₹679.00', cateConClr: 'white', category: 'Coffee Cup', color: "#2C9CBF", image: require('../../assets/png/2.png') },
    { key: 'Dark \nRussel', rate: '₹679.00', cateConClr: 'white', category: 'Coffee Cup', color: "#B9944F", image: require('../../assets/png/3.png') },
    { key: 'Leaf \nDesign', rate: '₹999.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#96B249", image: require('../../assets/png/4.png') },
    { key: 'Plain \nred Cup', rate: '₹879.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#FFC0BB", image: require('../../assets/png/5.png') },
    { key: 'Deep \nRever', rate: '₹779.00', cateConClr: '#454A4B', category: 'Coffee Cup', color: "#DDCDFE", image: require('../../assets/png/6.png') },
];
const SmallCards = () => {
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { overflow: 'hidden' }]} >
                        {/* TODO: Cards Rotation Animation : YT SAVE LIST NAME : OBM APP */}
                        <View style={[styles.card, { backgroundColor: item.color }]}>
                            <BlurView intensity={250} style={styles.blurContainer} />

                            <View style={{ position: 'absolute', top: -15, left: -15, }} >
                                <View style={styles.cardTextContainer}>
                                    <Text style={styles.cardText}>{item.key}</Text>
                                </View>
                                <View style={[styles.categoryContainer, { backgroundColor: item.cateConClr }]} >
                                    <Text style={[styles.category, { color: item.color }]} >{item.category}</Text>
                                </View>
                            </View>
                            {/* TODO CardImage Should Be In Same Size */}
                            <Image style={styles.cardImage} source={item.image} />
                            <BlurView
                                intensity={150}
                                style={styles.buyContainer}>
                                <Text style={styles.buyText}>{item.rate}</Text>
                                <TouchableOpacity>
                                    <Image style={styles.buyIcon} source={require('../../assets/png/Buy.png')} ></Image>
                                </TouchableOpacity>
                            </BlurView>

                        </View>
                    </View>
                )}
                keyExtractor={item => item.key}
                vertical={true}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.FlatList}
            />
        </>
    )
}
const styles = StyleSheet.create({
    FlatList: {
        flexDirection: 'column',
        paddingBottom: 60,
    },
    Container: {
        justifyContent: 'space-around',
        alignItems: 'center',
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
        marginTop: 15,
        marginLeft: 17,
        width: 170,
        height: 215,
        borderRadius: 30,
    },
    blurContainer: {
        borderBottomRightRadius: 60,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        opacity: 0.5,
        position: 'absolute',
        width: 120,
        height: 120,
        top: 0,
        left: -10,
        bottom: 200,
    },
    cardContainer: {
    },
    cardText: {
        fontSize: 16,
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
        top: 40,
        left: 30,
        width: 200,
        height: 200,
    },
    buyContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 44,
        top: 150,
        left: '5%',
        width: 150,
        height: 39,
        color: 'rgba(255, 255, 255, 0.6) )',
    },
    buyText: {
        fontSize: 10,
        fontFamily: FontFamily.purplePurse,
        left: 10,
    },
    buyIcon: {
        width: 44.07,
        height: 33.35,
        right: -10,
    },
    categoryContainer: {
        width: 60,
        height: 25,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 40,
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
        fontSize: 9,
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

export default SmallCards;
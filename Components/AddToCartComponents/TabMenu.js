import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { FontFamily } from '../../GlobalStyles'
import data from './data'
const TabMenu = () => {
    return (
        <View style={styles.tabMenu} >
            <Svg style={{ bottom: -80, left: -20 }} width="428" height="802" viewBox="0 0 428 802" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0 57.23C0 27.8319 23.8319 4 53.23 4H148.06C152.314 4 156.528 4.81678 160.474 6.40597L172.228 11.14C177.362 13.2074 182.844 14.27 188.378 14.27H241.286C245.393 14.27 249.465 13.5086 253.294 12.0245L268.206 6.24545C272.035 4.76135 276.107 4 280.214 4H374.77C404.168 4 428 27.8319 428 57.23V663.77C428 682.122 413.122 802 394.77 802H33.23C14.8776 802 0 682.122 0 663.77V57.23Z" fill="#1A1A1A" />
                <Path d="M192 4H236" stroke="#959595" strokeWidth="8" strokeLinecap="round" />
                <FlatList
                    keyExtractor={(item) => item.key}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    vertical={true}
                    contentContainerStyle={styles.FlatList}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer} >
                            <View style={styles.addToCartCircle} >
                                <Image style={styles.addToCartCircleImage} source={item.imageUri} />
                            </View>
                            <View>
                                <Text style={styles.addToCartHeading} >{item.heading}</Text>
                                <Text style={styles.addToCartSubHeading} >{item.sub}</Text>
                            </View>
                            <View style={styles.rateContainer} >
                                <Text style={styles.rate} >{item.rate}</Text>
                            </View>
                        </View>
                    )} />
            </Svg>
        </View>
    )
}
const styles = StyleSheet.create({
    FlatList: {
        flexDirection: 'column',
        paddingBottom: 20,
    },
    tabMenu: {
        // height: 800,
    },
    itemContainer: {
        padding: 20,
        top: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    addToCartCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        backgroundColor: 'white',
        borderRadius: 60,
    },
    addToCartCircleImage: {
        width: 70,
        height: 70,
    },
    addToCartHeading: {
        color: 'white',
        fontSize: 16,
        fontFamily: FontFamily.rocknRollOne,
    },
    addToCartSubHeading: {
        color: 'gray',
        fontSize: 13,
        fontFamily: FontFamily.rocknRollOne,
    },
    rate: {
        top: -2,
        color: 'black',
        fontSize: 15,
        fontFamily: FontFamily.raleway,
    },
    rateContainer: {
        backgroundColor: 'white',
        width: 90,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default TabMenu;
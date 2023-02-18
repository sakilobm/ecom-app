import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import React from 'react'
import { FontFamily } from '../../GlobalStyles'

const Header = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Heading}>Cart</Text>
                <TouchableOpacity style={styles.circleContainer}>
                    <Text style={styles.circleText}> 3 </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    Header: {
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Heading: {
        top: 60,
        fontSize: 46,
        color: 'black',
        fontFamily: FontFamily.urbanist,
    },
    circleContainer: {
        top: 65,
        height: 50,
        width: 50,
        backgroundColor: '#FFEC89',
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        fontSize: 18,
        fontFamily: FontFamily.ralewayMedium,
    },
})
export default Header;
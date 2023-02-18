import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Svg, Path, Rect } from 'react-native-svg'
import { FontFamily } from '../../GlobalStyles'
const PaymentButton = () => {
    return (
        <View style={{ alignItems: 'center', flexDirection: 'column', }} >
            <TouchableOpacity style={styles.paymentButton} >
                <Text style={styles.paymentButtonText} >Make Payment</Text>
                <Svg style={styles.forwardBtn} width="105" height="80" viewBox="0 0 105 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect x="104.937" y="0.0629883" width="79.1111" height="104.54" rx="39.5556" transform="rotate(90 104.937 0.0629883)" fill="#FFEC89" />
                    <Path d="M34.279 31.2734C33.9409 31.6049 33.9102 32.1235 34.1868 32.489L34.279 32.5937L41.9098 40.0741L34.279 47.5546C33.9409 47.886 33.9102 48.4047 34.1868 48.7701L34.279 48.8748C34.6171 49.2063 35.1461 49.2364 35.5189 48.9652L35.6257 48.8748L43.9296 40.7343C44.2677 40.4028 44.2984 39.8842 44.0218 39.5187L43.9296 39.414L35.6257 31.2734C35.2538 30.9089 34.6509 30.9089 34.279 31.2734Z" fill="black" fillOpacity="0.3" />
                    <Path d="M48.4865 31.2734C48.1484 31.6049 48.1177 32.1235 48.3943 32.489L48.4865 32.5937L56.1173 40.0741L48.4865 47.5546C48.1484 47.886 48.1177 48.4047 48.3943 48.7701L48.4865 48.8748C48.8246 49.2063 49.3536 49.2364 49.7264 48.9652L49.8332 48.8748L58.1371 40.7343C58.4752 40.4028 58.5059 39.8842 58.2293 39.5187L58.1371 39.414L49.8332 31.2734C49.4614 30.9089 48.8584 30.9089 48.4865 31.2734Z" fill="black" fillOpacity="0.6" />
                    <Path d="M62.6945 31.2734C62.3565 31.6049 62.3257 32.1235 62.6023 32.489L62.6945 32.5937L70.3253 40.0741L62.6945 47.5546C62.3565 47.886 62.3257 48.4047 62.6023 48.7701L62.6945 48.8748C63.0326 49.2063 63.5617 49.2364 63.9345 48.9652L64.0413 48.8748L72.3451 40.7343C72.6832 40.4028 72.7139 39.8842 72.4373 39.5187L72.3451 39.414L64.0413 31.2734C63.6694 30.9089 63.0664 30.9089 62.6945 31.2734Z" fill="black" />
                </Svg>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    paymentButton: {
        top: -305,
        // left: 25,
        width: 340,
        height: 96,
        backgroundColor: 'white',
        borderRadius: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    paymentButtonText: {
        color: 'black',
        fontSize: 16,
        right: -35,
        fontFamily: FontFamily.rocknRollOne,
    },
    forwardBtn: {
        right: -19,
    }
})

export default PaymentButton;
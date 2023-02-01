import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontFamily } from './GlobalStyles'
import { Ionicons } from '@expo/vector-icons';
const TabBarCategory = () => (
    <View style={styles.container} >
        <TouchableOpacity style={styles.unSelectedButton} >
            <Text style={{ color: 'black', fontSize: 13, fontFamily: FontFamily.rocknRollOne, }} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectedButton} >
            <Ionicons size={25} name="cafe-outline" color="#DBBF2E" ></Ionicons>
            <Text style={{ color: 'white', fontSize: 13, fontFamily: FontFamily.rocknRollOne, }} >  Mugs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unSelectedButton} >
            {/* <Text style={{ color: 'black', fontSize: 13, fontFamily: FontFamily.rocknRollOne, }} >Frame</Text> */}
            <Ionicons size={25} name="images-outline" color="#1A1A1A" ></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unSelectedButton} >
            {/* <Text style={{ color: 'black', fontSize: 13, fontFamily: FontFamily.rocknRollOne, }} >Album</Text> */}
            <Ionicons size={25} name="albums-outline" color="#1A1A1A" ></Ionicons>
        </TouchableOpacity>
        
    </View>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 60,
    },
    unSelectedButton: {
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 69,
        height: 69,
        borderRadius: 38,
        backgroundColor: '#E0DFE2'
    },
    selectedButton: {
        flexDirection: 'row',
        marginLeft: 7,
        justifyContent: 'center',
        alignItems: 'center',
        width: 121,
        height: 69,
        borderRadius: 38,
        backgroundColor: '#1A1A1A'
    },
    
})

export default TabBarCategory;

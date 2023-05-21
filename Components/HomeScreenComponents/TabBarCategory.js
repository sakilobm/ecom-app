import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontFamily } from '../GlobalStyles'
import { Ionicons } from '@expo/vector-icons';

const TabBarCategory = ({ navigation }) => {
    const [selected, setSelected] = useState('Mugs');

    const onPress = (category) => {
        setSelected(category); // Update the selected category
        if (category === 'Frame') {
            navigation.navigate('ProductFrame');
        }
        if (category === 'Mugs') {
            navigation.navigate('Mug');
        }

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress('All')} style={selected === 'All' ? styles.selectedButton : styles.unSelectedButton} >
                <Text style={{ color: selected === 'All' ? 'white' : 'black', fontSize: 13, fontFamily: 'RocknRoll One', }} >All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress('Mugs')} style={selected === 'Mugs' ? styles.selectedButton : styles.unSelectedButton} >
                <Ionicons size={25} name="cafe-outline" color={selected === 'Mugs' ? "#DBBF2E" : "#1A1A1A"} ></Ionicons>
                <Text style={{ color: selected === 'Mugs' ? 'white' : 'black', fontSize: 13, fontFamily: 'RocknRoll One', display: selected === 'Mugs' ? 'flex' : 'none', marginLeft: 8, }} >Mugs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress('Frame')} style={selected === 'Frame' ? styles.selectedButton : styles.unSelectedButton} >
                <Ionicons size={25} name="images-outline" color={selected === 'Frame' ? "#DBBF2E" : "#1A1A1A"} ></Ionicons>
                <Text style={{ color: selected === 'Frame' ? 'white' : 'black', fontSize: 13, fontFamily: 'RocknRoll One', display: selected === 'Frame' ? 'flex' : 'none', marginLeft: 8, }} >Frame</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress('Album')} style={selected === 'Album' ? styles.selectedButton : styles.unSelectedButton} >
                <Ionicons size={25} name="albums-outline" color={selected === 'Album' ? "#DBBF2E" : "#1A1A1A"} ></Ionicons>
                <Text style={{ color: selected === 'Album' ? 'white' : 'black', fontSize: 13, fontFamily: 'RocknRoll One', display: selected === 'Album' ? 'flex' : 'none', marginLeft: 8, }} >Album</Text>
            </TouchableOpacity>
        </View>
    )
};
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

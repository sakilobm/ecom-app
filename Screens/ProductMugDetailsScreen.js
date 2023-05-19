import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'

const { width, height } = Dimensions.get('screen');
const letterAnimation = {
    0: { opacity: 0, translateY: -42 },
    1: { opacity: 1, translateY: 0 }
}

const ProductMugDetailsScreen = ({ navigation, route }) => {
    const circleSize = Math.sqrt(Math.pow(height, 3) + Math.pow(width, 2))
    const { item } = route.params;
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={{ position: 'absolute', right: 0, zIndex: 2, }}>
                    <AntDesign name="close" onPress={() => navigation.goBack()} size={34} color="black" />
                </TouchableOpacity>
                <View style={[StyleSheet.absoluteFillObject, { alignItems: 'center', justifyContent: 'center', }]}>
                    <View style={{ position: 'absolute', width: circleSize, height: circleSize, backgroundColor: item.secColor, borderRadius: circleSize, opacity: 0.2, }} />
                </View>
                <Image source={item.imageUri} style={styles.image} />
                <View style={{ position: 'absolute', top: 10, }}>
                    <View style={{ flexDirection: 'row', overflow: 'hidden', height: 42, }}>
                        {item.type.split('').map((letter, index) => {
                            return <Animatable.Text
                                useNativeDriver
                                animation={letterAnimation}
                                delay={300 + (index * 50)}
                                key={`${letter}-${index}`} style={styles.heading}>
                                {letter}
                            </Animatable.Text>
                        })}
                    </View>
                    <View style={{ overflow: 'hidden', }}>
                        <Animatable.Text
                            useNativeDriver
                            animation={letterAnimation}
                            delay={300 + item.type.split('').length * 50 + 50}
                            style={{ fontSize: 20, fontWeight: '800', textTransform: 'uppercase', color: item.color }}>
                            {item.colorName}
                        </Animatable.Text>
                    </View>
                </View>
            </View>

</SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20,
        // flex: 1,
    },
    heading: {
        color: '#333',
        height: 42,
        fontFamily: 'RocknRoll One',
        textTransform: 'uppercase',
        fontSize: 32,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: 5,
    },
    image: {
        width: width * 1.3,
        height: width * 1.3,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
})
export default ProductMugDetailsScreen
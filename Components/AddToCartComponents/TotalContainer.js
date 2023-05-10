import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Svg, Path, G, Rect, ClipPath, Defs } from 'react-native-svg'

const TotalContainer = () => {
    return (
        <Svg style={{ top: -330, }} width="356" height="188" viewBox="0 0 356 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0_1240_157)">
                <Path d="M44.2754 0C19.8228 0 0 19.8247 0 44.2798V143.72C0 168.175 19.8228 188 44.2754 188H122.565C126.483 188 130.356 187.167 133.928 185.556L142.67 181.613C147.317 179.517 152.356 178.434 157.453 178.434H200.126C203.911 178.434 207.656 179.211 211.129 180.718L222.642 185.715C226.115 187.222 229.86 188 233.645 188H311.725C336.177 188 356 168.175 356 143.72V44.2798C356 19.8248 336.177 0 311.725 0H233.645C229.86 0 226.115 0.777674 222.642 2.2848L211.129 7.28157C207.656 8.7887 203.911 9.56637 200.126 9.56637H157.453C152.356 9.56637 147.317 8.4826 142.67 6.38692L133.928 2.44398C130.356 0.833075 126.483 0 122.565 0H44.2754Z" fill="#FFEC89" />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                    <Text style={styles.delivery} >Delivery Amount </Text>
                    <Text style={styles.deliveryRate}> ₹50</Text>
                </View>
                <Path d="M35 75H315" stroke="black" strokeOpacity="0.3" strokeLinecap="round" />
                <View style={{ width: 356, height: 188, left: 40, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }} >
                    <View style={{ top: 5, }} >
                        <Text style={styles.total} >Total Amount</Text>
                        <Text style={styles.totalRate}>IND 635</Text>
                    </View>
                    <View style={styles.totalImage}>
                        <Image style={{ width: 140, height: 140, top: -5, left: 30, zIndex: 1, }} source={require("../../assets/png/10.png")} />
                        <Image style={{ width: 120, height: 120, top: -170, }} source={require("../../assets/png/8.png")} />
                        <Image style={{ width: 110, height: 110, top: -290, left: 80, }} source={require("../../assets/png/9.png")} />
                    </View>
                </View>
            </G>
            <Defs>
                <ClipPath id="clip0_1240_157">
                    <Rect width="356" height="188" rx="40" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
const styles = StyleSheet.create({
    delivery: {
        top: 40,
        left: 40,
        fontSize: 16,
        fontFamily: 'RocknRoll One',
    },
    deliveryRate: {
        top: 40,
        right: 40,
        fontSize: 16,
        fontFamily: 'Raleway',
    },
    total: {
        top: 70,
        fontSize: 17,
        fontFamily: 'RocknRoll One',
    },
    totalRate: {
        top: 70,
        left: 40,
        fontSize: 29,
        fontFamily: 'Raleway',
    },
    totalImage: {
        top: 5,
        left: 140,
        width: 180,
        height: 140,
        // backgroundColor: 'black',
    },
})
export default TotalContainer;
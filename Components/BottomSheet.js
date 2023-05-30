import { View, Text, StyleSheet, Dimensions, PanResponder, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Gesture, GestureDetector, PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const START_VALUE = 0;
const BottomSheet = () => {

    const [containerHeight, setContainerHeight] = useState(40);
    const [previousHeight, setPreviousHeight] = useState(containerHeight);
    const translateY = useSharedValue(START_VALUE)
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                const newHeight = Math.max(windowHeight - gestureState.dy);
                setContainerHeight(newHeight + previousHeight);
                setPreviousHeight(newHeight);
            },
            onPanResponderRelease: () => {
                // Add any necessary logic here for when the pan gesture is released
            },
        })
    ).current;

    const onGesture = Gesture.Pan().onUpdate((event) => {
        translateY.value = event.translationY
    })

    const toggleOnMenu = () => {
        if (containerHeight !== 300) {
            setContainerHeight(300);
        } else if (containerHeight !== 40) {
            setContainerHeight(40);
        }
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={toggleOnMenu} style={styles.sheetOpener}></TouchableOpacity>
            <View
                style={[styles.bottomSheet, { height: containerHeight }]}
                {...panResponder.panHandlers}
            >
                <View style={styles.line}></View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    sheetOpener: {
        height: 50,
        width: 50,
        backgroundColor: '#E57C23',
        borderRadius: 45,
        alignSelf: 'center',
        top: hp('50%'),
    },
    container: {
        width: '100%',
        height: SCREEN_HEIGHT,
        backgroundColor: '#E57C23',
        borderRadius: 30,
        position: 'absolute',
        top: hp('70%'),
    },
    line: {
        width: wp('20%'),
        height: hp('.5%'),
        backgroundColor: 'white',
        borderRadius: 25,
        alignSelf: 'center',
        marginVertical: hp('2%'),
    },
    bottomSheet: {
        backgroundColor: '#E57C23',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 4,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
})
export default BottomSheet
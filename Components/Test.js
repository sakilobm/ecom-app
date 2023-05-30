import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });

    const onGesture = useAnimatedGestureHandler({
        onStart: () => {
            context.value = { y: translateY.value };
        },
        onActive: (event) => {
            translateY.value = context.value.y + event.translationY;
            translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
            translateY.value = Math.min(translateY.value, 0);
        },
        onEnd: (event) => {
            if (event.translationY < -100) {
                translateY.value = withSpring(-SCREEN_HEIGHT / 3);
            } else {
                translateY.value = withSpring(0);
            }
        },
        onUpdate: (event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
        },
    });

    useEffect(() => {
        translateY.value = withSpring(-SCREEN_HEIGHT / 3);
        console.log(translateY.value)
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <TouchableOpacity style={styles.sheetOpener} />

            <PanGestureHandler onGestureEvent={onGesture}>
                <Animated.View style={[styles.container, animatedStyle]}>
                    <View style={styles.line} />
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    sheetOpener: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 45,
        alignSelf: 'center',
        top: hp('50%'),
    },
    container: {
        width: '100%',
        height: SCREEN_HEIGHT,
        backgroundColor: 'white',
        borderRadius: 30,
        position: 'absolute',
        top: SCREEN_HEIGHT,
    },
    line: {
        width: wp('20%'),
        height: hp('.5%'),
        backgroundColor: 'black',
        borderRadius: 25,
        alignSelf: 'center',
        marginVertical: hp('2%'),
    },
});

export default BottomSheet;








import { View, Text, StyleSheet, Dimensions, PanResponder, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Gesture, GestureDetector, PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const BottomSheet = () => {

    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })
    const [containerHeight, setContainerHeight] = useState(40);
    const [previousHeight, setPreviousHeight] = useState(containerHeight);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                const newHeight = Math.max(SCREEN_HEIGHT - gestureState.dy);
                setContainerHeight(newHeight);
            },
            onPanResponderRelease: () => {
                // Add any necessary logic here for when the pan gesture is released
            },
        })
    ).current;

    // useEffect(() => {
    //     translateY.value = withTiming(-SCREEN_HEIGHT / 3)
    //     console.log(onGesture)
    // }, [])

    // const onGesture = Gesture.Pan()
    //     .onStart(() => {
    //         context.value = { y: translateY.value }
    //     })
    //     .onUpdate((event) => {
    //         translateY.value = event.translationY + context.value.y;
    //         translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT)
    //     })

    // const toggleOnMenu = () => {
    //     if (containerHeight !== 300) {
    //         setContainerHeight(300);
    //     } else if (containerHeight !== 40) {
    //         setContainerHeight(40);
    //     }
    // }

    return (
        <View style={{ flex: 1, backgroundColor: 'black', }}>
            <TouchableOpacity
                // onPress={toggleOnMenu} 
                style={styles.sheetOpener}></TouchableOpacity>

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
        backgroundColor: 'white',
        borderRadius: 45,
        alignSelf: 'center',
        top: hp('50%'),
    },
    container: {
        width: '100%',
        height: SCREEN_HEIGHT,
        backgroundColor: 'white',
        borderRadius: 30,
        position: 'absolute',
        top: SCREEN_HEIGHT,
    },
    line: {
        width: wp('20%'),
        height: hp('.5%'),
        backgroundColor: 'black',
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

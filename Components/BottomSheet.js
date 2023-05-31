import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Gesture, GestureDetector, } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    withTiming,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import BottomBarNavigation from './BottomBarNavigation';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
// this one for - Container Top End Value
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 80;
const BottomSheet = () => {
    const translateY = useSharedValue(40);
    const context = useSharedValue({ y: 0 });

    const scrollTo = useCallback((destination) => {
        "worklet";
        translateY.value = withSpring(destination, { damping: 50 });
    })

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                // this one for bottom - when container is near to bottom automatically value is 0
                scrollTo(0)
            } else if (translateY.value > -SCREEN_HEIGHT / 1.5) {
                // this one for top - when container is near to top automatically value is MAX_TRANSLATE_Y
                scrollTo(MAX_TRANSLATE_Y)
            }
        })

    useEffect(() => {
        scrollTo(-SCREEN_HEIGHT / 45)
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [45, 5],
            Extrapolate.CLAMP)
        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.container, animatedStyle]}>
                    <BottomBarNavigation />
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: SCREEN_HEIGHT + 50,
        backgroundColor: '#1A1A1A',
        borderRadius: 30,
        position: 'absolute',
        top: SCREEN_HEIGHT,
        zIndex: 1,
    },
    line: {
        width: wp('20%'),
        height: hp('.5%'),
        backgroundColor: 'white',
        borderRadius: 25,
        alignSelf: 'center',
        marginVertical: hp('2%'),
    },
});

export default BottomSheet;
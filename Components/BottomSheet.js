import React, { useCallback, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    withTiming,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const BottomSheet = () => {
    const translateY = useSharedValue(0);
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
        scrollTo(-SCREEN_HEIGHT / 3)
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP)
        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <TouchableOpacity style={styles.sheetOpener} />

            {/* <PanGestureHandler onGestureEvent={onGesture}>
                <Animated.View style={[styles.container, animatedStyle]}>
                    <View style={styles.line} />
                </Animated.View>
            </PanGestureHandler> */}
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.container, animatedStyle]}>
                    <View style={styles.line} />
                </Animated.View>
            </GestureDetector>
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
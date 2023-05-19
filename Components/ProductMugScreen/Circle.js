import React from 'react'
import { Text, View, StyleSheet, Dimensions, Animated, } from 'react-native'
import data from './data';
import { Svg, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.66;

const Circle = ({ scrollX }) => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
            {data.map(({ color }, index) => {
                const inputRange = [
                    (index - 0.55) * width,
                    index * width,
                    (index + 0.55) * width,
                ];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 0.2, 0],
                });
                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.circle,
                            {
                                borderBottomColor: color,
                                opacity,
                                transform: [{ scale }],
                            },
                        ]}
                    >
                        <Svg width="350" height="350" viewBox="0 0 742 671" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M274.005 55.9999C317.114 -18.6667 424.886 -18.6667 467.995 56L726.07 503C769.179 577.667 715.293 671 629.076 671H112.924C26.7067 671 -27.1792 577.667 15.9296 503L274.005 55.9999Z" fill={color} />
                        </Svg>
                    </Animated.View>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({

    circleContainer: {
        // top: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        top: '18%',
        // width: CIRCLE_SIZE,
        // height: CIRCLE_SIZE,
        // borderRadius: 300,
        position: 'absolute',
    },
});
export default Circle;
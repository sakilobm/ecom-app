import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions, SwipeableListView } from 'react-native';
import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
  withTiming
} from 'react-native-reanimated';
import astro from '../src/astronaut.jpg'

const IMAGE_OFFSET = 200;
const PI = Math.PI;
const HALF_PI = PI / 2;

const ParallaxRender = () => {
  const { width, height } = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION)
  const imageStyle = useAnimatedStyle(() => {
    const { yaw, pitch, roll } = sensor.sensor.value;
    // console.log(yaw.toFixed(1), pitch.toFixed(1), roll.toFixed(1));
    return {
      top: withTiming(interpolate(pitch, [-HALF_PI, HALF_PI], [-IMAGE_OFFSET * 2, 0]), { duration: 100 }),
      left: withTiming(interpolate(roll, [-PI, PI], [-IMAGE_OFFSET * 2, 0]), { duration: 100 }),
    };
  })
  return (
    <>
      <Animated.Image source={astro} style={[
        {
          width: width + 2 * IMAGE_OFFSET,
          height: height + 2 * IMAGE_OFFSET,
          position: 'absolute',
          
        },
        imageStyle,
      ]} />
    </>
  )
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ParallaxRender;
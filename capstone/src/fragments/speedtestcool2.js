import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import Animated , {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    useDerivedValue,
    useAnimatedSensor,
    SensorType,
  } from 'react-native-reanimated';

  import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
  } from 'react-native-cool-speedometer'; 

const Speedo1 = () => {
    const animatedSensor = useAnimatedSensor(SensorType.ACCELEROMETER, {
        interval: 100,
      });

      const rotationSpeed = animatedSensor.sensor.value.z;

      return (
        <Speedometer value={rotationSpeed} fontFamily="squada-one">
          <Background />
          <Arc />
          <Needle />
          <Progress />
          <Marks />
          <Indicator />
        </Speedometer>
      );

}
 
export default Speedo1;
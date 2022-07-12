import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import { accelerometer } from "react-native-sensors";
import { setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';

const Speedo1 = () => {

  // function myfun(x,y,z,timestamp)
  // {
  //   console.log("X is "+x);
  //   // console.log("Y is "+y);
  //   // console.log("Z is "+z);
  //   // console.log("Time Stamp is is "+timestamp);
  // }

  setUpdateIntervalForType(SensorTypes.accelerometer, 100);

      // const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
      // myfun(x, y, z, timestamp)
      // )
       return (
         <Speedometer value={128} fontFamily="squada-one">
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
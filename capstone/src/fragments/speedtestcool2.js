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
import { useState } from 'react';

const Speedo1 = () => {

  const[speed,useSpeed]=useState(0);

  function myfun(x,y,z,timestamp)
  {
    console.log("X is "+x);
    if(x<0)
    {
      x=x*-1;
      useSpeed(x*6)
    }
    else
    {
      useSpeed(x*6);
    }
    // console.log("Y is "+y);
    // console.log("Z is "+z);
    // console.log("Time Stamp is is "+timestamp);
    // console.log(speed);
  }

  setUpdateIntervalForType(SensorTypes.accelerometer, 100);

      const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
      myfun(x, y, z, timestamp));
       return (
        <View>
         <Speedometer value={speed} fontFamily="squada-one"  >
           <Background />
           <Arc />
           <Needle />
           <Progress />
           <Marks />
           <Indicator />
         </Speedometer>
         </View>
       );

}
 
export default Speedo1;
import React from 'react';
import {StyleSheet, View , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../fragments/home';
import Info from '../fragments/info';
import Media from '../fragments/media';
import Dashboard from '../fragments/dashboard';
 import Speedo1 from '../fragments/speedtestcool2';

const Screen1=()=>{

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />    
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Media" component={Media} />
        <Tab.Screen name="Speed" component={Speedo1} />
      </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Screen1;
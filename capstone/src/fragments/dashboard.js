import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import CarImg from "../assets/car.png";


 
const Dashboard=()=>{


    const styles = StyleSheet.create({
        container :{
            flex : 1,
            flexDirection : 'column',
            width : '100%',    
            backgroundColor: 'lightgrey'  
        },
        row1 : {
            flex:1,
            flexDirection : 'row',
            width: "100%"
        },
        row2 : {
            flex:1,
            flexDirection : 'row',
            width: "100%"
        },

        carimage:{
            width: "40%",
            height: "90%",
        }
    
    });

    return (
        <View style={styles.container}>
            <View style = {styles.row1}>
                <Image style ={styles.carimage} source={CarImg} /> 
                <View><Text>Weather</Text></View>

            </View>

            <View style = {styles.row2}>
                <View><Text>Hi</Text></View>
                <View><Text>Bye</Text></View>
                <View><Text>Hello</Text></View>

            </View>
         
        </View>
    )
}

export default Dashboard;
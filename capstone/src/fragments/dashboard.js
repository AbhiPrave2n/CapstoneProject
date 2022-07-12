import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import CarImg from "../assets/car.png";
import Speedo1 from './speedtestcool2';


 
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
            borderWidth:4,   
        },
        row2c2 : {
            flex:1,
            flexDirection : 'row',
            // justifyContent:'center',
            // alignContent:'center',
            borderWidth:4,
            borderColor:'black',
            
            
        },
        row2container:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignContent:'center',
            // borderWidth:6,
            // borderColor:'red',
            top:25,
        },
        row2 : {
            flex:1,
            flexDirection : 'row',
            borderWidth:2,
            
            
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
                <View style={styles.row2c2}>
                    <View style={styles.row2container}>
                    <Speedo1/>
                    </View>
                </View>

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
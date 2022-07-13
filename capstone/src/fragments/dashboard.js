import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import CarImg from "../assets/car.png";
import MusicPlayer from '../components/MusicPlayer';
import Speed from '../components/speed';
import MusicImg from "../assets/images/music-player-img.jpg";
import { MapScreen } from '../screens';
import Battery from '../components/batteryPercentage';

const Dashboard=()=>{


    const styles = StyleSheet.create({
        container :{
            flex : 1,
            flexDirection : 'column',
            width : '100%',    
            backgroundColor: '#2e2828'
        },
        row1 : {
            flex:1,
            flexDirection : 'row',
            borderWidth:4,   
        },
        row2c2 : {
            flex:1,
            flexDirection : 'row',
            justifyContent:'center',
            alignContent:'center',
            borderWidth:4,
            borderColor:'black',
            
        },
        row2container:{
            top:25,
        },
        row2 : {
            flex:1,
            flexDirection : 'row',
            borderWidth:4,
        },

        carimage:{
            width: "40%",
            height: "90%",
        },
        map:{
            height:"100%",
            width:"35%",
            borderRightWidth:2,
        },
        musicimg:{
            height:'5%',
            width:"25%",
        },
        batteryPercent:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignContent:'center',
            top:30,
        }
    
    });

    return (
        <View style={styles.container}>
            <View style = {styles.row1}>
                <Image style ={styles.carimage} source={CarImg} /> 
                <View style={styles.row2c2}>
                    <View style={styles.row2container}>
                  <Speed/>
                  </View>
                </View>

            </View>

            <View style = {styles.row2}>
                <View style={styles.batteryPercent}><Battery/></View>
                <Image source={MusicImg}/>
                <View style={styles.map}><MapScreen/></View>
                

            </View>
         
        </View>
    )
}

export default Dashboard;
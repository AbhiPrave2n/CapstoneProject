import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import Speed from '../components/speed';

const Speedo1 = () => {

  const styles=StyleSheet.create({
    wrapper:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      top:180,
      
    },
    container:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      borderWidth:8,
      backgroundColor:'#2e2828',
    }
  })

    return (
       <View style={styles.container}>
        <View style={styles.wrapper}>
            <Speed/>
        </View>
        </View> 
     );
}
 
export default Speedo1;
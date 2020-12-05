
import React, { Component } from 'react';

import { StyleSheet, View, Text, Image,Dimensions } from 'react-native';

const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;
export default class StackHeader extends Component{

render()
{
return(
<View style={styles.container}> 
<Image
          source={require('../../assets/profile.png')}
          style={{
            width: DeviceWidth*0.12,
            height: DeviceHeight*0.09,
          resizeMode:'contain',
            borderRadius: 15,
            marginLeft:DeviceWidth*0.5,
            
           
          }}
        />
<Image
          source={require('../../assets/bell_icon.png')}
          style={{
            width: DeviceWidth*0.05,
            height: DeviceHeight*0.05,
          resizeMode:'contain',
          marginLeft:DeviceWidth*0.04,
          marginRight:DeviceWidth*0.04

          }}
        />
       

</View>


);



}



}

const styles=StyleSheet.create({
container:{
  flexDirection:'row',
  alignItems:'center'
}


});
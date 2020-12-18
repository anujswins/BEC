import React, { Component } from 'react';
import { Dimensions ,StyleSheet,View,Image,Text,TouchableOpacity, Alert } from 'react-native';


export default class Pract extends Component{
    render(){
        return(
            <View style={{flex:1,height:'100%', width:'100%', backgroundColor:"silver"}}>
                <View style={{height:'10%', width:'100%', backgroundColor:'blue'}}>
                <Text style={{height:'100%', width:"50%", backgroundColor:"pink"}}>
                    vgvgvhv
                </Text>
                
                </View>
                <View style={{height:'80%', width:'100%', backgroundColor:'grey', justifyContent:"center", alignItems:"center"}}>
       
                <Image source={require("../../assets/smalllogo.png")} style={{height:"20%", width:"20%", backgroundColor:"red", marginLeft:"10%"}}/>
                <Image source={require("../../assets/smalllogo.png")} style={{height:"20%", width:"40%", backgroundColor:"green", marginLeft:"10%"}}/>
                <Image source={require("../../assets/smalllogo.png")} style={{height:"20%", width:"80%", backgroundColor:"blue", marginLeft:"10%"}}/>
                <Image source={require("../../assets/smalllogo.png")} style={{height:"20%", width:"80%", backgroundColor:"yellow", marginLeft:"10%"}}/>
                <Image source={require("../../assets/smalllogo.png")} style={{height:"20%", width:"80%", backgroundColor:"green", marginLeft:"10%"}}/>
                </View>
                <View style={{height:'10%', width:'100%', backgroundColor:'pink'}}>
                <Text>
                    vgvgvhv
                </Text>
                </View>
            </View>
        )
    }
}
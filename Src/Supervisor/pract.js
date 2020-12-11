import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Pract extends Component {
    constructor() {
        super(); {
            this.state = {
                var_A: ["hello","ji","hanji","Navdeep","Garg"]

            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "white" }}>
                <Text>
                    sdfsd
                </Text>
                <View style={{ height: '60%', width: '100%', backgroundColor: 'pink' }}> 
                    <FlatList data={this.state.var_A}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                <View style={{flexDirection:"row",justifyContent:"center",backgroundColor:"green"}}>
                                <View style={{ backgroundColor:"yellow", }}>
                                    <TouchableOpacity style={{ height: hp('6%'), width: wp('10%'), backgroundColor: 'red',
                                    flexDirection:"row",
                                    justifyContent: 'space-around', alignItems: "flex-start",margin:50}}>
                                        <Text>
                                            {item}
                                            
                                            </Text>
                                        
                                    </TouchableOpacity>
                       
                                </View>
                                </View>
                            )
                        }}>

                    </FlatList>
                </View>
                {/* <View style={{height:'10%', width:'100%', backgroundColor:'blue'}}>
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
                </View> */}
            </View>
        )
    }
}
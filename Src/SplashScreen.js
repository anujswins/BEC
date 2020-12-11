import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';


export default class SplashScreen extends Component{
    constructor(){
        super();
        setTimeout(
            ()=>{
                this.props.navigation.navigate("Login") 
            },3000
        );
    }
    render(){
        return(
            <View style={{flex:1,width:'100%',backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/smalllogo.png')}
                style={{height:'60%',width:'70%',resizeMode:'contain',backgroundColor:'transparent',marginBottom:'30%',marginLeft:'3%'}}/>

            </View>
        )
    }
}
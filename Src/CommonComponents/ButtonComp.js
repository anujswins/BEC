import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Icon,
  search,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width


const AppButton = () => {
  return (
    <View style={{flexDirection:"row", height:height*0.9, width:width, backgroundColor:"#008AD2",}}>
    <TouchableOpacity style={{height:height*0.08,width:width*0.5, backgroundColor:"transparent",  justifyContent:"center",alignItems:"flex-end", paddingRight:width*0.1}}>
      <Image source={require("../../assets/bottomNotesIcon.png")}/>
    </TouchableOpacity>
    <TouchableOpacity style={{height:height*0.08,width:width*0.5, backgroundColor:"transparent",  justifyContent:"center",paddingLeft:width*0.08}}>
    <Image source={require("../../assets/bottomHomeIcon.png")}/>
    </TouchableOpacity>
    </View>
  )
}


// TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

// const AppButton = ({ onPress, text,  backgroundColor}) => (
//   <View >
//   <TouchableOpacity onPress={onPress} style={{paddingHorizontal:width*0.04}}>
//     <Text style={[styles.appBtnText], { backgroundColor }}>{text}</Text>
//   </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({
//   appBtnText:{
//     borderBottomWidth:1,
//     borderBottomColor:"#004B73",  
//     color:"#FBFBFB" ,
//     paddingHorizontal:width*0.1,
//     backgroundColor:"red",
//     paddingVertical:height*0.02,

//     borderWidth:1


//   }
// })

export default AppButton;

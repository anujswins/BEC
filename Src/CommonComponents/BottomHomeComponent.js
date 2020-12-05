// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Dimensions,
//   Icon,
//   search,
//   FlatList,
//   Image,
//   TouchableOpacity
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// const DeviceHeight = Dimensions.get("screen").height
// const DeviceWidth = Dimensions.get("screen").width


// const AppButton = () => {
//   return (
//     <View style={{height:DeviceHeight*0.14, width:DeviceWidth, backgroundColor:"#008AD2",flex:1,alignItems:'center',justifyContent:'center',  }}>
//         <TouchableOpacity style={{}}>
//     <Image style={{height:DeviceHeight*0.07,width:DeviceWidth*0.09,resizeMode:'contain',marginBottom:DeviceHeight*0.}}source={require("../../assets/bottomNotesIcon.png")}/>
//     </TouchableOpacity>
//     </View>
//   )
// }


// // TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

// // const AppButton = ({ onPress, text,  backgroundColor}) => (
// //   <View >
// //   <TouchableOpacity onPress={onPress} style={{paddingHorizontal:width*0.04}}>
// //     <Text style={[styles.appBtnText], { backgroundColor }}>{text}</Text>
// //   </TouchableOpacity>
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   appBtnText:{
// //     borderBottomWidth:1,
// //     borderBottomColor:"#004B73",  
// //     color:"#FBFBFB" ,
// //     paddingHorizontal:width*0.1,
// //     backgroundColor:"red",
// //     paddingVertical:height*0.02,

// //     borderWidth:1


// //   }
// // })

// export default AppButton;

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
    <View style={{flexDirection:"row", height:height*0.09, width:width, backgroundColor:"#008AD2",}}>
    <TouchableOpacity style={{flex:1,height:height*0.08,width:width*0.5, backgroundColor:"transparent",  justifyContent:"center",alignItems:"center", }}>
      <Image source={require("../../assets/bottomNotesIcon.png")} style={{height:height*0.04,width:width*0.09}}/>
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

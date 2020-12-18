import React from 'react';
import { Dimensions ,StyleSheet,View,Image,Text,TouchableOpacity, Alert } from 'react-native';
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const TickButton=(props)=>{
return(
<TouchableOpacity style={styles.nextButtonContainer} onPress={props.handleClick}>
    <View style={styles.NextButtonStyle}>
<View style={styles.tickIconBackground}>       
<Image
style={styles.tickIcon}
source={require('../../assets/tick_icon.png')}
/>
</View> 
<View style={{
     flex:1,justifyContent:'center',alignItems:'center'
    }}>
<Text style={styles.NextButtonText}>{props.label}</Text>
</View>
</View>
<View style={styles.bottomView}/>
</TouchableOpacity>


);


}

const styles=StyleSheet.create({
    nextButtonContainer:{
       
        // width:wp('35%'),
        // height:wp('4%'),
        flex:1      
    },
    NextButtonStyle:{
        height:hp('5.5%'),
        width:wp('35%'),
    flexDirection:'row',
    backgroundColor:'#008acf'
    },
    tickIconBackground:{
         paddingHorizontal:wp('2%'),
      backgroundColor:'#005ea1',
    //  flex:1,
    justifyContent:'center',
    alignItems:'center'
      },
      tickIcon:{
        height:hp('8%'),
        width:wp('7%'),
      resizeMode:'contain'
    },
    nextTextContainer:{
        flex:1,
        justifyContent:'center',alignItems:'center'
    
    },
    NextButtonText:{
        color:'#fff',
        fontSize:hp('1.8%'),
        textAlign:'center',
        // padding:DeviceWidth*0.03
        },
        bottomView:{
            backgroundColor:'#0b4380',
            height:hp('0.7%'),
            }



});




// import React from 'react';
// import { Dimensions ,StyleSheet,View,Image,Text,TouchableOpacity, Alert } from 'react-native';
// const DeviceWidth=Dimensions.get('screen').width;
// const DeviceHeight=Dimensions.get('screen').height;


// export const TickButton=(props)=>{
// return(
// <TouchableOpacity style={styles.nextButtonContainer} onPress={props.handleClick}>
//     <View style={styles.NextButtonStyle}>
// <View style={styles.tickIconBackground}>       
// <Image
// style={styles.tickIcon}
// source={require('../../assets/tick_icon.png')}
// />
// </View> 
// <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
// <Text style={styles.NextButtonText}>{props.label}</Text>
// </View>
// </View>
// <View style={styles.bottomView}/>
// </TouchableOpacity>


// );


// }

// const styles=StyleSheet.create({
//     nextButtonContainer:{
//         width:DeviceWidth*0.4,
//         height:DeviceHeight*0.05,
      
//     },
//     NextButtonStyle:{
//         height:DeviceHeight*0.07,
//     flexDirection:'row',
//     backgroundColor:'#008acf'
//     },
//     tickIconBackground:{
//         paddingHorizontal:DeviceWidth*0.02,
//       backgroundColor:'#005ea1'
//       },
//       tickIcon:{
//         height:DeviceHeight*0.08,
//         width:DeviceWidth*0.07,
//       resizeMode:'contain'
//     },
//     nextTextContainer:{
//         flex:1,justifyContent:'center',alignItems:'center'
    
//     },
//     NextButtonText:{
//         color:'#fff',
//         fontSize:18,
//         textAlign:'center',
//         // padding:DeviceWidth*0.03
//         },
//         bottomView:{
//             backgroundColor:'#0b4380',
//             height:DeviceHeight*0.01,
//             }



// });


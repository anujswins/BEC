import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image,Dimensions, Alert} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Icon } from 'react-native-elements';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const DrawerHeader =({name, openDrawer,status,notification})=> (
    <View style={styles.header}>
    
     <View style={{width:'70%',height:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:'transparent'}}>
     {
   status?
   <TouchableOpacity style={{height:"80%",width:"20%",resizeMode:'contain',alignItems:'center',justifyContent:'center'}}onPress={()=> openDrawer.openDrawer()}>

   <Image  style={{height:"60%",width:"80%",resizeMode:'contain',}} source={require('../../assets/menu_icon.png')}/>

</TouchableOpacity>
:
<TouchableOpacity style={{height:"70%",width:"18%",resizeMode:'contain',alignItems:'center',justifyContent:'center',paddingLeft:'1%', backgroundColor:'transparent'}}onPress={()=> openDrawer.goBack()}>

<Image  style={{height:"30%",width:"53%",resizeMode:'cover'}} source={require('../../assets/back.png')}/>

</TouchableOpacity>


      }
     
     
    
     <View style={{width:'82%',height:'100%',alignItems:'flex-start',justifyContent:'center', backgroundColor:'transparent'}}>
<Text style={{fontSize:hp('2.2%'),color:'#fff', }}>{name}</Text>

</View> 
     </View>




     <View style={{width:'30%',height:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:'transparent'}}>
     <Image
          source={require('../../assets/profile.png')}
          style={{
            height:'60%',
            width:'40%',
          resizeMode:'contain',
            
            //  backgroundColor:'purple'
         
            
           
          }}
        />
   {
  notification?
  <TouchableOpacity style={{ height:'100%',
          width:'40%',alignItems:'center',justifyContent:'center'}} onPress={()=> {openDrawer.navigate('Notification')}}>
<Image
          source={require('../../assets/bell_icon.png')}
          style={{
          height:'45%',
          width:'45%',
         resizeMode:'contain',
          //  backgroundColor:'pink',
         
          

          }}
        />
        </TouchableOpacity>
:null

}
   


        </View>
    </View>
  )

  const styles=StyleSheet.create({
    header:{
      flex:1,
        width:'100%',
        height:'9%',
        flexDirection:"row",
     // justifyContent:'space-between',
        alignItems:"center",
       // paddingHorizontal:DeviceWidth*0.04,
        backgroundColor:'#008BD0'
      },

  });
  export default DrawerHeader;


import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image,Dimensions, Alert} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Icon } from 'react-native-elements';
// const DeviceWidth=Dimensions.get('screen').width;
// const DeviceHeight=Dimensions.get('screen').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const DrawerPract =({name, openDrawer,status})=> (
    <View style={styles.header}>
      {
        status?<View style={{ width:wp('15%'),height: hp('8%'), backgroundColor:"transparent",justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity onPress={()=> openDrawer.openDrawer()
      }>
        
      <Image  style={{height:hp('4%'),width:wp('10%'),resizeMode:'contain',backgroundColor:'transparent',}} source={require('../../assets/menu_icon.png')}/>

      </TouchableOpacity>
      </View>

      :<View style={{ width:wp('15%'),height: hp('8%'),backgroundColor:"transparent", justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity onPress={()=> openDrawer.goBack()
      }>
        
      <Image  style={{height:hp('4%'),width:wp('10%'),resizeMode:'contain',backgroundColor:'transparent',}}
       source={require('../../assets/back.png')}/>

      </TouchableOpacity>

</View>
      }<View style={{height:hp('8%'), width:wp('55%'), backgroundColor:'transparent', alignItems:'flex-start', justifyContent:'center'}}>
      <Text style={{fontSize:19,color:'#fff', backgroundColor:"transparent"}}>{name}</Text>
      </View>
  <View style={{height:hp('8%'), width:wp('15%'), backgroundColor:'transparent', alignItems:'center', justifyContent:'center'}}>
      <Image
          source={require('../../assets/profile.png')}
          style={{
            height:hp('5%'),
            width:wp('9%'),
          resizeMode:'contain',
            
           backgroundColor:'transparent'
         
            
           
          }}
        />
        </View>
        <View style={{height:hp('8%'), width:wp('15%'), backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
         <TouchableOpacity onPress={()=> {openDrawer.navigate('Notification')}}>
<Image
          source={require('../../assets/bell_icon.png')}
          style={{
          height:hp('4%'),
          width:wp('7%'),
         resizeMode:'contain',
          backgroundColor:'transparent',
         
          

          }}
        />
        </TouchableOpacity>
        </View>
       
    </View>
  )

  const styles=StyleSheet.create({
    header:{
        width:wp('100%'),
        height:hp('8%'),
        flexDirection:"row",
     // justifyContent:'space-between',
        alignItems:"center",
       // paddingHorizontal:DeviceWidth*0.04,
        backgroundColor:'#008BD0'
      },

  });
  export default DrawerPract;
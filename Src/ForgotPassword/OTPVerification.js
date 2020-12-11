import React,{Component} from 'react';
import { Dimensions ,StyleSheet,View,Image,Text,TextInput, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {TickButton} from '../CommonComponents/TickButton'
import {CustomTextInput} from '../CommonComponents/CustomTextInput'
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;
import DatePicker from 'react-native-datepicker'
import BottomHomeCompnent from '../CommonComponents/BottomHomeComponent';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class OTPVerification extends Component{
  static navigationOptions={
    title:'Profile Setting',
    headerTintColor:'#fff',
    headerStyle:{
      backgroundColor:'#008ad1'
    },
    headerTitleStyle:{
      fontWeight:'normal',
      textAlign:'left'
    }
    
    
    }
constructor(){
super();
this.state={
email:''

}


1
}


onPress=()=>{
// this.props.navigation.navigate('NewPassword')
this.props.navigation.navigate('NewPassword',{itemId:65,myString:'gurjeet'})

}

onChange=(value)=>{
this.setState({email:value});


}
render(){
return(
<View style={styles.container}>
    
    
    {/* ---------header--------- */}




{/* --------- main View----------   */}
<View  style={styles.subcontainer1}>
{/* --------------lock icon and Email text------ */}
<View style={styles.lockIconContainer}>
  <View>
  <Image
  style={styles.lockIconStyle}
  source={require('../../assets/lock.png')}
  /> 
  </View>   
  
  
</View>
{/* -----------Email Address  Field */}
<View style={{marginTop:hp('10%')}}>
<CustomTextInput label="Enter code" onChange={this.onChange}  />
</View>

{/* ---------Next button ------------ */}
<View style={{marginTop:hp('33%')}}>
<TickButton label="DONE" handleClick={this.onPress}/>
</View>







</View>
{/* <View  style={styles.FooterStyle}>
  <BottomHomeCompnent/>
</View> */}
</View> 

);


}




}

const styles=StyleSheet.create({
container:{
    flex:1,
// height:DeviceHeight,
// width:DeviceWidth,
// backgroundColor:'red'
},
FooterStyle:{
height:DeviceHeight*0.2

},

subcontainer1:{

//justifyContent:'space-around'
height:hp ('100%'),
// backgroundColor:'yellow',
alignItems:'center'

},
lockIconStyle:{
  height: hp('20%'),
  width: wp('30%'),
  resizeMode: 'contain'
},
lockIconContainer:{
alignItems:'center'


},

EmailtextStyle:{
fontSize:20,
textAlign:'center',
color:'#008acf'

},

EmailFieldStyle:{

},

NextButtonStyle:{
//     height:DeviceHeight*0.06,
// flexDirection:'row',
// backgroundColor:'#008acf',
// alignItems:'center',
// justifyContent:'center'
height: hp('20%'),
flexDirection: 'row',
backgroundColor: '#008acf'
},
tickIcon:{
  height: hp('9%'),
  width: DeviceWidth * 0.08,
  resizeMode: 'contain'
},
NextButtonText:{
  color: '#fff',
  fontSize: hp('20%'),
  textAlign: 'center',


},
nextTextContainer:{
    flex:1,justifyContent:'center',alignItems:'center'

},

nextButtonContainer: {
  width: wp('40%'),
  height:hp('50%'),
  marginTop: hp('2%')
},

bottomView:{
backgroundColor:'#0b4380',
height:DeviceHeight*0.03,
},
tickIconBackground:{
  paddingHorizontal:DeviceWidth*0.03,
backgroundColor:'#005ea1'
},
EmailTextInput:{
    width:DeviceWidth*0.9,
    marginTop:DeviceHeight*0.1,
    fontSize:20,
}


});
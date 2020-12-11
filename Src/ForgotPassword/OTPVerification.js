import React,{Component} from 'react';
import { Dimensions ,StyleSheet,View,Image,Text,TextInput, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {TickButton} from '../CommonComponents/TickButton'
import {CustomTextInput} from '../CommonComponents/CustomTextInput'
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;
import EditText from '../CommonComponents/EditText' 
import DatePicker from 'react-native-datepicker'
import AuthService from '../RestClient/AuthService';
import ApiLoader from '../PopUp/ApiLoader';
import BottomHomeCompnent from '../CommonComponents/BottomHomeComponent';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppStorage } from '../utils/AppStorage';
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
Code:'',
isLoading: false,

}



}
componentDidMount(){
 


}

sendVerificationCode = async () => {
  // Alert.alert("inside send email")

  try {
       this.toggleLoader(true);
    var email=this.props.navigation.getParam('Email')
  // let token = await AppStorage.getToken();
  // var email=await AppStorage.getEmail();
  //  Alert.alert("Email",email)
      let respo = await AuthService.VerifyOTP(email,this.state.Code);

   Alert.alert("resposne in OTP screen",respo.data.Message);


      if (respo.data.StatusCode === 200) {
        this.props.navigation.navigate('NewPassword',{userEmail:email})
      }
else{
Alert.alert(respo.data.Message)

}




  } catch (e) {

 
       console.log('login catch me print hua', e.response.data);
      //  Alert.alert(e.response.data.Message)
  } finally {
      this.toggleLoader(false);
      // console.log('login finally print hua');
  }

};

onPress=()=>{
console.log("OTP entered",this.state.Code)
this.sendVerificationCode();
this.props.navigation.navigate('NewPassword',{itemId:65,myString:'gurjeet'})

}
toggleLoader = (val) => {
  this.setState(({isLoading: val}));
};
onChange=(value)=>{
this.setState({email:value});


}
render(){
        const {isLoading} = this.state;
return(
<View style={styles.container}>
<ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                    }}/>

    
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
{/* <CustomTextInput label="Enter code" onChange={this.onChange}  /> */}

<EditText
                                placeholder={'Enter code'}
                                // IconName={'email'}
                                editable={true}
                                maxLength={30}
                                value={this.state.Code}
                                autoCapitalize={'none'}
                                keyboardType={'email-address'}
                                // error={this.state.emailError}
                                onChangeText={(val) => this.setState({Code : val, 
                                  // emailError: validate('email', val)
                              
                              })}
                            />



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
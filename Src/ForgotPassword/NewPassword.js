import React,{Component} from 'react';
import { Dimensions ,StyleSheet,View,Image,Text,TextInput, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {TickButton} from '../CommonComponents/TickButton'
import {PasswordComponent} from '../CommonComponents/PasswordComponent'
import BottomHomeCompnent from '../CommonComponents/BottomHomeComponent';
import {showMessage,hideMessage}from 'react-native-flash-message';
import AuthService from '../RestClient/AuthService';
import ApiLoader from '../PopUp/ApiLoader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;

export default class NewPassword extends Component{
  static navigationOptions={
    title:'Password',
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
password:'',
confirmPassword:'',
isLoading: false,

}


1
}



ValidatePassword=() =>{
 
    let reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  const {password,confirmPassword}=this.state;
  var lettrs=/^[A-Za-z]+$/;
  
  
   if(password=="")
  {
  //  Alert.alert("please enter password")
  showMessage({
    message:"please enter password",
    type:"info",
    backgroundColor: "black",
});
  
  }
  
 else if(password.length<8){
    //  Alert.alert("password must be of minimum 8 character")
    showMessage({
        message:"password must be of minimum 8 character",
        type:"info",
        backgroundColor: "black",
    });
  }
  
  else if(confirmPassword=="")
  {
    // Alert.alert("please confirm password")
showMessage({
    message:"please  confirm password",
    type:"info",
    backgroundColor: "black",
});
  }
  
  
  else if(!password.match(confirmPassword)){
      // Alert.alert("confirm password should match with password")
    showMessage({
        message:"Password mismatch",
        type:"info",
        backgroundColor: "black",
    });
  }
 
  else {
    this.resetPassword();
  // showMessage({
  //     message:"Password reset successfully",
  //     type:"info",
  //     backgroundColor: "black",
  // });
}
  
  }
  
  toggleLoader = (val) => {
    this.setState(({isLoading: val}));
  };
resetPassword = async () => {
    // Alert.alert("inside send email")
  
    try {
         this.toggleLoader(true);
     var email=this.props.navigation.getParam('userEmail')
    //  Alert.alert("Email",email)
        let respo = await AuthService.resetPassword(email,this.state.password);
        // console.log('FORGOT PASS RESPONSE PRINTED===========================',respo.data.Message);
  
    //  Alert.alert("Password reset",respo.data.Message);
  
  
        if (respo.data.StatusCode === 200) {
          this.props.navigation.navigate('Login')
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
onChangePassword=(value)=>{
  
this.setState({password:value});


}
onChangeConfirmPassword=(value)=>{
    this.setState({confirmPassword:value});
    
    
    }


render(){
  const {isLoading} = this.state;
return(
<View style={styles.container}>
    
    
    {/* ---------header--------- */}




{/* --------- main View----------   */}
<View  style={styles.subcontainer1}>
{/* --------------lock icon and Email text------ */}
<ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                    }}/>
<View style={styles.lockIconContainer}>
  <View>
  <Image
  style={styles.lockIconStyle}
  source={require('../../assets/lock.png')}
  /> 
  </View>   
  <Text  style={styles.EmailtextStyle}>Enter New Password</Text>
  
</View>
{/* -----------Email Address  Field */}
<PasswordComponent label="New Password" onChange={this.onChangePassword}  />
<View>
<PasswordComponent label="Confirm Password" onChange={this.onChangeConfirmPassword}  />
</View>
{/* ---------Next button ------------ */}
<View style={{marginTop:hp('17%')}} >
<TickButton label="OK" handleClick={this.ValidatePassword}/>
</View>
{/* ---------footer-------- */}






</View>
{/* <View style={{flex:0.8,backgroundColor:'green'}}>
  <BottomHomeCompnent/>
</View> */}
{/* <FlashMessage position="" ref="mylocalFlashMessage" /> */}

</View>

);


}




}

const styles=StyleSheet.create({
container:{
    flex:1,
// height:DeviceHeight,
// width:DeviceWidth,

},
FooterStyle:{


backgroundColor:'red'
},

subcontainer1:{

height:hp('100%'),

alignItems:'center',

},
lockIconStyle:{
    height:hp('17%'),
    width:hp('23%'),
    resizeMode:'contain',
    marginTop:hp('4%'),
},
lockIconContainer:{
alignItems:'center'


},

EmailtextStyle:{
fontSize: hp('3%'),
textAlign:'center',
color:'#008acf',
marginTop:hp('8%'),
},

EmailFieldStyle:{

},
FooterStyle:{
  height:DeviceHeight*0.2
  
  },
NextButtonStyle:{
    height:DeviceHeight*0.06,
flexDirection:'row',
backgroundColor:'#008acf',
alignItems:'center',
justifyContent:'center'
},
tickIcon:{
    height:DeviceHeight*0.08,
    width:DeviceWidth*0.08,
  resizeMode:'contain'
},
NextButtonText:{
color:'#fff',
fontSize:18,
textAlign:'center',

},
nextTextContainer:{
    flex:1,justifyContent:'center',alignItems:'center'

},


nextButtonContainer:{
    width:DeviceWidth*0.4,
    height:DeviceHeight*0.067,
    marginTop:DeviceHeight*0.2
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
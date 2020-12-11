

import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { showMessage, hideMessage } from 'react-native-flash-message';
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;
import FlashMessage from 'react-native-flash-message'
import { TickButton } from '../CommonComponents/TickButton';
import { CustomTextInput } from '../CommonComponents/CustomTextInput';
import BottomHomeCompnent from '../CommonComponents/BottomHomeComponent';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import EditText from '../CommonComponents/EditText'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
<<<<<<< HEAD


=======
import AuthService from '../RestClient/AuthService';
import ApiLoader from '../PopUp/ApiLoader';
import {AppStorage, key} from '../utils/AppStorage';
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
export default class ForgotPassword extends Component {

  static navigationOptions = {
    title: 'Forgot Password',
    headerTintColor: '#ffffff',
    headerStyle: {
backgroundColor:'#008ad1'
    },
    headerTitleStyle: {
      fontWeight: 'normal',
      textAlign: 'left'
    },


  }


  constructor() {
    super();
    this.state = {
      UserEmail: ''
    }


  }
  toggleLoader = (val) => {
    this.setState(({isLoading: val}));
};

  onChange = (value) => {
    this.setState({ UserEmail: value });


  }
  onPress = () => {
    Alert.alert("inside forgot Password")

  }
<<<<<<< HEAD
=======
  toggleLoader = (val) => {
    this.setState(({isLoading: val}));
}


saveEmail=(email)=>{

AppStorage.saveKey(Key.SAVE_EMAIL,this.state.UserEmail).then(()=>{

});


}




  sendEmail = async () => {
    // Alert.alert("inside send email")

    try {
        this.toggleLoader(true);
     
        let respo = await AuthService.getOTP(this.state.UserEmail);

     Alert.alert("resposne in forgotPassword",respo.data.Message)


        if (respo.data.StatusCode === 200) {
          
          this.props.navigation.navigate('OTPVerification',{Email:this.state.UserEmail})
            // this.saveEmail(this.state.UserEmail);
        }
else{
  Alert.alert("resposne in forgotPassword",respo.data.Message)

}

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


  Validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { UserEmail } = this.state;
    var lettrs = /^[A-Za-z]+$/;






    if (UserEmail == "") {
      showMessage({
        message: "please enter Email",
        type: "info",
        backgroundColor: "black",

      });
    }


    else if (!(reg.test(UserEmail))) {
      showMessage({
        message: "Please enter valid email",
        type: "info",
        backgroundColor: "black",
        position: (0, 0, 100, 100),
        hideStatusBar: true
      });
    }



    else {
      this.props.navigation.navigate('OTPVerification')
    }
  }


  render() {
    return (
      <View style={styles.container}>







        {/* --------- main View----------   */}
        <View style={styles.subcontainer1}>
          {/* --------------lock icon and Email text------ */}
          <View style={styles.lockIconContainer}>
            <View>
              <Image
                style={styles.lockIconStyle}
                source={require('../../assets/lock.png')}
              />
            </View>
            <Text style={styles.EmailtextStyle}>Enter your email ,{'\n'} we will send reset code there.</Text>
           
          </View>
          {/* -----------Email Address  Field */}
          <View style={{ marginTop:hp('10%')}}>
              {/* <CustomTextInput label="Email Address" onChange={this.onChange} />   */}
             <EditText
                                placeholder={'Email Address'}
                                // IconName={'email'}
                                editable={true}
                                maxLength={30}
                                value={this.state.UserEmail}
                                autoCapitalize={'none'}
                                keyboardType={'email-address'}
                                // error={this.state.emailError}
                                onChangeText={(val) => this.setState({ UserEmail: val, 
                                  // emailError: validate('email', val)
                              
                              })}
                            />
<<<<<<< HEAD

=======
           {/* <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   placeholder="Password"
                                   placeholderTextColor="grey"
                                   autoCapitalize="none"
                                   secureTextEntry={true}
                                   maxLength={20}
                                   value={this.state.UserEmail}
                                   onChangeText={(text) => {
                                       this.setState({ UserEmail: text});
                                   }}/> */}
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
      
          </View>


          {/* ---------Next button ------------ */}

          <View style={{ marginTop:hp('26%')}}>
            <TickButton label="NEXT" handleClick={this.Validate} />
          </View>







        </View>

        <View>

        </View>
        
      </View>

    );


  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: DeviceHeight,
    // width: DeviceWidth,

  },
  headerStyle: {
    height: hp('9%'),
    backgroundColor: 'red',
  },



  subcontainer1: {
    //justifyContent:'space-around'
    height:hp('100%'),
   
    alignItems: 'center'

  },
  lockIconStyle: {
    height: hp('20%'),
    width: wp('30%'),
    resizeMode: 'contain'
  },
  lockIconContainer: {
    alignItems: 'center'


  },

  EmailtextStyle: {
    fontSize: hp('3%'),
    textAlign: 'center',
    color: '#008acf'

  },

  EmailFieldStyle: {

  },

  NextButtonStyle: {
    height: hp('20%'),
    flexDirection: 'row',
    backgroundColor: '#008acf'
  },
  tickIcon: {
    height: hp('9%'),
    width: DeviceWidth * 0.08,
    resizeMode: 'contain'
  },
  NextButtonText: {
    color: '#fff',
    fontSize: hp('20%'),
    textAlign: 'center',

  },
  nextButtonContainer: {
    width: wp('40%'),
    height:hp('50%'),
    marginTop: hp('2%'),
    backgroundColor:'red'
  },

  bottomView: {
    backgroundColor: '#0b4380',
    height: hp('3%')
  },
  tickIconBackground: {
    paddingHorizontal: wp('3%'),
    backgroundColor: '#005ea1'
  },
  EmailTextInput: {
    width: wp('90%'),
    marginTop: DeviceHeight * 0.1,
    fontSize: hp('3%'),
  }


});




























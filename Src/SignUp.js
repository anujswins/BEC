import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';


 class SignUp extends Component{


    render(){
    return(
<View>
<Text>SignUp screen</Text>


<Button
title="Go to Login screen"
onPress={()=>this.props.navigation.navigate('Drawer')}
/>


</View>

    );


    }







}
export default SignUp;
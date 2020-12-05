import React from 'react';
import { Dimensions ,StyleSheet,View,Image,Text,TouchableOpacity, Alert,TextInput } from 'react-native';
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;





export const PasswordComponent=(props)=>{
return(

<View>
<TextInput
style={styles.EmailTextInput}
placeholder={props.label}
secureTextEntry={true}
underlineColorAndroid="lightgray"
maxLength={20}
onChangeText={props.onChange}
>
</TextInput>
</View>

);


}

const styles=StyleSheet.create({

    EmailTextInput:{
        width:DeviceWidth*0.9,
        marginTop:DeviceHeight*0.03,
        fontSize:18,
    }




});
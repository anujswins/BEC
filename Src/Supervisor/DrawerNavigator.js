import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import React from 'react';
import 'react-native-gesture-handler';
import Home from './Home'
import Login from '../Login'
import OTPVerification from '../ForgotPassword/OTPVerification';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
// import DrawerContent from './DrawerContent'
const Drawer=createDrawerNavigator();


 const  DrawerNavigator=()=>{
    return(
    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={()=><DrawerContent />}>
    <Drawer.Screen  
    options={{
   

    }}
    name="Dashboard"   component={Home} />
    <Drawer.Screen name="OTP" component={OTPVerification} />
    <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
    <Drawer.Screen name="AA" component={ForgotPassword} />
    <Drawer.Screen name="BB" component={ForgotPassword} />
    <Drawer.Screen name="Logout" component={Login} />
    </Drawer.Navigator>
    
    );
    
    
    }

    export default DrawerNavigator;
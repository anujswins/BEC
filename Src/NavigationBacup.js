
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View ,Button,Image,Dimensions} from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Supervisor/Home';
import Login from './Login';

import ForgotPassword from './ForgotPassword/ForgotPassword'
import FlashMessage from 'react-native-flash-message'
import OTPVerification from './ForgotPassword/OTPVerification';
import NewPassword from  './ForgotPassword/NewPassword';
import DrawerNavigator from './Supervisor/DrawerNavigator';
import CurrentJobs from './Supervisor/CurrentJobs';
import Technicians from './Supervisor/Technicians';
import EquipmentIdentification from './Supervisor/EquipmentIdentification';
import JobAssignment from './Supervisor/JobAssignment';
import StackHeader from './CommonComponents/StackHeader';
import ActiveJobs from  './Supervisor/ActiveJobs'
import AddTechnician from './Supervisor/AddTechnician'
import TeamMember from './Supervisor/TeamMember'
const Stack = createStackNavigator();
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;



 const AppStack=()=>{

return(
    <NavigationContainer>
      
    <Stack.Navigator initialRouteName="Home" >
      {/* <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        
        options={{headerShown:false}}
      />
     
      <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{headerTitle:"Forgot Password",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
     
    }}
      />
      <Stack.Screen
      name="OTPVerification"
      component={OTPVerification}
      options={{headerTitle:"Profile Setting",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
     
    
    }}
      />
      <Stack.Screen
      name="NewPassword"
      component={NewPassword}
            options={{headerTitle:"Password",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
     
    }}
      />
        <Stack.Screen
      name="CurrentJobs"
      component={CurrentJobs}
      options={{headerTitle:"Current Jobs",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
      headerRight: () => (
        <StackHeader/>
      ),
    }}
      />
        <Stack.Screen
      name="Technicians"
      component={Technicians}
      // options={{headerShown:false}}

      options={{headerTitle:"Technicians",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
     
    }}
      />
        <Stack.Screen
      name="EquipmentIdentification"
      component={EquipmentIdentification}
      options={{headerShown:false}}
      />
<Stack.Screen
      name="ClientFeedback"
      component={EquipmentIdentification}
      options={{headerShown:false}}
      />

<Stack.Screen
      name="ActiveJobs"
      component={ActiveJobs}
      // options={{headerShown:false}}
      options={{headerTitle:"Technicians",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
      headerRight: () => (
        <StackHeader/>
      ),
    }}
    
      />
      <Stack.Screen
      name="AddTechnician"
      component={AddTechnician}
      // options={{headerShown:false}}
      options={{headerTitle:"Add Technician",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
      headerRight: () => (
        <StackHeader/>
      ),
    }}
    
      />


<Stack.Screen
      name="TeamMember"
      component={TeamMember}
      // options={{headerShown:false}}
      options={{headerTitle:"Technician",
      headerStyle:{
backgroundColor:'#008acf',

      },
      headerTitleStyle:{

      },
      headerTintColor:'#fff',
                                                                                                                                                                                                                                                                                                                
      headerRight: () => (
        <StackHeader/>
      ),
    }}
    
      />




<Stack.Screen
      name="CompletedJobs"
      component={EquipmentIdentification}
      options={{headerShown:false}}
      />


<Stack.Screen
      name="JobAssignment"
      component={JobAssignment}
     
      />



<Stack.Screen
name="Home"
component={Home}

options={{headerTitle:"Supervisor Dashboard",
headerStyle:{
backgroundColor:'#008acf',

},
headerTitleStyle:{
textAlign:'left',
alignSelf:'flex-start',
flex:1 
},

headerTintColor:'#fff',

headerRight: () => (
<StackHeader/>
),

}}
/>





    </Stack.Navigator>
  </NavigationContainer>


)




}
export default AppStack;
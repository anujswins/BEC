import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View ,Button,Image,Dimensions,SafeAreaView,  LogBox } from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Src/Supervisor/Home';
import Login from './Src/Login';
import SignUp from './Src/SignUp';
import ForgotPassword from './Src/ForgotPassword/ForgotPassword'
import FlashMessage from 'react-native-flash-message'
import OTPVerification from './Src/ForgotPassword/OTPVerification';
import NewPassword from  './Src/ForgotPassword/NewPassword';
import DrawerNavigator from './Src/Supervisor/DrawerNavigator';
import CurrentJobs from './Src/Supervisor/CurrentJobs';
import Technicians from './Src/Supervisor/Technicians';
import EquipmentIdentification from './Src/Supervisor/EquipmentIdentification';
import JobAssignment from './Src/Supervisor/JobAssignment';
import StackHeader from './Src/CommonComponents/StackHeader';
import ActiveJobs from  './Src/Supervisor/ActiveJobs'
import AddTechnician from './Src/Supervisor/AddTechnician'
import TeamMember from './Src/Supervisor/TeamMember';
import Notes from './Src/Technician/Notes'
import Practise from "./Src//Supervisor/practise"
import AppContainer from './Src/Navigation';
import Snackbar from '@prince8verma/react-native-snackbar';
import Pract from "./Src/Supervisor/pract"
import DrawerHeader from './Src/CommonComponents/DrawerHeader'
import DrawerPract from "./Src/CommonComponents/DrawerPrac"
// import AdditionaHours from "./Src/Technician/Timer"
import BottomTabNavigator from "./Src/CommonComponents/BottomTabNavigator"
import EquipPract from "./Src/Supervisor/equippract"
import EquipidPractise from "./Src/Supervisor/equipidpractise"
import Equip_Id_Practise from './Src/Supervisor/equipmentidPractise'
import TechniciansPract from "./Src/Supervisor/Technicianspractise"
import ActiveJobsPractise from './Src/Supervisor/ActivejobsPractise'
import TeamMemberPractise from './Src/Supervisor/TeamMemberPractise'
import SearchClientPractise from "./Src/Supervisor/SearchClientPractise"
import AdditionalHours from './Src/Technician/AdditionalHours'
import Camera from './Src/Technician/Camera'
//import PercentageCir from "./Src/Supervisor/percentcircle"
//import Equip_Id_Details from './Src/Supervisor/EquipmentIdDetails'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


import { setConfiguration } from './Src/utils/configuration';
const Stack = createStackNavigator();
// const DeviceWidth=Dimensions.get('screen').width;
// const DeviceHeight=Dimensions.get('screen').height;



LogBox.ignoreAllLogs();

 class App extends React.Component {














  render() {
    const store = require('./Src/Redux/Store').default;
    
    return (

      <View style={{flex:1}}>
  <Provider store={store}>
    <AppContainer/>
    
    </Provider> 
     <FlashMessage position="top" />
      </View>
      
     
    );
  }
}
export default App;
     
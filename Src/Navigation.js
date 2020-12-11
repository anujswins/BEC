import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
import { Icon } from 'react-native-elements';
import SideBar from '../Src/CommonComponents/SideBar'



import Home from './Supervisor/Home';
import Login from '../Src/Login';
import AdditionalHours from '../Src/Technician/AdditionalHours'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import FlashMessage from 'react-native-flash-message'
import OTPVerification from './ForgotPassword/OTPVerification';
import NewPassword from  './ForgotPassword/NewPassword';
import DrawerNavigator from './Supervisor/DrawerNavigator';
import CurrentJobs from './Supervisor/CurrentJobs';
import TechicianDashboard from './Technician/TechnicianDashboard'
import Technicians from './Supervisor/Technicians';
import Feedback from './Supervisor/Feedback';
 import AddFeedback from './Supervisor/AddFeedback';
import EquipmentIdentification from './Supervisor/EquipmentIdentification';
import JobAssignment from './Supervisor/JobAssignment';
import StackHeader from './CommonComponents/StackHeader';
import ActiveJobs from  './Supervisor/ActiveJobs'
import AddTechnician from './Supervisor/AddTechnician'
import JobInProgress from './Technician/JobInProgress'
import TeamMember from './Supervisor/TeamMember';
import CompletedJobs from './Supervisor/CompletedJobs';
import JobAssign from './Supervisor/JobsAssign';
import Equipment_Identification from "./Supervisor/EquipmentIdentification"
import Equip_Id_Details from "./Supervisor/EquipmentIdDetails"
import Equip_ID from "./Supervisor/EquipIdDetails"
import Notes from "./Technician/Notes"
import Notification from "./Supervisor/Notification"
import MyNotification from "./Technician/MyNotification"
import currentJob from "./Technician/currentJob"
import SearchClient from './Supervisor/SearchClient'
import TeamMember_Technician from "./Technician/teamMember"
import EditText from './CommonComponents/EditText'
import teamMember from './Technician/teamMember'
import camera from './Technician/camera'
// import AdditionalHours from './Technician/additionalHours';


const Dashboardstack=createStackNavigator({
Dashboard:{screen :Home}
},
{
  headerMode:'none'
})

const LogoutStack=createStackNavigator({
Logout:{screen:Login}

},
{
  headerMode:'none'
}


)

const TechnicianLogoutStack=createStackNavigator({
  Logout:{screen:Login}
  
  },
  {
    headerMode:'none'
  }
  
  
  )



const TechnicianDashboardstack=createStackNavigator({
  Dashboard:{screen :TechicianDashboard},

  },
  {
    headerMode:'none'
  })
  





const Drawer = createDrawerNavigator(
  {
    
    Dashboard:{screen:Dashboardstack},
    Logout:{screen:LogoutStack,navigationOptions:{
      drawerLockMode:'locked-closed'
    }},
   
  },
  {
   initialRouteName: "Dashboard",
   'drawerOpenRoute': 'DrawerOpen',
    'drawerCloseRoute': 'DrawerClose',
    'drawerToggleRoute': 'DrawerToggle',
    headerMode: "none",
    contentComponent: props => <SideBar {...props} />
    
  }
)

const TechnicianDrawer = createDrawerNavigator(
  {
    
    Dashboard:{screen:TechnicianDashboardstack},
    Logout:{screen:TechnicianLogoutStack,navigationOptions:{
      drawerLockMode:'locked-closed'
    }},
   
  },
  {
   initialRouteName: "Dashboard",
   'drawerOpenRoute': 'DrawerOpen',
    'drawerCloseRoute': 'DrawerClose',
    'drawerToggleRoute': 'DrawerToggle',
    headerMode: "none",
    contentComponent: props => <SideBar {...props} />
    
  }
)



const AppNavigator = createStackNavigator(
{
    Drawer : {screen: Drawer,navigationOptions:{headerShown:false}},
    TechnicianDrawer : {screen: TechnicianDrawer,navigationOptions:{headerShown:false}},
    Login:{ screen:Login, navigationOptions:{headerShown:false}},
   
  //  Dashboard:{screen:Home ,navigationOptions:{headerShown:false}},
  CurrentJobs:{screen:CurrentJobs,navigationOptions:{headerShown:false}},
    // CurrentJobs:{screen:CurrentJobs,navigationOptions:{headerRight: props => <StackHeader {...props} />,headerStyle:{backgroundColor:'#008ad1'}},
   Technicians:{screen:Technicians ,navigationOptions:{headerShown:false}},
   teamMember:{screen:teamMember ,navigationOptions:{headerShown:false}},
   ForgotPassword:{screen:ForgotPassword ,
    // navigationOptions:{headerTitle:'Forgot Password',headerStyle:{backgroundColor:'#008ad1'}},headerTintColor:'#fff',
    // headerTintColor:'#fff'
    
  },
   OTPVerification:{screen:OTPVerification,navigationOptions:{headerShown:true}},
   EquipmentIdentification:{screen:EquipmentIdentification,navigationOptions:{headerShown:false} },
   NewPassword:{screen:NewPassword,navigationOptions:{headerShown:true} },
   JobAssignment:{screen:JobAssignment,navigationOptions:{headerShown:false} },
   ActiveJobs:{screen:ActiveJobs,navigationOptions:{headerShown:false} },
   TeamMember:{screen:TeamMember,navigationOptions:{headerShown:false} },
   EditText:{screen:EditText,navigationOptions:{headerShown:false}},
  Logout:{screen:Login},
  Feedback:{screen:Feedback,navigationOptions:{headerShown:false}},
  AddFeedback:{screen:AddFeedback,navigationOptions:{headerShown:false}},
  AddTechnician:{screen:AddTechnician,navigationOptions:{headerShown:false}},
  CompletedJobs:{screen:CompletedJobs,navigationOptions:{headerShown:false}},
Notes:{screen:Notes,navigationOptions:{headerShown:false}},
Notification:{screen:Notification,navigationOptions:{headerShown:false}},
MyNotification:{screen:MyNotification,navigationOptions:{headerShown:false}},
currentJob:{screen:currentJob,navigationOptions:{headerShown:false}},
JobInProgress:{screen:JobInProgress,navigationOptions:{headerShown:false}},
camera:{screen:camera,navigationOptions:{headerShown:false}},
 AdditionalHours:{screen:AdditionalHours,navigationOptions:{headerShown:false,headerRight: () => (
    <StackHeader/>)}},
  JobAssign:{screen:JobAssign,navigationOptions:{headerShown:false}},
  Equipment_Identification:{screen:Equipment_Identification,navigationOptions:{headerShown:false}},
  TeamMemberTechnician:{screen:TeamMember_Technician,navigationOptions:{headerShown:false}},
  SearchClient:{screen:SearchClient,navigationOptions:{headerShown:false}},
  Equip_Id_Details:{screen:Equip_Id_Details,navigationOptions:{headerShown:false}},
  Equip_ID:{screen:Equip_ID,navigationOptions:{headerShown:false}},
  StackHeader:{screen:StackHeader}
  
},
  {
    initialRouteName: "Login",
    // headerMode: "none",
     //unmountInactiveRoutes: true
  }
);

const AppContainer = createAppContainer(AppNavigator);




export default AppContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop:40,
    alignItems:"center",
    flex:1

  },
  listItem:{
      height:60,
      alignItems:"center",
      flexDirection:"row",
  },
  title:{
      fontSize:18,
      marginLeft:20
  },
  header:{
    width:"100%",
    height:60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
  },
  profileImg:{
    width:80,
    height:80,
    borderRadius:40,
    marginTop:20
  },
  sidebarDivider:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  }
});

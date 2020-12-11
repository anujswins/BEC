import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button ,Dimensions,Image,FlatList, Alert, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//  import {} from 'react-native-gesture-handler';
import BottomHomeComponent from '../CommonComponents/BottomHomeComponent';
import DrawerHeader from '../CommonComponents/DrawerHeader'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';


 const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;

let colors=['#e8f7ff','#fafafa']






export default class Home extends React.Component {
constructor(){
super();
this.state={
  CategoryList:[
    { 
      CategoryName:'Current Jobs',
      CategoryIcon:require('../../assets/current_jobs.png'),
  
    },
    { 
      CategoryName:'Equipment Identification',
      CategoryIcon:require('../../assets/equipment_identification.png'),
  
    },
    { 
      CategoryName:'Technician',
      CategoryIcon:require('../../assets/Technician.png'),
  
    },
    { 
      CategoryName:'Job Assignment',
      CategoryIcon:require('../../assets/job_assignment.png'),
  
    },
    { 
      CategoryName:'Completed Jobs',
      CategoryIcon:require('../../assets/completed_jobs.png'),
  
    },
    { 
      CategoryName:'Client Feedback/Comments',
      CategoryIcon:require('../../assets/client_feedback.png'),
  
    },

    
   


]




}

}



OnListItemClick=(item)=>{
  
if(item.CategoryName=="Current Jobs")
{
this.props.navigation.navigate("CurrentJobs")
  
}



else if(item.CategoryName=="Equipment Identification")
{
this.props.navigation.navigate("Equipment_Identification")
this.props.navigation
  
}

else if(item.CategoryName=="Technician")
{
this.props.navigation.navigate("Technicians")
  
}
else if(item.CategoryName=="Job Assignment")
{
this.props.navigation.navigate("JobAssignment")
  
}

else if(item.CategoryName=="Completed Jobs")
{
this.props.navigation.navigate("CompletedJobs")
  
}

else if(item.CategoryName=="Client Feedback/Comments")
{
 this.props.navigation.navigate("Feedback")
  // Alert.alert("feedback");
}


}



renderItem=({item})=>(
<Item item1={item}/>

)


  render() {
    return (
      <View style={styles.container}>
       
       {/* ---------header-------------- */}
       <View style={styles.headerStyle}> 
       <DrawerHeader name="Supervisor Dashboard" openDrawer={this.props.navigation} status={true}/>
       </View>

{/*  ----------category List------------           */}
<View style={styles.CategoryListContainer}>  
<FlatList
data={this.state.CategoryList}
// renderItem={this.renderItem}
renderItem={({item,index})=>(
  <View style={{backgroundColor:colors[index % colors.length],  marginHorizontal:DeviceWidth*0.04,
    marginVertical:DeviceHeight*0.01,}}>
      <TouchableOpacity onPress={()=>this.OnListItemClick(item)} style={styles.ListItem}>

  
<Text style={styles.CategoryNameStyle}>{item.CategoryName} </Text>
<View style={styles.CategoryIconBackground}>
<Image
style={styles.CategoryIconStyle}
source={item.CategoryIcon}
/>
</View>


</TouchableOpacity>
</View>


)}
keyExtractor={(item)=>item.CategoryName}
/>

 </View>

{/*------------- Footer------------- */}
<View style={styles.FooterStyle}>  
<BottomHomeComponent/>

       </View>
      
      
      
      </View>
    );
  }
}


const styles=StyleSheet.create({
container:{
  flex:1,
height:DeviceHeight,
width:DeviceWidth

},
headerStyle:{
  
height:DeviceHeight*0.09,
width:DeviceWidth,
backgroundColor:'red',
},

CategoryListContainer:{

height:DeviceHeight*0.78,
width:DeviceWidth,

// backgroundColor:'yellow',

},

FooterStyle:{
  
 backgroundColor:'red',
  height:DeviceHeight*0.09
  

},

ListItem:{
 

//  backgroundColor:colors[index%colors.length],
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingVertical:DeviceHeight*0.025,
paddingHorizontal:DeviceWidth*0.04,
},
CategoryIconStyle:{
height:DeviceHeight*0.06,
width:DeviceWidth*0.06,
resizeMode:'contain',
},
CategoryNameStyle:{
  fontSize:18,
},

CategoryIconBackground:{
  backgroundColor:'#fff',
  paddingHorizontal:DeviceWidth*0.03,
  borderRadius:35,
}

});





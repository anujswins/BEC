

const { StyleSheet } = require("react-native");
import {View,Dimensions,Text, Alert,Button,TextInput,TouchableWithoutFeedback,Keyboard,ScrollView} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TickButton } from '../CommonComponents/TickButton';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator'
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from 'react-navigation';
import AuthService from '../RestClient/AuthService';
import ApiLoader from '../PopUp/ApiLoader';
export default class AdditionalHours  extends React.Component{
constructor(){
super();
this.state = {
 showDate:false,
mode :'',
showStartTime:false,
showEndTime:false,
startTime:'',
endTime:'',
chosenDate:'',
isLoading: false,
description:''
}


}


  _hideDateTimePicker = () => this.setState({ 
showStartTime:false,
showEndTime:false,
showDate:false

   });

   toggleLoader = (val) => {
    this.setState(({isLoading: val}));
};
showDatePicker=()=>{

  this.setState({
    showDate:true,
    mode:'date'
    
    })

}

handleStartTime=(time)=>{
  var a=moment(time).format("hh:mm A")
  var b=a.substring(5,a.length)
  console.log("value of a",a.substring(0,2))
  
  if(b===' AM')
  {
    

if(a.substring(0,2)==12)
{

var c="00"+a.substring(2,5)
console.log("12 selected",c)
this.setState({
  startTime:c
})
}
else
{
  var c=a.substring(0,5)
  this.setState({
    startTime:c
  })
  

}

  }

  else if(b===' PM')
  {

if(a.substring(0,2)<12)
{
  var c=a.substring(0,2)
  var NewTime=parseInt(c)+12+a.substring(2,5)
  
  this.setState({
    startTime:NewTime
  })


}
else{

  this.setState({
    startTime:a.substring(0,5)
  })

}
 
    

  }
  else{
    alert("nothing")
  }

  

  



    this.setState({
     showStartTime:false,
    //  startTime:moment(time).format("hh:mm A"),

    });


}

saveDetail=async()=>{
try{
this.toggleLoader(true);
let response= await AuthService.requestAdditionalHours(0,0,this.state.startTime,this.state.endTime,this.state.chosenDate,this.state.description)
Alert.alert("Success",response.data.Message);
this.props.navigation.navigate("Dashboard")
console.log("response recieved******************",response.data)

}
catch(e){
Alert.alert("error",e.response.data.Message)

}
finally {
  this.toggleLoader(false);
  // console.log('login finally print hua');
}

}



handleEndTime=(time)=>{

  var a=moment(time).format("hh:mm A")
  var b=a.substring(5,a.length)
  console.log("value of a",a.substring(0,2))
  
  if(b===' AM')
  {
    

if(a.substring(0,2)==12)
{

var c="00"+a.substring(2,5)
console.log("12 selected",c)
this.setState({
  endTime:c
})
}
else
{
  var c=a.substring(0,5)
  this.setState({
    endTime:c
  })
  

}

  }

  else if(b===' PM')
  {

if(a.substring(0,2)<12)
{
  var c=a.substring(0,2)
  var NewTime=parseInt(c)+12+a.substring(2,5)
  
  this.setState({
    endTime:NewTime
  })


}
else{

  this.setState({
    endTime:a.substring(0,5)
  })

}
 
    

  }
  else{
    alert("nothing")
  }






  this.setState({
    showEndTime:false,
    // endTime:moment(time, "HH:mm").format("hh:mm "),

   });


}


startTime=()=>{
this.setState({
showStartTime:true,
mode:'time'

})


}
endTime=()=>{
  this.setState({
  showEndTime:true,
  mode:'time'
  
  })
  
  
  }
RequestDate=()=>{

  this.setState({
    showDate:true,
    mode:'date'
    
    })


}



handleDate=(date)=>{
  this.setState({
    showDate:false,
    chosenDate:moment(date).format("DD-MM-YYYY"),

   });


}
 



render()
{
  const {isLoading} = this.state;

return(
<SafeAreaView style={styles.container}>
<View style={styles.subcontainer1}> 
 <DrawerHeader name="Additional Work Hours" openDrawer={this.props.navigation} status={false} notification={true}/> 
<ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                    }}/>
</View>

<View style={styles.subcontainer2}>
<View style={{width:"90%",height:"7%",borderColor:'gray', 
marginTop:"5%",justifyContent:'center',backgroundColor:'red'}}
elevation={3}>
 <TouchableOpacity style={styles.setTimeStyle} onPress={this.showDatePicker} >
{
  this.state.chosenDate==''?
<Text style={styles.timerText}>Request Date </Text>
:
<Text style={styles.timerText}>{this.state.chosenDate} </Text>
}


</TouchableOpacity>
</View>



 <View style={{backgroundColor:'red',width:"90%",height:"7%",borderColor:'gray', 
marginTop:"5%",justifyContent:'center',shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.8,
shadowRadius: 2,  
}}elevation={3}>
 <TouchableOpacity style={styles.setTimeStyle} onPress={this.startTime } >
{
  this.state.startTime==''?

  <Text style={styles.timerText}> Start Time </Text>

  :
  <Text style={styles.timerText}> {this.state.startTime} </Text>
}


</TouchableOpacity>
</View>
   
<View style={{backgroundColor:'blue',width:"90%",height:"7%",borderColor:'gray', 
marginTop:"5%",justifyContent:'center'}}
elevation={3}
>
 <TouchableOpacity style={styles.setTimeStyle} onPress={this.endTime } >
{
  this.state.endTime==''?
  <Text style={styles.timerText}> End Time </Text>
:
<Text style={styles.timerText}> {this.state.endTime}</Text>
}


</TouchableOpacity>
</View>
{
this.state.showStartTime?
<DateTimePickerModal
          isVisible={this.state.showStartTime}
          onConfirm={this.handleStartTime}
          onCancel={this._hideDateTimePicker}
          mode={this.state.mode}
          is24Hour={false}
          locale="en_GB"
        />
:
null


}
{
this.state.showEndTime?
<DateTimePickerModal
          isVisible={this.state.showEndTime}
          onConfirm={this.handleEndTime}
          onCancel={this._hideDateTimePicker}
          mode={this.state.mode}
          is24Hour={false}
        />
:
null


}


{
this.state.showDate?
<DateTimePickerModal
          isVisible={this.state.showDate}
          onConfirm={this.handleDate}
          onCancel={this._hideDateTimePicker}
          mode={this.state.mode}
         minimumDate={new Date()}
        />
:
null


}



<View
style ={{height:"30%",
width:"92%",
borderColor:'gray',

marginTop:"5%"
}}
elevation={3}
>
<TextInput
style={styles.descriptionStyle}
placeholder="Description"
placeholderTextColor='gray'
multiline={true}
onChangeText={(text) => {
  this.setState({description: text});}}


/>
</View>
<View style={{backgroundColor:'transparent',height:'30%',justifyContent:'flex-end',alignItems:'center',width:'80%',flexDirection:'column',marginBottom:'10%'}}>

  <View style={{height:'70%',width:'100%',backgroundColor:'transparent'}}>

  </View>
  <View style={{height:'30%',justifyContent:'flex-end',backgroundColor:'transparent'}}>
<TickButton label="Save" handleClick={this.saveDetail} />
</View>

</View>
</View>


<View style={styles.subcontainer3}>
<BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}  navigate={this.props.navigation.navigate}> 
          </BottomTabNavigator>
                </View>
                
</SafeAreaView>


);



}
  
  }


const styles=StyleSheet.create(
{
container:{
flex:1,
height:'100%',
width:'100%',
// backgroundColor:'red'
},

subcontainer1:{
height:'9%',
width:'100%',
backgroundColor:'green'


},
subcontainer2:{

  // marginHorizontal:wp('2%'),
    height:'82%',
     width:'100%',
alignItems:'center',
// backgroundColor:'yellow'
// justifyContent:''
},
subcontainer3:
{
    height:'9%',
    width:'100%',
    backgroundColor:'pink'
},
setTimeStyle:{
  marginLeft:'5%',
//  paddingLeft:'3.5%',
 justifyContent:'center',
 
},

timerText:{
  
color:'gray',
fontSize:hp('2.0%')
},
descriptionStyle:{
  
  fontSize:hp('2.4%'),
  paddingLeft:'3.5%',

textAlignVertical:'top',

}
});










// import React, { Component } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';
// import moment from 'moment';

// export default class DateTimePickerTester extends Component {
//   state = {
//     isVisible: false,
//     chosenDate:'',
//   };

//   _showDateTimePicker = () => this.setState({ isVisible: true });

//   _hideDateTimePicker = () => this.setState({ isVisible: false });

//   _handleDatePicked = (time) => {
//    this.setState({ 
//      isVisible: false ,
//     chosenDate:moment(time, "HH:mm").format("hh:mm A"),
  
//   });

   
   
//   };

//   render () {
//     return (
//       <View style={{ flex: 1 }}>
// <Text>{this.state.chosenDate}</Text>

//         <TouchableOpacity onPress={this._showDateTimePicker}>
//           <Text>Show DatePicker</Text>
//         </TouchableOpacity>
//         <DateTimePickern
//           isVisible={this.state.isVisible}
//           onConfirm={this._handleDatePicked}
//           onCancel={this._hideDateTimePicker}
//           mode="time"
//           is24Hour={false}
//         />
//       </View>
//     );
//   }


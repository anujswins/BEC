

const { StyleSheet } = require("react-native");
import {View,Dimensions,Text, Alert,Button,TextInput,TouchableWithoutFeedback,Keyboard,ScrollView} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import CalendarPicker from 'react-native-calendar-picker';
// import {Calender,CalenderList,Agenda} from 'react-native-calendars'
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TickButton } from '../CommonComponents/TickButton';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class AdditionalHours  extends React.Component{
constructor(){
super();
this.state = {
  date: '',
mode :'time',
show:false,
time:new Date().getTime(),



}


}


//  onChange = (event, selectedTime) => {
//   const currenttime = selectedTime || time;
//   // setShow(Platform.OS === 'ios');
// this.setState({time:currenttime})
// Alert.alert(this.state.time)
// };

   onChange = (event, selectedtime) => {
    // const currentTime = selectedtime || date;
    // setShow(Platform.OS === 'ios');
    //  setDate(currentTime);
  };



render()
{


return(
<View style={styles.container}>
<View style={styles.subcontainer1}> 
<DrawerHeader name="Additional Work Hours" openDrawer={this.props.navigation} status={false}/>  
</View>
<ScrollView scrollEnabled={false}>
<View style={styles.subcontainer2}>

 <View style={{alignItems:'center',justifyContent:'center'}} >
<DatePicker
        style={{ width:wp("93%"),height:hp("5%"),marginTop:hp("5%"),color:'green'}}
        date={this.state.date}
        mode="date"
        placeholder="Request Date"
        placeholderText='gray'
        format="YYYY-MM-DD"
        minDate={new Date()}
        maxDate="2022-05-1"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            height:0,
            width:0,

          },
          placeholderText:{
 paddingLeft:wp('3%'),
color:'gray',
fontSize:wp('4%')
          },
         


          dateInput: {
            alignItems:'flex-start',
           
            paddingLeft:wp('2%')
          }
          
        }}
        onDateChange={(date) => {this.setState({date: date})}
      
      }
      />
</View>
<TouchableOpacity style={styles.setTimeStyle} onPress={()=>this.setState({show:true}) } >

<Text style={styles.timerText}> Start Time </Text>

</TouchableOpacity>

<TouchableOpacity  style={styles.setTimeStyle} onPress={()=>this.setState({show:true}) }>

<Text style={styles.timerText}> End Time</Text>

</TouchableOpacity>
<TextInput
style={styles.descriptionStyle}
placeholder="Description"
placeholderTextColor='gray'
multiline={true}



/>
{this.state.show 
&& (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )
      
      }
{/* {
this.state.show?

 <DateTimePicker
testID="dateTimePicker"
value={this.state.time}
mode={'time'}
is24Hour={true}
display="default"
 onChange={this.onChange}
// onChange={(date) => {this.setState({date: date})}
style={{
  flex:1,
  height:300,
  width:200,
  backgroundColor:'red'
}}

/>  


:null

}   */}
<View style={{marginTop:hp("12%"),height:'auto'}}>
<TickButton label="Save" handleClick={this.Validate} />

</View>





{/* 
<DateTimePicker
testID="dateTimePicker"
value={this.state.time}
mode={'time'}
is24Hour={true}
display="clock"
onChange={this.onChange}
style={{
  flex:1,
  height:300,
  width:200,
  backgroundColor:'red'
}}
/> */}

{/* <TouchableOpacity onPress={()=>this.setState({show:true})}>

     <Text> Select time </Text>
     
     </TouchableOpacity>




{
this.state.show?
<DateTimePicker
testID="dateTimePicker"
value={this.state.time}
mode={'time'}
is24Hour={true}
display="default"
 onChange={this.onChange}
// onChange={(date) => {this.setState({date: date})}
style={{
  flex:1,
  height:300,
  width:200,
  backgroundColor:'red'
}}

/>
:null

}  */}
    
   
   
  
</View>

<View style={styles.subcontainer3}>
<BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}  navigate={this.props.navigation.navigate}>

                </BottomTabNavigator>
                </View>
                </ScrollView>
</View>


);



}


}

const styles=StyleSheet.create(
{
container:{
flex:1,
// height:'100%',
// width:'100%',

},

subcontainer1:{
height:hp('9%'),
width:wp('100%'),
backgroundColor:'red'


},
subcontainer2:{
  // marginHorizontal:wp('2%'),
    height:hp('78.5%'),
    width:wp('100%'),
alignItems:'center',
// backgroundColor:'yellow'
// justifyContent:''
},
subcontainer3:
{
    height:hp('9%'),
    width:wp('100%'),
    backgroundColor:'green'
},
setTimeStyle:{
  borderColor:'gray',borderWidth:1,width:wp("92%"),height:hp("5%"), marginTop:hp("5%"),
 paddingLeft:'3.5%',justifyContent:'center'
},

timerText:{
color:'gray',
fontSize:wp('4%')
},
descriptionStyle:{
  
  fontSize:wp('4%'),

  paddingLeft:wp('3.5%'),
height:hp("20%"),
width:wp("92%"),
borderColor:'gray',
borderWidth:1,
textAlignVertical:'top',
marginTop:hp("5%")
}
});


// // import React, {useState} from 'react';
// // import {View, Button, Platform} from 'react-native';
// // import DateTimePicker from '@react-native-community/datetimepicker';

// //  AdditionalHours = () => {
// //   const [date, setDate] = useState(new Date(1598051730000));
// //   const [mode, setMode] = useState('date');
// //   const [show, setShow] = useState(false);

// //   const onChange = (event, selectedDate) => {
// //     const currentDate = selectedDate || date;
// //     setShow(Platform.OS === 'ios');
// //     setDate(currentDate);
// //   };

// //   const showMode = (currentMode) => {
// //     setShow(true);
// //     setMode(currentMode);
// //   };

// //   const showDatepicker = () => {
// //     showMode('date');
// //   };

// //   const showTimepicker = () => {
// //     showMode('time');
// //   };

// //   return (
// //     <View>
// //       <View>
// //         <Button onPress={showDatepicker} title="Show date picker!" />
// //       </View>
// //       <View>
// //         <Button onPress={showTimepicker} title="Show time picker!" />
// //       </View>
// //       {show && (
// //         <DateTimePicker
// //           testID="dateTimePicker"
// //           value={date}
// //           mode={mode}
// //           is24Hour={true}
// //           display="default"
// //           onChange={onChange}
// //         />
// //       )}
// //     </View>
// //   );
// // };
// // export default AdditionalHours;














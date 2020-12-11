import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
 
const AdditionaHours = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (time) => {
    console.warn("A date has been picked: ", time);
    hideDatePicker();
  };
 
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
 
export default AdditionaHours;

// import React, {useState} from 'react';
// import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

//  AdditionaHours = () => {
//   let hours = new Date().getHours();
//   let minutes = new Date().getMinutes();
//   let seconds = new Date().getSeconds();
//   console.log(`${hours}:${minutes}:${seconds}`)
//   let fullTime=`${hours}:${minutes}:${seconds}`
//   const [date, setDate] = useState(fullTime);
//     const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//     console.log("CurrentTime",currentDate)
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
    
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };
// export default AdditionaHours;
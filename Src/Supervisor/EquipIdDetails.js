import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Modal,
  Alert
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
import { TickButton } from '../CommonComponents/TickButton';
import { Picker } from '@react-native-community/picker';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { showMessage, hideMessage } from "react-native-flash-message";
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { add } from 'react-native-reanimated';
import { array } from 'prop-types';
import {AppStorage} from '../utils/AppStorage';



export default class Equip_ID extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      // Data: [{ Equipment_id: "BEC-72164", Job_Num: "JN-66888" }],
      orderData: [],                                                               //Required
      //   radioclientType: radio_props,
      //  value: "",
   //   SearchClient: "",                                                         //Not Required
      ClientNameData: "",                                                         //Required
      ClientCodeData: "",                                                         //Required
      isValid: true,
      ClientCode: [{ Client_Code: "C-Cash" }],                                   //Required
      show: true,

   //   MachType: [{ Motor: "BEC-3-Phase Motor" }],                              //Not Required
      str_bool_value: true,                                                      //Required
      click: false,                                                              //Required
      isfocusClientName: true,                                                   //Required
      isfocusMobileNo: true,                                                     //Required
      isfocusEmail: true,                                                        //Required
      enterMobileNo: '',                                                         //Required


      globalCodeCategoryId: 0,                                                  //Required - Client Type
      categoryName: "Client Type",
      page: 0,
      limit: 0,
      orderBy: "CreatedOn",
      orderByDescending: true,
      allRecords: true,
      radio_props_Btn1: [],
      radioclientType: [],                                                     //Required
 
   //   clientRadioGetIndex: '',                                               //Not Required
      orderByMachineType: 'MachineType',                                       //Machine Type - Required Parameters
      orderByDescendingMachineType: false,
      allRecordsMachineType: true,


      showModal: false,                                                       //Modal
      // radio_props:[]              //Required
      showMachineTypeText: true,                                              //MachineTypeDropdownText
      Mtype: "",                                                              //MachineTypeName
      value_SelectMachineType: '',                                            //radioBtnMachinetypeValue
      value_Selectmachine: '',
      value_SelectMachineTypeIndex: '',
      radio_props_MacType: [],                                                //RadioBtnMacTypeArray

      showMachineText: true,                                                  //showMachineText
      SelectMachineName: '',                                                  //SelectMachineDropdownName
      machineTypeId: 15,                                                      //SelectMachineDropdown - Required Parameters
      orderByMachine: "MachineName",
      orderByDescendingMachine: false,
      allRecordsMachine: true,
      showModalSelectMachine: false,                                          //Modal Select Machine
      radio_props_Mac: [],


      showSegmentDropdown: false,                                             //Show Segment Dropdown
      segmentText: true,              //SegmentText
      selectSegmentName: '',
      showModalSegment: false,
  
  
      machineId: 17,                  //Segment Variables
      orderBySegment: "Segment",
      orderByDescendingSegment: false,
      allRecordsSegment: true,
      SegmentArray: [],
      mergedSegment: '',
      radio_props_Segment: '',
      value_SelectSegment: '',
      value_SelectSegmentId:'',
      SelectSegmentName: '',
      value_SegName:'',

      showSubSegmentDropdown: false,
      SubsegmentText: true,
      showModalSubSeg: false,
      radio_props_SubSegment: [],
      filterSegmentName: [],
      showBoolSubSegment: false,
      value_SelectSubSegment:'',
      selectedClientBtn: '',
      SbsegmentNames:[],
      radio_SbSeg_Array:[],
      SelectSubSegmentName:'',


      EquipmentId: "string",       // parameters-CreateJobBtn
      jobTypeId: 0,
      machineTypeId: 0,
      machineId: 0,
      segmentId: 0,
      clientId: 0,
      clientType: 0,
      clientName: "string",
      phoneNumber: "9899089898",
      userId: 0,
      jobCode: "j-1234567",         // parameters-CreateJobBtn

      TextInputClientName:'',
      TextInputClientMobNo:'',
      TextInputClientEmail:'',
      value_parentSegname:[],
      value_parentSegID:[],
      value_SegID:[],
      radioSubSegProps:[]

    }
  }


  
  SelectClientType = async () => {

    try {
      this.toggleLoader(true);


      var json_response_radio_btn = await AuthService.getClientType(this.state.globalCodeCategoryId, this.state.categoryName, this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
      console.log('******radioBtn*****', json_response_radio_btn.data.StatusCode)
      if (json_response_radio_btn.data.StatusCode == 200) {
        var radio_props_Btn = json_response_radio_btn.data.data.globalCodeMainResponse.globalCodeResponse

        this.state.radioclientType = radio_props_Btn
        console.log("this.state.radioclientType*******", this.state.radioclientType.length)

        for (var i = this.state.radioclientType.length - 1; i >= 0; i--) {

          this.state.radio_props_Btn1.push([{ label: this.state.radioclientType[i].CodeName, value: this.state.radioclientType[i].Description }])

        }
        console.log("ClientType******", this.state.radio_props_Btn1)
        this.state.radio_props_Btn1 = [].concat.apply([], this.state.radio_props_Btn1)
      }


    } catch (e) {
      console.log("*********catch***********", json_response_radio_btn)
      alert(e.json_response_radio_btn);

    } finally {
      this.toggleLoader(false);
      console.log(' finally Block');
    }

  };

// -----------------ClientType_Radio_Button_OnPress_Event---------------
  SelectClientTypeRadioBtn = (str_value) => {
    console.log("***StrValue*****", str_value)
    this.state.selectedClientBtn = str_value
    console.log("selectedClientBtn*********", this.state.selectedClientBtn)
    if (str_value == 'Regular Client') {
      this.setState({ str_bool_value: true })
      console.log("***strValueRegular", str_value)
      console.log("***strbOOLRegular", this.state.str_bool_value)
      console.log("fytvcghcghc", this.state.radioclientType.indexOf(this.state.radioclientType))
    } else if (str_value == "Cash") {
      this.setState({ str_bool_value: false })
      console.log("***strValueCash", str_value)
      console.log("***strbOOLCash", this.state.str_bool_value)
      console.log("radioclientType", this.state.radioclientType.indexOf(this.state.radioclientType))
    }
  }
  componentDidMount = async () => {
    this.GetEquipIdJobNoAuto();
    this.SelectClientType();
    // if (this.props.navigation.getParam('clientNameData') !== '') {
    //   alert('truealert')
    //   //  this.setState({show:true})
    // } else {
    //   alert('falsealert')
    //   // this.setState({show:false})
    // }
    
  };
  // getDerivedStateFromProps=(props)=>{
  //   if(this.props.navigation.getParam('ClientMob')){
  //     this.setState({show:false})
  //     console.log("show*****",this.state.show)
  //     alert(this.state.show)
  //   }else{
  //     this.setState({show:true})
  //     console.log("show*****",this.state.show)
  //   }
  // }
  toggleLoader = (val) => {
    this.setState(({ isLoading: val }));
  };

  // -------------AutoGenerated EquipId & JobNo.--------
  GetEquipIdJobNoAuto = async () => {
    try {
      this.toggleLoader(true);
      var json_response = await AuthService.getAutoGenEquipJobNo();

      console.log("***got Job no. equip id*******", json_response.status)
      if (json_response.status == 200) {
        console.log(json_response.data.EquipmentId)
        console.log(json_response.data.JobNumber)
        var EquipmentId = json_response.data
        var JobNumber = json_response.data
        console.log("EquipmentId", EquipmentId)
        console.log("JobNumber", JobNumber)
        this.state.orderData.push(json_response.data)

        console.log("orderData", this.state.orderData)
      }

    } catch (e) {

      // Alert.alert(e.response.data);
      console.log('GetAllRecords catch', e.json_response);
    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally ');
    }
  }


  // ---------------MachineType DropDown---------------
  Machinetype = async () => {                                                     //first dropdown Machine Type

    this.setState({ showModal: true })

    try {
      this.toggleLoader(true);
      var json_responseMachineType = await AuthService.GetMachineTypeDropdown(this.state.orderByMachineType, this.state.orderByDescendingMachineType, this.state.allRecordsMachineType);
      console.log("***got Job no. equip id*******", json_responseMachineType.data)
      if (json_responseMachineType.data.StatusCode == 200) {
        var Json_Respo = json_responseMachineType.data.data.machineTypeMainRespone.machineTypeResponse
        console.log("***got Job no. equip id*******", Json_Respo)
        this.state.radio_props_MacType.length = 0
        console.log("***got Job no. equip id*******", this.state.radio_props_MacType)
        for (i = 0; i < Json_Respo.length; i++) {
          console.log("****i*****", Json_Respo[i].MachineType)
          console.log("^^^^i^^^^^^", Json_Respo[i].MachineTypeId)
          this.state.radio_props_MacType.push([{ label: Json_Respo[i].MachineType, value: Json_Respo[i].MachineType }])
          this.state.radio_props_MacType = [].concat.apply([], this.state.radio_props_MacType)
        }
        console.log("sdjbf", this.state.radio_props_MacType)
      }

    } catch (e) {

      Alert.alert(e.json_responseMachineType.data);
      console.log('GetAllRecords', e.json_responseMachineType);
    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally');

    }



  }
  // ------------SelectMachine-----------------
  SelectMachine = async () => {                                                     //Second dropdown Machine 

    if (this.state.Mtype == '') {
      showMessage({
        message: "Please select machine type",
        type: "info",
        backgroundColor: "black",
        position: (0, 0, 100, 100),
        hideStatusBar: false
      });
    } else {
      this.setState({ showModalSelectMachine: true })

      try {
        this.toggleLoader(true);
        var json_response_SelectMachine = await AuthService.GetMachineDropdown(this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine);
        console.log("***got MachineDropdown", json_response_SelectMachine.data)
        console.log("***got MachineDropdown", json_response_SelectMachine.data.data.machineMainResponse.machineResponse)
        if (json_response_SelectMachine.data.StatusCode == 200) {
          var Json_respo_Machine = json_response_SelectMachine.data.data.machineMainResponse.machineResponse
          console.log("***got Json_respo_Machine*******", Json_respo_Machine)
          this.state.radio_props_Mac.length = 0
          for (i = 0; i < Json_respo_Machine.length; i++) {
            console.log("****i&&&&&", Json_respo_Machine[i].MachineName)
            console.log("****i&&&&&", Json_respo_Machine[i].MachineId)
            this.state.radio_props_Mac.push([{ label: Json_respo_Machine[i].MachineName, value: Json_respo_Machine[i].MachineName }])
            console.log("hjdbsjdbc", this.state.radio_props_Mac)
            this.state.radio_props_Mac = [].concat.apply([], this.state.radio_props_Mac)
          }


        }


      } catch (e) {

        Alert.alert(e.json_response_SelectMachine.data.Message);
        console.log('GetAllRecords', e.json_response_SelectMachine.data.Message);
      } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally');

      }


    }



  }
  // ----------------SelectSegment--------------------                       //Third DropdDown Segment
  SelectSegment = async (value) => {
    if (value) {

      this.setState({ showModalSegment: true })
      this.state.radio_props_Segment.length = 0
      this.state.SegmentArray.length = 0


      try {
        this.toggleLoader(true);
        var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
        console.log("***got Segment Data*******", json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse)
        this.state.value_parentSegID.length=0
        this.state.value_parentSegname.length=0
        this.state.SbsegmentNames.length=0
        this.state.radio_SbSeg_Array.length=0
        this.state.radioSubSegProps.length=0
        if(json_response_SelectSegment.data.StatusCode == 200){
          var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse
                     console.log("***got Json_respo_Machine*******", Json_respo_Segment)
                     for(i = 0; i < Json_respo_Segment.length; i++){
                      this.state.SegmentArray.push({ label: Json_respo_Segment[i].Segment, value: Json_respo_Segment[i]})
                      console.log("finally=========", this.state.SegmentArray)
                      this.state.value_SegID = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].SegmentId
          this.state.value_SegName = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].Segment
          console.log("navdeepSegmentID*****", this.state.value_SegID)
          console.log("navdeepSegmentID*****", this.state.value_SegName)
                      
                     }
        //             this.state.SegmentArray = [].concat.apply([], this.state.SegmentArray)
                     this.state.radio_props_Segment = this.state.SegmentArray
                     console.log("****merged#######", this.state.radio_props_Segment)


                    for (i = 0; i < Json_respo_Segment.length; i++) {
            this.state.value_parentSegID.push(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].ParentSegmentId)
            this.state.value_parentSegname.push(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].ParentSegment)
            this.state.SbsegmentNames.push(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].Segment)
            console.log("naviparentSegmentId*****", this.state.value_parentSegID)
            console.log("naviparentSegmentName*****", this.state.value_parentSegname)
            console.log("navigargSegmentName*****", this.state.SbsegmentNames)
        }
     }


      } catch (e) {

        Alert.alert(e.e.json_response_SelectSegment.data.Message);
        console.log('GetAllRecords', e.json_response_SelectSegment.data.Message);
      } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally');

      }
    } else {
      this.setState({ showModalSubSeg: true })
      try {
        console.log("**********",this.state.radioSubSegProps)
        for(i=0;i<this.state.radioSubSegProps.length;i++){
          this.state.radio_SbSeg_Array.push({ label: this.state.radioSubSegProps[i], value: this.state.radioSubSegProps[i] })
          console.log("radioSubSegProps***^^^^",this.state.radio_SbSeg_Array)
        }

      } catch (e) {

        Alert.alert(e);
        console.log('GetAllRecords', e.json_response_SelectMachine.data.Message);
      } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords');

      }

    }

  }
  // ----------------ChooseBtnModal----------------
  chooseBtnModal = () => {

    console.log("Mtype***", this.state.value_SelectMachineType)
    this.state.Mtype = this.state.value_SelectMachineType
    if (this.state.Mtype == "") {
      this.setState({ showMachineTypeText: true })

    } else {
      this.setState({ showMachineTypeText: false })

      console.log("value_SelectMachineType******", this.state.value_SelectMachineType)
    }

    this.setState({ showModal: false })
    console.log(this.state.Mtype)
  }
  // -------------------chooseBtnModalSelectMac---------
  chooseBtnModalSelectMac = () => {
    this.state.SelectMachineName = this.state.value_Selectmachine
    if (this.state.SelectMachineName == "") {
      this.setState({ showMachineText: true })
    } else {
      this.setState({ showMachineText: false })
      this.setState({ showSegmentDropdown: true })
      console.log("MYtbcdbgdcsdhgd", this.state.SelectMachineName)
    }
    this.setState({ showModalSelectMachine: false })
  }

  // --------------chooseBtnModalSegment---------------------
  chooseBtnModalSegment = () => {
    this.state.selectSegmentName = this.state.value_SelectSegment
    if (this.state.selectSegmentName == "") {
      this.setState({ segmentText: true })
    } else {

      this.setState({ segmentText: false })
   //   console.log("GotText**********", this.state.selectSegmentName)
    }

 //   console.log("MYtbcdbgdcsdhgd", this.state.selectSegmentName)

    this.setState({ showModalSegment: false })

  }
// ------------------chooseBtnModalSubSegment---------------------
chooseBtnModalSubSegment=()=>{
  this.setState({showModalSubSeg:false})
  this.state.SelectSubSegmentName=this.state.value_SelectSubSegment
  if(this.state.SelectSubSegmentName==''){
    this.setState({SubsegmentText:true})
  }else{
    this.setState({SubsegmentText:false})
  }
 
}
  // ------------RegularTypeSearchClient-----------------------

  onFocus = () => {

    this.props.navigation.navigate("SearchClient")
    { this.setState({ click: true }) }
    { this.setState({ show: false }) }
  }

   // ---------------AppStorage_Create_Btn---------------
   createjobRespo = (respo_json_CreateJobClienttype) => {

    AppStorage.EquipIdAvail(key.EQUIP_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data)).then(() => {
        console.log("respo_json_CreateJobClienttype.data**", respo_json_CreateJobClienttype.data)
    });


};

// --------------ValidSaveButton----------------

validSaveBtn=async()=>{
  alert('created')
//   let JobTypid = await AppStorage.getJobTypeId();
//   console.log("*****",JobTypid)
// //           { this.props.navigation.navigate("JobAssignment") }
// alert("Navigate Successful")
// try {
//   this.toggleLoader(true);


//   var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipmentId, this.state.jobTypeId, this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.clientId, this.state.clientType, this.state.clientName, this.state.phoneNumber, this.state.userId, this.state.jobCode);

//   console.log("****ClientType********", respo_json_CreateJobClienttype.data.StatusCode)
//   if (respo_json_CreateJobClienttype.data.StatusCode == 200) {
//     this.createjobRespo(respo_json_CreateJobClienttype);



//   }


// } catch (e) {

//   Alert.alert(e.respo_json_CreateJobClienttype);
//   // console.log('catch block', e.respo_json_CreateJobClienttype);
// } finally {
//   this.toggleLoader(false);
//   // console.log('finally');
// }


}
  validates = async (value) => {


    if (value === "Regular Client") {
      if (this.state.click == false) {


        showMessage({
          message: "Please select client",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      }else if(this.props.navigation.getParam('ClientMob')==""){

        alert("cant navigate")
  } else if(this.state.Mtype==""){
        showMessage({
          message: "Please select Machine Type",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      }else if(this.state.SelectMachineName==""){
            showMessage({
              message: "Please select Machine",
              type: "info",
              backgroundColor: "black",
              position: (0, 0, 100, 100),
              hideStatusBar: false
            });
          }else{
            this.validSaveBtn();
          }

}else if(value==="Cash"){
 if(this.state.TextInputClientName==""){
   showMessage({
      message: "Please enter client name",
      type: "info",
      backgroundColor: "black",
      position: (0, 0, 100, 100),
      hideStatusBar: false
    });
 }else if(this.state.enterMobileNo==""){
  showMessage({
    message: "Please enter mobile number",
    type: "info",
    backgroundColor: "black",
    position: (0, 0, 100, 100),
    hideStatusBar: false
  });
 }else if(this.state.Mtype==""){
  showMessage({
    message: "Please select Machine Type",
    type: "info",
    backgroundColor: "black",
    position: (0, 0, 100, 100),
    hideStatusBar: false
  });
}else if(this.state.SelectMachineName==""){
      showMessage({
        message: "Please select Machine",
        type: "info",
        backgroundColor: "black",
        position: (0, 0, 100, 100),
        hideStatusBar: false
      });
    }else{

      this.validSaveBtn();

    }




    
  }else if(value==""){
    showMessage({
      message: "Please select client",
      type: "info",
      backgroundColor: "black",
      position: (0, 0, 100, 100),
      hideStatusBar: false
    });
  }



  
    } 

    
// -------------TextInputClientname in cash Select----------
  handleFocus = () => {
    this.setState({ isfocusClientName: false })
  }


  handleFocusMobNo = () => {
    this.setState({ isfocusMobileNo: false })
    this.setState({ isfocusClientName: true })
  }
  handleFocusEmail = () => {
    this.setState({ isfocusEmail: false })
    this.setState({ isfocusClientName: true })
    this.setState({ isfocusMobileNo: true })
  }
  MobileNumText = (value) => {

    this.setState({ enterMobileNo: value })
    // this.setState({isfocus:true})
    console.log(this.state.enterMobileNo)
  }
  render() {

    const { isLoading } = this.state;
    console.log("###Filterdata#######",  this.state.radioSubSegProps)
 //   console.log("value_parentSegname********",this.state.value_parentSegname)
    return (
      <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "#FFFFFF", }}>
        <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
        }} />
        <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
          <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true} />
        </View>
        <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
          <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
            <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor: 'transparent', width: '15%', paddingLeft: '0.5%' }}>Stage</Text>
            </View>
            <View style={{ height: '60%', width: '100%', flexDirection: 'row', backgroundColor: 'transparent' }}>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05, }} />
              <View style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008BD0'
              }}>
                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>1</Text>
              </View>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
              <View style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
              }}>
                <Text style={{ fontSize: hp('2%') }}>2</Text>
              </View>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
              <View style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
              }}>
                <Text style={{ fontSize: hp('2%') }}>3</Text>
              </View>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
            </View>
          </View>

          <View style={{ height: "68%", width: '100%', backgroundColor: 'transparent' }}>
            <ScrollView>

              <FlatList data={this.state.orderData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  // console.log("*****Value*****", item)


                  return (

                    <View style={{ backgroundColor: "transparent" }}>

                      <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                        <View style={{ width: wp('44%'), justifyContent: "center", backgroundColor: "transparent" }}>
                          <Text style={{ fontSize: hp('1.8%'), }}>
                            Enter Equipment Id
                                        </Text>

                        </View>
                        <View style={{ width: wp('46%'), height: hp('4.5'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                          <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                            {item.EquipmentId}
                          </Text>
                        </View>
                      </View>
                      <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                        <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                          <Text style={{ fontSize: hp('1.8%') }}>
                            Job Number
                                            </Text>

                        </View>
                        <View style={{ width: wp('46%'), height: hp('4.5'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                          <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                            {item.JobNumber}
                          </Text>
                        </View>
                      </View>




                    </View>
                  )
                }}>
              </FlatList>



              <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                    Client
            </Text>
                </View>
                <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>

                  <RadioForm

                    radio_props={this.state.radio_props_Btn1}
                    initial={0}
                    isSelected = {true}
                    formHorizontal={true}
                    buttonColor={"#0089CF"}
                    animation={false}
                    buttonSize={7}
                    radioStyle={{ marginTop: hp('1%') }}
                    labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%') }}
                    onPress={(value) => this.SelectClientTypeRadioBtn(value)}

                  />
                </View>
              </View>
              {
                this.state.str_bool_value ? <View>{this.state.show ?
                  <View style={{ height: hp('6%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                    <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                      <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                        Search Client
                </Text>
                    </View>
                    <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", }}>
                      <TextInput underlineColorAndroid={'#D2D3D5'} style={{ width: wp('46%'), fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: hp('1%') }}
                        placeholder="Code/F.Name/L.Name"
                        onFocus={() => this.onFocus()}
                      />
                    </View>
                  </View>
                  : <View>

                    {this.props.navigation.getParam('clientCodeData') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
                      </View>
                      <TouchableOpacity onPress={() => this.onFocus()}>
                        <View style={{ width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                          <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientCodeData'))}</Text>
                        </View>
                      </TouchableOpacity>
                    </View> : null}
                    {this.props.navigation.getParam('clientNameData') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
                      </View>
                      <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientNameData'))}</Text>
                      </View>
                    </View> : null}
                    {this.props.navigation.getParam('ClientMob') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
                      </View>
                      <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMob'))}</Text>
                      </View>
                    </View> : null}
                    {this.props.navigation.getParam('ClientMail') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email id</Text>
                      </View>
                      <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMail'))}</Text>
                      </View>
                    </View> : null}
                  </View>}

                </View> : <View>
                    <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
                      </View>

                      <View style={{ width: wp('47%'), height: hp('5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                        <TextInput underlineColorAndroid={this.state.isfocusClientName ? '#D2D3D5' : "#008BD0"}
                          maxLength={25}
                          onChangeText={(value)=>this.setState({TextInputClientName:value})}
                          onFocus={this.handleFocus} style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
                      </View>
                    </View>
                    <FlatList data={this.state.ClientCode}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item }) => (
                        <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                          <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                            <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
                          </View>
                          <View style={{ width: wp('46%'), height: hp('4.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                            <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{item.Client_Code}</Text>
                          </View>

                        </View>
                      )}>

                    </FlatList>
                    <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
                      </View>
                      <View style={{ width: wp('47%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                        <TextInput underlineColorAndroid={this.state.isfocusMobileNo ? '#D2D3D5' : "#008BD0"}
                          onFocus={this.handleFocusMobNo}
                          onChangeText={(value) => this.MobileNumText(value)}
                          maxLength={12}
                          keyboardType={"numeric"}
                          style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
                      </View>
                    </View>
                    <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email</Text>
                      </View>
                      <View style={{ width: wp('47%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                        <TextInput underlineColorAndroid={this.state.isfocusEmail ? '#D2D3D5' : "#008BD0"}
                          onFocus={this.handleFocusEmail}
                          onSelectionChange={(value)=>this.setState({TextInputClientEmail:value})}
                          maxLength={30}
                          style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
                      </View>
                    </View>



                  </View>}
              <TouchableOpacity activeOpacity={0.8} onPress={() => this.Machinetype()}>
                <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>

                  <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                    {this.state.showMachineTypeText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine Type</Text>
                      : <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.Mtype}</Text>

                    }
                  </View>
                  <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                    <Image source={require('../../assets/dropdown_icon.png')}
                      style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectMachine()}>
                <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                  <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                    {this.state.showMachineText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine</Text> : 
                    <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.SelectMachineName}</Text>}
                  </View>

                  <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                    <Image source={require('../../assets/dropdown_icon.png')}
                      style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                  </View>
                </View>
              </TouchableOpacity>
              {this.state.showSegmentDropdown ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectSegment(true)}>
                <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                  <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                    {this.state.segmentText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Segment</Text> :
                      <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.selectSegmentName}</Text>}
                  </View>
                  <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                    <Image source={require('../../assets/dropdown_icon.png')}
                      style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                  </View>
                </View>
              </TouchableOpacity> : null}
              {this.state.showSubSegmentDropdown ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectSegment(false)}>
                <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                  <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                    {this.state.SubsegmentText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Sub Segment</Text> :
                      <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.SelectSubSegmentName}</Text>}

                  </View>
                  <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                    <Image source={require('../../assets/dropdown_icon.png')}
                      style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                  </View>
                </View>
              </TouchableOpacity> : null}

              <Modal visible={this.state.showModal}
                transparent={true}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
                  <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
                    <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
                      <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
                        Select Machine Type
                                </Text>
                    </View>
                    <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
                    

                      <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
                        <ScrollView>
                        <RadioForm
                          radio_props={this.state.radio_props_MacType}
                          initial={-1}
                          formHorizontal={false}
                          labelHorizontal={true}
                          buttonColor={"#D6D6D6"}
                          labelColor={"#424242"}
                          animation={false}
                          buttonSize={8}
                          labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
                          onPress={(value, index) => {
                            console.log("Value%%%%%%", value)
                            this.state.value_SelectMachineType = value

                            console.log("value_SelectMachineType", this.state.value_SelectMachineType)
                          }}
                          radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
                          wrapStyle={{ marginVertical: hp('9%') }}
                        />
                        </ScrollView>
                      </View>


                    </View>
                    <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
                      <TouchableOpacity onPress={(value) => { this.chooseBtnModal(value) }}>
                        <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
                          <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
                            CHOOSE
                                </Text>
                        </View>
                      </TouchableOpacity>
                    </View>


                  </View>
                </View>

              </Modal>
              {/* ----------------------Modal Machine-------------------- */}
              <Modal visible={this.state.showModalSelectMachine}
                transparent={true}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
                  <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
                    <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
                      <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
                        Select Machine
                                </Text>
                    </View>
                    <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
                      <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
                        <ScrollView>
                        <RadioForm
                          radio_props={this.state.radio_props_Mac}
                          initial={-1}
                          formHorizontal={false}
                          labelHorizontal={true}
                          buttonColor={"#D6D6D6"}
                          labelColor={"#424242"}
                          animation={false}
                          buttonSize={8}
                          labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
                          onPress={(value, index) => {
                            console.log("Value", value)
                            this.state.value_Selectmachine = value
                            console.log(this.state.value_Selectmachine)
                          }}
                          radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
                          wrapStyle={{ marginVertical: hp('9%') }}
                        />
                        </ScrollView>
                      </View>
                    </View>
                    <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
                      <TouchableOpacity onPress={() => { this.chooseBtnModalSelectMac() }}>
                        <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
                          <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
                            CHOOSE
                                </Text>
                        </View>
                      </TouchableOpacity>
                    </View>


                  </View>
                </View>

              </Modal>

              {/* ------------------Modal Segment--------------- */}
              <Modal visible={this.state.showModalSegment}
                transparent={true}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
                  <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
                    <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
                      <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
                        Select Segment
                                </Text>
                    </View>
                    <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
                          <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
                            <ScrollView>
                            <RadioForm
                              radio_props={ this.state.radio_props_Segment}
                              initial={-1}
                              formHorizontal={false}
                              labelHorizontal={true}
                              buttonColor={"#D6D6D6"}
                              labelColor={"#424242"}
                              animation={false}
                              buttonSize={8}
                              labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
                              onPress={(value) => {
                                console.log("Value", value)
                                this.setState({showSubSegmentDropdown:false})
                                this.state.value_SelectSegment = value.Segment
                                this.state.value_SelectSegmentId=value.SegmentId
                                // console.log("this.state.value_SelectSegmentId****", this.state.value_SelectSegmentId)
                                // console.log("this.state.value_parentSegID ****", this.state.value_parentSegID )
                                // console.log(" this.state.value_SelectSegment ***", this.state.value_SelectSegment )
                                // console.log("this.state.SbsegmentNames****",this.state.SbsegmentNames)
                               
                                this.state.radioSubSegProps.length=0
                                 for(i=0;i<this.state.value_parentSegID.length;i++){
                                  
                                   console.log("*&^%%$$value_SelectSegmentId",this.state.value_SelectSegmentId)
                                   console.log("*&^%%$$this.state.value_parentSegID[i]",this.state.value_parentSegID[i])
                                  if(this.state.value_SelectSegmentId===this.state.value_parentSegID[i]){
                                 { this.setState({showSubSegmentDropdown:true})}
                                this.state.radioSubSegProps.push(this.state.SbsegmentNames[i])
                                    console.log("this.state.radioSubSegProps****",this.state.radioSubSegProps)
                                  }
                                }

                          //       if( this.state.radioSubSegProps.length >0){
                          //         this.setState({showSubSegmentDropdown:true})
                          // //        console.log("this.setState({showSubSegmentDropdown:true})****",this.state.showSubSegmentDropdown)
                          //       }
                              }}
                              radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
                              wrapStyle={{ marginVertical: hp('9%') }}
                            />
                            </ScrollView>
                          </View>
                    </View>
                    <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
                      <TouchableOpacity onPress={() => { this.chooseBtnModalSegment() }}>
                        <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
                          <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
                            CHOOSE
                                </Text>
                        </View>
                      </TouchableOpacity>
                    </View>


                  </View>
                </View>

              </Modal>
              {/* ------------------SubSegmentModal------------ */}
              <Modal visible={this.state.showModalSubSeg}
                transparent={true}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
                  <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
                    <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
                      <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
                        Select Sub Segment
                                </Text>
                    </View>
                    <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
                          <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
                            <ScrollView>
                            <RadioForm
                              radio_props={this.state.radio_SbSeg_Array}
                              initial={-1}
                              formHorizontal={false}
                              labelHorizontal={true}
                              buttonColor={"#D6D6D6"}
                              labelColor={"#424242"}
                              animation={false}
                              buttonSize={8}
                              labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
                              onPress={(value, index) => {
                                console.log("Value", value)
                                this.state.value_SelectSubSegment = value
                                console.log("value_SelectSubSegment******",this.state.value_SelectSubSegment)
                                this.state.radioSubSegProps.length=0
                              }}
                              radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
                              wrapStyle={{ marginVertical: hp('9%') }}
                            />
                            </ScrollView>
                          </View>
                    </View>
                    <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
                      <TouchableOpacity onPress={() => { this.chooseBtnModalSubSegment(this.state.radioSubSegProps) }}>
                        <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
                          <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
                            CHOOSE
                                </Text>
                        </View>
                      </TouchableOpacity>
                    </View>


                  </View>
                </View>

              </Modal>



            </ScrollView>

          </View>
          <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", }}>
            <TickButton label="Save" handleClick={() => this.validates(this.state.selectedClientBtn)} />
          </View>
        </View>

        <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
          <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
        </View>
      </SafeAreaView>

    )
  }
}









// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Dimensions,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   TextInput,
//   Modal,
//   Alert
// } from 'react-native';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
// import { TickButton } from '../CommonComponents/TickButton';
// import { Picker } from '@react-native-community/picker';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { showMessage, hideMessage } from "react-native-flash-message";
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import ApiLoader from '../../Src/PopUp/ApiLoader';
// import AuthService from '../../Src/RestClient/AuthService';
// import { add } from 'react-native-reanimated';
// import { array } from 'prop-types';



// export default class Equip_ID extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       // Data: [{ Equipment_id: "BEC-72164", Job_Num: "JN-66888" }],
//       orderData: [],
//       //   radioclientType: radio_props,
//       //  value: "",
//       value1: "",
//       SearchClient: "",
//       ClientNameData: "",
//       ClientCodeData: "",
//       isValid: true,
//       //    MachineType: Mac_A,
//       //   Machine: Mac_B,
//       lang: "",
//       ClientCode: [{ Client_Code: "C-Cash" }],
//       show: true,

//       MachType: [{ Motor: "BEC-3-Phase Motor" }],
//       str_bool_value: true,


//       click: false,
//       isfocusClientName: true,
//       isfocusMobileNo: true,
//       isfocusEmail: true,
//       enterMobileNo: '',

//       value3Index: 0,
//       // DataClientType:['cash','regular'],
//       // checkedClientType:0

//       gendervalue: '',


//       globalCodeCategoryId: 0,      //Required
//       categoryName: "Client Type",
//       page: 0,
//       limit: 0,
//       orderBy: "CreatedOn",
//       orderByDescending: true,
//       allRecords: true,
//       radio_props_Btn1: [],
//       radioclientType: [],
//       //  getdata:[]
//       clientRadioGetIndex: '',
//       orderByMachineType: 'MachineType',
//       orderByDescendingMachineType: false,
//       allRecordsMachineType: true,
//       showModal: false,               //Modal
//       // radio_props:[]              //Required
//       showMachineTypeText: true,      //MachineTypeDropdownText
//       Mtype: "",                      //MachineTypeName
//       value_SelectMachineType: '',    //radioBtnMachinetypeValue
//       value_Selectmachine: '',
//       value_SelectMachineTypeIndex: '',
//       radio_props_MacType: [],        //RadioBtnMacTypeArray

//       showMachineText: true,          //showMachineText
//       SelectMachineName: '',         //SelectMachineDropdownName
//       machineTypeId: 15,             //SelectMachineDropdown
//       orderByMachine: "MachineName",
//       orderByDescendingMachine: false,
//       allRecordsMachine: true,
//       showModalSelectMachine: false,   //Modal Select Machine

//       radio_props_Mac: [],
//       showSegmentDropdown: false,        //Show Segment Dropdown
//       segmentText: true,              //SegmentText
//       selectSegmentName: '',
//       showModalSegment: false,
//       machineId: 17,                  //Segment Variables
//       orderBySegment: "Segment",
//       orderByDescendingSegment: false,
//       allRecordsSegment: true,
//       SegmentArray: [],
//       mergedSegment: '',
//       radio_props_Segment: '',
//       value_SelectSegment: '',
//       SelectSegmentName: '',

//       showSubSegmentDropdown: false,
//       SubsegmentText: true,
//       showModalSubSeg: false,
//       radio_props_SubSegment: [],
//       filterSegmentName: [],
//       showBoolSubSegment: false,

//       selectedClientBtn: '',

//       EquipmentId: "string",       // parameters-CreateJobBtn
//       jobTypeId: 0,
//       machineTypeId: 0,
//       machineId: 0,
//       segmentId: 0,
//       clientId: 0,
//       clientType: 0,
//       clientName: "string",
//       phoneNumber: "9899089898",
//       userId: 0,
//       jobCode: "j-1234567",         // parameters-CreateJobBtn

//       TextInputClientName:'',
//       TextInputClientMobNo:'',
//       TextInputClientEmail:''

//     }
//   }

//   SelectClientType = async () => {

//     try {
//       this.toggleLoader(true);


//       var json_response_radio_btn = await AuthService.getClientType(this.state.globalCodeCategoryId, this.state.categoryName, this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
//       console.log('******radioBtn*****', json_response_radio_btn.data.StatusCode)
//       if (json_response_radio_btn.data.StatusCode == 200) {
//         var radio_props_Btn = json_response_radio_btn.data.data.globalCodeMainResponse.globalCodeResponse

//         this.state.radioclientType = radio_props_Btn
//         console.log("this.state.radioclientType*******", this.state.radioclientType.length)

//         for (var i = this.state.radioclientType.length - 1; i >= 0; i--) {

//           this.state.radio_props_Btn1.push([{ label: this.state.radioclientType[i].CodeName, value: this.state.radioclientType[i].Description }])

//         }
//         console.log("ClientType******", this.state.radio_props_Btn1)
//         this.state.radio_props_Btn1 = [].concat.apply([], this.state.radio_props_Btn1)
//       }


//     } catch (e) {
//       console.log("*********catch***********", json_response_radio_btn)
//       alert(e.json_response_radio_btn);

//     } finally {
//       this.toggleLoader(false);
//       console.log(' finally Block');
//     }

//   };

// // -----------------ClientType_Radio_Button_OnPress_Event---------------
//   SelectClientTypeRadioBtn = (str_value) => {
//     console.log("***StrValue*****", str_value)
//     this.state.selectedClientBtn = str_value
//     console.log("selectedClientBtn*********", this.state.selectedClientBtn)
//     if (str_value == 'Regular Client') {
//       this.setState({ str_bool_value: true })
//       console.log("***strValueRegular", str_value)
//       console.log("***strbOOLRegular", this.state.str_bool_value)
//       console.log("fytvcghcghc", this.state.radioclientType.indexOf(this.state.radioclientType))
//     } else if (str_value == "Cash") {
//       this.setState({ str_bool_value: false })
//       console.log("***strValueCash", str_value)
//       console.log("***strbOOLCash", this.state.str_bool_value)
//       console.log("radioclientType", this.state.radioclientType.indexOf(this.state.radioclientType))
//     }
//   }
//   componentDidMount = async () => {
//     this.GetEquipIdJobNoAuto();
//     this.SelectClientType();
//     // if (this.props.navigation.getParam('clientNameData') !== '') {
//     //   alert('truealert')
//     //   //  this.setState({show:true})
//     // } else {
//     //   alert('falsealert')
//     //   // this.setState({show:false})
//     // }
//   };

//   toggleLoader = (val) => {
//     this.setState(({ isLoading: val }));
//   };

//   // -------------AutoGenerated EquipId & JobNo.--------
//   GetEquipIdJobNoAuto = async () => {
//     try {
//       this.toggleLoader(true);
//       var json_response = await AuthService.getAutoGenEquipJobNo();

//       console.log("***got Job no. equip id*******", json_response.status)
//       if (json_response.status == 200) {
//         console.log(json_response.data.EquipmentId)
//         console.log(json_response.data.JobNumber)
//         var EquipmentId = json_response.data
//         var JobNumber = json_response.data
//         console.log("EquipmentId", EquipmentId)
//         console.log("JobNumber", JobNumber)
//         this.state.orderData.push(json_response.data)

//         console.log("orderData", this.state.orderData)
//       }

//     } catch (e) {

//       // Alert.alert(e.response.data);
//       console.log('GetAllRecords catch', e.json_response);
//     } finally {
//       this.toggleLoader(false);
//       console.log('GetAllRecords finally ');
//     }
//   }


//   // ---------------MachineType DropDown---------------
//   Machinetype = async () => {                                                     //first dropdown Machine Type

//     this.setState({ showMachineTypeText: false })
//     this.setState({ showModal: true })

//     try {
//       this.toggleLoader(true);
//       var json_responseMachineType = await AuthService.GetMachineTypeDropdown(this.state.orderByMachineType, this.state.orderByDescendingMachineType, this.state.allRecordsMachineType);
//       console.log("***got Job no. equip id*******", json_responseMachineType.data)
//       if (json_responseMachineType.data.StatusCode == 200) {
//         var Json_Respo = json_responseMachineType.data.data.machineTypeMainRespone.machineTypeResponse
//         console.log("***got Job no. equip id*******", Json_Respo)
//         this.state.radio_props_MacType.length = 0
//         console.log("***got Job no. equip id*******", this.state.radio_props_MacType)
//         for (i = 0; i < Json_Respo.length; i++) {
//           console.log("****i*****", Json_Respo[i].MachineType)
//           console.log("^^^^i^^^^^^", Json_Respo[i].MachineTypeId)
//           this.state.radio_props_MacType.push([{ label: Json_Respo[i].MachineType, value: Json_Respo[i].MachineType }])
//           this.state.radio_props_MacType = [].concat.apply([], this.state.radio_props_MacType)
//         }
//         console.log("sdjbf", this.state.radio_props_MacType)
//       }

//     } catch (e) {

//       Alert.alert(e.json_responseMachineType.data);
//       console.log('GetAllRecords', e.json_responseMachineType);
//     } finally {
//       this.toggleLoader(false);
//       console.log('GetAllRecords finally');

//     }



//   }
//   // ------------SelectMachine-----------------
//   SelectMachine = async () => {                                                     //Second dropdown Machine 

//     if (this.state.Mtype == '') {
//       showMessage({
//         message: "Please select machine type",
//         type: "info",
//         backgroundColor: "black",
//         position: (0, 0, 100, 100),
//         hideStatusBar: false
//       });
//     } else {
//       this.setState({ showMachineText: false })
//       this.setState({ showModalSelectMachine: true })

//       try {
//         this.toggleLoader(true);
//         var json_response_SelectMachine = await AuthService.GetMachineDropdown(this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine);
//         console.log("***got MachineDropdown", json_response_SelectMachine.data)
//         console.log("***got MachineDropdown", json_response_SelectMachine.data.data.machineMainResponse.machineResponse)
//         if (json_response_SelectMachine.data.StatusCode == 200) {
//           var Json_respo_Machine = json_response_SelectMachine.data.data.machineMainResponse.machineResponse
//           console.log("***got Json_respo_Machine*******", Json_respo_Machine)
//           this.state.radio_props_Mac.length = 0
//           for (i = 0; i < Json_respo_Machine.length; i++) {
//             console.log("****i&&&&&", Json_respo_Machine[i].MachineName)
//             console.log("****i&&&&&", Json_respo_Machine[i].MachineId)
//             this.state.radio_props_Mac.push([{ label: Json_respo_Machine[i].MachineName, value: Json_respo_Machine[i].MachineName }])
//             console.log("hjdbsjdbc", this.state.radio_props_Mac)
//             this.state.radio_props_Mac = [].concat.apply([], this.state.radio_props_Mac)
//           }


//         }


//       } catch (e) {

//         Alert.alert(e.json_response_SelectMachine.data.Message);
//         console.log('GetAllRecords', e.json_response_SelectMachine.data.Message);
//       } finally {
//         this.toggleLoader(false);
//         console.log('GetAllRecords finally');

//       }


//     }



//   }
//   // ----------------SelectSegment--------------------                       //Third DropdDown Segment
//   SelectSegment = async (value) => {
//     if (value) {

//       this.setState({ showModalSegment: true })
//       this.state.radio_props_Segment.length = 0
//       this.state.SegmentArray.length = 0

//       console.log("****ClearLength*******:", this.state.radio_props_Segment.length)
//       console.log("****ClearLength*******:", this.state.SegmentArray)

//       try {
//         this.toggleLoader(true);
//         var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
//         console.log("***got Segment Data*******", json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse)

//         if (json_response_SelectSegment.data.StatusCode == 200) {
//           var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse
//           console.log("***got Json_respo_Machine*******", Json_respo_Segment.length)

//           for (i = 0; i < Json_respo_Segment.length; i++) {
//             this.state.SegmentArray.push([{ label: Json_respo_Segment[i].Segment, value: Json_respo_Segment[i].Segment }])
//             console.log("finally=========", this.state.SegmentArray)
//           }
//           // this.state.radio_props_Mac = [].concat.apply([],this.state.radio_props_Mac)
//           this.state.SegmentArray = [].concat.apply([], this.state.SegmentArray)
//           this.state.radio_props_Segment = this.state.SegmentArray
//           console.log("****merged#######", this.state.radio_props_Segment)
//           // console.log("^^^^parentID%%%", json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse)


// // ---------------------------------------------------------------SubSeg---------------------------------------------------------------
//           // var Navdeep = [], Navi = []
//           // Navdeep.length = 0, Navi.length = 0
//           // console.log("**********************************", Navdeep, Navi)
//           // console.log("**********###############", json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[0].SegmentId)
//           // console.log("###############**********", json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[0].ParentSegmentId)

// //           for (i = 0; i < Json_respo_Segment.length; i++) {
// //             var value_parentSegID = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].ParentSegmentId
// //             var value_parentSegname = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].ParentSegment
// //             console.log("naviparentSegmentId*****", value_parentSegID)
// //             console.log("naviparentSegmentName*****", value_parentSegname)

// //             for (j = 0; j < Json_respo_Segment.length; j++) {
// //               var value_SegID = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[j].SegmentId
// //               var value_SegName = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[j].Segment
// //               console.log("navdeepSegmentID*****", value_SegID)
// //               console.log("navdeepSegmentID*****", value_SegName)

// //               if (value_SegID == value_parentSegID) {
// //                 console.log("WIll go in SubSegDropdown", value_SegName)
// //                 console.log("WIll go in SubSegDropdown", value_SegName)
// //                 console.log("895656446577", Json_respo_Segment.indexOf(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[j].SegmentId))
// //                 this.state.filterSegmentName.push(value_SegName)
// //                 console.log("filter*****", this.state.filterSegmentName)
// //                 if (this.state.filterSegmentName !== "") {
// //                   this.setState({ showSubSegmentDropdown: true })
// //                   // this.setState({showBoolSubSegment:true})

// //                 }

// //                 // if(this.state.selectSegmentName==value_SegName){
// //                 //   this.setState({showSubSegmentDropdown:true})
// //                 //   console.log("Subsegmnetdropdown*******",this.state.showSubSegmentDropdown)
// //                 // }
// //               }
// // // ---------------------------------------------------------------SubSeg---------------------------------------------------------------
// //               // if(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].SegmentId==json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[j].ParentSegmentId){
// //               //   alert(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].SegmentId)
// //               //   console.log("****&&&&&",json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[i].SegmentId)
// //               // }else{
// //               //   alert(json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[j].ParentSegmentId)
// //               //  console.log("****^^^^^^",json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse[j].ParentSegmentId)
// //               // }
// //               
// //             }
// //           }
//         }


//       } catch (e) {

//         Alert.alert(e.e.json_response_SelectSegment.data.Message);
//         console.log('GetAllRecords', e.json_response_SelectSegment.data.Message);
//       } finally {
//         this.toggleLoader(false);
//         console.log('GetAllRecords finally');

//       }
//     } else {
//       this.setState({ showModalSubSeg: true })
//       this.setState({ SubsegmentText: false })

//       try {
//   //      this.toggleLoader(true);
//         var json_response_Subsegment = await AuthService.GetMachineDropdown(this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine);
//         console.log("***got SubSegmentDropdown", json_response_Subsegment.data)
//         console.log("***got SubSegmentDropdown", json_response_Subsegment.data.data.machineMainResponse.machineResponse)
//         this.toggleLoader(true);
//         //  if(json_response_SelectMachine.data.StatusCode==200){
//         //   var Json_respo_Machine = json_response_SelectMachine.data.data.machineMainResponse.machineResponse
//         //   console.log("***got Json_respo_Machine*******", Json_respo_Machine)
//         //   for (i = 0; i < Json_respo_Machine.length; i++) {
//         //     console.log("****i&&&&&", Json_respo_Machine[i].MachineName)
//         //     console.log("****i&&&&&", Json_respo_Machine[i].MachineId)
//         //     this.state.radio_props_Mac.push([{ label: Json_respo_Machine[i].MachineName, value: Json_respo_Machine[i].MachineName }])
//         //     console.log("hjdbsjdbc", this.state.radio_props_Mac)
//         //     this.state.radio_props_Mac = [].concat.apply([],this.state.radio_props_Mac)
//         //  }


//         //       }


//       } catch (e) {

//         Alert.alert(e.json_response_SelectMachine.data.Message);
//         console.log('GetAllRecords', e.json_response_SelectMachine.data.Message);
//       } finally {
//         this.toggleLoader(false);
//         console.log('GetAllRecords finally');

//       }


//     }



//   }
//   // ----------------ChooseBtnModal----------------
//   chooseBtnModal = () => {

//     console.log("Mtype***", this.state.value_SelectMachineType)
//     this.state.Mtype = this.state.value_SelectMachineType
//     if (this.state.Mtype == "") {
//       this.setState({ showMachineTypeText: true })

//     } else {
//       this.setState({ showMachineTypeText: false })

//       console.log("value_SelectMachineType******", this.state.value_SelectMachineType)
//     }

//     this.setState({ showModal: false })
//     console.log(this.state.Mtype)
//   }
//   // -------------------chooseBtnModalSelectMac---------
//   chooseBtnModalSelectMac = () => {
//     this.state.SelectMachineName = this.state.value_Selectmachine
//     if (this.state.SelectMachineName == "") {
//       this.setState({ showMachineText: true })
//     } else {
//       this.setState({ showMachineText: false })
//       this.setState({ showSegmentDropdown: true })
//       console.log("MYtbcdbgdcsdhgd", this.state.SelectMachineName)
//     }
//     this.setState({ showModalSelectMachine: false })
//   }

//   // --------------chooseBtnModalSegment---------------------
//   chooseBtnModalSegment = () => {
//     this.state.selectSegmentName = this.state.value_SelectSegment
//     if (this.state.selectSegmentName == "") {
//       this.setState({ segmentText: true })
//     } else {

//       this.setState({ segmentText: false })
//       console.log("GotText**********", this.state.selectSegmentName)
//     }


//     console.log("MYtbcdbgdcsdhgd", this.state.selectSegmentName)

//     this.setState({ showModalSegment: false })
//     // if(this.state.segmentText!==""){
//     //   alert("value Is")
//     // }else{
//     //   alert('value h')
//     // }

//   }
// // ------------------chooseBtnModalSubSegment---------------------
// chooseBtnModalSubSegment=()=>{
//   this.setState({showModalSubSeg:false})
// }
//   // ------------RegularTypeSearchClient-----------------------

//   onFocus = () => {

//     this.props.navigation.navigate("SearchClient")
//     { this.setState({ click: true }) }
//     { this.setState({ show: false }) }
//   }

//   // -------------Save Button------------

//   createjobRespo = (respo_json_CreateJobClienttype) => {
//     AppStorage.saveKey(key.USER_PROFILE_DATA, JSON.stringify(respo_json_CreateJobClienttype.data)).then(() => {
//       console.log(respo_json_CreateJobClienttype.data);
//     });
//   }

// // --------------ValidSaveButton----------------

// validSaveBtn=async()=>{

// //           { this.props.navigation.navigate("JobAssignment") }
// alert("Navigate Successful")
// try {
//   this.toggleLoader(true);


//   var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipmentId, this.state.jobTypeId, this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.clientId, this.state.clientType, this.state.clientName, this.state.phoneNumber, this.state.userId, this.state.jobCode);

//   console.log("****ClientType********", respo_json_CreateJobClienttype.data.StatusCode)
//   if (respo_json_CreateJobClienttype.data.StatusCode == 200) {
//     this.createjobRespo(respo_json_CreateJobClienttype);



//   }


// } catch (e) {

//   Alert.alert(e.respo_json_CreateJobClienttype);
//   // console.log('catch block', e.respo_json_CreateJobClienttype);
// } finally {
//   this.toggleLoader(false);
//   // console.log('finally');
// }


// }
//   validates = async (value) => {


//     if (value === "Regular Client") {
//       if (this.state.click == false) {


//         showMessage({
//           message: "Please select client",
//           type: "info",
//           backgroundColor: "black",
//           position: (0, 0, 100, 100),
//           hideStatusBar: false
//         });
//       }else if(this.props.navigation.getParam('ClientMob')==""){

//         alert("cant navigate")
//   } else if(this.state.Mtype==""){
//         showMessage({
//           message: "Please select Machine Type",
//           type: "info",
//           backgroundColor: "black",
//           position: (0, 0, 100, 100),
//           hideStatusBar: false
//         });
//       }else if(this.state.SelectMachineName==""){
//             showMessage({
//               message: "Please select Machine",
//               type: "info",
//               backgroundColor: "black",
//               position: (0, 0, 100, 100),
//               hideStatusBar: false
//             });
//           }else{
//             this.validSaveBtn();
//           }

// }else if(value==="Cash"){
//  if(this.state.TextInputClientName==""){
//    showMessage({
//       message: "Please enter client name",
//       type: "info",
//       backgroundColor: "black",
//       position: (0, 0, 100, 100),
//       hideStatusBar: false
//     });
//  }else if(this.state.enterMobileNo==""){
//   showMessage({
//     message: "Please enter mobile number",
//     type: "info",
//     backgroundColor: "black",
//     position: (0, 0, 100, 100),
//     hideStatusBar: false
//   });
//  }else if(this.state.Mtype==""){
//   showMessage({
//     message: "Please select Machine Type",
//     type: "info",
//     backgroundColor: "black",
//     position: (0, 0, 100, 100),
//     hideStatusBar: false
//   });
// }else if(this.state.SelectMachineName==""){
//       showMessage({
//         message: "Please select Machine",
//         type: "info",
//         backgroundColor: "black",
//         position: (0, 0, 100, 100),
//         hideStatusBar: false
//       });
//     }else{
//       this.validSaveBtn();
//     }




    
//   }else if(value==""){
//     showMessage({
//       message: "Please select client",
//       type: "info",
//       backgroundColor: "black",
//       position: (0, 0, 100, 100),
//       hideStatusBar: false
//     });
//   }



  
//     } 

// // -------------TextInputClientname in cash Select----------
//   handleFocus = () => {
//     this.setState({ isfocusClientName: false })
//   }


//   handleFocusMobNo = () => {
//     this.setState({ isfocusMobileNo: false })
//     this.setState({ isfocusClientName: true })
//   }
//   handleFocusEmail = () => {
//     this.setState({ isfocusEmail: false })
//     this.setState({ isfocusClientName: true })
//     this.setState({ isfocusMobileNo: true })
//   }
//   MobileNumText = (value) => {

//     this.setState({ enterMobileNo: value })
//     // this.setState({isfocus:true})
//     console.log(this.state.enterMobileNo)
//   }
//   render() {

//     const { isLoading } = this.state;
//     console.log("###Filterdata#######",  this.state.radio_props_Segment)
//     return (
//       <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "#FFFFFF", }}>
//         <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//         }} />
//         <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
//           <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true} />
//         </View>
//         <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
//           <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
//             <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
//               <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor: 'transparent', width: '15%', paddingLeft: '0.5%' }}>Stage</Text>
//             </View>
//             <View style={{ height: '60%', width: '100%', flexDirection: 'row', backgroundColor: 'transparent' }}>
//               <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05, }} />
//               <View style={{
//                 borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
//                 height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008BD0'
//               }}>
//                 <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>1</Text>
//               </View>
//               <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
//               <View style={{
//                 borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
//                 height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
//               }}>
//                 <Text style={{ fontSize: hp('2%') }}>2</Text>
//               </View>
//               <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
//               <View style={{
//                 borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
//                 height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
//               }}>
//                 <Text style={{ fontSize: hp('2%') }}>3</Text>
//               </View>
//               <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
//             </View>
//           </View>

//           <View style={{ height: "68%", width: '100%', backgroundColor: 'transparent' }}>
//             <ScrollView>

//               <FlatList data={this.state.orderData}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => {
//                   // console.log("*****Value*****", item)


//                   return (

//                     <View style={{ backgroundColor: "transparent" }}>

//                       <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                         <View style={{ width: wp('44%'), justifyContent: "center", backgroundColor: "transparent" }}>
//                           <Text style={{ fontSize: hp('1.8%'), }}>
//                             Enter Equipment Id
//                                         </Text>

//                         </View>
//                         <View style={{ width: wp('46%'), height: hp('4.5'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                           <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
//                             {item.EquipmentId}
//                           </Text>
//                         </View>
//                       </View>
//                       <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                         <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                           <Text style={{ fontSize: hp('1.8%') }}>
//                             Job Number
//                                             </Text>

//                         </View>
//                         <View style={{ width: wp('46%'), height: hp('4.5'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                           <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
//                             {item.JobNumber}
//                           </Text>
//                         </View>
//                       </View>




//                     </View>
//                   )
//                 }}>
//               </FlatList>



//               <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
//                     Client
//             </Text>
//                 </View>
//                 <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>

//                   <RadioForm

//                     radio_props={this.state.radio_props_Btn1}
//                     initial={0}
//                     isSelected = {true}
//                     formHorizontal={true}
//                     buttonColor={"#0089CF"}
//                     animation={false}
//                     buttonSize={7}
//                     radioStyle={{ marginTop: hp('1%') }}
//                     labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%') }}
//                     onPress={(value) => this.SelectClientTypeRadioBtn(value)}

//                   />
//                 </View>
//               </View>
//               {
//                 this.state.str_bool_value ? <View>{this.state.show ?
//                   <View style={{ height: hp('6%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                     <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                       <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
//                         Search Client
//                 </Text>
//                     </View>
//                     <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", }}>
//                       <TextInput underlineColorAndroid={'#D2D3D5'} style={{ width: wp('46%'), fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: hp('1%') }}
//                         placeholder="Code/F.Name/L.Name"
//                         onFocus={() => this.onFocus()}
//                       />
//                     </View>
//                   </View>
//                   : <View>

//                     {this.props.navigation.getParam('clientCodeData') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
//                       </View>
//                       <TouchableOpacity onPress={() => this.onFocus()}>
//                         <View style={{ width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                           <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientCodeData'))}</Text>
//                         </View>
//                       </TouchableOpacity>
//                     </View> : null}
//                     {this.props.navigation.getParam('clientNameData') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
//                       </View>
//                       <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientNameData'))}</Text>
//                       </View>
//                     </View> : null}
//                     {this.props.navigation.getParam('ClientMob') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
//                       </View>
//                       <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMob'))}</Text>
//                       </View>
//                     </View> : null}
//                     {this.props.navigation.getParam('ClientMail') ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email id</Text>
//                       </View>
//                       <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMail'))}</Text>
//                       </View>
//                     </View> : null}
//                   </View>}

//                 </View> : <View>
//                     <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
//                       </View>

//                       <View style={{ width: wp('47%'), height: hp('5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
//                         <TextInput underlineColorAndroid={this.state.isfocusClientName ? '#D2D3D5' : "#008BD0"}
//                           maxLength={25}
//                           onChangeText={(value)=>this.setState({TextInputClientName:value})}
//                           onFocus={this.handleFocus} style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
//                       </View>
//                     </View>
//                     <FlatList data={this.state.ClientCode}
//                       keyExtractor={(item, index) => index.toString()}
//                       renderItem={({ item }) => (
//                         <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                           <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                             <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
//                           </View>
//                           <View style={{ width: wp('46%'), height: hp('4.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                             <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{item.Client_Code}</Text>
//                           </View>

//                         </View>
//                       )}>

//                     </FlatList>
//                     <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
//                       </View>
//                       <View style={{ width: wp('47%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
//                         <TextInput underlineColorAndroid={this.state.isfocusMobileNo ? '#D2D3D5' : "#008BD0"}
//                           onFocus={this.handleFocusMobNo}
//                           onChangeText={(value) => this.MobileNumText(value)}
//                           maxLength={12}
//                           keyboardType={"numeric"}
//                           style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
//                       </View>
//                     </View>
//                     <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                       <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email</Text>
//                       </View>
//                       <View style={{ width: wp('47%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
//                         <TextInput underlineColorAndroid={this.state.isfocusEmail ? '#D2D3D5' : "#008BD0"}
//                           onFocus={this.handleFocusEmail}
//                           onSelectionChange={(value)=>this.setState({TextInputClientEmail:value})}
//                           maxLength={30}
//                           style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
//                       </View>
//                     </View>



//                   </View>}
//               <TouchableOpacity activeOpacity={0.8} onPress={() => this.Machinetype()}>
//                 <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>

//                   <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                     {this.state.showMachineTypeText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine Type</Text>
//                       : <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.Mtype}</Text>

//                     }
//                   </View>
//                   <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                     <Image source={require('../../assets/dropdown_icon.png')}
//                       style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                   </View>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectMachine()}>
//                 <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                   <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                     {this.state.showMachineText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine</Text> : <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.SelectMachineName}</Text>}
//                   </View>

//                   <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                     <Image source={require('../../assets/dropdown_icon.png')}
//                       style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                   </View>
//                 </View>
//               </TouchableOpacity>
//               {this.state.showSegmentDropdown ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectSegment(true)}>
//                 <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                   <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                     {this.state.segmentText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Segment</Text> :
//                       <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.selectSegmentName}</Text>}
//                   </View>
//                   <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                     <Image source={require('../../assets/dropdown_icon.png')}
//                       style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                   </View>
//                 </View>
//               </TouchableOpacity> : null}
//               {this.state.showSubSegmentDropdown ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectSegment(false)}>
//                 <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                   <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                     {this.state.SubsegmentText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Sub Segment</Text> :
//                       <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{this.state.selectSegmentName}</Text>}

//                   </View>
//                   <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                     <Image source={require('../../assets/dropdown_icon.png')}
//                       style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                   </View>
//                 </View>
//               </TouchableOpacity> : null}

//               <Modal visible={this.state.showModal}
//                 transparent={true}>
//                 <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
//                   <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
//                     <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
//                       <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
//                         Select Machine Type
//                                 </Text>
//                     </View>
//                     <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>

//                       <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
//                         <RadioForm
//                           radio_props={this.state.radio_props_MacType}
//                           initial={-1}
//                           formHorizontal={false}
//                           labelHorizontal={true}
//                           buttonColor={"#D6D6D6"}
//                           labelColor={"#424242"}
//                           animation={false}
//                           buttonSize={8}
//                           labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
//                           onPress={(value, index) => {
//                             console.log("Value%%%%%%", value)
//                             this.state.value_SelectMachineType = value

//                             console.log("value_SelectMachineType", this.state.value_SelectMachineType)
//                           }}
//                           radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
//                           wrapStyle={{ marginVertical: hp('9%') }}


//                         />
//                       </View>


//                     </View>
//                     <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
//                       <TouchableOpacity onPress={(value) => { this.chooseBtnModal(value) }}>
//                         <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
//                           <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
//                             CHOOSE
//                                 </Text>
//                         </View>
//                       </TouchableOpacity>
//                     </View>


//                   </View>
//                 </View>

//               </Modal>
//               {/* ----------------------Modal Machine-------------------- */}
//               <Modal visible={this.state.showModalSelectMachine}
//                 transparent={true}>
//                 <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
//                   <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
//                     <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
//                       <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
//                         Select Machine
//                                 </Text>
//                     </View>
//                     <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
//                       <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
//                         <RadioForm
//                           radio_props={this.state.radio_props_Mac}
//                           initial={-1}
//                           formHorizontal={false}
//                           labelHorizontal={true}
//                           buttonColor={"#D6D6D6"}
//                           labelColor={"#424242"}
//                           animation={false}
//                           buttonSize={8}
//                           labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
//                           onPress={(value, index) => {
//                             console.log("Value", value)
//                             this.state.value_Selectmachine = value
//                             // this.setState({ value2: index })
//                             console.log(this.state.value_Selectmachine)
//                           }}
//                           radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
//                           wrapStyle={{ marginVertical: hp('9%') }}


//                         />
//                       </View>
//                     </View>
//                     <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
//                       <TouchableOpacity onPress={() => { this.chooseBtnModalSelectMac() }}>
//                         <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
//                           <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
//                             CHOOSE
//                                 </Text>
//                         </View>
//                       </TouchableOpacity>
//                     </View>


//                   </View>
//                 </View>

//               </Modal>

//               {/* ------------------Modal Segment--------------- */}
//               <Modal visible={this.state.showModalSegment}
//                 transparent={true}>
//                 <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
//                   <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
//                     <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
//                       <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
//                         Select Segment
//                                 </Text>
//                     </View>
//                     <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
//                       <FlatList data={this.state.MachType}
//                         keyExtractor={(item, index) => index.toString()}
//                         renderItem={({ item }) => (
//                           <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
//                             <RadioForm
//                               radio_props={ this.state.radio_props_Segment}
//                               initial={-1}
//                               formHorizontal={false}
//                               labelHorizontal={true}
//                               buttonColor={"#D6D6D6"}
//                               labelColor={"#424242"}
//                               animation={false}
//                               buttonSize={8}
//                               labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
//                               onPress={(value, index) => {
//                                 console.log("Value", value)
//                                 this.state.value_SelectSegment = value
//                                 // this.setState({ value2: index })
//                                 console.log(this.state.value_SelectSegment)
//                               }}
//                               radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
//                               wrapStyle={{ marginVertical: hp('9%') }}


//                             />
//                           </View>
//                         )}>

//                       </FlatList>

//                     </View>
//                     <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
//                       <TouchableOpacity onPress={() => { this.chooseBtnModalSegment() }}>
//                         <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
//                           <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
//                             CHOOSE
//                                 </Text>
//                         </View>
//                       </TouchableOpacity>
//                     </View>


//                   </View>
//                 </View>

//               </Modal>
//               {/* ------------------SubSegmentModal------------ */}
//               <Modal visible={this.state.showModalSubSeg}
//                 transparent={true}>
//                 <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
//                   <View style={{ height: '30%', width: '90%', backgroundColor: "#FFFFFF", marginHorizontal: '5%' }}>
//                     <View style={{ height: '18%', width: '100%', backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
//                       <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
//                         Select Sub Segment
//                                 </Text>
//                     </View>
//                     <View style={{ height: '62%', width: '100%', backgroundColor: '#FFFFFF' }}>
//                       <FlatList data={this.state.MachType}
//                         keyExtractor={(item, index) => index.toString()}
//                         renderItem={({ item }) => (
//                           <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
//                             <RadioForm
//                               radio_props={this.state.radio_props_SubSegment}
//                               initial={-1}
//                               formHorizontal={false}
//                               labelHorizontal={true}
//                               buttonColor={"#D6D6D6"}
//                               labelColor={"#424242"}
//                               animation={false}
//                               buttonSize={8}
//                               labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
//                               onPress={(value, index) => {
//                                 console.log("Value", value)
//                                 this.state.value_SelectSegment = value
//                                 // this.setState({ value2: index })
//                                 console.log(this.state.value_SelectSegment)
//                               }}
//                               radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
//                               wrapStyle={{ marginVertical: hp('9%') }}


//                             />
//                           </View>
//                         )}>

//                       </FlatList>

//                     </View>
//                     <View style={{ height: '20%', width: '100%', backgroundColor: "transparent", paddingRight: '5%', paddingBottom: '4%' }}>
//                       <TouchableOpacity onPress={() => { this.chooseBtnModalSubSegment() }}>
//                         <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '8%' }}>
//                           <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
//                             CHOOSE
//                                 </Text>
//                         </View>
//                       </TouchableOpacity>
//                     </View>


//                   </View>
//                 </View>

//               </Modal>



//             </ScrollView>

//           </View>
//           <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", }}>
//             <TickButton label="Save" handleClick={() => this.validates(this.state.selectedClientBtn)} />
//           </View>
//         </View>

//         <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
//           <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
//         </View>
//       </SafeAreaView>

//     )
//   }
// }

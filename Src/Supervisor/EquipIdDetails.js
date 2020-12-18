
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
import { AppStorage, key } from '../utils/AppStorage';

const Dimensions_width = Dimensions.get('window').width
const Dimensions_height = Dimensions.get('window').height
export default class Equip_ID extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      orderData: [],                                                               //Required                                                        //Not Required
      ClientNameData: "",                                                         //Required
      ClientCodeData: "",                                                         //Required
      isValid: true,
      ClientCode: [{ Client_Code: "C-Cash" }],                                   //Required
      show: true,                             
      str_bool_value: true,                                                      //Required
      click: false,                                                              //Required
      isfocusClientName: true,                                                   //Required
      isfocusMobileNo: true,                                                     //Required
      isfocusEmail: true,                                                        //Required
      enterMobileNo: '',                                                         //Required

      // -------------------Client_Type----------------------
      globalCodeCategoryId: 0,                                                  //Required - Client Type
      categoryName: "Client Type",
      page: 0,
      limit: 0,
      orderBy: "CreatedOn",
      orderByDescending: true,
      allRecords: true,
      radio_props_Btn1: [],
      radioclientType: [],                                                     //Required
      //-----------------------MachineType-------------------------------


      orderByMachineType: 'MachineType',                                       //Machine Type - Required Parameters
      orderByDescendingMachineType: false,
      allRecordsMachineType: true,
      // --------------------------------------------------------------------------

      //-------------------Machine--------------------------
      showMachineText: true,                                                  //showMachineText
      SelectMachineName: '',                                                  //SelectMachineDropdownName
      machineTypeId: '',                                                      //SelectMachineDropdown - Required Parameters
      orderByMachine: "MachineName",
      orderByDescendingMachine: false,
      allRecordsMachine: true,
      showModalSelectMachine: false,                                          //Modal Select Machine
      radio_props_Mac: [],
      // ----------------------Segment--------------------------

      machineId: '',                  //Segment Variables
      orderBySegment: "Segment",
      orderByDescendingSegment: false,
      allRecordsSegment: true,
      SegmentArray: [],
      mergedSegment: '',
      radio_props_Segment: '',
      value_SelectSegment: '',
      value_SelectSegmentId: '',
      SelectSegmentName: '',
      value_SegName: '',

      showModal: false,                                                       //Modal
      // radio_props:[]              //Required
      showMachineTypeText: true,                                              //MachineTypeDropdownText
      Mtype: "",                                                              //MachineTypeName
      value_SelectMachineType: '',                                            //radioBtnMachinetypeValue
      value_Selectmachine: '',
      value_SelectMachineTypeIndex: '',
      radio_props_MacType: [],                                                //RadioBtnMacTypeArray




      showSegmentDropdown: false,                                             //Show Segment Dropdown
      segmentText: true,              //SegmentText
      selectSegmentName: '',
      showModalSegment: false,



      showSubSegmentDropdown: false,
      SubsegmentText: true,
      showModalSubSeg: false,
      radio_props_SubSegment: [],
      filterSegmentName: [],
      showBoolSubSegment: false,
      value_SelectSubSegment: '',
      // selectedClientBtn: '',
      SbsegmentNames: [],
      SbsegmentId:[],
      radio_SbSeg_Array: [],
      SelectSubSegmentName: '',


      EquipmentId: "",       // parameters-CreateJobBtn
      jobCode: "",         // parameters-CreateJobBtn
   
      jobTypeId:'',   //
     // machineTypeId,// 
    //  machineId,    //
      segmentId:'',    //
      subSegmentId:'',
      clientId:'',     //
      clientType:'',   
      clientName:'',   //
      clientEmail:'',  //
      PhoneNumber:'',  //
      stageId:0,       //
      userId:'',       //
      namePlateAvailable:false,
      jobCode:'',      //
      equipmentId:'',   //
      description:'',   
      paid:false,       //  
      userName:''  ,    //





      // TextInputClientName: '',
      TextInputClientMobNo: '',
      TextInputClientEmail: '',
      value_parentSegname: [],
      value_parentSegID: [],
      value_SegID: [],
      radioSubSegProps: []

    }
  }

  componentDidMount = async () => {
    this.GetEquipIdJobNoAuto();
    this.SelectClientType();
    let getJobType_resp = await AppStorage.getJobTypeId();                                      //AppStorage-JobTypeId
    console.log("getJobTypeID**********=================", getJobType_resp.JobTypeId)
    this.setState({ jobTypeId: getJobType_resp.JobTypeId })
    let getClientRec = await AppStorage.GetSearchClientRecords();                               //AppStorage-ClientRecords
    console.log("getClientRecords++++++++++", getClientRec)
    let login_respo = await AppStorage.getLoginResponse();                                      //AppStorage-LoginResponse
    console.log("login_respo+++++========+++++", login_respo)
    this.setState({ userId: login_respo.userResponse.UserId })
    this.setState({userName:login_respo.userResponse.UserName})
this.setState({})
  };

  // -------------AutoGenerated EquipId & JobNo.-------------------------------------------
  GetEquipIdJobNoAuto = async () => {
    try {
      this.toggleLoader(true);
      var json_response = await AuthService.getAutoGenEquipJobNo();

      console.log("***got Job no. equip id*******", json_response.status)
      if (json_response.status == 200) {
        this.setState({ EquipmentId: json_response.data.EquipmentId })
        this.setState({ jobCode: json_response.data.JobNumber })
        this.state.orderData.push(json_response.data)
      }

    } catch (e) {

      console.log('GetAllRecords catch', e);
    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally ');
    }
  }

  SelectClientType = async () => {

    try {
      this.toggleLoader(true);


      var json_response_radio_btn = await AuthService.getClientType(this.state.globalCodeCategoryId, this.state.categoryName, this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
      console.log('******radioBtn*****', json_response_radio_btn.data.StatusCode)
      if (json_response_radio_btn.data.StatusCode == 200) {
        this.state.radioclientType = json_response_radio_btn.data.data.globalCodeMainResponse.globalCodeResponse


        console.log("this.state.radioclientType*******===========================", this.state.radioclientType)

        for (var i = this.state.radioclientType.length - 1; i >= 0; i--) {
          this.state.radio_props_Btn1.push([{ label: this.state.radioclientType[i].CodeName, value: this.state.radioclientType[i] }])
        }

        this.state.radio_props_Btn1 = [].concat.apply([], this.state.radio_props_Btn1)


        AppStorage.saveKey(key.GET_CLIENT_TYPES, JSON.stringify(this.state.radioclientType)).then(() => {
          console.log("=====AppStorageradioclientType+++++++++++++", this.state.radioclientType)
        });
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

    if (str_value.CodeName == "Regular") {
      this.setState({ str_bool_value: true })
    } else if (str_value.CodeName == "Cash") {
      this.setState({ str_bool_value: false })
    }
  }

  toggleLoader = (val) => {
    this.setState(({ isLoading: val }));
  };




  // ---------------MachineType DropDown---------------
  Machinetype = async () => {                                                     //first dropdown Machine Type



    try {
      this.toggleLoader(true);
      var json_responseMachineType = await AuthService.GetMachineTypeDropdown(this.state.orderByMachineType, this.state.orderByDescendingMachineType, this.state.allRecordsMachineType);

      if (json_responseMachineType.data.StatusCode == 200) {
        var Json_Respo = json_responseMachineType.data.data.machineTypeMainRespone.machineTypeResponse
        console.log("***got Job no. equip id*******", Json_Respo)
        AppStorage.saveKey(key.GET_MACHINETYPE_ID, JSON.stringify(Json_Respo)).then(() => {
          console.log("=====AppStoragejson_responseMachineType+++++++++++++", Json_Respo)
        });


        this.state.radio_props_MacType.length = 0

        for (i = 0; i < Json_Respo.length; i++) {

          this.state.radio_props_MacType.push([{ label: Json_Respo[i].MachineType, value: Json_Respo[i] }])
          this.state.radio_props_MacType = [].concat.apply([], this.state.radio_props_MacType)
        }

      }
      this.setState({ showModal: true })
    } catch {

      Alert.alert(e.json_responseMachineType.data);

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


      try {
        this.toggleLoader(true);
        console.log("Parameters========", this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine)
        var json_response_SelectMachine = await AuthService.GetMachineDropdown(this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine);

        if (json_response_SelectMachine.data.StatusCode == 200) {
          var Json_respo_Machine = json_response_SelectMachine.data.data.machineMainResponse.machineResponse

          AppStorage.saveKey(key.GET_MACHINE_ID, JSON.stringify(Json_respo_Machine)).then(() => {
            console.log("=====AppStorageJson_respo_Machine+++++++++++++", Json_respo_Machine)
          });

          this.state.radio_props_Mac.length = 0
          for (i = 0; i < Json_respo_Machine.length; i++) {

            this.state.radio_props_Mac.push([{ label: Json_respo_Machine[i].MachineName, value: Json_respo_Machine[i] }])

            this.state.radio_props_Mac = [].concat.apply([], this.state.radio_props_Mac)
          }
          console.log("Machine========", this.state.radio_props_Mac)
          this.setState({ showModalSelectMachine: true })
        }




      } catch {
        showMessage({
          message: "No record found",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
        this.setState({ showSegmentDropdown: false })
        this.setState({ showMachineText: true })


      } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally');

      }


    }



  }
  // ----------------SelectSegment--------------------                       //Third DropdDown Segment


  SelectSegment = async () => {                                                     //Second dropdown Machine 




    try {
      this.toggleLoader(true);
      var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
      if (json_response_SelectSegment.data.StatusCode == 200) {
        var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse
console.log("=========++++++",Json_respo_Segment)

        this.state.SegmentArray.length = 0
        this.state.value_parentSegID.length = 0
        this.state.value_parentSegname.length = 0
        this.state.SbsegmentNames.length = 0

        for (i = 0; i < Json_respo_Segment.length; i++) {
          this.state.SegmentArray.push({ label: Json_respo_Segment[i].Segment, value: Json_respo_Segment[i] })
          this.state.value_parentSegID.push(Json_respo_Segment[i].ParentSegmentId)
          this.state.value_parentSegname.push(Json_respo_Segment[i].ParentSegment)
          this.state.SbsegmentNames.push(Json_respo_Segment[i].Segment)
          this.state.SbsegmentId.push(Json_respo_Segment[i].SegmentId)

        }
        this.setState({ showModalSegment: true })
      }
console.log("++++this.state.SegmentArray=====",this.state.SegmentArray)
    } catch {
      showMessage({
        message: "No record found",
        type: "info",
        backgroundColor: "black",
        position: (0, 0, 100, 100),
        hideStatusBar: false
      });
      this.setState({ showSegmentDropdown: false })

    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally');

    }


  }
  SelectSubSegment = () => {
    {

      this.setState({ showModalSubSeg: true })
      console.log("+++++++++++++",this.state.radioSubSegProps)
      for (i = 0; i < this.state.radioSubSegProps.length; i++) {
        this.state.radio_SbSeg_Array.push({ label: this.state.radioSubSegProps[i].a, value: this.state.radioSubSegProps[i] })

      }
      console.log("++++++radio_SbSeg_Array+++++++",this.state.radio_SbSeg_Array)
    }
  }







  // ----------------ChooseBtnModal----------------
  chooseBtnModal = async () => {

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



    try {

      console.log("Parameters========", this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine)
      var json_response_SelectMachine = await AuthService.GetMachineDropdown(this.state.machineTypeId, this.state.orderByMachine, this.state.orderByDescendingMachine, this.state.allRecordsMachine);

      if (json_response_SelectMachine.data.StatusCode == 200) {
        //         var Json_respo_Machine = json_response_SelectMachine.data.data.machineMainResponse.machineResponse
        // console.log("macType/Mac========",Json_respo_Machine)


      }


    } catch {

      this.setState({ showMachineText: true })
      this.setState({ showSegmentDropdown: false })
      this.setState({ showSubSegmentDropdown: false })



    } finally {

      console.log('GetAllRecords finally');

    }







  }
  // -------------------chooseBtnModalSelectMac---------
  chooseBtnModalSelectMac = async () => {


    console.log("============", this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
    try {

      console.log("++++++++++++", this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
      var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
      if (json_response_SelectSegment.data.StatusCode == 200) {


      }

    } catch {
      this.setState({ showSegmentDropdown: false })
      this.setState({ showSubSegmentDropdown: false })
    } finally {

      console.log('GetAllRecords finally');

    }


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

    }
    this.setState({ showModalSegment: false })
  }


  // ------------------chooseBtnModalSubSegment---------------------
  chooseBtnModalSubSegment = () => {
    this.setState({ showModalSubSeg: false })
    this.state.SelectSubSegmentName = this.state.value_SelectSubSegment
    if (this.state.SelectSubSegmentName == '') {
      this.setState({ SubsegmentText: true })
    } else {
      this.setState({ SubsegmentText: false })
    }

  }
  // ------------RegularTypeSearchClient-----------------------

  onFocus = () => {

    this.props.navigation.navigate("SearchClient")


  }



  // --------------ValidSaveButton----------------

  validSaveBtn = async () => {
    console.log("=========EquipmentId=====", this.state.jobTypeId,this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.subSegmentId,
    this.state.clientId, this.state.clientType, this.state.clientName,this.state.clientEmail, this.state.PhoneNumber,
    this.state.stageId, this.state.userId,this.state.namePlateAvailable, this.state.jobCode,this.state.EquipmentId,
    this.state.description,this.state.paid,this.state.userName)
   
    try {
      this.toggleLoader(true);
      var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.jobTypeId,this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.subSegmentId,
        this.state.clientId, this.state.clientType, this.state.clientName,this.state.clientEmail, this.state.PhoneNumber,this.state.stageId, this.state.userId,true, this.state.jobCode,this.state.EquipmentId,this.state.description,this.state.paid,this.state.userName);
      var jsonrespo_createBtn = respo_json_CreateJobClienttype.data.StatusCode;

      if (jsonrespo_createBtn == 200) {
        this.props.navigation.navigate("JobAssignment", { JobAssignBool: true })
        AppStorage.saveKey(key.EQUIP_AVAIL_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data.data)).then(() => {
          console.log("=====AppStorageJson_respo_Machine+++++++++++++", respo_json_CreateJobClienttype.data.data)
        });

      }


    } catch (e) {

      Alert.alert('=====', e);
      
    } finally {
      this.toggleLoader(false);
      // console.log('finally');
    }


  }
  validates = async () => {
    console.log("----str_bool_value-----", this.state.str_bool_value)
    if (this.state.str_bool_value === true) {
      if (this.state.click == false) {


        showMessage({
          message: "Please select client",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else if (this.state.Mtype == "") {
        showMessage({
          message: "Please select Machine Type",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else if (this.state.SelectMachineName == "") {
        showMessage({
          message: "Please select Machine",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else {
        this.validSaveBtn();
      }

    } else if (this.state.str_bool_value === false) {
      if (this.state.clientName == "") {
        showMessage({
          message: "Please enter client name",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else if (this.state.PhoneNumber == "") {
        showMessage({
          message: "Please enter mobile number",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else if (this.state.Mtype == "") {
        showMessage({
          message: "Please select Machine Type",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else if (this.state.SelectMachineName == "") {
        showMessage({
          message: "Please select Machine",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
      } else {

        this.validSaveBtn();

      }

    } else if (value == "") {
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
  clientNameText = (value) => {
    this.setState({ clientName: value })
    console.log("", this.state.clientName)
  }
  MobileNumText = (value) => {

    this.setState({ PhoneNumber: value })
   console.log("=====",value)
  }
  EmailText=(value)=>{
    this.setState({ clientEmail: value })
  console.log("=====",value)
  }
  componentDidUpdate = () => {


    let getClientData = this.props.navigation.getParam('Client_Record')
console.log("CLientData*****#############",getClientData)
    if (getClientData !== undefined && this.state.show == true) {
      { this.setState({ click: true }) }
      { this.setState({ show: false }) }
      this.state.clientId = getClientData.ClientId
      this.state.clientName = getClientData.Name
      this.state.PhoneNumber = getClientData.PhoneNumber
      this.state.clientEmail=getClientData.Email
    }
  }
  render() {

    const { isLoading } = this.state;
    let client_Code = this.props.navigation.getParam('clientCodeData')
    let Client_Name = this.props.navigation.getParam('clientNameData')
    let client_Mob = this.props.navigation.getParam('ClientMob')
    let client_Mail = this.props.navigation.getParam('ClientMail')
  console.log("=====clientEmail=======",this.state.clientEmail)
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
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions_width * 0.05, }} />
              <View style={{
                borderRadius: Math.round(Dimensions_width + Dimensions_height) / 2, width: Dimensions_width * 0.1,
                height: Dimensions_width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008BD0'
              }}>
                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>1</Text>
              </View>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions_width * 0.05 }} />
              <View style={{
                borderRadius: Math.round(Dimensions_width + Dimensions_height) / 2, width: Dimensions_width * 0.1,
                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
              }}>
                <Text style={{ fontSize: hp('2%') }}>2</Text>
              </View>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions_width * 0.05 }} />
              <View style={{
                borderRadius: Math.round(Dimensions_width + Dimensions_height) / 2, width: Dimensions_width * 0.1,
                height: Dimensions_width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
              }}>
                <Text style={{ fontSize: hp('2%') }}>3</Text>
              </View>
              <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions_width * 0.05 }} />
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
                    isSelected={false}
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

                    {client_Code ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
                      </View>
                      <TouchableOpacity onPress={() => this.onFocus()}>
                        <View style={{ width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                          <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{client_Code}</Text>
                        </View>
                      </TouchableOpacity>
                    </View> : null}
                    {Client_Name ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
                      </View>
                      <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{Client_Name}</Text>
                      </View>
                    </View> : null}
                    {client_Mob ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
                      </View>
                      <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{client_Mob}</Text>
                      </View>
                    </View> : null}
                    {client_Mail ? <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                      <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email id</Text>
                      </View>
                      <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{client_Mail}</Text>
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
                          onChangeText={(value) => this.clientNameText(value)
                          }
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
                          onChangeText={(value) => this.EmailText(value)}
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
              {this.state.showSegmentDropdown ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectSegment()}>
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
              {this.state.showSubSegmentDropdown ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.SelectSubSegment()}>
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
                              this.state.value_SelectMachineType = value.MachineType
                              this.setState({ machineTypeId: value.MachineTypeId })
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
                            onPress={async (value, index) => {
                              console.log("Value", value)
                              this.state.value_Selectmachine = value.MachineName
                              this.setState({ machineId: value.MachineId })
                              this.setState({ segmentId: value.SegmentId })
                              console.log("MachineTypeId***********", value.MachineTypeId)


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
                            radio_props={this.state.SegmentArray}
                            initial={-1}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={"#D6D6D6"}
                            labelColor={"#424242"}
                            animation={false}
                            buttonSize={8}
                            labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
                            onPress={(value) => {console.log("=valueSegment++++++",value)
                              this.setState({ showSubSegmentDropdown: false })
                              this.state.value_SelectSegment = value.Segment
                              this.state.value_SelectSegmentId = value.SegmentId
                              this.setState({ segmentId: value.SegmentId })

                              this.state.radioSubSegProps.length = 0
                              this.state.radio_SbSeg_Array.length = 0
                              for (i = 0; i < this.state.value_parentSegID.length; i++) {

                                if (this.state.value_SelectSegmentId === this.state.value_parentSegID[i]) {
                                  { this.setState({ showSubSegmentDropdown: true }) }
                                  this.state.radioSubSegProps.push({a:this.state.SbsegmentNames[i],b:this.state.SbsegmentId[i]})
                                }

                              }

                              console.log("this.state.radioSubSegProps****", this.state.radioSubSegProps)
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
                              this.state.value_SelectSubSegment = value.a
                              this.setState({subSegmentId:value.b})
                              console.log("value_SelectSubSegment******", this.state.value_SelectSubSegment)
                              this.state.radioSubSegProps.length = 0
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
          <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", paddingTop: '1.5%' }}>
            <TickButton label="Save" handleClick={() => this.validates()} />
          </View>
        </View>

        <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
          <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
        </View>
      </SafeAreaView>

    )
  }
}

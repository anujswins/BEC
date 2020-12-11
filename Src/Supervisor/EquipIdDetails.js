
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



export default class Equip_ID extends Component {
<<<<<<< HEAD
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
      radio_SbSeg_Array: [],
      SelectSubSegmentName: '',


      EquipmentId: "",       // parameters-CreateJobBtn
      jobCode: "",         // parameters-CreateJobBtn
      jobTypeId: '',
      // machineTypeId: 0,
      //machineId: 0,
      segmentId: '',
      clientId: 0,
      clientType: 0,
      clientName: "",
      PhoneNumber: "",
      userId: "",


      // TextInputClientName: '',
      TextInputClientMobNo: '',
      TextInputClientEmail: '',
      value_parentSegname: [],
      value_parentSegID: [],
      value_SegID: [],
      radioSubSegProps: []
=======
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
            radio_SbSeg_Array: [],
            SelectSubSegmentName: '',


            EquipmentId: "",       // parameters-CreateJobBtn
            jobCode: "",         // parameters-CreateJobBtn
            jobTypeId: '',
            // machineTypeId: 0,
            //machineId: 0,
            segmentId: '',
            clientId: 0,
            clientType: 0,
            clientName: "",
            PhoneNumber: "",
            userId: "",


            // TextInputClientName: '',
            TextInputClientMobNo: '',
            TextInputClientEmail: '',
            value_parentSegname: [],
            value_parentSegID: [],
            value_SegID: [],
            radioSubSegProps: []
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        }
    }

<<<<<<< HEAD
  componentDidMount = async () => {
    this.GetEquipIdJobNoAuto();
    this.SelectClientType();
    let getJobType_resp = await AppStorage.getJobTypeId();
    console.log("getJobTypeID**********=================", getJobType_resp.JobTypeId)
    this.setState({ jobTypeId: getJobType_resp.JobTypeId })
    let getClientRec = await AppStorage.GetSearchClientRecords();
    console.log("getClientRecords++++++++++", getClientRec)
    let login_respo = await AppStorage.getLoginResponse();
    console.log("login_respo+++++========+++++", login_respo.userResponse.UserId)
this.setState({userId:login_respo.userResponse.UserId})

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

      // Alert.alert(e.response.data);
      console.log('GetAllRecords catch', e);
    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally ');
    }
  }

  SelectClientType = async () => {
=======
    componentDidMount = async () => {
        this.GetEquipIdJobNoAuto();
        this.SelectClientType();
        let getJobType_resp = await AppStorage.getJobTypeId();
        console.log("getJobTypeID**********=================", getJobType_resp.JobTypeId)
        this.setState({ jobTypeId: getJobType_resp.JobTypeId })
        let getClientRec = await AppStorage.GetSearchClientRecords();
        console.log("getClientRecords++++++++++", getClientRec)
        let login_respo = await AppStorage.getLoginResponse();
        console.log("login_respo+++++========+++++", login_respo.userResponse.UserId)
        this.setState({userId:login_respo.userResponse.UserId})

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

            // Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally ');
        }
    }

    SelectClientType = async () => {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        try {
            this.toggleLoader(true);


<<<<<<< HEAD
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
=======
            var json_response_radio_btn = await AuthService.getClientType(this.state.globalCodeCategoryId, this.state.categoryName, this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
            console.log('******radioBtn*****', json_response_radio_btn.data.StatusCode)
            if (json_response_radio_btn.data.StatusCode == 200) {
                this.state.radioclientType = json_response_radio_btn.data.data.globalCodeMainResponse.globalCodeResponse


                console.log("this.state.radioclientType*******===========================", this.state.radioclientType)

                for (var i = this.state.radioclientType.length - 1; i >= 0; i--) {
                    this.state.radio_props_Btn1.push([{ label: this.state.radioclientType[i].CodeName, value: this.state.radioclientType[i] }])
                }

                this.state.radio_props_Btn1 = [].concat.apply([], this.state.radio_props_Btn1)
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                AppStorage.saveKey(key.GET_CLIENT_TYPES, JSON.stringify(this.state.radioclientType)).then(() => {
                    console.log("=====AppStorageradioclientType+++++++++++++", this.state.radioclientType)
                });
            }


        } catch (e) {
            console.log("*********catch***********", json_response_radio_btn)
            alert(e.json_response_radio_btn);

<<<<<<< HEAD
  };

  // -----------------ClientType_Radio_Button_OnPress_Event---------------
  SelectClientTypeRadioBtn = (str_value) => {
    
    if (str_value.CodeName == "Regular") {
      // alert("Regular")
      this.setState({ str_bool_value: true })
    } else if (str_value.CodeName == "Cash") {
      // alert("Cash")
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
      // console.log('GetAllRecords', e.json_responseMachineType);
    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally');
=======
        } finally {
            this.toggleLoader(false);
            console.log(' finally Block');
        }

    };

    // -----------------ClientType_Radio_Button_OnPress_Event---------------
    SelectClientTypeRadioBtn = (str_value) => {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        if (str_value.CodeName == "Regular") {
            // alert("Regular")
            this.setState({ str_bool_value: true })
        } else if (str_value.CodeName == "Cash") {
            // alert("Cash")
            this.setState({ str_bool_value: false })
        }
    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };


<<<<<<< HEAD
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
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        

<<<<<<< HEAD
=======
    // ---------------MachineType DropDown---------------
    Machinetype = async () => {                                                     //first dropdown Machine Type
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

      } catch {
        showMessage({
          message: "No record found",
          type: "info",
          backgroundColor: "black",
          position: (0, 0, 100, 100),
          hideStatusBar: false
        });
        this.setState({showSegmentDropdown:false})
        this.setState({showMachineText:true})


<<<<<<< HEAD
      } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally');
=======
        try {
            this.toggleLoader(true);
            var json_responseMachineType = await AuthService.GetMachineTypeDropdown(this.state.orderByMachineType, this.state.orderByDescendingMachineType, this.state.allRecordsMachineType);
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

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
            // console.log('GetAllRecords', e.json_responseMachineType);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally');

<<<<<<< HEAD
  }
  // ----------------SelectSegment--------------------                       //Third DropdDown Segment


  SelectSegment = async () => {                                                     //Second dropdown Machine 




    try {
      this.toggleLoader(true);
      var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
      if (json_response_SelectSegment.data.StatusCode == 200) {
        var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse


        this.state.SegmentArray.length = 0
        this.state.value_parentSegID.length = 0
        this.state.value_parentSegname.length = 0
        this.state.SbsegmentNames.length = 0

        for (i = 0; i < Json_respo_Segment.length; i++) {
          this.state.SegmentArray.push({ label: Json_respo_Segment[i].Segment, value: Json_respo_Segment[i] })
          this.state.value_parentSegID.push(Json_respo_Segment[i].ParentSegmentId)
          this.state.value_parentSegname.push(Json_respo_Segment[i].ParentSegment)
          this.state.SbsegmentNames.push(Json_respo_Segment[i].Segment)

        }
        this.setState({ showModalSegment: true })
      }

    } catch {
      showMessage({
        message: "No record found",
        type: "info",
        backgroundColor: "black",
        position: (0, 0, 100, 100),
        hideStatusBar: false
      });
      this.setState({showSegmentDropdown:false})

    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally');

    }


  }
  SelectSubSegment = () => {
    {

      this.setState({ showModalSubSeg: true })
      for (i = 0; i < this.state.radioSubSegProps.length; i++) {
        this.state.radio_SbSeg_Array.push({ label: this.state.radioSubSegProps[i], value: this.state.radioSubSegProps[i] })

      }
    }
  }







  // ----------------ChooseBtnModal----------------
  chooseBtnModal = () => {
=======
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
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                        this.state.radio_props_Mac.push([{ label: Json_respo_Machine[i].MachineName, value: Json_respo_Machine[i] }])

                        this.state.radio_props_Mac = [].concat.apply([], this.state.radio_props_Mac)
                    }
                    console.log("Machine========", this.state.radio_props_Mac)
                    this.setState({ showModalSelectMachine: true })
                }

<<<<<<< HEAD
      console.log("value_SelectMachineType******", this.state.value_SelectMachineType)
      
    }

    this.setState({ showModal: false })
    console.log(this.state.Mtype)
    
  }
  // -------------------chooseBtnModalSelectMac---------
  chooseBtnModalSelectMac = async() => {
    this.state.SelectMachineName = this.state.value_Selectmachine
    if (this.state.SelectMachineName == "") {
      this.setState({ showMachineText: true })
    } else {
      this.setState({ showMachineText: false })
      this.setState({ showSegmentDropdown: true })
      console.log("MYtbcdbgdcsdhgd", this.state.SelectMachineName)
    }
    this.setState({ showModalSelectMachine: false })

console.log("============",this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
    try {
      this.toggleLoader(true);
      console.log("++++++++++++",this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
      var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
      if (json_response_SelectSegment.data.StatusCode == 200) {
        var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse
console.log("mac/seg+++++++",Json_respo_Segment)



      }

    } catch {
      this.setState({showSegmentDropdown:false})
      this.setState({showSubSegmentDropdown:false})
    } finally {
      this.toggleLoader(false);
      console.log('GetAllRecords finally');

    }





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


  var
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
=======


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

            } catch {
                showMessage({
                    message: "No record found",
                    type: "info",
                    backgroundColor: "black",
                    position: (0, 0, 100, 100),
                    hideStatusBar: false
                });
                this.setState({showSegmentDropdown:false})
                this.setState({showMachineText:true})

<<<<<<< HEAD
    this.props.navigation.navigate("SearchClient")
    

  }
=======

            } finally {
                this.toggleLoader(false);
                console.log('GetAllRecords finally');

            }


        }



    }
    // ----------------SelectSegment--------------------                       //Third DropdDown Segment


    SelectSegment = async () => {                                                     //Second dropdown Machine

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

 

  // --------------ValidSaveButton----------------

<<<<<<< HEAD
  validSaveBtn = async () => {
    console.log("=========EquipmentId=====", this.state.EquipmentId, this.state.jobTypeId, this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.clientId, this.state.clientName, this.state.PhoneNumber, this.state.userId, this.state.jobCode)
    try {
      this.toggleLoader(true);
      var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipmentId, this.state.jobTypeId, this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.clientId, this.state.clientType, this.state.clientName, this.state.PhoneNumber, this.state.userId, this.state.jobCode);
      var jsonrespo_createBtn = respo_json_CreateJobClienttype.data.StatusCode;
=======
        try {
            this.toggleLoader(true);
            var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
            if (json_response_SelectSegment.data.StatusCode == 200) {
                var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

      if (jsonrespo_createBtn == 200) {
        this.props.navigation.navigate("JobAssignment", {JobAssignBool:true})
        AppStorage.saveKey(key.EQUIP_AVAIL_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data.data)).then(() => {
          console.log("=====AppStorageJson_respo_Machine+++++++++++++", respo_json_CreateJobClienttype.data.data)
        });

<<<<<<< HEAD
      }


    } catch (e) {

      Alert.alert('=====', e.respo_json_CreateJobClienttype);
      // console.log('catch block', e.respo_json_CreateJobClienttype);
    } finally {
      this.toggleLoader(false);
      // console.log('finally');
    }


  }
  validates = async () => {
    console.log("----str_bool_value-----",this.state.str_bool_value)
    if (this.state.str_bool_value===true) {
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
=======
                this.state.SegmentArray.length = 0
                this.state.value_parentSegID.length = 0
                this.state.value_parentSegname.length = 0
                this.state.SbsegmentNames.length = 0

                for (i = 0; i < Json_respo_Segment.length; i++) {
                    this.state.SegmentArray.push({ label: Json_respo_Segment[i].Segment, value: Json_respo_Segment[i] })
                    this.state.value_parentSegID.push(Json_respo_Segment[i].ParentSegmentId)
                    this.state.value_parentSegname.push(Json_respo_Segment[i].ParentSegment)
                    this.state.SbsegmentNames.push(Json_respo_Segment[i].Segment)

                }
                this.setState({ showModalSegment: true })
            }

        } catch {
            showMessage({
                message: "No record found",
                type: "info",
                backgroundColor: "black",
                position: (0, 0, 100, 100),
                hideStatusBar: false
            });
            this.setState({showSegmentDropdown:false})

        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally');

        }


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
    }
    SelectSubSegment = () => {
        {

            this.setState({ showModalSubSeg: true })
            for (i = 0; i < this.state.radioSubSegProps.length; i++) {
                this.state.radio_SbSeg_Array.push({ label: this.state.radioSubSegProps[i], value: this.state.radioSubSegProps[i] })

            }
        }
    }


<<<<<<< HEAD
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
  clientNameText=(value)=>{
    this.setState({ clientName: value })
    console.log("",this.state.clientName)
  }
  MobileNumText = (value) => {

    this.setState({ PhoneNumber: value })
    // this.setState({isfocus:true})
    console.log("PhoneNumber*****888",this.state.PhoneNumber)
  }
  componentDidUpdate = () => {


    let getClientData = this.props.navigation.getParam('Client_Record')

    if (getClientData !== undefined && this.state.show == true) {
      { this.setState({ click: true }) }
      { this.setState({ show: false }) }
      this.state.clientId = getClientData.ClientId
      this.state.clientName = getClientData.Name
      this.state.PhoneNumber = getClientData.PhoneNumber
    }
  }
  render() {

    const { isLoading } = this.state;
    //  console.log("***********clientName***********",this.state.clientName)
    //  console.log("this.state.radio_props_Mac========",this.state.radio_props_Mac)
   // console.log("render===========",this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
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
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc





    // ----------------ChooseBtnModal----------------
    chooseBtnModal = () => {

        console.log("Mtype***", this.state.value_SelectMachineType)
        this.state.Mtype = this.state.value_SelectMachineType
        if (this.state.Mtype == "") {
            this.setState({ showMachineTypeText: true })

        } else {
            this.setState({ showMachineTypeText: false })

            console.log("value_SelectMachineType******", this.state.value_SelectMachineType)

<<<<<<< HEAD
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
                          onSelectionChange={(value) => this.setState({ TextInputClientEmail: value })}
                          maxLength={30}
                          style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
                      </View>
                    </View>
=======
        }

        this.setState({ showModal: false })
        console.log(this.state.Mtype)
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    }
    // -------------------chooseBtnModalSelectMac---------
    chooseBtnModalSelectMac = async() => {
        this.state.SelectMachineName = this.state.value_Selectmachine
        if (this.state.SelectMachineName == "") {
            this.setState({ showMachineText: true })
        } else {
            this.setState({ showMachineText: false })
            this.setState({ showSegmentDropdown: true })
            console.log("MYtbcdbgdcsdhgd", this.state.SelectMachineName)
        }
        this.setState({ showModalSelectMachine: false })

        console.log("============",this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
        try {
            this.toggleLoader(true);
            console.log("++++++++++++",this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
            var json_response_SelectSegment = await AuthService.GetSegmentDropdown(this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment);
            if (json_response_SelectSegment.data.StatusCode == 200) {
                var Json_respo_Segment = json_response_SelectSegment.data.data.segmentMainResponse.segmentResponse
                console.log("mac/seg+++++++",Json_respo_Segment)



<<<<<<< HEAD
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
                              // console.log("Value%%%%%%", value)
                              this.state.value_SelectMachineType = value.MachineType
                              this.setState({ machineTypeId: value.MachineTypeId })
                              // console.log("value_SelectMachineType", this.state.MachineTypeId)
                            }}
                            radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
                            wrapStyle={{ marginVertical: hp('9%') }}
                          />
                        </ScrollView>
                      </View>
=======
            }

        } catch {
            this.setState({showSegmentDropdown:false})
            this.setState({showSubSegmentDropdown:false})
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally');
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        }




<<<<<<< HEAD
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
                            onPress={async(value, index) => {
                              console.log("Value", value)
                              this.state.value_Selectmachine = value.MachineName
                              this.setState({ machineId: value.MachineId })
                              this.setState({segmentId:value.SegmentId})
                              console.log("MachineTypeId***********",value.MachineTypeId)


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
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    }

    // --------------chooseBtnModalSegment---------------------
    chooseBtnModalSegment = () => {
        this.state.selectSegmentName = this.state.value_SelectSegment
        if (this.state.selectSegmentName == "") {
            this.setState({ segmentText: true })
        } else {

<<<<<<< HEAD
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
                            onPress={(value) => {
                              console.log("Value", value)
                              this.setState({ showSubSegmentDropdown: false })
                              this.state.value_SelectSegment = value.Segment
                              this.state.value_SelectSegmentId = value.SegmentId
                              this.setState({ segmentId: value.SegmentId })
                           
                              this.state.radioSubSegProps.length = 0
                              this.state.radio_SbSeg_Array.length = 0
                              for (i = 0; i < this.state.value_parentSegID.length; i++) {

                                if (this.state.value_SelectSegmentId === this.state.value_parentSegID[i]) {
                                  { this.setState({ showSubSegmentDropdown: true }) }
                                  this.state.radioSubSegProps.push(this.state.SbsegmentNames[i])
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
=======
            this.setState({ segmentText: false })
            //   console.log("GotText**********", this.state.selectSegmentName)
        }
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        //   console.log("MYtbcdbgdcsdhgd", this.state.selectSegmentName)

        this.setState({ showModalSegment: false })

<<<<<<< HEAD
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
=======
    }
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


    var
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

<<<<<<< HEAD
          </View>
          <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center",paddingTop:'1.5%' }}>
            <TickButton label="Save" handleClick={() => this.validates()} />
          </View>
        </View>
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


<<<<<<< HEAD
    )
  }
=======
    // --------------ValidSaveButton----------------

    validSaveBtn = async () => {
        console.log("=========EquipmentId=====", this.state.EquipmentId, this.state.jobTypeId, this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.clientId, this.state.clientName, this.state.PhoneNumber, this.state.userId, this.state.jobCode)
        try {
            this.toggleLoader(true);
            var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipmentId, this.state.jobTypeId, this.state.machineTypeId, this.state.machineId, this.state.segmentId, this.state.clientId, this.state.clientType, this.state.clientName, this.state.PhoneNumber, this.state.userId, this.state.jobCode);
            var jsonrespo_createBtn = respo_json_CreateJobClienttype.data.StatusCode;

            if (jsonrespo_createBtn == 200) {
                this.props.navigation.navigate("JobAssignment", {JobAssignBool:true})
                AppStorage.saveKey(key.EQUIP_AVAIL_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data.data)).then(() => {
                    console.log("=====AppStorageJson_respo_Machine+++++++++++++", respo_json_CreateJobClienttype.data.data)
                });

            }


        } catch (e) {

            Alert.alert('EquipIdDeatils_class=====', e);
          console.log('EquipIdDeatils_class==========', e);
        } finally {
            this.toggleLoader(false);
            // console.log('finally');
        }


    }
    validates = async () => {
        console.log("----str_bool_value-----",this.state.str_bool_value)
        if (this.state.str_bool_value===true) {
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
    clientNameText=(value)=>{
        this.setState({ clientName: value })
        console.log("",this.state.clientName)
    }
    MobileNumText = (value) => {

        this.setState({ PhoneNumber: value })
        // this.setState({isfocus:true})
        console.log("PhoneNumber*****888",this.state.PhoneNumber)
    }
    componentDidUpdate = () => {


        let getClientData = this.props.navigation.getParam('Client_Record')

        if (getClientData !== undefined && this.state.show == true) {
            { this.setState({ click: true }) }
            { this.setState({ show: false }) }
            this.state.clientId = getClientData.ClientId
            this.state.clientName = getClientData.Name
            this.state.PhoneNumber = getClientData.PhoneNumber
        }
    }
    render() {

        const { isLoading } = this.state;
        //  console.log("***********clientName***********",this.state.clientName)
        //  console.log("this.state.radio_props_Mac========",this.state.radio_props_Mac)
        // console.log("render===========",this.state.machineId, this.state.orderBySegment, this.state.orderByDescendingSegment, this.state.allRecordsSegment)
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
                                                       onSelectionChange={(value) => this.setState({ TextInputClientEmail: value })}
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
                                                            // console.log("Value%%%%%%", value)
                                                            this.state.value_SelectMachineType = value.MachineType
                                                            this.setState({ machineTypeId: value.MachineTypeId })
                                                            // console.log("value_SelectMachineType", this.state.MachineTypeId)
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
                                                        onPress={async(value, index) => {
                                                            console.log("Value", value)
                                                            this.state.value_Selectmachine = value.MachineName
                                                            this.setState({ machineId: value.MachineId })
                                                            this.setState({segmentId:value.SegmentId})
                                                            console.log("MachineTypeId***********",value.MachineTypeId)


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
                                                        onPress={(value) => {
                                                            console.log("Value", value)
                                                            this.setState({ showSubSegmentDropdown: false })
                                                            this.state.value_SelectSegment = value.Segment
                                                            this.state.value_SelectSegmentId = value.SegmentId
                                                            this.setState({ segmentId: value.SegmentId })

                                                            this.state.radioSubSegProps.length = 0
                                                            this.state.radio_SbSeg_Array.length = 0
                                                            for (i = 0; i < this.state.value_parentSegID.length; i++) {

                                                                if (this.state.value_SelectSegmentId === this.state.value_parentSegID[i]) {
                                                                    { this.setState({ showSubSegmentDropdown: true }) }
                                                                    this.state.radioSubSegProps.push(this.state.SbsegmentNames[i])
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
                                                            this.state.value_SelectSubSegment = value
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
                    <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center",paddingTop:'1.5%' }}>
                        <TickButton label="Save" handleClick={() => this.validates()} />
                    </View>
                </View>

                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
                </View>
            </SafeAreaView>

        )
    }
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
}

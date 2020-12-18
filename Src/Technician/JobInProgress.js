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
    Image,
    TextInput,
    Modal,
    
    TouchableHighlight,

} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStorage, key } from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import { number } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';
import { TickButton } from '../CommonComponents/TickButton';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { showMessage, hideMessage } from "react-native-flash-message";
import Checkbox from 'react-native-modest-checkbox'
import moment from 'moment';
// import { RNCamera as Camera } from 'react-native-camera';
// import CheckBox from 'react-native-check-box'
import { CheckBox } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

export default class JobInProgress extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: false,
            selectId: true,
            showIdAvailable: false,
            page: 0,                         //Choose_JobType_Btns_Params
            limit: 0,
            orderBy: "CreatedOn",
            orderByDescending: false,
            allRecords: true,
            response_Json: [],
            response_JsonId: [],
            response_Json_CheckBoxValues: [],
            ChooseBtnData: [],
            id: '',
            equipmentId:'',
            jobCode:'',
            jobId: 351,
            userId: 39,
            responseObject:{},
            jsonResponse:{},
            subSegmentId: 36,
            segmentId: 21,
            machineId: 17,
            machineTypeId: 15,
            namePlate: 0,
            orderBy: "CreatedOn",
            orderByDescending: false,
            allRecords: true,
            AttributeName: '',
            respo_json: '',
            getAttributeName: [],
            // getAttributeType: [],
            singleBlock: false,
            MultiInputText: false,
            MultiCheckBox: false,
            DropDown: false,
            MultiOption: false,
            getIndex: [],
            j: 0,
            questionsObject:{},


            checkBoxArrValues: [],
            checkboxAttCollection: [],

            checkedCheckBox: false,
            cb: {},
            getInputText: '',
            getInputvariables: [],
            getQuestion: "",
            box: '',

            isRequired: false,
            checked: true,
            isChecked: false,
            DropDownData: [],
            choosecategory: true,
            categoryText: true,
            showModal1: false,
            radio_prop_data: [],
            value_selectedText: '',
            Text_CategoryType: '',

            Number: '',

            getSingleDataTypes: [],
            getBoolValue: "",
            getSingleNumeric: [],
            getSingleText: [],
            getSingleCurrency: [],

            showDate: false,
            mode: '',
            showStartTime: false,
            showEndTime: false,
            startTime: '',
            endTime: '',
            chosenDate: '',
options:[],



            showBoolean: false,
            showCurrency: false,
            showSingleDate: false,
            showImage: false,
            showNumber: false,
            showPhoneNo: false,
            showText: false,
            showSingleTime: false,
            i: 0,
            showIdentifyButton: true,



            details: [],
            //  jobId:'', 
            objectAttributeId: '',
            attributeValue: '',
            collectiondetails: [],
            attributeCollectionId: '',
            collectionValue: '',
            files: '',
            image: '',
            type: '',
            userName: '',


            rough: [],
            details: [],
            currency_value:[],
            Single_value:[],
            Text_value:[],



            path: null,

            navi:''


        }









    }



get_Stage2_Questions = async () => {
    

    try {
        this.toggleLoader(true);
       
        var response = await AppStorage.getAssignedJobInfo();
     
     
            
      var JobId=response.JobId;
     

      var json_response = await AuthService.getStage2Questions( JobId);
      
    
this.setState({
questionsObject:json_response.data.data.answersMainresponse.answersResponse.question,
responseObject:json_response.data.data.answersMainresponse.answersResponse,
options:json_response.data.data.answersMainresponse.answersResponse.options

})
  
 

    } catch (e) {

         Alert.alert(e.response.data);
        console.log('GetAllRecords catch', e.response);
    } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally print hua');
    }

};






    GetAllAttributes = async () => {







        try {
            // this.toggleLoader(true);
            let json_response = await AuthService.ObjectAttributes(this.state.jobId, this.state.userId, this.state.subSegmentId, this.state.segmentId, this.state.machineId,
                this.state.machineTypeId, this.state.namePlate, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);




            this.state.respo_json = json_response.data.data.attributesMainResponse.objectAttributesResponse
            //       this.state.response_Json_CheckBoxValues = json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeCollection
            //          console.log("respoJson****", this.state.respo_json)
            // this.setState({ AttributeName: json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName })
            // console.log('&&&&&&&&&&&&&', this.state.AttributeName);
            for (i = 0; i < this.state.respo_json.length; i++) {
                this.state.getAttributeName.push(this.state.respo_json[i])
                console.log("++++++++getattName+++++++++++", this.state.getAttributeName)
                this.state.getSingleDataTypes.push(this.state.getAttributeName[i].AttributeDataType)
                // this.state.getAttributeType.push(this.state.respo_json[i].AttributeType)
                //     this.state.checkBoxArrValues.push(this.state.respo_json[i].AttributeCollection)
                //    this.state.checkBoxArrValues = [].concat.apply([], this.state.checkBoxArrValues)
            }
            console.log("GetDataRecords****", this.state.getAttributeName.length)
            // var getLastIndex=this.state.getAttributeName[ this.state.getAttributeName.length-1]
            // console.log("iiiiiiiiiiiiiii****", getLastIndex)
            console.log("*******SingleDataType****", this.state.getSingleDataTypes)

            //   this.setState({ checkboxAttCollection: this.state.checkBoxArrValues.filter(function (e) { return e != undefined }) })
 //           this.setState({ objectAttributeId: this.state.getAttributeName[0].ObjectAttributeId })
            this.setState({ checkboxAttCollection: this.state.respo_json[0].AttributeCollection })
            console.log("this.state.checkboxAttCollection*****", this.state.checkboxAttCollection)
            this.setState({ getQuestion: this.state.getAttributeName[0].AttributeName })
            this.state.getAttributeName[0].AttributeType
            console.log("**************^^^^^", this.state.getQuestion)
            console.log('iiiiii*********', this.state.i)
            if (this.state.i == 0) {

                this.setState({ objectAttributeId: this.state.getAttributeName[0].ObjectAttributeId })
                console.log('getAttributeName*********', this.state.getAttributeName[0].ObjectAttributeId)
                if (this.state.getAttributeName[0].AttributeType == "Single") {
                    console.log("==============Datatype*****============", this.state.getAttributeName[0].AttributeDataType)
                    this.setState({ singleBlock: true })
                    //     alert("SinglebBlocktrue")
                    if (this.state.getAttributeName[0].AttributeDataType == "Boolean") {
                        //        alert("Boolean")
                        this.setState({ showBoolean: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Currency") {
                        //       alert("Currency")
                        this.setState({ showCurrency: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Date") {
                        //       alert("Date")
                        this.setState({ showSingleDate: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Image") {
                        //       alert("Image")
                        this.setState({ showImage: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Number") {
                        //       alert("Number")
                        this.setState({ showNumber: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Phone No") {
                        //       alert("Phone No")
                        this.setState({ showPhoneNo: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Text") {
                        //       alert("Text")
                        this.setState({ showText: true })
                    } else if (this.state.getAttributeName[0].AttributeDataType == "Time") {
                        //      alert("Time")
                        this.setState({ showSingleTime: true })
                    }


                } else if (this.state.getAttributeName[0].AttributeType == "MultiCheck Box") {
                    this.setState({ MultiCheckBox: true })
                    let a = [];
                    a.push(this.state.getAttributeName[0].AttributeCollection)
                    a = [].concat.apply([], a)
                    console.log("****=====checkboxAttCollection******", a)
                    this.setState({ checkboxAttCollection: a })
                    //  alert("MultiCheckBox")

                } else if (this.state.getAttributeName[0].AttributeType == "MultiInput Text") {
                    this.setState({ MultiInputText: true })
                    let b = [];
                    b.push(this.state.getAttributeName[0].AttributeCollection)
                    b = [].concat.apply([], b)
                    console.log("****=====checkboxAttCollection******", b)
                    this.setState({ checkboxAttCollection: b })
                    //   alert("MultiInputText")

                } else if (this.state.getAttributeName[0].AttributeType == "Multi Option") {
                    this.setState({ MultiOption: true })
                    // this.state.checkboxAttCollection.push(this.state.getAttributeName[0].AttributeCollection)
                    // this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                    let c = [];
                    c.push(this.state.getAttributeName[0].AttributeCollection)
                    c = [].concat.apply([], c)
                    console.log("****=====checkboxAttCollection******", c)
                    this.setState({ checkboxAttCollection: c })
                    //   alert("MultiOption")

                } else if (this.state.getAttributeName[0].AttributeType == "Drop Down") {
                    this.setState({ Dropdown: true })
                    //   alert("Dropdown")

                }

                if (this.state.i == (this.state.getAttributeName.length - 1)) {
                    this.setState({ showIdentifyButton: false })
                } else {
                    this.setState({ showIdentifyButton: true })
                }


            }
        } catch (e) {


            console.log('GetAllRecords catch', e);
        } finally {
            // this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }



    };

    DropDown = async () => {
        console.log('inside main method');

        try {
            this.toggleLoader(true);
            console.log('inside try');
            let json_response1 = await AuthService.getDropDown(12, "CreatedOn", true, true);

            //   console.log('inside try', json_response1);
            this.setState({
                DropDownData: json_response1.data.data.globalCodeMainResponse.globalCodeResponse

            })
            console.log("hello", this.state.DropDownData)
            this.state.radio_prop_data.length = 0
            for (i = 0; i < this.state.DropDownData.length; i++) {
                console.log("&&&&&&&", this.state.DropDownData[i].CodeName)
                this.state.radio_prop_data.push({ label: this.state.DropDownData[i].CodeName, value: this.state.DropDownData[i] })
                console.log("==========", this.state.radio_prop_data)

            }





        } catch (e) {


            console.log('GetAllRecords catch', e.response.data);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };


    componentDidMount = () => {
        this.GetAllAttributes();
        this.get_Stage2_Questions();

    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };
    identifyBtn = async () => {
      //  console.log("details+==============", this.state.details)
        console.log("+++++iiii",this.state.details)
        // if(this.state.i==0){
        
            this.state.details.push({ jobId: 'a', objectAttributeId: this.state.objectAttributeId, attributeValue: this.state.attributeValue, collectiondetails: this.state.collectiondetails })
            console.log("Finally get MultiOptiondataValidates Identify*##############**",this.state.details)

        //         try {
        //             this.toggleLoader(true);
        //             var json_response_chooseJobType = await AuthService.createAttributeDetails(this.state.details,this.state.jobId, this.state.objectAttributeId, this.state.attributeValue, this.state.collectiondetails, 
        //                 this.state.attributeCollectionId,this.state.collectionValue,this.state.files,this.state.image,this.state.type,this.state.userName);
        //         //   this.state.details.push({jobId:this.state.jobid,objectAttributeId:this.state.getobjectAttributeId})
        // //             if (json_response_chooseJobType.data.StatusCode == 200) {

        // //            //     this.ChooseJobTypeStorage(json_response_chooseJobType)

        // //                  this.state.ChooseBtnData = json_response_chooseJobType.data.data.jobTypeMainRespone.jobTypeResponse
        // // console.log("*********",this.state.ChooseBtnData)
        // //                 for (i = 0; i <  this.state.ChooseBtnData.length; i++) {
        // //                     this.state.response_Json.push( this.state.ChooseBtnData[i].JobType)
        // //                     this.state.response_JsonId.push( this.state.ChooseBtnData[i].JobTypeId)

        // //                 }
        // //                 console.log("****response_Json*****", this.state.response_Json)
        // //                 console.log("****response_JsonID######", this.state.response_JsonId)
        // //             }

        //         } catch (e) {


        //             console.log('GetAllRecords catch', e.json_response_chooseJobType);
        //         } finally {
        //             this.toggleLoader(false);
        //             console.log('GetAllRecords finally ');
        //         }





    }


    validates = () => {
          alert("")
        this.state.checkboxAttCollection.length = 0
        console.log("************====================********", this.state.getAttributeName)
     
        console.log("===========detailsD-0index=======",this.state.objectAttributeId,this.state.attributeValue, this.state.collectiondetails)
        this.state.details.push({ jobId: 'a', objectAttributeId: this.state.objectAttributeId, attributeValue: this.state.attributeValue, collectiondetails: this.state.collectiondetails })
        console.log("Finally get MultiOptiondataValidates*##############**",this.state.details)

        this.setState({ singleBlock: false })
        this.setState({ MultiCheckBox: false })
        this.setState({ MultiInputText: false })
        this.setState({ MultiOption: false })
        this.setState({ Dropdown: false })

        this.setState({ showBoolean: false })
        this.setState({ showCurrency: false })
        this.setState({ showSingleDate: false })
        this.setState({ showImage: false })
        this.setState({ showNumber: false })
        this.setState({ showPhoneNo: false })
        this.setState({ showText: false })
        this.setState({ showSingleTime: false })

        // this.state.getIndex.length=0
        console.log("Finallykkkkkkkkkkkk********", this.state.i)
        var i = this.state.i
        console.log("this.state.getIndex^^^^^^", this.state.getIndex)
        console.log("Finally********", i)


        if (this.state.getIndex.length == 0) {
            i = this.state.j + 1
            console.log("=====", i)
        } else {
            //   this.incrementIndex(this.state.getIndex);
            var value = (this.state.getIndex).toString()
            console.log("@@@@@@@@@@", value)
            var intValue = parseInt(value)
            console.log("Value*******", intValue)
            i = intValue + 1
            console.log("Incre%%%%%%", i)
            this.state.getIndex.shift()
        }


        console.log("+++++++++++++++++++++", i)
        

       
        
        // this.state.details.push({ jobId: 'a', objectAttributeId: this.state.objectAttributeId, attributeValue: this.state.attributeValue, collectiondetails: this.state.collectiondetails })
        // //this.state.details.splice((this.state.details-1),0,4)
        //         console.log("Finally get MultiOptiondataValidates*##############**",this.state.details)
        
        //console.log("LetseeResult**********",this.state.getAttributeName)
        for (i = i; i < this.state.getAttributeName.length; i++) {

            // console.log("COLLECTIONSVALUE==================", this.state.getAttributeName[i].AttributeCollection)
            // console.log("result==============", this.state.getAttributeName[i].AttributeName)
            // console.log("^^^^^^^^^^AttributeDataType^^^^^^", this.state.getAttributeName[i].AttributeDataType)
            // console.log("LetseeResult**********", this.state.getAttributeName[i].IsRequired)
            //if(this.state.getAttributeName[i].IsRequired==true){
            this.setState({ objectAttributeId: this.state.getAttributeName[i].ObjectAttributeId })

            
    
           // console.log("==========details====", this.state.details)
            this.state.getQuestion = this.state.getAttributeName[i].AttributeName
            console.log("result==========dfsfds====", this.state.getQuestion)
            console.log("result==========objectAttributeId====", this.state.getQuestion)
            this.state.getIndex.push(i)
            // console.log("this.state.getIndex*******", this.state.getIndex)
            // console.log("iiiiiiiiiii loop value", i)
            console.log("this.state.getAttributeName[i].AttributeDataType===========", this.state.getAttributeName[i].AttributeName)
            if (this.state.getAttributeName[i].AttributeType == "Single") {
                console.log("==============Datatype*****============", this.state.getAttributeName[i].AttributeDataType)
                this.setState({ singleBlock: true })
                //       alert("SinglebBlocktrue")
                if (this.state.getAttributeName[i].AttributeDataType == "Boolean") {
                    //        alert("Boolean")
                    this.setState({ showBoolean: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Currency") {
                    //        alert("Currency")
                    this.setState({ showCurrency: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Date") {
                    //       alert("Date")
                    this.setState({ showSingleDate: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Image") {
                    //       alert("Image")
                    this.setState({ showImage: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Number") {
                    //       alert("Number")
                    this.setState({ showNumber: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Phone No") {
                    //     alert("Phone No")
                    this.setState({ showPhoneNo: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Text") {
                    //     alert("Text")
                    this.setState({ showText: true })
                } else if (this.state.getAttributeName[i].AttributeDataType == "Time") {
                    //      alert("Time")
                    this.setState({ showSingleTime: true })
                }

                break;
            } else if (this.state.getAttributeName[i].AttributeType == "MultiCheck Box") {
                this.setState({ MultiCheckBox: true })
                this.state.checkboxAttCollection.push(this.state.getAttributeName[i].AttributeCollection)
                this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                console.log("****=====4444444444******", this.state.checkboxAttCollection)
                //       alert("MultiCheckBox")
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "MultiInput Text") {
                this.setState({ MultiInputText: true })
                this.state.checkboxAttCollection.push(this.state.getAttributeName[i].AttributeCollection)
                this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                console.log("****=====4444444444******", this.state.checkboxAttCollection)
                //     alert("MultiInputText")
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "Multi Option") {
                this.setState({ MultiOption: true })
                this.state.checkboxAttCollection.push(this.state.getAttributeName[i].AttributeCollection)
                this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                console.log("****=====4444444444******", this.state.checkboxAttCollection)
                //     alert("MultiOption")
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "Drop Down") {
                this.setState({ Dropdown: true })
                //    alert("Dropdown")
                break;
            }




            // }else if(this.state.getAttributeName[i].IsRequired==true)
            // {
            //     showMessage({
            //         message: "Please select ",
            //         type: "info",
            //         backgroundColor: "black",
            //         position: (0, 0, 100, 100),
            //         hideStatusBar: false
            //       });
            // }


        }


        if (i == (this.state.getAttributeName.length - 1)) {
            this.setState({ showIdentifyButton: false })
        } else {
            this.setState({ showIdentifyButton: true })
        }
    }



    backBtnOnPress = (value) => {
        if (this.state.selectId == false) {
            this.setState({ selectId: true })
        } else if (this.state.selectId == true) {
            this.props.navigation.goBack()
        }

    }


    // ------------------Multioption---------------------
    MultiOptioncheckboxhandler = (value, index) => {
console.log("multioptionCheck^^^^^^^^",this.state.details)
        this.setState({ checked: value.AttibuteCollectionId })
        this.setState({attributeValue:""})
        // this.setState({ id: value.AttibuteCollectionId })
        // console.log("this.state.checked^^^^^^^******", value)
        // this.setState({AttibuteCollectionId:value.AttibuteCollectionId})
        // this.setState({AttibuteCollectionName:value.AttibuteCollectionName})
        // console.log("this.state.checkedIndex^^^^^^^******", i)
        this.setState({ isRequired: true })
        console.log("***initial***", this.state.details)
        this.state.collectiondetails.length=0
      //  alert(this.state.collectiondetails.length)
       // this.state.collectiondetails[this.state.collectiondetails.length]={ AttibuteCollectionId: value.AttibuteCollectionId, AttibuteCollectionName: value.AttibuteCollectionName }
        // for(i=0;i<=this.state.collectiondetails.length;i++){
   
        // this.state.collectiondetails[i]={ AttibuteCollectionId: value.AttibuteCollectionId, AttibuteCollectionName: value.AttibuteCollectionName }
        // break;
        // }
        console.log("******", this.state.collectiondetails)
        console.log("***final***", this.state.details)
        
        // this.state.details.push({ jobId: 'a', objectAttributeId: this.state.objectAttributeId, attributeValue: this.state.attributeValue, collectiondetails: this.state.collectiondetails })
        console.log("multioptionChecklater^^^^^^^^",this.state.details)
    }
    //------------------MultiTextInput--------------------------
    onChangeTextComp = (TextValue, value, index) => {
        this.setState({ isRequired: true })
        this.setState({attributeValue:""})
        for (i = 0; i <= this.state.rough.length; i++) {
            if (i == index) {
                this.state.rough[i] = TextValue
                this.state.collectiondetails[i] = { attributeCollectionId: value.AttibuteCollectionId, collectionValue: this.state.rough[i] }
            }
            
        }
    
        console.log("value of collectiondetails=========", this.state.collectiondetails)
    }
    //---------------------MultiCheckbox------------------------
    toggleCheckbox(value, id) {
        
        this.state.collectiondetails.length = 0
        this.setState({attributeValue:""})
        this.setState({ id: id })
        this.state.collectiondetails.push({ attributeCollectionId: id, collectionValue: value })
        console.log("========", this.state.collectiondetails)
      //  this.state.details.push({ jobId: 'a', objectAttributeId: this.state.objectAttributeId, attributeValue: this.state.attributeValue, collectiondetails: this.state.collectiondetails })
    }

    // ---------------------Dropdown_Modal----------------------------
    showAlert1 = (value) => {
        this.setState({ showModal1: true });
        this.DropDown();
    };

    //----------------------Modal_chooseBtn---------------------------
    chooseBtnModal = (value, value1) => {
        this.setState({ showModal1: false })
        this.setState({ choosecategory: false });
        console.log("^^^^^^^^^^", value)
        this.setState({ value1: value })
        console.log("^^^^^value1^^^^^", value1)

        this.state.Text_CategoryType = value
        console.log("============", this.state.Text_CategoryType)
        if (this.state.Text_CategoryType == "") {
            this.setState({ categoryText: true })
        } else {
            this.setState({ categoryText: false })
        }

    }


    showDatePicker = () => {

        this.setState({
            showDate: true,
            mode: 'date'

        })

    }

    startTime = () => {
        this.setState({
            showStartTime: true,
            mode: 'time'

        })


    }

    _hideDateTimePicker = () => this.setState({
        showStartTime: false,
        showEndTime: false,
        showDate: false

    });

    handleStartTime = (time) => {
        var a = moment(time).format("hh:mm A")
        var b = a.substring(5, a.length)
        console.log("value of a", a.substring(0, 2))

        if (b === ' AM') {


            if (a.substring(0, 2) == 12) {

                var c = "00" + a.substring(2, 5)
                console.log("12 selected", c)
                this.setState({
                    startTime: c
                })
            }
            else {
                var c = a.substring(0, 5)
                this.setState({
                    startTime: c
                })


            }

        }

        else if (b === ' PM') {

            if (a.substring(0, 2) < 12) {
                var c = a.substring(0, 2)
                var NewTime = parseInt(c) + 12 + a.substring(2, 5)

                this.setState({
                    startTime: NewTime
                })


            }
            else {

                this.setState({
                    startTime: a.substring(0, 5)
                })

            }

        }
        else {
            alert("nothing")
        }

        this.setState({
            showStartTime: false,
            //  startTime:moment(time).format("hh:mm A"),

        });


    }

    handleDate = (date) => {
        this.setState({
            showDate: false,
            chosenDate: moment(date).format("DD-MM-YYYY"),

        });


    }



    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };


    // ----------Single-PhoneNo.----------------
    showPhoneNo = (value) => {
        this.setState({ attributeValue: value })
        this.state.collectiondetails.length=0
        console.log("phoneNo..^^^^^^",this.state.attributeValue)
    }

    ShowBoolean = (value) => {
        this.state.collectiondetails.length=0
        if (value == "Yes") {
            this.setState({ attributeValue: true })
            //     alert("Yes")
        } else if (value == "No") {
            this.setState({ attributeValue: false })
            //   alert("No")
        }

        console.log("getBoolValue", this.state.getBoolValue)
    }
    singleCurrencyfun = (value) => {
        // this.state.collectiondetails.length=0
        this.setState({ attributeValue: value })
        this.setState({collectiondetails:""})
        console.log("currency-collectiondeatils++++++++++++",this.state.details)
        
      
    }
    singleNumericfun = (value) => {
     //   this.state.collectiondetails.length=0
        this.setState({ attributeValue: value })
        
        console.log("numberic-collectiondeatils++++++++++++",this.state.details)
        
    }
    showText = (value) => {
        this.state.collectiondetails.length=0
        this.setState({ attributeValue: value })
     
    }


    // ---------------camera---------------------
    takePicture = async () => {
        try {
          const data = await this.camera.takePictureAsync();
          this.setState({ path: data.uri });
          // this.props.updateImage(data.uri);
          // console.log('Path to image: ' + data.uri);
        } catch (err) {
          console.log('err: ', err);
        }
      };
      
    
      renderCamera() {
        return (
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            flashMode={Camera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          >
            <TouchableHighlight
              style={styles.capture}
              onPress={this.takePicture.bind(this)}
              underlayColor="rgba(255, 255, 255, 0.5)"
            >
              <View />
            </TouchableHighlight>
         
          </Camera>
        );
      }
    
      renderImage() {
        return (
          <View>
            <Image
              source={{ uri: this.state.path }}
              style={styles.preview}
            />
            <Text
              style={styles.cancel}
              onPress={() => this.setState({ path: null })}>Cancel
            </Text>
            <Text
              style={styles.Save}
              onPress={() => this.setState({ path: null })}>Save
            </Text>
          </View>
          
        );
      }

    render() {
        const { isLoading } = this.state;
        // console.log("**************FinalResultin Render", this.state.getQuestion)
        // console.log("===============", this.state.getBoolValue)
     //   console.log("objectID___________", this.state.checkboxAttCollection)
    // console.log("======questiom8888=======",this.state.responseObject)
    console.log("lamba&&&&&&&&&&&&&&&&&&",this.state.questionsObject.QuestionTypeName)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", }}>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }} />
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
                    {/* <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true}/> */}
                    <View style={{
                        flex: 1,
                        width: '100%',
                        height: '9%',
                        flexDirection: "row",
                        // justifyContent:'space-between',
                        alignItems: "center",
                        // paddingHorizontal:DeviceWidth*0.04,
                        backgroundColor: '#008BD0'
                    }}>
                        <TouchableOpacity style={{ height: "70%", width: "13%", resizeMode: 'contain', alignItems: 'center', justifyContent: 'center', paddingLeft: '1%', backgroundColor: 'transparent' }} onPress={() => this.backBtnOnPress(this.state.selectId)}>

                            <Image style={{ height: "30%", width: "53%", resizeMode: 'cover' }} source={require('../../assets/back.png')} />

                        </TouchableOpacity>
                        <View style={{ width: '57%', height: '100%', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: 'transparent', }}>
                            <Text style={{ fontSize: hp('2.2%'), color: '#fff', }}>Jobs in Progress</Text>

                        </View>
                        <View style={{ width: '30%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                            <Image
                                source={require('../../assets/profile.png')}
                                style={{
                                    height: '60%',
                                    width: '40%',
                                    resizeMode: 'contain',
                                }}
                            />

                            <TouchableOpacity style={{
                                height: '100%',
                                width: '40%', alignItems: 'center', justifyContent: 'center'
                            }} onPress={() => { this.props.navigation.navigate('Notification') }}>
                                <Image
                                    source={require('../../assets/bell_icon.png')}
                                    style={{
                                        height: '45%',
                                        width: '45%',
                                        resizeMode: 'contain',
                                    }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>






                </View>
                <View style={{ height: "82%", width: '100%', backgroundColor: '#FFFFFF' }}>
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
                    {/*===========================Working in this view ============================= */}
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'pink' }}>
          
                        
                        
                        
                        
                        
                        
                        
                        {/* ------------------------  stage 2 View------------------------------*/}

                        <View style={{ height: '86%', width: '100%', backgroundColor: 'red' ,justifyContent:'center',alignItems:'center'}}>
                            <View style={{flexDirection:'row', height: '15%', width: '80%', backgroundColor: '#008acf' ,justifyContent:'space-between',alignItems:'center',}}>
                             <Text style={{color:'#ffffff',}}>
                                 Equpment ID {'\n'}{this.state.responseObject.EquipmentId }
                             </Text>
                               <Text style={{color:'#ffffff',}}>{this.state.responseObject.JobCode}</Text>

                            </View>
                            <View style={{ height: '85%', width: '100%', backgroundColor: 'gray' }}>
                              <ScrollView>
                               <View>
                                   <Text>{this.state.questionsObject.Question}</Text>
                                   {/* ------------------options in the question------------------- */}



                                   {/* <View>
{this.state.options.map((item,key)=>{


return(
<view>
    
</view>



)




}  )}




                                   </View> */}

                                   {/* --------------camera---------------------- */}
                                  





                               </View>


                              </ScrollView>

                            </View>


                        </View>









                        
                        <View style={{ height: '10%', width: '100%', backgroundColor: 'lightgreen', marginVertical: '2%', justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.showIdentifyButton ? <TickButton label="Next" handleClick={this.validates} /> : <TickButton label="Identified" handleClick={this.identifyBtn} />}
                        </View>

                    </View>
                </View>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            height: '100%',
            width: '100%',

        },

        subcontainer1: {
            height: '9%',
            width: '100%',
            backgroundColor: 'green'


        },
        subcontainer2: {

            // marginHorizontal:wp('2%'),
            height: '82%',
            width: '100%',
            alignItems: 'center',
            // backgroundColor:'yellow'
            // justifyContent:''
        },
        subcontainer3:
        {
            height: '9%',
            width: '100%',
            backgroundColor: 'transparent'
        },
        setTimeStyle: {
            marginLeft: '5%',
            //  paddingLeft:'3.5%',
            justifyContent: 'center',

        },

        timerText: {

            color: 'gray',
            fontSize: hp('2.0%')
        },
        descriptionStyle: {

            fontSize: hp('2.4%'),
            paddingLeft: '3.5%',

            textAlignVertical: 'top',

        },
        container1: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
          },
          preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width
          },
          capture: {
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 5,
            borderColor: '#FFF',
            marginBottom: 15,
          },
          cancel: {
            position: 'absolute',
            right: 20,
            top: 20,
            backgroundColor: 'transparent',
            color: '#FFF',
            fontWeight: '600',
            fontSize: 17,
          },
          Save: {
            justifyContent: 'flex-start',
            
            top: 20,
            backgroundColor: 'transparent',
            color: '#FFF',
            fontWeight: '600',
            fontSize: 17,
          }
    });

    // const styles = StyleSheet.create({
      
    //   });




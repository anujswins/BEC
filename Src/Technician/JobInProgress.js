
// import React, { Component } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     Dimensions,
//     TouchableOpacity,
//     Image
// } from 'react-native';
//  import { TickButton } from '../CommonComponents/TickButton';
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { AppStorage, key } from '../utils/AppStorage';
// import AuthService from '../../Src/RestClient/AuthService';
// import ApiLoader from '../../Src/PopUp/ApiLoader';
// import { number } from 'prop-types';
// import { FlatList } from 'react-native-gesture-handler';
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width
// const Item=({status})=>{
//     if(status){
//     return(
//     <View>
//     <Text>Yes</Text>
    
//     </View>
    
//     )
    
//     }
    
//     else{
//         return(
//             <View>
//             <Text>No</Text>
            
//             </View>
            
//             )
    
//     }
    
    
    
//      }
    
// export default class JobInProgress extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             isLoading: false,
//             selectId: true,
//             showIdAvailable: false,
//             page: 0,                         //Choose_JobType_Btns_Params
//             limit: 0,
//             orderBy: "CreatedOn",
//             orderByDescending: false,
//             allRecords: true,
//             response_Json: [],
//             response_JsonId:[],
//             ChooseBtnData:[],

//             respo_json: [],




//              jobId:167,
//     userId:39,
//    subSegmentId:0,
//    segmentId:19,
//    machineId:17,
//    machineTypeId:15,
//    namePlate:0,
//    orderBy:"CreatedOn",
//    orderByDescending:false,
//    allRecords:true,
//    AttributeName:'',
// }









//         }
    
  


//     GetAllAttributes = async () => {

        





//         try {
//             // this.toggleLoader(true);
//             let json_response = await AuthService.ObjectAttributes(this.state.jobId, this.state.userId, this.state.subSegmentId, this.state.segmentId, this.state.machineId,
//                 this.state.machineTypeId, this.state.namePlate, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
    
                
// //    for() 
            
// this.state.respo_json=json_response.data.data.attributesMainResponse.objectAttributesResponse
//         this.setState({AttributeName:json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName});
   
//     console.log('Gurjeet&&&&&&&&&&&&&', this.state.AttributeName);
          
//         } catch (e) {
    
//              Alert.alert(e.response.data);
//             console.log('GetAllRecords catch', e.response);
//         } finally {
//             // this.toggleLoader(false);
//             console.log('GetAllRecords finally print hua');
//         }
    
    
    
//     };
   
//     componentDidMount = () => {
//        this.GetAllAttributes();
//     }

//     toggleLoader = (val) => {
//         this.setState(({ isLoading: val }));
//     };

  

   



//     handleClick = () => {
//         let i = this.state.index < this.state.respo_json.length ? this.state.index += 1 : 0;
//         this.setState({ index: i });
//       };







//     backBtnOnPress = (value) => {
//         if (this.state.selectId == false) {
//             this.setState({ selectId: true })
//         } else if (this.state.selectId == true) {
//             this.props.navigation.goBack()
//         }

//     }

//     render() {
//         // const { isLoading ,AttributeName} = this.state;
//         return (
//             <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", }}>
//                 <ApiLoader visibility={this.state.isLoading} loadingColor={'green'} onCancelPress={() => {
//                 }} />
//                 <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
//                     {/* <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true}/> */}
//                     <View style={{
//                         flex: 1,
//                         width: '100%',
//                         height: '9%',
//                         flexDirection: "row",
//                         // justifyContent:'space-between',
//                         alignItems: "center",
//                         // paddingHorizontal:DeviceWidth*0.04,
//                         backgroundColor: '#008BD0'
//                     }}>
//                         <TouchableOpacity style={{ height: "70%", width: "13%", resizeMode: 'contain', alignItems: 'center', justifyContent: 'center', paddingLeft: '1%', backgroundColor: 'transparent' }} onPress={() => this.backBtnOnPress(this.state.selectId)}>

//                             <Image style={{ height: "30%", width: "53%", resizeMode: 'cover' }} source={require('../../assets/back.png')} />

//                         </TouchableOpacity>
//                         <View style={{ width: '57%', height: '100%', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: 'transparent', }}>
//                             <Text style={{ fontSize: hp('2.2%'), color: '#fff', }}>Jobs in Progress</Text>

//                         </View>
//                         <View style={{ width: '30%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
//                             <Image
//                                 source={require('../../assets/profile.png')}
//                                 style={{
//                                     height: '60%',
//                                     width: '40%',
//                                     resizeMode: 'contain',
//                                 }}
//                             />

//                             <TouchableOpacity style={{
//                                 height: '100%',
//                                 width: '40%', alignItems: 'center', justifyContent: 'center'
//                             }} onPress={() => { this.props.navigation.navigate('Notification') }}>
//                                 <Image
//                                     source={require('../../assets/bell_icon.png')}
//                                     style={{
//                                         height: '45%',
//                                         width: '45%',
//                                         resizeMode: 'contain',
//                                     }}
//                                 />
//                             </TouchableOpacity>

//                         </View>
//                     </View>






//                 </View>
//                 <View style={{ height: "82%", width: '100%', backgroundColor: '#FFFFFF' }}>
//                     <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
//                         <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
//                             <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor: 'transparent', width: '15%', paddingLeft: '0.5%' }}>Stage</Text>
//                         </View>
//                         <View style={{ height: '60%', width: '100%', flexDirection: 'row', backgroundColor: 'transparent' }}>
//                             <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05, }} />
//                             <View style={{
//                                 borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
//                                 height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008BD0'
//                             }}>
//                                 <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>1</Text>
//                             </View>
//                             <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
//                             <View style={{
//                                 borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
//                                 height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
//                             }}>
//                                 <Text style={{ fontSize: hp('2%') }}>2</Text>
//                             </View>
//                             <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
//                             <View style={{
//                                 borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
//                                 height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
//                             }}>
//                                 <Text style={{ fontSize: hp('2%') }}>3</Text>
//                             </View>
//                             <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
//                         </View>
//                     </View>
//                     {/* ===========================Working in this view ============================= */} 
//                     <View style={{ height: '50%', width: '100%', backgroundColor: 'red' }}>
//                   {this.state.respo_json.slice(0,this.state.index).map((item)=>{
//                       return(
//                         <View style={{height:'30%',width:'80%',backgroundColor:'pink'}}>
//                         <Text>{item.AttributeName}</Text>
//                       </View>
//                       );
//                   }


//                   )
                    
//                    }
                  
                     
//                     </View>
             
//                     <View style={{ height: '10%', width: '100%', backgroundColor: 'silver', marginVertical: '2%', justifyContent: 'center', alignItems: 'center' }}>
//                            <TickButton label="Next" handleClick={this.handleClick} />
//                         </View>
//                 </View>
//                 <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} />
//                 </View>
//             </SafeAreaView>
//         )
//     }
// }



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
<<<<<<< HEAD
    TextInput,
    Modal
} from 'react-native';

=======
    TextInput

} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel}
    from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStorage, key } from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import { number } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';
import { TickButton } from '../CommonComponents/TickButton';
<<<<<<< HEAD
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

var radio_props = [
    {label: 'Comment', value: 'Comment'},
    {label: 'Feedback', value: 'Feedback'},
    {label: 'Suggestion', value: 'Suggestion'},
];

var radio_props1 = [
  {label: 'Comment', value: 'Comment'},
  {label: 'Feedback', value: 'Feedback'},
  {label: 'Suggestion', value: 'Suggestion'},
];
export default class JobInProgress extends Component {
=======
<<<<<<< HEAD
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { showMessage, hideMessage } from "react-native-flash-message";
import Checkbox from 'react-native-modest-checkbox'
import moment from 'moment';
// import CheckBox from 'react-native-check-box'
import { CheckBox } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker";
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

 class JobInProgress extends Component {
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
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
            ChooseBtnData: [],
<<<<<<< HEAD
            Dropdown:[],
            DropDownData:[],
            globalCodeCategoryId: 12, 
            checkedCheckBox:true,
        
            
    

            language: 'Select Feedback Type',
            choosecategory:'true',
            showtext:"Select Type",
=======





<<<<<<< HEAD
            id: '',
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
            jobId: 178,
            userId: 39,
            subSegmentId: 39,
            segmentId: 20,
            machineId: 17,
            machineTypeId: 15,
            namePlate: 0,
            orderBy: "CreatedOn",
            orderByDescending: true,
            DropDownData:[],
            allRecords: true,
            AttributeName: '',
<<<<<<< HEAD
            respo_json:'',
            getAttributeName:[],
            getAttributeType:[],
            singleBlock:false,
            MultiInputText:false,
            MultiCheckBox:false,
            DropDown:false,
            Drop:[],
            MultiOption:false,
            getIndex:[],
            j:0,
            text: '',
            PhoneNo:"",
            input:'',
            checked:false,
            
=======
            respo_json: '',
            getAttributeName: [],
<<<<<<< HEAD
            // getAttributeType: [],
=======
            getAttributeType: [],
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            singleBlock: false,
            MultiInputText: false,
            MultiCheckBox: false,
            DropDown: false,
            MultiOption: false,
            getIndex: [],
            j: 0,

<<<<<<< HEAD

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




            showBoolean: false,
            showCurrency: false,
            showSingleDate: false,
            showImage: false,
            showNumber: false,
            showPhoneNo: false,
            showText: false,
            showSingleTime: false,
            i: 0,
            showIdentifyButton: true
=======
            checked: -1,
            checkBoxArrValues: [],
            checkboxAttCollection: [],
            checkedCheckBox: true,
            cb: {},
            getInputText: '',
            getInputvariables: [],
            getQuestion:""
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc



>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
        }









    }
    MultiOptioncheckboxhandler = (value, i) => {
        this.setState({ checked: i })
        console.log("this.state.checked^^^^^^^******", value1)
        this.setState({isRequired:true})
        
        }

    showAlert = (value) => {
        this.setState({showModal: true});
    };
        showAlert1 = (value) => {
     this.setState({showModal1: true});
    };


    GetAllAttributes = async () => {

 try {
            // this.toggleLoader(true);
            let json_response = await AuthService.ObjectAttributes(this.state.jobId, this.state.userId, this.state.subSegmentId, this.state.segmentId, this.state.machineId,
                this.state.machineTypeId, this.state.namePlate, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);

<<<<<<< HEAD
 
           

this.state.respo_json=json_response.data.data.attributesMainResponse.objectAttributesResponse
this.state.Drop=json_response.data.data.attributesMainResponse.objectAttributesResponse[3].GlobalCategoryName
this.state.response_Json_CheckBoxValues=json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeCollection
console.log("hey",this.state.response_Json_CheckBoxValues)
console.log("hello",this.state.Drop)

console.log("respoJson****",this.state.respo_json)
            this.setState({ AttributeName: json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName })
            console.log('data&&&&&&&&&&&&&', this.state.AttributeName);
            for(i=0;i<this.state.respo_json.length;i++){
               this.state.getAttributeName.push(this.state.respo_json[i]) 
               this.state.getAttributeType.push(this.state.respo_json[i].AttributeType)
               console.log("dropdown**&&&&&****",this.state.Drop)
            //    this.state.Drop.push(this.state.Drop[i].GlobalCategoryId)
            //    console.log("dropdown******",this.state.Drop)
            }
            console.log("GetDataRecords****",this.state.getAttributeName)
            console.log("GetDataRecordsAttributeType****",this.state.getAttributeType)
        } catch (e) {

            // Alert.alert(e.response.data);
=======



            this.state.respo_json = json_response.data.data.attributesMainResponse.objectAttributesResponse
<<<<<<< HEAD
            //       this.state.response_Json_CheckBoxValues = json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeCollection
            //          console.log("respoJson****", this.state.respo_json)
            // this.setState({ AttributeName: json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName })
            // console.log('&&&&&&&&&&&&&', this.state.AttributeName);
=======
            this.state.response_Json_CheckBoxValues = json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeCollection
            console.log("respoJson****", this.state.respo_json)
            this.setState({ AttributeName: json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName })
            console.log('&&&&&&&&&&&&&', this.state.AttributeName);
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            for (i = 0; i < this.state.respo_json.length; i++) {
                this.state.getAttributeName.push(this.state.respo_json[i])
                this.state.getAttributeType.push(this.state.respo_json[i].AttributeType)
                this.state.checkBoxArrValues.push(this.state.response_Json_CheckBoxValues[i])
            }
            console.log("GetDataRecords****", this.state.getAttributeName)
            console.log("GetDataRecordsAttributeType****", this.state.getAttributeType)
            console.log("GetCheckBoxValues*****", this.state.checkBoxArrValues)
          
            this.setState({ checkboxAttCollection: this.state.checkBoxArrValues.filter(function (e) { return e != undefined }) })
            console.log("this.state.checkboxAttCollection*****", this.state.checkboxAttCollection)
<<<<<<< HEAD
            this.setState({ getQuestion: this.state.getAttributeName[0].AttributeName })
            this.state.getAttributeName[0].AttributeType
            console.log("**************^^^^^", this.state.getQuestion)
            console.log('iiiiii*********', this.state.i)
            if (this.state.i == 0) {


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
                    this.state.checkboxAttCollection.push(this.state.getAttributeName[0].AttributeCollection)
                    this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                    console.log("****=====4444444444******", this.state.checkboxAttCollection)
                  //  alert("MultiCheckBox")

                } else if (this.state.getAttributeName[0].AttributeType == "MultiInput Text") {
                    this.setState({ MultiInputText: true })
                    this.state.checkboxAttCollection.push(this.state.getAttributeName[0].AttributeCollection)
                    this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                    console.log("****=====4444444444******", this.state.checkboxAttCollection)
                 //   alert("MultiInputText")

                } else if (this.state.getAttributeName[0].AttributeType == "Multi Option") {
                    this.setState({ MultiOption: true })
                    this.state.checkboxAttCollection.push(this.state.getAttributeName[0].AttributeCollection)
                    this.state.checkboxAttCollection = [].concat.apply([], this.state.checkboxAttCollection)
                    console.log("****=====4444444444******", this.state.checkboxAttCollection)
                 //   alert("MultiOption")

                } else if (this.state.getAttributeName[0].AttributeType == "Drop Down") {
                    this.setState({ Dropdown: true })
                 //   alert("Dropdown")

                }
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

            this.setState({getQuestion:this.state.getAttributeName[0].AttributeName})
            this.state.getAttributeName[0].AttributeType
            console.log("**************^^^^^",this.state.getQuestion)
        } catch (e) {

           
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
            console.log('GetAllRecords catch', e.response);
        } finally {
            // this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }



    };
<<<<<<< HEAD
    ///Dropdown Api
    
    DropDown = async () => {
        console.log('inside main method');

        try {
            this.toggleLoader(true);
            console.log('inside try');
            let json_response = await AuthService.getDropDown
        
            (12,  "CreatedOn", true, true);
      
            console.log('inside try', json_response);
            this.setState({
                DropDownData: json_response.data.data.globalCodeMainResponse.globalCodeResponse,

            })
       console.log("hello",this.state.DropDownData)

         
       ob1 = {
        
            "GlobalCodeCategoryId": 12,
            "GlobalCodeId": 71,
            "CodeName": "Multi",
            "GlobalCodeCategory": "Input Type",
            "Description": "",
            "ParentGlobalCodeId": -1,
            "ParentGlobalCode": "",
            "IsActive": true,
            "CreatedOn": "2019-04-11T22:07:26"
          },

    // this.state.DropDownData.splice(ob1)

    console.log("data get$$$$$$$$$$$$$$$$$$$$$", this.state.DropDownData)


        } catch (e) {


            console.log('GetAllRecords catch', e.response.data);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };

    componentDidMount = () => {
    this.GetAllAttributes();
    this.DropDown();
=======

    
    componentDidMount = () => {
        this.GetAllAttributes();
<<<<<<< HEAD

=======
  //      this.FirstIndexQues();
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };
<<<<<<< HEAD

    // -----------InHouse-Onsite_Btn-------------------
    incrementIndex=(value)=>{
       
        
    }
    validates = () => {
      //  alert("")
        this.setState({singleBlock:false})
        this.setState({MultiCheckBox:false})
        this.setState({MultiInputText:false})
        this.setState({MultiCheckBox:false})
        this.setState({Dropdown:false})
        // this.state.getIndex.length=0
      
   var i
   console.log("this.state.getIndex^^^^^^",this.state.getIndex)
   console.log("Finally********",i)
   if(this.state.getIndex.length==0){
    i=this.state.j+1 
    console.log("getting this=====",i)
   }else{
 //   this.incrementIndex(this.state.getIndex);
   var value=(this.state.getIndex).toString()
    console.log("@@@@@@@@@@",value)
    var intValue=parseInt(value)
    console.log("Value*******",intValue)
    i=intValue+1
    console.log("Incre%%%%%%",i)
    this.state.getIndex.shift()
   }
   console.log("+++++++++++++++++++++",i)
  
       for(i=i; i<this.state.getAttributeName.length;i++){
  
         this.state.getIndex.push(i)
        console.log("this.state.getIndex*******",this.state.getIndex)
         console.log("iiiiiiiiiii loop value",i)
           if(this.state.getAttributeName[i].AttributeType=="Single"){
               this.setState({singleBlock:true})
               alert("SinglebBlocktrue")
               break;
           }else if(this.state.getAttributeName[i].AttributeType=="MultiCheck Box"){
               this.setState({MultiCheckBox:true})
               alert("MultiCheckBox")
               break;
           }else if(this.state.getAttributeName[i].AttributeType=="MultiInput Text"){
               this.setState({MultiInputText:true})
               alert("MultiInputText")
               break;
           }else if(this.state.getAttributeName[i].AttributeType=="Multi Option"){
               this.setState({MultiOption:true})
               alert("MultiOption")
               break;
           }else if(this.state.getAttributeName[i].AttributeType=="Drop Down"){
               this.setState({Dropdown:true})
               alert("Dropdown")
               break;
           }
          
           
       }
=======
<<<<<<< HEAD
    identifyBtn = () => {
        alert("Identified")
    }
=======

    // -----------InHouse-Onsite_Btn-------------------
    incrementIndex = (value) => {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


    }
    // FirstIndexQues=()=>{
        
    //    // this.state.getQuestion=this.state.getAttributeName[0].AttibuteCollectionName
    //     console.log("First value=========",this.state.getAttributeName)
    // }
    validates = () => {
        //  alert("")
<<<<<<< HEAD
        this.state.checkboxAttCollection.length = 0
        console.log("************====================********", this.state.getAttributeName)

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
=======
        
        this.setState({ singleBlock: false })
        this.setState({ MultiCheckBox: false })
        this.setState({ MultiInputText: false })
        this.setState({ MultiCheckBox: false })
        this.setState({ Dropdown: false })
        // this.state.getIndex.length=0

        var i
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        console.log("this.state.getIndex^^^^^^", this.state.getIndex)
        console.log("Finally********", i)
        if (this.state.getIndex.length == 0) {
            i = this.state.j + 1
            console.log("rahul=====", i)
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

        for (i = i; i < this.state.getAttributeName.length; i++) {
console.log("result==============",this.state.getAttributeName[i].AttributeName)
this.state.getQuestion=this.state.getAttributeName[i].AttributeName
console.log("result==========dfsfds====",this.state.getQuestion)
            this.state.getIndex.push(i)
            // console.log("this.state.getIndex*******", this.state.getIndex)
            // console.log("iiiiiiiiiii loop value", i)
            // console.log("this.state.getAttributeName[i].AttributeDataType", this.state.getAttributeName[i].AttributeDataType)
            if (this.state.getAttributeName[i].AttributeType == "Single") {
                 this.setState({ singleBlock: true })
                alert("SinglebBlocktrue")
                if(this.state.getAttributeName[i].AttributeDataType=="Image"){
                  this.setState({showCamera:true});
                    // alert("Image")
                }else if(this.state.getAttributeName[i].AttributeDataType="Currency"){
                    // alert("Currency")
                    this.setState({showCurrency:true});
                }else if(this.state.getAttributeName[i].AttributeDataType="Date"){
                    // alert("Date")
                    this.setState({showDate:true});
                }
                // else if(this.state.getAttributeName[i].AttributeDataType="Image"){
                //     // alert("Image")
                // }
                
                else if(this.state.getAttributeName[i].AttributeDataType="Number"){
                    // alert("Number")
                    this.setState({showNumber:true});
                }else if(this.state.getAttributeName[i].AttributeDataType="Phone No"){
                    // alert("Phone No")
                    this.setState({showPhoneNo:true});
                }else if(this.state.getAttributeName[i].AttributeDataType="Text"){
                    // alert("Text")
                    this.setState({showText:true});
                }else if(this.state.getAttributeName[i].AttributeDataType="Time"){
                    // alert("Time")
                    this.setState({showTime:true});
                }
                
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "MultiCheck Box") {
                this.setState({ MultiCheckBox: true })
                alert("MultiCheckBox")
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "MultiInput Text") {
                this.setState({ MultiInputText: true })
                alert("MultiInputText")
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "Multi Option") {
                this.setState({ MultiOption: true })
                alert("MultiOption")
                break;
            } else if (this.state.getAttributeName[i].AttributeType == "Drop Down") {
                this.setState({ Dropdown: true })
                alert("Dropdown")
                break;
            }


        }
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    }



    backBtnOnPress = (value) => {
        if (this.state.selectId == false) {
            this.setState({ selectId: true })
        } else if (this.state.selectId == true) {
            this.props.navigation.goBack()
        }

    }
<<<<<<< HEAD

    render() {
        const { isLoading } = this.state;
   
=======
    // -------------MultiCheckbox-------------------------
    checkBoxChanged = (AttibuteCollectionId,index) => {
        var value = AttibuteCollectionId
        console.log("^^^^^item^^^^^^", value)
        console.log("^^^^^index^^^^^^", index)
        this.setState({ checkedCheckBox: !this.state.checkedCheckBox })
        alert(this.state.checkedCheckBox)
    }

    // ------------------Multioption---------------------
    MultiOptioncheckboxhandler = (value, i) => {
        this.setState({ checked: i })
        console.log("this.state.checked^^^^^^^******", value)
<<<<<<< HEAD
        this.setState({ isRequired: true })
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    }
    //------------------MultiTextInput--------------------------
    onChangeTextComp = (TextValue, value, index) => {
        this.state.getInputText = TextValue
        console.log("******", this.state.getInputText)
        var position = index;
        for (i = 0; i <= this.state.getInputvariables.length; i++) {
            if (i == position) {
                this.state.getInputvariables[i] = TextValue
            }
            console.log("=======", this.state.getInputvariables)
        }
    }
<<<<<<< HEAD
    //---------------------MultiCheckbox------------------------
    toggleCheckbox(name, id) {
        // alert(name)
        // alert(id)

        this.setState({ id: id })

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
    singleCurrencyfun = (value) => {

        this.state.getSingleCurrency.push(value)

        console.log("==========", this.state.getSingleCurrency)
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


    render() {
        const { isLoading } = this.state;
        console.log("**************FinalResultin Render", this.state.getQuestion)
        console.log("===============", this.state.getBoolValue)
=======

    render() {
        const { isLoading } = this.state;
        console.log("**************FinalResultin Render",this.state.getQuestion)
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
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
<<<<<<< HEAD
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'red' }}>
                        <View style={{ height: '86%', width: '100%', backgroundColor: 'pink' }}>
                            <View style={{ height: '13%', width: '100%', backgroundColor: 'yellow', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '4%' }}>
                                <Text>{this.state.AttributeName}</Text>
                            </View>
                            <View style={{ height: '87%', width: '200%', backgroundColor: 'silver' }}>
                           
=======
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'transparent' }}>
                        <View style={{ height: '86%', width: '100%', backgroundColor: 'pink' }}>
                            <View style={{ height: '11%', width: '100%', backgroundColor: 'yellow', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '4%' }}>
                                <Text>{this.state.getQuestion}</Text>
                            </View>
<<<<<<< HEAD
                            <ScrollView>
                                <View style={{ height: 'auto', width: '100%', backgroundColor: 'transparent' }}>


                                    {/* ============MultiOpTion_RadioButton=====MultiCheckBox======MultiInput====================================== */}
                                    <View style={{ height: 'auto', width: '90%', backgroundColor: 'transparent', flexDirection: 'column', marginLeft: '5%' }}>
                                        {this.state.checkboxAttCollection.map((item, i) => {
                                            // console.log('index&&&', item)
                                            return (<View key={i} style={{ flexDirection: 'row', backgroundColor: 'transparent', marginVertical: '0.7%' }}>

                                                {/* =================MultiOption_RadioButtons================  */}
                                                {this.state.MultiOption ? <CircleCheckBox
                                                    key={item.AttibuteCollectionId}
                                                    checked={this.state.checked == i ? true : false}
                                                    onToggle={() => this.MultiOptioncheckboxhandler(item, i)}
                                                    labelPosition={LABEL_POSITION.RIGHT}
                                                    label={item.AttibuteCollectionName}
                                                    outerSize={18}
                                                    innerSize={9}
                                                    innerColor={"#008BD0"}
                                                    outerColor={"#008BD0"}
                                                    styleLabel={{ paddingLeft: "2%", paddingVertical: "1%" }}

                                                /> : null}

                                                {/* ===================CheckBox======================= */}

                                                { this.state.MultiCheckBox === true ? <CheckBox
                                                    key={item.AttibuteCollectionId}
                                                    title={item.AttibuteCollectionName}
                                                    style={{ backgroundColor: 'transparent' }}
                                                    checked={item.AttibuteCollectionId === this.state.id ? this.state.checked : null}
                                                    checkedIcon={<Image source={require('../../assets/checkmark.png')} style={{ height: 20, width: 20, backgroundColor: 'blue' }} />}
                                                    uncheckedIcon={<Image source={require('../../assets/unchecked.png')} style={{ height: 20, width: 20, backgroundColor: 'blue' }} />}
                                                    onPress={() => this.toggleCheckbox(item.AttibuteCollectionName, item.AttibuteCollectionId)} />
                                                    : null}
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                <View style={{
                    height: '7%', width: '100%', backgroundColor: 'white', justifyContent: 'center',
                    paddingHorizontal: '7%',
                }}>

<<<<<<< HEAD
                    <TouchableOpacity
                        style={{width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center'}}
                        onPress={this.showAlert1}>

                        {this.state.choosecategory ?
=======
                                                {/* ===================TextInput=================== */}
                                                {this.state.MultiInputText === true ? <View>             <View style={{ height: hp('5%'), width: wp('30%'), alignItems: 'flex-start', justifyContent: 'center' }}>
                                                    <Text>{item.AttibuteCollectionName}</Text>
                                                </View>
                                                    <TextInput style={{ height: hp('5%'), width: wp('60%'), backgroundColor: 'transparent', borderBottomWidth: 2, paddingVertical: 0 }}
                                                        onChangeText={(text) => this.onChangeTextComp(text, item, i)}
                                                        MultiInputText={true} /></View> : null}

                                            </View>)
                                        })}


                                        {/* =====================Dropdown_Component============ */}
                                        {this.state.Dropdown == true ? <TouchableOpacity activeOpacity={0.8} onPress={() => this.showAlert1()}>
                                            <View style={{ flexDirection: "row", height: hp('6%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'white' }}>
                                                <View style={{ height: hp('6%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    {this.state.categoryText ? <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}></Text> :
                                                        <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingLeft: '2%' }}>{this.state.Text_CategoryType}</Text>}

                                                </View>
                                                <View style={{ height: hp('6%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                                                    <Image source={require('../../assets/dropdown_icon.png')}
                                                        style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity> : null}

                                        {this.state.DropDownData.map((item, i) => {
                                            return (


                                                <Modal visible={this.state.showModal1}
                                                    transparent={true}>
                                                    <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center' }}>
                                                        <View style={{ height: 'auto', width: '90%', backgroundColor: "transparent", marginHorizontal: '5%', justifyContent: 'space-between' }}>
                                                            <View style={{ height: 'auto', width: '100%', backgroundColor: "white", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%', paddingVertical: "4%" }}>
                                                                <Text style={{ fontWeight: "bold", fontSize: hp('2.1%'), backgroundColor: 'transparent', width: '60%' }}>
                                                                    Select Value
                                </Text>
                                                            </View>
                                                            <View style={{ height: 'auto', width: '100%', backgroundColor: 'white', paddingVertical: '8%' }}>


                                                                <View style={{ backgroundColor: "transparent", marginLeft: wp('5%') }}>
                                                                    <ScrollView>
                                                                        <RadioForm
                                                                            radio_props={this.state.radio_prop_data}
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
                                                                                this.state.value_selectedText = value

                                                                                console.log("value_SelectMachineType", this.state.value_selectedText)
                                                                            }}
                                                                            radioStyle={{ paddingRight: 40, marginVertical: hp('1%') }}
                                                                            wrapStyle={{ marginVertical: hp('9%') }}
                                                                        />
                                                                    </ScrollView>
                                                                </View>


                                                            </View>
                                                            <View style={{ height: 'auto', width: '100%', backgroundColor: "white", paddingRight: '5%', paddingBottom: '5%' }}>
                                                                <TouchableOpacity onPress={(value) => { this.chooseBtnModal(this.state.value_selectedText, this.state.Text_CategoryType) }}>
                                                                    <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '4%' }}>
                                                                        <Text style={{ fontSize: hp('1.9%'), color: "#008AD2", fontWeight: "bold", backgroundColor: 'transparent', width: '22%' }}>
                                                                            CHOOSE
                                </Text>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>


                                                        </View>
                                                    </View>

                                                </Modal>







                                            )
                                        })}

                                        {/* ------------------------------------------------------------------ */}

                                        {/* ====================Single_Attribute_Component================================= */}


                                        {this.state.showPhoneNo === true ? <TextInput
                                            style=
                                            {{
                                                height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1,  backgroundColor: 'transparent'
                                            }}
                                            keyboardType='numeric'
                                            placeholder="Number"
                                            maxLength={30}
                                            onChangeText={(numeric) => this.setState({ getSingleNumeric: numeric })}
                                            value={this.state.PhoneNo}
                                        /> : null}
                                        {this.state.showText === true ?
                                            <TextInput
                                                style=
                                                {{
                                                    height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1,  backgroundColor: 'transparent'
                                                }}
                                                keyboardType='default'
                                                placeholder="Text"
                                                maxLength={30}
                                                onChangeText={(text) => this.setState({ getSingleText: text })}
                                                value={this.state.PhoneNo}
                                            /> : null}
                                        {this.state.showCurrency === true ? <TextInput
                                            style=
                                            {{
                                                height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1, backgroundColor: 'transparent'
                                            }}
                                            keyboardType='decimal-pad'
                                            placeholder="Currency"
                                            maxLength={30}
                                            onChangeText={(Currency) => this.singleCurrencyfun(Currency)}
                                            value={this.state.PhoneNo}
                                        /> : null}

                                        {this.state.showNumber === true ? <TextInput
                                            style=
                                            {{
                                                height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1,  backgroundColor: 'transparent'
                                            }}
                                            keyboardType='numeric'
                                            placeholder="Number"
                                            maxLength={30}
                                            onChangeText={(Currency) => this.singleCurrencyfun(Currency)}
                                            value={this.state.PhoneNo}
                                        /> : null}

                                        {this.state.showBoolean === true ? <RadioForm
                                            radio_props={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]}
                                            initial={-1}
                                            formHorizontal={true}
                                            labelHorizontal={true}
                                            buttonColor={"#D6D6D6"}
                                            labelColor={"#424242"}
                                            animation={false}
                                            buttonSize={8}
                                            labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'), }}
                                            onPress={(value, index) => {
                                                console.log("Value%%%%%%", value)
                                                if (value == "Yes") {
                                                    this.setState({ getBoolValue: true })
                                               //     alert("Yes")
                                                } else if (value == "No") {
                                                    this.setState({ getBoolValue: false })
                                                 //   alert("No")
                                                }

                                                console.log("getBoolValue", this.state.getBoolValue)
                                            }}
                                            radioStyle={{ paddingRight: wp('30%'), paddingTop: 0 }}
                                            wrapStyle={{ marginVertical: hp('9%') }}
                                        /> : null}



                                        {/* --------------------------Date_Picker--------------------- */}
                                        {this.state.showSingleDate === true ? <View style={{
                                            height: hp('7%'), borderColor: 'gray',
                                            justifyContent: 'center', backgroundColor: 'transparent'
                                        }}
                                            elevation={3}>
                                            <TouchableOpacity style={styles.setTimeStyle} onPress={this.showDatePicker} >
                                                {
                                                    this.state.chosenDate == '' ?
                                                        <Text style={styles.timerText}>Request Date </Text>
                                                        :
                                                        <Text style={styles.timerText}>{this.state.chosenDate} </Text>
                                                }


                                            </TouchableOpacity>
                                        </View> : null}
                                        {
                                            this.state.showDate ?
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

                                        {/* -----------------------Time_Picker------------------------------- */}
                                        {this.state.showSingleTime === true ? <View style={{
                                            backgroundColor: 'transparent', height: hp('7%'), borderColor: 'gray',
                                            justifyContent: 'center', shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 1 },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 2,
                                        }} elevation={3}>
                                            <TouchableOpacity style={styles.setTimeStyle} onPress={this.startTime} >
                                                {
                                                    this.state.startTime == '' ?

                                                        <Text style={styles.timerText}> Start Time </Text>

                                                        :
                                                        <Text style={styles.timerText}> {this.state.startTime} </Text>
                                                }


                                            </TouchableOpacity>
                                        </View> : null}
                                        {
                                            this.state.showStartTime ?
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
                                        {/* ------------------------------Image_Camera---------------- */}

                                        {this.state.showImage ? <View style={{ height: hp('10%'), width: wp('100%'), backgroundColor: "green" }}>
                                            <Text>
                                                Camera
                                            </Text>
                                        </View> : null}
=======
                            <View style={{ height: '87%', width: '100%', backgroundColor: 'silver' }}>
                                <View style={{ height: 'auto', width: '90%', backgroundColor: 'pink', flexDirection: 'column', marginLeft: '5%' }}>
                                    {this.state.checkboxAttCollection.map((item, i) => {
                                        console.log('index&&&', i)
                                        return (<View key={item.AttibuteCollectionId} style={{ flexDirection: 'row', backgroundColor: 'transparent', marginVertical: '0.7%' }}>
                                            
                                            
{/* 
                                     {this.state.?
                                      

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                            <Text>
                                Select Type
                            </Text> :

<<<<<<< HEAD
                            <Text style={{
                                 fontSize: hp('2.1%'),
                                backgroundColor: 'white',
                                color:'grey'
                            }}>
                                
                                {this.state.AttributeName}
                            </Text>
                            }

=======
                                  




                                     :null
                                     }      */}





                                            
                                            
                                            
                                            
                                            
        
                                            {/* <CircleCheckBox
                                                key={item.AttibuteCollectionId}
                                                checked={this.state.checked==i?true:false}
                                                onToggle={() => this.MultiOptioncheckboxhandler(item,i)}
                                                labelPosition={LABEL_POSITION.RIGHT}
                                                label={item.AttibuteCollectionName}
                                                outerSize={18}
                                                innerSize={9}
                                                innerColor={"#008BD0"}
                                                outerColor={"#008BD0"}
                                                styleLabel={{ paddingLeft: "2%", paddingVertical: "1%" }}

                                            /> */}
                                            <CheckBox
                                                center
                                                title="yes"
                                                value={this.state.checkedCheckBox}
                                                //     value={this.state.checked}
                                                onValueChange={() => this.checkBoxChanged(item.AttibuteCollectionId,i)}
                                            />
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text>{item.AttibuteCollectionName}</Text>
                                            </View>
                                            {/* <View style={{ height: hp('5%'), width: wp('30%'), alignItems: 'flex-start', justifyContent: 'center' }}>
                                                <Text>{item.AttibuteCollectionName}</Text>
                                            </View> */}
                                            {/* //   <View style={{height:hp('5%'),width:wp('60%'),backgroundColor:'blue'}}> */}
                                            {/* <TextInput style={{ height: hp('5%'), width: wp('60%'), backgroundColor: 'red', borderBottomWidth: 2, paddingVertical: 0 }}
                                                onChangeText={(text) => this.onChangeTextComp(text, item, i)}
                                                MultiInputText={true} /> */}
                                            {/* </View> */}
                                            <Text>
                                                
                                            </Text>
                                        </View>)
                                    })}

                                </View>
                            </View>
                        </View>
                        <View style={{ height: '10%', width: '100%', backgroundColor: 'silver', marginVertical: '2%', justifyContent: 'center', alignItems: 'center' }}>
                            <TickButton label="Next" handleClick={this.validates} />
                        </View>
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                            <View style={{
                    height: '7%', width: '100%', backgroundColor: 'white', justifyContent: 'center',
                    paddingHorizontal: '7%',
                }}>

                    <TouchableOpacity
                        style={{width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center'}}
                        onPress={this.showAlert1}>


                        <Modal

                            visible={this.state.showModal1}

                            transparent={true}>

<<<<<<< HEAD

                            <View style={{
                                height: 'auto', width: '90%', backgroundColor: 'white',
                                marginLeft: '5%',
                                marginTop: '45%', elevation:3}}>
                                <View style={{
                                    width: 'auto', height: 'auto', backgroundColor: 'transaprent',borderBottomWidth:.2,
                                    justifyContent: 'center',alignItems:'center',padding:5
                                }}>
                                    <Text style={{
                                        fontSize: 20, color: '#008AD2',
                                        textAlign: 'center',
                                    }}>
                                        Select Type
                                    </Text>
                                </View>
                                <View style={{backgroundColor:'transaprent',height:hp('25%'),justifyContent:'center',alignItems:'flex-start',padding:10}}>
                                    <RadioForm
                                        radio_props={this.state.DropDownData.map(item =>
                                            ({label: item.CodeName, value: item.CodeName}))}
                                        selectedValue={this.state.language}
                                        formHorizontal={false}
                                        labelHorizontal={true}
                                        buttonColor={'#D6D6D6'}
                                        animation={true}
                                        buttonSize={10}
                                        labelStyle={{fontSize: hp('1.9%'), marginRight: wp('4%'), backgroundColor: 'white'}}
                                        onPress={(value1, index) => {
                                            console.log('val', value1);
                                            this.state.AttributeName = value1;
                                            this.setState({language: value1});
                                        }}
                                    />
                                </View>
                                <View style={{backgroundColor:'transaprent',height:hp('6%'),justifyContent:'center'}}>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({choosecategory: false});
                                        this.setState({showModal1: false});
                                    }}>
                                        <View style={{
                                            width: 'auto', height:hp('5%'), backgroundColor: 'transaprent',
                                            alignItems: 'flex-end', justifyContent: 'flex-end',
                                        }}>
                                            <Text style={{
                                                fontSize: 18, color: '#008AD2', fontWeight: 'bold',marginRight:5,
                                            }}>
                                                CHOOSE
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>





                            </View>


                        </Modal>

                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
                </View>
                <Text>Phone Number</Text>
                <TextInput
        style=
        {{
          height: 40, borderColor: 'gray', borderBottomWidth: 1, color : "gray"
        }}
        keyboardType = 'numeric'
        placeholder="Phone Number"
        maxLength={30}
        onChangeText={(PhoneNo) => this.setState({PhoneNo})}
        value={this.state.PhoneNo}
      />
<Text>Currency</Text>
<TextInput
        style=
        {{
          height: 40, borderColor: 'gray', borderBottomWidth: 1, color : "gray"
        }}
        keyboardType = 'numeric'
        placeholder="Currency"
        maxLength={30}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text>Text</Text>
      <TextInput
        style=
        {{
          height: 40, borderColor: 'gray', borderBottomWidth: 1, color : "gray",
        }}
       placeholder="input"
        maxLength={30}
        onChangeText={(input) => this.setState({input})}
        value={this.state.input}
      />
      <View style={{flexDirection:"row",}}>
       <CircleCheckBox
// key={item.AttibuteCollectionId}
checked={this.state.checked==true}
// onToggle={() => this.MultiOptioncheckboxhandler(item,i)}
labelPosition={LABEL_POSITION.RIGHT}
// label={item.AttibuteCollectionName}
outerSize={18}
innerSize={9}
innerColor={"#008BD0"}
outerColor={"#008BD0"}
styleLabel={{ paddingLeft: "2%", paddingVertical: "1%" }}

/> 
<CircleCheckBox
// key={item.AttibuteCollectionId}
// checked={this.state.checked==i?true:false}
// onToggle={() => this.MultiOptioncheckboxhandler(item,i)}
labelPosition={LABEL_POSITION.LEFT}
// label={item.AttibuteCollectionName}
outerSize={18}
innerSize={9}
innerColor={"#008BD0"}
outerColor={"#008BD0"}
styleLabel={{ paddingLeft: "2%", paddingVertical: "1%" }}

/> 
</View>                           
 </View>

                        </View>

                        <View style={{ height: '10%', width: '100%', backgroundColor: 'silver', marginVertical: '2%', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <TickButton label="Next" handleClick={this.validates} /> */}
                            
 <TouchableOpacity  onPress={() => {this.props.navigation.navigate('camera')}}> 
 <Text>next</Text>
 </TouchableOpacity>

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


=======
export default JobInProgress;
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

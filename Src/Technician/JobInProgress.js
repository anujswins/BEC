
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
    TextInput

} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStorage, key } from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import { number } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';
import { TickButton } from '../CommonComponents/TickButton';

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

 class JobInProgress extends Component {
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






            jobId: 178,
            userId: 39,
            subSegmentId: 39,
            segmentId: 20,
            machineId: 17,
            machineTypeId: 15,
            namePlate: 0,
            orderBy: "CreatedOn",
            orderByDescending: false,
            allRecords: true,
            AttributeName: '',
            respo_json: '',
            getAttributeName: [],
            getAttributeType: [],
            singleBlock: false,
            MultiInputText: false,
            MultiCheckBox: false,
            DropDown: false,
            MultiOption: false,
            getIndex: [],
            j: 0,

            checked: -1,
            checkBoxArrValues: [],
            checkboxAttCollection: [],
            checkedCheckBox: true,
            cb: {},
            getInputText: '',
            getInputvariables: [],
            getQuestion:""



        }









    }




    GetAllAttributes = async () => {







        try {
            // this.toggleLoader(true);
            let json_response = await AuthService.ObjectAttributes(this.state.jobId, this.state.userId, this.state.subSegmentId, this.state.segmentId, this.state.machineId,
                this.state.machineTypeId, this.state.namePlate, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);




            this.state.respo_json = json_response.data.data.attributesMainResponse.objectAttributesResponse
            this.state.response_Json_CheckBoxValues = json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeCollection
            console.log("respoJson****", this.state.respo_json)
            this.setState({ AttributeName: json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName })
            console.log('&&&&&&&&&&&&&', this.state.AttributeName);
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

            this.setState({getQuestion:this.state.getAttributeName[0].AttributeName})
            this.state.getAttributeName[0].AttributeType
            console.log("**************^^^^^",this.state.getQuestion)
        } catch (e) {

           
            console.log('GetAllRecords catch', e.response);
        } finally {
            // this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }



    };

    
    componentDidMount = () => {
        this.GetAllAttributes();
  //      this.FirstIndexQues();
    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

    // -----------InHouse-Onsite_Btn-------------------
    incrementIndex = (value) => {


    }
    // FirstIndexQues=()=>{
        
    //    // this.state.getQuestion=this.state.getAttributeName[0].AttibuteCollectionName
    //     console.log("First value=========",this.state.getAttributeName)
    // }
    validates = () => {
        //  alert("")
        
        this.setState({ singleBlock: false })
        this.setState({ MultiCheckBox: false })
        this.setState({ MultiInputText: false })
        this.setState({ MultiCheckBox: false })
        this.setState({ Dropdown: false })
        // this.state.getIndex.length=0

        var i
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
    }



    backBtnOnPress = (value) => {
        if (this.state.selectId == false) {
            this.setState({ selectId: true })
        } else if (this.state.selectId == true) {
            this.props.navigation.goBack()
        }

    }
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

    render() {
        const { isLoading } = this.state;
        console.log("**************FinalResultin Render",this.state.getQuestion)
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
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'transparent' }}>
                        <View style={{ height: '86%', width: '100%', backgroundColor: 'pink' }}>
                            <View style={{ height: '11%', width: '100%', backgroundColor: 'yellow', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '4%' }}>
                                <Text>{this.state.getQuestion}</Text>
                            </View>
                            <View style={{ height: '87%', width: '100%', backgroundColor: 'silver' }}>
                                <View style={{ height: 'auto', width: '90%', backgroundColor: 'pink', flexDirection: 'column', marginLeft: '5%' }}>
                                    {this.state.checkboxAttCollection.map((item, i) => {
                                        console.log('index&&&', i)
                                        return (<View key={item.AttibuteCollectionId} style={{ flexDirection: 'row', backgroundColor: 'transparent', marginVertical: '0.7%' }}>
                                            
                                            
{/* 
                                     {this.state.?
                                      








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

                    </View>
                </View>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} />
                </View>
            </SafeAreaView>
        )
    }
}

export default JobInProgress;

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
    Modal
} from 'react-native';

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
            Dropdown:[],
            DropDownData:[],
            globalCodeCategoryId: 12, 
            checkedCheckBox:true,
        
            
    

            language: 'Select Feedback Type',
            choosecategory:'true',
            showtext:"Select Type",
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
            console.log('GetAllRecords catch', e.response);
        } finally {
            // this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }



    };
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
    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

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
    }



    backBtnOnPress = (value) => {
        if (this.state.selectId == false) {
            this.setState({ selectId: true })
        } else if (this.state.selectId == true) {
            this.props.navigation.goBack()
        }

    }

    render() {
        const { isLoading } = this.state;
   
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
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'red' }}>
                        <View style={{ height: '86%', width: '100%', backgroundColor: 'pink' }}>
                            <View style={{ height: '13%', width: '100%', backgroundColor: 'yellow', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '4%' }}>
                                <Text>{this.state.AttributeName}</Text>
                            </View>
                            <View style={{ height: '87%', width: '200%', backgroundColor: 'silver' }}>
                           

                <View style={{
                    height: '7%', width: '100%', backgroundColor: 'white', justifyContent: 'center',
                    paddingHorizontal: '7%',
                }}>

                    <TouchableOpacity
                        style={{width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center'}}
                        onPress={this.showAlert1}>

                        {this.state.choosecategory ?

                            <Text>
                                Select Type
                            </Text> :

                            <Text style={{
                                 fontSize: hp('2.1%'),
                                backgroundColor: 'white',
                                color:'grey'
                            }}>
                                
                                {this.state.AttributeName}
                            </Text>
                            }


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



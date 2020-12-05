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
// import CheckBox from '@react-native-community/checkbox';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStorage, key } from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import { TickButton } from '../CommonComponents/TickButton';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import moment from 'moment';
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
            stageid: '',
            id: '',
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
            singleBlock: false,
            MultiInputText: false,
            MultiCheckBox: false,
            DropDown: false,
            MultiOption: false,
            getIndex: [],
            j: 0,
            checkBoxArrValues: [],
            checkboxAttCollection: [],
            currency:'',
            checkedCheckBox: false,
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
            showIdentifyButton: true,
            multioptioncheck:'',
            jobdetailsdata:[],



        }









    }




    GetAllAttributes = async () => {







        try {
            // this.toggleLoader(true);
            //aaaaaaaaaaaaaaa
            let json_response = await AuthService.ObjectAttributes(this.state.jobId, this.state.userId, this.state.subSegmentId, this.state.segmentId, this.state.machineId,
                this.state.machineTypeId, this.state.namePlate, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);




            this.state.respo_json = json_response.data.data.attributesMainResponse.objectAttributesResponse
            //       this.state.response_Json_CheckBoxValues = json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeCollection
            console.log("respoJson****", json_response)
            // this.setState({ AttributeName: json_response.data.data.attributesMainResponse.objectAttributesResponse[0].AttributeName })
            // console.log('&&&&&&&&&&&&&', this.state.AttributeName);
            for (i = 0; i < this.state.respo_json.length; i++) {
                this.state.getAttributeName.push(this.state.respo_json[i])
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

            this.setState({ checkboxAttCollection: this.state.respo_json[0].AttributeCollection })
            console.log("this.state.checkboxAttCollection*****", this.state.checkboxAttCollection)
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




            }
        } catch (e) {


            console.log('GetAllRecords catch', e.response);
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
                this.state.radio_prop_data.push({ label: this.state.DropDownData[i].CodeName, value: this.state.DropDownData[i].CodeName })
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
        this.abc();

    }
    abc = async() => {
        let jobdetailsdata =  await AppStorage.getJobDetails();
        this.setState(({ jobdetailsdata: jobdetailsdata }));
    }
    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };
    identifyBtn = () => {
        var a  = this.state.getSingleCurrency;
        //alert(this.state.jobId +this.state.getBoolValue  + this.state.chosenDate + JSON.stringify(this.state.multioptioncheck) + JSON.stringify(a)   + this.state.getSingleText  + this.state.startTime   + '   '   + JSON.stringify(jobdetailsdata));
        alert("******" +  JSON.stringify(this.state.jobdetailsdata));
        // var response = res.data.data.jobsMainResponse;
        // var AssignedJobId = response.AssignedJob;
        // var eqpId = response.jobResponse[0].EquipmentId;
        // var jobCode = response.jobResponse[0].JobCode;
        // var JobId = response.jobResponse[0].JobId;
        // AsyncStorage.setItem('JobId', '' + JobId + '');
        // var stage = response.jobResponse[0].StageId;

    }


    validates = () => {
        //  alert("")
        this.state.checkboxAttCollection.length = 0
        this.setState({
            singleBlock: false,
            showBoolean: false,
            MultiCheckBox: false,
            MultiInputText: false,
            MultiOption: false,
            Dropdown: false,
            showCurrency: false,
            showSingleDate: false,
            showImage: false,
            showNumber: false,
            showPhoneNo: false,
            showText: false,
            showSingleTime: false
        })
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
        //console.log("LetseeResult**********",this.state.getAttributeName)
        for (i = i; i < this.state.getAttributeName.length; i++) {
            console.log("COLLECTIONSVALUE==================", this.state.getAttributeName[i].AttributeCollection)
            console.log("result==============", this.state.getAttributeName[i].AttributeName)
            console.log("^^^^^^^^^^AttributeDataType^^^^^^", this.state.getAttributeName[i].AttributeDataType)
            console.log("LetseeResult**********", this.state.getAttributeName[i].IsRequired)
            //if(this.state.getAttributeName[i].IsRequired==true){

            this.state.getQuestion = this.state.getAttributeName[i].AttributeName
            console.log("result==========dfsfds====", this.state.getQuestion)
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
    MultiOptioncheckboxhandler = (value, i) => {
        this.setState({ checked: i, isRequired: true , multioptioncheck : value})

    }
    //------------------MultiTextInput--------------------------
    onChangeTextComp = (TextValue, value, index) => {
        this.setState({ isRequired: true })
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

        this.setState({ currency: value })
        this.state.getSingleCurrency.push(value);
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
        const { isLoading, stageid } = this.state;
        console.log("**************FinalResultin Render", this.state.getQuestion)
        console.log("===============", this.state.getBoolValue)
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
                    <View style={{ height: '20%', width: '100%', backgroundColor: "#E6F7FF" }}>
                        <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor: 'transparent', width: '15%', paddingLeft: '0.5%' }}>Stage</Text>
                        </View>
                        <View style={{ height: '60%', width: '100%', flexDirection: 'row', backgroundColor: 'transparent' }}>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05, }} />
                            <View style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: stageid === '' ? '#008BD0' : '#eee',
                            }}>
                                <Text style={{ fontSize: hp('2%'), }}>1</Text>
                            </View>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
                            <View style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: stageid == 1 ? '#008BD0' : '#eee',
                            }}>
                                <Text style={{ fontSize: hp('2%') }}>2</Text>
                            </View>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
                            <View style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: stageid === 2 ? '#008BD0' : '#eee',
                            }}>
                                <Text style={{ fontSize: hp('2%') }}>3</Text>
                            </View>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
                        </View>
                    </View>

                    {/*===========================Working in this view ============================= */}
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'transparent' }}>
                        <View style={{ height: '86%', width: '100%', backgroundColor: 'transparent' }}>
                            <View style={{ height: '11%', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '4%' }}>
                                <Text>{this.state.getQuestion}</Text>
                            </View>
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
                                                height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1, backgroundColor: 'transparent'
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
                                                    height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1, backgroundColor: 'transparent'
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
                                                height: hp('7%'), borderColor: 'gray', borderBottomWidth: 1, backgroundColor: 'transparent'
                                            }}
                                            keyboardType='decimal-pad'
                                            placeholder="Currency"
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

                                    </View>



                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', marginVertical: '2%', justifyContent: 'center', alignItems: 'center' }}>
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

        }
    });




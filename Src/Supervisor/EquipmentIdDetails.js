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
    TextInput
} from 'react-native';
import { TickButton } from '../CommonComponents/TickButton';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { showMessage, hideMessage } from "react-native-flash-message";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

export default class Equip_Id_Details extends Component {
    constructor() {
        super();
        this.state = {
<<<<<<< HEAD
            EquipId: "",
            DummyId:"BEC1020",
            showDetails:'',
            showButton:true,
            isFocus:true,
            Data: [{ JobNum: "Job Number", Job_Number: "JN-3455", ClientName: "Client Name", Client_Name: "Steve John", Mac: "Machine", Machine: "3 Phase Induction Motor", MacType: "Machine Type", Machine_Type: "Induction Motor", Segmnt: "Segment", Segment: "Single Speed", RatedPow: "Rated Power", Rated_Power: "909", RatedVol: "Rated Voltage", Rated_Voltage: "909" }]
        }
    }
=======
            isLoading: false,         // Need
<<<<<<< HEAD
                          // Need
=======
            // Need
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            Job_Num: '',
            DummyId: "BEC1020",
            showDetails: '',
            showButton: true,
            isFocus: true,
            Data: [],
            showData: false,
            JobNumber: true,
            EquipId: "",
            jobTypeId: '',
            machineTypeId: '',
            machineId: '',
            segmentId: '',
            clientId: '',
            clientType: '',
            clientName: '',
            phoneNumber: '',
            userId: '',
            jobCode: '',

<<<<<<< HEAD
                   }
    }
   
=======
        }
    }

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    componentDidMount = async () => {
        let respo_storage = await AppStorage.getJobDetails();                                                //GetAll_Records_Data
        console.log('EquipmentIddetails=============', respo_storage.data.jobsMainResponse.jobResponse);
        let getJobType_resp = await AppStorage.getJobTypeId();                                                  //GetJobTypeID
        let login_respo = await AppStorage.getLoginResponse();
<<<<<<< HEAD
        var user_id=login_respo.userResponse.UserId 
=======
        var user_id=login_respo.userResponse.UserId
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        this.setState({jobTypeId: getJobType_resp.JobTypeId,userId: user_id});


    };

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };



    equipIDgetDetails = async (myid) => {
        console.log('myid*******', myid);

        try {
            this.toggleLoader(true);

<<<<<<< HEAD
            var json_response = await AuthService.getJobByEquipId(this.state.EquipId);
            var json_respo = await AuthService.getJobNoEquipId(this.state.JobNumber);
console.log("88888888888888888888888888888",json_response.data)
            this.state.ClientId = json_response.data.data.jobsResponse.ClientId;
            this.state.ClientName = json_response.data.data.jobsResponse.ClientName;
            this.state.MachineTypeId = json_response.data.data.jobsResponse.MachineTypeId;
            this.state.MachineId = json_response.data.data.jobsResponse.MachineId;
            this.state.SegmentId = json_response.data.data.jobsResponse.SegmentId;


            var json_response = await AuthService.getJobByEquipId(this.state.EquipId);
=======
            var json_response = await AuthService.getJobByEquipId(this.state.EquipId);
            var json_respo = await AuthService.getJobNoEquipId(this.state.JobNumber);
            console.log("88888888888888888888888888888",json_response.data)
            this.state.ClientId = json_response.data.data.jobsResponse.ClientId;
            this.state.ClientName = json_response.data.data.jobsResponse.ClientName;
            this.state.MachineTypeId = json_response.data.data.jobsResponse.MachineTypeId;
            this.state.MachineId = json_response.data.data.jobsResponse.MachineId;
            this.state.SegmentId = json_response.data.data.jobsResponse.SegmentId;


            var json_response = await AuthService.getJobByEquipId(this.state.EquipId);
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            var json_respo = await AuthService.getJobNoEquipId(this.state.JobNumber)
            // console.log('my_data', json_response.data.data)
            // console.log('my_data_json_respo wala', json_respo)
            this.setState({
                jobCode: json_respo.data.JobNumber
            })
            if (json_response.data.StatusCode == 200) {
                this.showData();

                this.state.Data.length = 0
                this.state.Data.push(json_response.data.data.jobsResponse)
                console.log('*************Component wala data******', this.state.Data)
                this.setState({
                    showButton: false,
                });
            }

        }
        catch {
            showMessage({
                message: "No record found",
                type: "info",
                backgroundColor: "black",
                position: (0, 0, 100, 100),
                hideStatusBar: false
<<<<<<< HEAD
              });
=======
            });
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        }
        finally {
            this.toggleLoader(false);
            console.log('finally');
        }


    }




>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    validates = () => {

        if (this.state.EquipId == "") {


            showMessage({
                message: "Please enter Equipment id",
                type: "info",
                backgroundColor: "black",
                position: (0, 0, 100, 100),
                hideStatusBar: false
            });
        }
        else if(this.state.EquipId==this.state.DummyId){
            this.setState({showDetails:true})
            this.setState({showButton:false})
        }
        else{
            showMessage({
                message: "No record found",
                type: "info",
                backgroundColor: "black",
                position: (0, 0, 100, 100),
                hideStatusBar: false
            });
        }

    }
    
    handleFocus=()=>[
        this.setState({isFocus:false})
    ]

<<<<<<< HEAD
=======




    // ---------------AppStorage_Create_Btn---------------
    createjobRespo = (respo_json_CreateJobClienttype) => {

        AppStorage.EquipIdAvail(key.EQUIP_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data)).then(() => {
<<<<<<< HEAD
   //         console.log("respo_json_CreateJobClienttype.data**", respo_json_CreateJobClienttype.data)
=======
            //         console.log("respo_json_CreateJobClienttype.data**", respo_json_CreateJobClienttype.data)
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        });


    };

    // ----------------------Create_Job_Button-----------------
    validCreateJobBtn = async () => {

        console.log('Vinod_Storage_data', this.state.EquipId +""+this.state.jobTypeId+""+
<<<<<<< HEAD
        this.state.MachineTypeId+""+
        this.state.MachineId+""+
        this.state.SegmentId+""+
        this.state.ClientId+""+
        this.state.ClientName+""+this.state.jobCode);
        console.log('post data create job me===============', this.state.EquipId,
        this.state.jobTypeId,
=======
            this.state.MachineTypeId+""+
            this.state.MachineId+""+
            this.state.SegmentId+""+
            this.state.ClientId+""+
            this.state.ClientName+""+this.state.jobCode);
        console.log('post data create job me===============', this.state.EquipId,
            this.state.jobTypeId,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            this.state.MachineTypeId,
            this.state.MachineId,
            this.state.SegmentId,
            this.state.ClientId,
            this.state.ClientName,
            this.state.userId,
            this.state.jobCode);




        try {
            this.toggleLoader(true);
<<<<<<< HEAD
            var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipId, this.state.jobTypeId, this.state.MachineTypeId, 
                this.state.MachineId, this.state.SegmentId, this.state.ClientId,this.state.clientType,this.state.ClientName,this.state.phoneNumber, this.state.userId, this.state.jobCode);
let respo_create_job_Btn
=======
            var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipId, this.state.jobTypeId, this.state.MachineTypeId,
                this.state.MachineId, this.state.SegmentId, this.state.ClientId,this.state.clientType,this.state.ClientName,this.state.phoneNumber, this.state.userId, this.state.jobCode);
            let respo_create_job_Btn
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            console.log("****ClientType********", respo_json_CreateJobClienttype.data.StatusCode)
            if (respo_json_CreateJobClienttype.data.StatusCode == 200) {
                this.props.navigation.navigate("JobAssignment", {JobAssignBool:true})
                AppStorage.saveKey(key.EQUIP_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data.data)).then(() => {
                    console.log("=====AppStorageJson_respo_Machine+++++++++++++", respo_json_CreateJobClienttype.data.data)
<<<<<<< HEAD
                  });
=======
                });
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            }


        } catch (e) {

            Alert.alert(e);
            console.log('catch block', e)
            // console.log('catch block', e.respo_json_CreateJobClienttype);
        } finally {
            this.toggleLoader(false);
            console.log('finally');
        }
<<<<<<< HEAD
       // this.props.navigation.navigate("JobAssignment", {JobAssignBool:true})
=======
        // this.props.navigation.navigate("JobAssignment", {JobAssignBool:true})
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
    }
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "#FFFFFF", }}>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
                <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true}/>
                </View>
                <View style={{ height: '72%', width: '100%', backgroundColor: 'transparent' }}>
                    <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
                    <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor:'transparent',width:'15%',paddingLeft:'0.5%'}}>Stage</Text>
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
                    <View style={{ height: '6%', width: '90%', marginHorizontal: '5%', flexDirection: "row", backgroundColor: "transparent", marginTop: '1.5%' }}>
                        <View style={{ width: '49%', justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent", paddingTop: hp('0.2%') }}>
                            <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>
                                Enter Equipment Id
                            </Text>
                        </View>
<<<<<<< HEAD
                        <View style={{ width: '51%',backgroundColor: "transparent", justifyContent: 'center', }}>
                            <TextInput underlineColorAndroid={this.state.isFocus?'#D2D3D5':'#008BD0'} style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: '2%' }}
                               onFocus={this.handleFocus}
                               onChangeText={value => {
                                    this.setState({ EquipId: value })
                                    console.log(this.state.EquipId)
                                }} />
=======
                        <View style={{ width: '51%', backgroundColor: "transparent", justifyContent: 'center', }}>
                            <TextInput underlineColorAndroid={this.state.isFocus ? '#D2D3D5' : '#008BD0'} style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: '2%' }}
                                       onFocus={this.handleFocus}
                                //    onSubmitEditing={()=>this.showData()}
                                       onChangeText={value => {
                                           this.setState({ EquipId: value })
                                           //    console.log(this.state.EquipId)
                                       }} />
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                        </View>
                    </View>
                    <View style={{ height: '70.5%', width: '90%', backgroundColor: "transparent", marginHorizontal: '5%' }}>
                        <FlatList data={this.state.Data}
<<<<<<< HEAD
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
<<<<<<< HEAD
                                    {this.state.showDetails ?
                                        <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.JobNum}</Text>
                                                </View>
                                                <View style={{  width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Job_Number}</Text>
                                                </View>
=======
                                    <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
                                        <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                            <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Job no.</Text>
                                            </View>
                                            <View style={{ width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{this.state.jobCode}</Text>
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                                            </View>

                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.ClientName}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start"}}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Client_Name}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Mac}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Machine}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.MacType}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Machine_Type}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Segmnt}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Segment}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedPow}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Power}</Text>
                                                </View>
                                            </View>

<<<<<<< HEAD
                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
=======
                                        {/* <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
=======
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={({ item }) => (
                                      <View>
                                          <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
                                              <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                  <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                      <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Job no.</Text>
                                                  </View>
                                                  <View style={{ width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                      <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{this.state.jobCode}</Text>
                                                  </View>
                                              </View>

                                              {/* {item.ClientName!=""?  */}
                                              <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                  <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                      <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Client Name</Text>
                                                  </View>
                                                  <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                      <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.ClientName}</Text>
                                                  </View>
                                              </View>
                                              {/* :null} */}

                                              {item.MachineTypeName != "" ? <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                      <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Machine Type</Text>
                                                      </View>
                                                      <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.MachineTypeName}</Text>
                                                      </View>
                                                  </View>
                                                  : null}

                                              {item.MachineName != "" ? <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                      <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Machine</Text>
                                                      </View>
                                                      <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.MachineName}</Text>
                                                      </View>
                                                  </View>
                                                  : null}

                                              {item.SegmentName != "" ? <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                      <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Segment</Text>
                                                      </View>
                                                      <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.SegmentName}</Text>
                                                      </View>
                                                  </View>
                                                  : null
                                              }

                                              {item.SubSegmentName != "" ? <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                      <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Sub Segment</Text>
                                                      </View>
                                                      <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
                                                          <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.SubSegmentName}</Text>
                                                      </View>
                                                  </View>
                                                  : null}

                                              {/* <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedVol}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Voltage}</Text>
                                                </View>
<<<<<<< HEAD
                                            </View>
                                        </View>
                                        : null}
=======
                                            </View> */}
                                          </View>

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                                      </View>
                                  )}>

                        </FlatList>
                    </View>
                </View>
                <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", }}>
               {this.state.showButton ?    <TickButton label="Next" handleClick={this.validates} />: <TickButton label="CreateJob" handleClick={() => { this.props.navigation.navigate("JobAssignment") }} />
    }
                </View>

                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
                </View>

            </SafeAreaView>
        )
    }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
// ----------------------------------------------------------------------------------------
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
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
//     FlatList,
//     Image,
//     TextInput
// } from 'react-native';
// import { TickButton } from '../CommonComponents/TickButton';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { showMessage, hideMessage } from "react-native-flash-message";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width

// export default class Equip_Id_Details extends Component {
//     constructor() {
//         super();
//         this.state = {
<<<<<<< HEAD
//             EquipId: "",
//             Data: [{ JobNum: "Job Number", Job_Number: "JN-3455", ClientName: "Client Name", Client_Name: "Steve John", Mac: "Machine", Machine: "3 Phase Induction Motor", MacType: "Machine Type", Machine_Type: "Induction Motor", Segmnt: "Segment", Segment: "Single Speed", RatedPow: "Rated Power", Rated_Power: "909", RatedVol: "Rated Voltage", Rated_Voltage: "909" }]
//         }
//     }
=======
//             isLoading: false,         // Need
//             EquipId: "",              // Need
//             Job_Num:'',
//             DummyId:"BEC1020",
//             showDetails:'',
//             showButton:true,
//             isFocus:true,
//             Data:[]
//            // Data: [{ JobNum: "Job Number", Job_Number: "JN-3455", ClientName: "Client Name", Client_Name: "Steve John", Mac: "Machine", Machine: "3 Phase Induction Motor", MacType: "Machine Type", Machine_Type: "Induction Motor", Segmnt: "Segment", Segment: "Single Speed", RatedPow: "Rated Power", Rated_Power: "909", RatedVol: "Rated Voltage", Rated_Voltage: "909" }]
//         }
//     }
//     // componentDidMount = async () => {

//     // }

//     toggleLoader = (val) => {
//         this.setState(({isLoading: val}));
//     };

//     onLogin = (json_response,json_respo) => {
//          console.log('login response data ', json_response.data.StatusCode,json_respo.data);


//         AppStorage.saveKey(key.USER_PROFILE_DATA, JSON.stringify(json_response.data,json_respo.data)).then(() => {
//             console.log('Appstorage_DATA')
//         });



//  //   Alert.alert(respo.data.Message);



//     };





//     equipIDgetDetails=async(myid)=>{
//         console.log('funtion me id agau h bhai', myid);

//         try{
//             this.toggleLoader(true);
//             var json_response = await AuthService.getJobByEquipId(this.state.EquipId);
//             var json_respo=await AuthService.getJobNoEquipId()
//             console.log('my_data',json_response.data)
//             console.log('my_data_json_respo wala',json_respo.data.JobNumber)
//              if(json_response.data.StatusCode==200){

//                  this.onLogin(json_response,json_respo);

//                  this.state.Data=json_response.data.data
//                  console.log('*************Component wala data******',this.state.Data)
//            console.log("&&&&&&&&Data&&&&&&&&&&",this.state.Data.jobsResponse.ClientName)
//                 //  <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//                 // }} />
//              }
//         }
//         catch(e){
//             console.log('###############',e.json_response.data.StatusCode,this.state.EquipId)
//         Alert.alert(json_response.data.Message)


//         }
//         finally {
//             this.toggleLoader(false);
//             // console.log('login finally print hua');
//         }

// //         try {
// //             this.toggleLoader(true);

// //             let respo = await AuthService.getJobByEquipId(this.state.EquipId);
// // console.log('**************',respo)



// //             if (respo.data.StatusCode === 200) {
// //                 // console.log('response condition', respo.data.StatusCode);
// //                 this.onLogin(respo);

// //             }

// //         } catch (e) {

// //             Alert.alert(e.response.data.Message);
// //             console.log('login catch me print hua', e.response.data);
// //         } finally {
// //             this.toggleLoader(false);
// //             console.log('login finally print hua');
// //         }


=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

//     }




>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

<<<<<<< HEAD
//     validates = () => {

<<<<<<< HEAD
=======

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
//         if (this.state.EquipId == "") {


//             showMessage({
//                 message:"Please enter Equipment id",
//                  type:"info",
//                   backgroundColor: "black",
//                  position:(0,0,100,100),
//                  hideStatusBar:false
//               });
//         }
<<<<<<< HEAD
//         else {

//             this.props.navigation.navigate("Technicians")

//         }

//     }

=======
//         else { 
//             this.equipIDgetDetails(this.state.EquipId)

//         }


//     }



//     handleFocus=()=>[
//         this.setState({isFocus:false})
//     ]
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <SafeAreaView style={{ flex: 1, height: hp('100%'), width: wp('100%'), backgroundColor: "transparent", }}>
//                 <View style={{height:'auto', width:wp('100%'), backgroundColor:"transparent"}}>
//                <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false}/>
//                </View>
//         <View>

//         <View style={{ height: hp('7%'), width:wp('100%'),justifyContent: "flex-start", alignItems: "center", backgroundColor: "#E6F7FF", paddingTop:hp('1%') }}>
//                     <Text style={{ fontSize: hp('2.5%'), fontWeight: "bold" }}>Stage</Text>
//                 </View>
<<<<<<< HEAD
//                 <View style={{ flexDirection: "row", alignSelf: "flex-start", height: hp('8%'), width: wp('100%'), backgroundColor: "#E6F7FF" }}>
//                     <View style={{ width:wp('17.5%'), height: hp('0.5%'), backgroundColor: "transparent", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
//                     <View style={{ height: hp('5.8%'), width: wp('10%'), backgroundColor: "#008AD2",
//                      borderRadius:105, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF" }}>1</Text>
//                     </View>
//                     <View style={{ width: wp('17.5%'), height: hp('0.5%'), backgroundColor: "#E6F7FF", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />

//                     <View style={{ height: hp('5.8%'), width: wp('10%'), backgroundColor: "#D0CFCD",
//                      borderRadius:105, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={{ fontSize: hp('2.5%'), color: "#333333" }}>2</Text>
//                     </View>
//                     <View style={{ width: wp('17.5%'), height: hp('0.5%'), backgroundColor: "#E6F7FF", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
//                     <View style={{ height: hp('5.8%'), width: wp('10%'), backgroundColor: "#D0CFCD",
//                      borderRadius:105, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={{ fontSize: hp('2.5%'), color: "#333333" }}>3</Text>
=======
//                 <View style={{ height: '72%', width: '100%', backgroundColor: 'transparent' }}>
//                     <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
//                     <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
//                             <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor:'transparent',width:'15%',paddingLeft:'0.5%'}}>Stage</Text>
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
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
//                     </View>
//                     <View style={{ width: wp('17.5%'), height: hp('0.5%'), backgroundColor: "#E6F7FF", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
//                 </View>

//                 <View style={{ height: hp('6%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent",marginTop:hp('1%') }}>
//                     <View style={{ width: wp('44%'), flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('2.1%') }}>
//                             Enter Equipment ID
//                             </Text>
//                         <Text style={{ fontSize: hp('2.1%'), color: "#008AD2" }}>
//                             *
//                             </Text>
<<<<<<< HEAD
//                     </View>
//                     <View style={{ width: wp('46%'), backgroundColor: "transparent",justifyContent:'flex-end', borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                         <TextInput style={{ fontSize: hp('2.1%'), width: wp('46%'), height: hp('6%'), backgroundColor: "transparent" }}
//                             onChangeText={value => { this.setState({ EquipId: value }) 
//                             console.log(this.state.EquipId)}} />
//                     </View>
//                 </View>


//                 <View style={{ height: hp('40%'), width: wp('90%'), backgroundColor: "transparent", marginHorizontal: wp('5%') }}>
//                     <FlatList data={this.state.Data}
//                         keyExtractor={(item,index)=>index.toString()}
//                         renderItem={({ item }) => (
//                             <View>
//                                 {this.state.EquipId ?
//                                     <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.JobNum}</Text>
//                                             </View>
//                                             <View style={{ width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Job_Number}</Text>
=======
//                         </View>
//                         <View style={{ width: '51%',backgroundColor: "transparent", justifyContent: 'center', }}>
//                             <TextInput underlineColorAndroid={this.state.isFocus?'#D2D3D5':'#008BD0'} style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: '2%' }}
//                                onFocus={this.handleFocus}
//                                onChangeText={value => {
//                                     this.setState({ EquipId: value })
//                                 //    console.log(this.state.EquipId)
//                                 }} />
//                         </View>
//                     </View>
//                     <View style={{ height: '70.5%', width: '90%', backgroundColor: "transparent", marginHorizontal: '5%' }}>
//                         {/* <FlatList data={this.state.Data}
//                             keyExtractor={(item, index) => index.toString()}
//                             renderItem={({ item }) => (
//                                 <View>

//                                         <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
//                               <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                        <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Job no.</Text>
//                                                 </View>
//                                                 <View style={{  width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>J-234324</Text>
//                                                 </View>
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
//                                             </View>
//                                         </View>

<<<<<<< HEAD
//                                         <View style={{ flexDirection: "row" }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.ClientName}</Text>
//                                             </View>
//                                             <View style={{  width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Client_Name}</Text>
//                                             </View>
//                                         </View>

//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Mac}</Text>
//                                             </View>
//                                             <View style={{ width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Machine}</Text>
//                                             </View>
//                                         </View>

//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.MacType}</Text>
//                                             </View>
//                                             <View style={{  width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Machine_Type}</Text>
//                                             </View>
//                                         </View>
=======
//                                        <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Client Name</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start"}}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Navi</Text>
//                                                 </View>
//                                             </View>

//                                             <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Mac}</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Machine}</Text>
//                                                 </View>
//                                             </View>

//                                             <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.MacType}</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Machine_Type}</Text>
//                                                 </View>
//                                             </View>

//                                             <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Segmnt}</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Segment}</Text>
//                                                 </View>
//                                             </View>

//                                             <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedPow}</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Power}</Text>
//                                                 </View>
//                                             </View>

//                                             <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedVol}</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Voltage}</Text>
//                                                 </View>
//                                             </View>
//                                         </View>

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Segmnt}</Text>
//                                             </View>
//                                             <View style={{  width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Segment}</Text>
//                                             </View>
//                                         </View>

<<<<<<< HEAD
//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.RatedPow}</Text>
//                                             </View>
//                                             <View style={{  width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Rated_Power}</Text>
//                                             </View>
//                                         </View>

//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.RatedVol}</Text>
//                                             </View>
//                                             <View style={{  width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Rated_Voltage}</Text>
//                                             </View>
//                                         </View>
//                                         {/* <View style={{ backgroundColor: "#004b74", borderBottomWidth: 4, borderBottomColor: "#004B73", marginTop:height*0.05,alignItems: "flex-start", justifyContent: "center",}}>
//                                             <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => { alert("Job Created") }}>
//                                                 <Image source={require("../../assets/tick_icon.png")}/>
//                                                 <Text style={{ fontSize: 16, color: "#FFFFFF", paddingVertical: height * 0.013, paddingHorizontal: width * 0.016, backgroundColor: "#006DA6" }}>
//                                                     Create Job 
//                                                 </Text>
//                                             </TouchableOpacity >
//                                         </View> */}

//                                     </View>
//                                     : null}

//                             </View>
//                         )}>

//                     </FlatList>
=======
//                         </FlatList> */}
//                     </View>
//                 </View>
//                 <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", }}>
//                {this.state.showButton ?    <TickButton label="Next" handleClick={this.validates} />: <TickButton label="CreateJob" handleClick={() => { this.props.navigation.navigate("JobAssignment") }} />
//     }
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
//                 </View>
//                 <View style={{ height: hp('10%'), width: wp('100%'), backgroundColor: 'transparent', alignItems: "center", justifyContent: "center",marginTop:hp('4.5%')}}>
//           <TickButton label="Next" handleClick={this.validates} />

//         </View>
//                 <View style={{ height: 'auto', width: wp('100%'), backgroundColor: "transparent",marginTop:hp('2%') }}>
//                 <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//                 </View>
//                 </View>

//             </SafeAreaView>
//         )
//     }
<<<<<<< HEAD
// }
=======
// }
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

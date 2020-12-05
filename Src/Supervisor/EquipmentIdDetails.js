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
    Alert
} from 'react-native';
import { TickButton } from '../CommonComponents/TickButton';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { showMessage, hideMessage } from "react-native-flash-message";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthService from '../../Src/RestClient/AuthService';
import { AppStorage, key } from '../utils/AppStorage';
import ApiLoader from '../../Src/PopUp/ApiLoader';
const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

export default class Equip_Id_Details extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,         // Need
            EquipId: "",              // Need
            Job_Num: '',
            DummyId: "BEC1020",
            showDetails: '',
            showButton: true,
            isFocus: true,
            Data: [],
            showData: false,

            jobTypeId: '',
            machineTypeId: '',
            machineId: '',
            segmentId: '',
            clientId: '',
            clientType: '',
            clientName: '',
            phoneNumber: '',
            userId: '',
            jobCode: ''

            // Data: [{ JobNum: "Job Number", Job_Number: "JN-3455", ClientName: "Client Name", Client_Name: "Steve John", Mac: "Machine", Machine: "3 Phase Induction Motor", MacType: "Machine Type", Machine_Type: "Induction Motor", Segmnt: "Segment", Segment: "Single Speed", RatedPow: "Rated Power", Rated_Power: "909", RatedVol: "Rated Voltage", Rated_Voltage: "909" }]
        }
    }
    // componentDidMount = async () => {

    // }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

    onLogin = (json_response, json_respo) => {
        console.log('login response data ', json_response.data.StatusCode, json_respo.data);


        AppStorage.saveKey(key.USER_PROFILE_DATA, JSON.stringify(json_response.data, json_respo.data)).then(() => {
            console.log('Appstorage_DATA')
        });



        //   Alert.alert(respo.data.Message);



    };





    equipIDgetDetails = async (myid) => {
        console.log('myid*******', myid);

        try {
            this.toggleLoader(true);
            var json_response = await AuthService.getJobByEquipId(this.state.EquipId);
            var json_respo = await AuthService.getJobNoEquipId()
            console.log('my_data', json_response.data)
            console.log('my_data_json_respo wala', json_respo.data.JobNumber)
            this.setState({
                JobNumber: json_respo.data.JobNumber
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
        catch (e) {
            console.log('###############', e.json_response.data.StatusCode, this.state.EquipId)
            Alert.alert(json_response.data.Message)


        }
        finally {
            this.toggleLoader(false);
             console.log('finally');
        }


    }





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
        else {
            this.equipIDgetDetails(this.state.EquipId)

        }


    }
    showData = () => {
        this.setState({
            showData: true
        })
    }


    handleFocus = () => {
        this.setState({ isFocus: false })
    }





    // ---------------AppStorage_Create_Btn---------------
    createjobRespo = (respo_json_CreateJobClienttype) => {

        AppStorage.EquipIdAvail(key.EQUIP_ID_DETAILS, JSON.stringify(respo_json_CreateJobClienttype.data)).then(() => {
            console.log("respo_json_CreateJobClienttype.data**", respo_json_CreateJobClienttype.data)
        });


    };

    // ----------------------Create_Job_Button-----------------
    validCreateJobBtn = async () => {
alert("Create button")
        try {
            this.toggleLoader(true);


            var respo_json_CreateJobClienttype = await AuthService.CreateJobClientEquipId(this.state.EquipId);

            console.log("****ClientType********", respo_json_CreateJobClienttype.data.StatusCode)
            if (respo_json_CreateJobClienttype.data.StatusCode == 200) {


                var Resp = respo_json_CreateJobClienttype.data
                console.log("Resp********", Resp)
                this.createjobRespo(respo_json_CreateJobClienttype);
            }


        } catch (e) {

            Alert.alert(e.respo_json_CreateJobClienttype);
            console.log('catch block', e)
            // console.log('catch block', e.respo_json_CreateJobClienttype);
        } finally {
            this.toggleLoader(false);
            console.log('finally');
        }
        this.props.navigation.navigate("JobAssignment", {JobAssignBool:true})
    }
    render() {
        const { isLoading } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "#FFFFFF", }}>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
                    <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true} />
                </View>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }} />
                <View style={{ height: '72%', width: '100%', backgroundColor: 'transparent' }}>
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
                    <View style={{ height: '6%', width: '90%', marginHorizontal: '5%', flexDirection: "row", backgroundColor: "transparent", marginTop: '1.5%' }}>
                        <View style={{ width: '49%', justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent", paddingTop: hp('0.2%') }}>
                            <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>
                                Enter Equipment Id
                            </Text>
                        </View>
                        <View style={{ width: '51%', backgroundColor: "transparent", justifyContent: 'center', }}>
                            <TextInput underlineColorAndroid={this.state.isFocus ? '#D2D3D5' : '#008BD0'} style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: '2%' }}
                                onFocus={this.handleFocus}
                                //    onSubmitEditing={()=>this.showData()}
                                onChangeText={value => {
                                    this.setState({ EquipId: value })
                                    //    console.log(this.state.EquipId)
                                }} />
                        </View>
                    </View>
                    {this.state.showData ? <View style={{ height: '70.5%', width: '90%', backgroundColor: "transparent", marginHorizontal: '5%' }}>
                        <FlatList data={this.state.Data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>

                                    <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
                                        <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                            <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Job no.</Text>
                                            </View>
                                            <View style={{ width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{this.state.JobNumber}</Text>
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
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedVol}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Voltage}</Text>
                                                </View>
                                            </View> */}
                                    </View>


                                </View>
                            )}>

                        </FlatList>
                    </View> : null}
                </View>
                <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", }}>
                    {this.state.showButton ? <TickButton label="Next" handleClick={this.validates} /> : <TickButton label="CreateJob" handleClick={() => this.validCreateJobBtn()} />
                    }
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
//     TextInput,
//     Alert
// } from 'react-native';
// import { TickButton } from '../CommonComponents/TickButton';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { showMessage, hideMessage } from "react-native-flash-message";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import AuthService from '../../Src/RestClient/AuthService';
// import {AppStorage, key} from '../utils/AppStorage';
// import ApiLoader from '../../Src/PopUp/ApiLoader';
// const height = Dimensions.get("window").height
// const width = Dimensions.get("window").width

// export default class Equip_Id_Details extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoading: false,         // Need
//             EquipId: "",              // Need
//             Job_Num:'',
//             DummyId:"BEC1020",
//             showDetails:'',
//             showButton:true,
//             isFocus:true,
//             Data:[],
//             showData:false,

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
//             this.setState({
//                 JobNumber:json_respo.data.JobNumber
//             })
//              if(json_response.data.StatusCode==200){
//                this.showData();
//                 //  this.onLogin(json_response,json_respo);
               
//                 //  this.state.Data=json_response.data.data
//                 // this.setState({
//                 //     Data:json_response.data.data.jobsResponse
                    

//                 // })
//                 this.state.Data.length=0
//                 this.state.Data.push(json_response.data.data.jobsResponse)
//                  console.log('*************Component wala data******',this.state.Data)
//         //    console.log("&&&&&&&&Data&&&&&&&&&&",this.state.Data.jobsResponse.ClientName)
//            this.setState({
//             showButton:false,
//         });
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



//     }





//     validates = () => {

 
//         if (this.state.EquipId == "") {


//             showMessage({
//                 message: "Please enter Equipment id",
//                 type: "info",
//                 backgroundColor: "black",
//                 position: (0, 0, 100, 100),
//                 hideStatusBar: false
//             });
//         }
//         else { 
//             this.equipIDgetDetails(this.state.EquipId)
            
//         }
    

//     }
// showData=()=>{
//     this.setState({
//      showData:true   
//     })
// }
    
    
//     handleFocus=()=>[
//         this.setState({isFocus:false})
//     ]

//     render() {
//         const {isLoading} = this.state;
//         const { navigate } = this.props.navigation;
//         return (
//             <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "#FFFFFF", }}>
//                 <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
//                 <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true}/>
//                 </View>
//                 <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//                     }}/>
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
//                     </View>
//                     <View style={{ height: '6%', width: '90%', marginHorizontal: '5%', flexDirection: "row", backgroundColor: "transparent", marginTop: '1.5%' }}>
//                         <View style={{ width: '49%', justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent", paddingTop: hp('0.2%') }}>
//                             <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>
//                                 Enter Equipment Id
//                             </Text>
//                         </View>
//                         <View style={{ width: '51%',backgroundColor: "transparent", justifyContent: 'center', }}>
//                             <TextInput underlineColorAndroid={this.state.isFocus?'#D2D3D5':'#008BD0'} style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: '2%' }}
//                                onFocus={this.handleFocus}
//                             //    onSubmitEditing={()=>this.showData()}
//                                onChangeText={value => {
//                                     this.setState({ EquipId: value })
//                                 //    console.log(this.state.EquipId)
//                                 }} />
//                         </View>
//                     </View>
//          { this.state.showData?<View style={{ height: '70.5%', width: '90%', backgroundColor: "transparent", marginHorizontal: '5%' }}>
//                         <FlatList data={this.state.Data}
//                             keyExtractor={(item, index) => index.toString()}
//                             renderItem={({ item }) => (
//                                 <View>
                                  
//                                         <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
//                               <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                        <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Job no.</Text>
//                                                 </View>
//                                                 <View style={{  width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{this.state.JobNumber}</Text>
//                                                 </View>
//                                             </View>

//                        {/* {item.ClientName!=""?  */}
//                                   <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Client Name</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start"}}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.ClientName}</Text>
//                                                 </View>
//                                             </View>
//                                             {/* :null} */}

//                                 {item.MachineTypeName!=""?         <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Machine Type</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.MachineTypeName}</Text>
//                                                 </View>
//                                             </View>
//                                             :null}

//                         { item.MachineName!=""?        <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Machine</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.MachineName}</Text>
//                                                 </View>
//                                             </View>
//                                             :null}

//                      { item.SegmentName!=""  ?                <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Segment</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.SegmentName}</Text>
//                                                 </View>
//                                             </View>
//                                          :null   
//                                         }

//                        {item.SubSegmentName!=""?                  <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>Sub Segment</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.SubSegmentName}</Text>
//                                                 </View>
//                                             </View>
//                                             :null}

//                                             {/* <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
//                                                 <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedVol}</Text>
//                                                 </View>
//                                                 <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
//                                                     <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Voltage}</Text>
//                                                 </View>
//                                             </View> */}
//                                         </View>
                                      

//                                 </View>
//                             )}>

//                         </FlatList>
//                     </View>:null}
//                 </View>
//                 <View style={{ height: '10%', width: '100%', backgroundColor: 'transparent', alignItems: "center", justifyContent: "center", }}>
//                {this.state.showButton ?    <TickButton label="Next" handleClick={this.validates} />: <TickButton label="CreateJob" handleClick={() => { this.props.navigation.navigate("JobAssignment") }} />
//     }
//                 </View>

//                 <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
//                 </View>

//             </SafeAreaView>
//         )
//     }
// }










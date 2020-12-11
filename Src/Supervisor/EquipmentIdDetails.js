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
            EquipId: "",
            DummyId:"BEC1020",
            showDetails:'',
            showButton:true,
            isFocus:true,
            Data: [{ JobNum: "Job Number", Job_Number: "JN-3455", ClientName: "Client Name", Client_Name: "Steve John", Mac: "Machine", Machine: "3 Phase Induction Motor", MacType: "Machine Type", Machine_Type: "Induction Motor", Segmnt: "Segment", Segment: "Single Speed", RatedPow: "Rated Power", Rated_Power: "909", RatedVol: "Rated Voltage", Rated_Voltage: "909" }]
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
                        <View style={{ width: '51%',backgroundColor: "transparent", justifyContent: 'center', }}>
                            <TextInput underlineColorAndroid={this.state.isFocus?'#D2D3D5':'#008BD0'} style={{ fontSize: hp('1.8%'), backgroundColor: "transparent", paddingTop: '2%' }}
                               onFocus={this.handleFocus}
                               onChangeText={value => {
                                    this.setState({ EquipId: value })
                                    console.log(this.state.EquipId)
                                }} />
                        </View>
                    </View>
                    <View style={{ height: '70.5%', width: '90%', backgroundColor: "transparent", marginHorizontal: '5%' }}>
                        <FlatList data={this.state.Data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    {this.state.showDetails ?
                                        <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.JobNum}</Text>
                                                </View>
                                                <View style={{  width: wp('46%'), height: hp('4.5%'), paddingBottom: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Job_Number}</Text>
                                                </View>
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

                                            <View style={{ flexDirection: "row", backgroundColor: 'transparent', height: hp('5%') }}>
                                                <View style={{ width: wp('44%'), height: hp('4.5%'), backgroundColor: "transparent", justifyContent: "center" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.RatedVol}</Text>
                                                </View>
                                                <View style={{ width: wp('46%'), height: hp('4.5%'),  borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                                    <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>{item.Rated_Voltage}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        : null}

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
//             EquipId: "",
//             Data: [{ JobNum: "Job Number", Job_Number: "JN-3455", ClientName: "Client Name", Client_Name: "Steve John", Mac: "Machine", Machine: "3 Phase Induction Motor", MacType: "Machine Type", Machine_Type: "Induction Motor", Segmnt: "Segment", Segment: "Single Speed", RatedPow: "Rated Power", Rated_Power: "909", RatedVol: "Rated Voltage", Rated_Voltage: "909" }]
//         }
//     }

//     validates = () => {

//         if (this.state.EquipId == "") {


//             showMessage({
//                 message:"Please enter Equipment id",
//                  type:"info",
//                   backgroundColor: "black",
//                  position:(0,0,100,100),
//                  hideStatusBar:false
//               });
//         }
//         else {

//             this.props.navigation.navigate("Technicians")

//         }

//     }


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
//                                             </View>
//                                         </View>

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

//                                         <View style={{ flexDirection: "row", }}>
//                                             <View style={{ width: wp('44%'), height: hp('5%'), backgroundColor: "transparent", justifyContent: "center" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Segmnt}</Text>
//                                             </View>
//                                             <View style={{  width: wp('46%'), height: hp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start" }}>
//                                                 <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>{item.Segment}</Text>
//                                             </View>
//                                         </View>

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
// }
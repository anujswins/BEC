import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Icon,
    search,
    FlatList,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { SearchBar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { AppStorage } from '../utils/AppStorage';
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

export default class TeamMember_Technician extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            assignedJobId:'',
            Data: []
        }
    }
componentDidMount=async()=>{
    // let token = await AppStorage.getToken();

    var assignedJobId= await AppStorage.getAssignedJobId()
    console.log("Assignedv job ID%%%%%%%%%%%%%%%%",assignedJobId)
    this.state.assignedJobId=assignedJobId
    
this.GetTeamMembers();


}


toggleLoader = (val) => {
    this.setState(({isLoading: val}));
};


GetTeamMembers = async () => {
    console.log("inside team member");
    // let token = await AppStorage.getToken();

    try {
        this.toggleLoader(true);
        console.log("inside try block");



        var response = await AppStorage.getLoginResponse();
        console.log("userId", response.userResponse.UserId);
var userId= response.userResponse.UserId
        let json_response = await AuthService.GetTechnicianTeamMember(this.state.assignedJobId,userId,1,40,"createdOn",true,true);

            

      
      console.log('team member response', json_response.data);

        this.setState({
Data:json_response.data.data.jobActiveMainResponse.JobTechnicianTeamMembersList
        });
        //  Alert.alert('team member response',json_response.data.StatusCode);

        // mainData=json_response.data.Permissions;

        // if (json_response.data.StatusCode === 200) {
        //     // Alert.alert("data get successfully ");
        //     //  console.log('response condition+++++++++', json_response.data.data.jobsMainResponse);
        //     this.state.orderData=json_response.data.data.jobsMainResponse.jobResponse;
        //      console.log('cht_list==========',this.state.orderData);
        //     // this.GetData(myrespo);

        // }

    } catch (e) {

         Alert.alert(e.response.data);
        console.log('GetAllRecords catch', e.response);
    } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally print hua');
    }

};
    render() {
        const {isLoading} = this.state;
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ffffff' }}>
                <StatusBar  
     backgroundColor = "#008BD0"  
     barStyle = "#ffffff"   
   /> 
     <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                    }}/>
                <View style={{height:'9%', width:'100%', backgroundColor:"#008BD0"}}>
                <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false} notification={true}/>
               </View>
               <View style={{height:'82%', width:'100%', backgroundColor:'transparent'}}>
               <View style={{ height: '9%', width: '100%', backgroundColor: "#E6F7FF", justifyContent: "center", alignItems: "flex-start", paddingLeft: '6%' }}>
                    <Text style={{ fontSize: hp('2.6%'), fontWeight: "bold", color: "#008AD2", backgroundColor:'transparent', width:'50%' }}>
                        Team Members
                    </Text>
                </View>
                
                <View style={{ flexDirection: "row", width: '100%', height: '9%', backgroundColor: "#008AD2" }}>

                    <View style={{ height: '100%', width: '50%', justifyContent: "center", alignItems: "flex-start", paddingLeft: '11%', backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.9%'), color: "#FBFBFB" }}>
                            Name
                    </Text>
                    </View>
                    <View style={{ height: '100%', width: '50%', justifyContent: "center", alignItems: "flex-start", paddingLeft: '11%', backgroundColor: "transparent" }}>
                        <Text style={{ fontSize: hp('1.9%'), color: "#FBFBFB" }}>
                            Hours
                    </Text>
                    </View>
                </View>
                <View style={{ height:'82%', width: '100%', backgroundColor: 'transparent', }}>
                    <FlatList 
                    data={this.state.Data}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", height:hp('6%'),width:wp('90%'),borderBottomWidth: 1, borderBottomColor: "#D2D3D5", marginHorizontal: wp('5%'), backgroundColor:"transparent" }}>
                                    <View style={{ width: wp('45%'), height: hp('5.6%'), backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
                                        <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>
                                            {item.UserName}
                                        </Text>
                                    </View>
                                    <View style={{ width:wp('45%'), height: hp('5.6%'), backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '16%'}}>
                                        <Text style={{ fontSize: hp('1.8%'), color: "#333333" }}>
                                            {item.Hours}
                                        </Text>
                                    </View>
                                </View>
                        )}>

                    </FlatList>
                </View>
               </View>
                
               

                    

                
                

                <View style={{height:'9%', width:'100%', backgroundColor:"#008BD0",}}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
                </View>
            </View>
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
//     Icon,
//     search,
//     FlatList,
//     Image,
//     TouchableOpacity
// } from 'react-native';

// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { SearchBar } from 'react-native-elements';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width

// export default class TeamMember_Technician extends Component {
//     constructor() {
//         super();
//         this.state = {
//             Data: [{ TeamMemberName: "James Smith", Hours: "5" },
//             { TeamMemberName: "Maria Garcia", Hours: "6" },
//             { TeamMemberName: "Jackson D.", Hours: "7" },
//             { TeamMemberName: "Daniel Gracia", Hours: "6" },
//             { TeamMemberName: "Joseph M.", Hours: "8" },
//             { TeamMemberName: "Daniel K.", Hours: "10" },
//             { TeamMemberName: "Maria Garcia", Hours: "8" },
//             { TeamMemberName: "Andrew Smith", Hours: "5" },
//             { TeamMemberName: "Daniel Gracia", Hours: "4" },
//             { TeamMemberName: "Joseph M.", Hours: "5" },
//             { TeamMemberName: "Joseph M.", Hours: "5" },
//             { TeamMemberName: "Joseph M.", Hours: "5" }],
//         }
//     }

//     render() {
        
//         return (
//             <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ffffff' }}>
//                 <StatusBar  
//      backgroundColor = "#008BD0"  
//      barStyle = "#ffffff"   
//    /> 
//                 <View style={{height:'9%', width:'100%', backgroundColor:"#008BD0"}}>
//                <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false}/>
//                </View>
//                <View style={{height:'82%', width:'100%', backgroundColor:'transparent'}}>
//                <View style={{ height: '9%', width: '100%', backgroundColor: "#E6F7FF", justifyContent: "center", alignItems: "flex-start", paddingLeft: '6%' }}>
//                     <Text style={{ fontSize: hp('2.6%'), fontWeight: "bold", color: "#008AD2", backgroundColor:'transparent', width:'50%' }}>
//                         Team Members
//                     </Text>
//                 </View>
                
//                 <View style={{ flexDirection: "row", width: '100%', height: '9%', backgroundColor: "#008AD2" }}>

//                     <View style={{ height: '100%', width: '50%', justifyContent: "center", alignItems: "flex-start", paddingLeft: '11%', backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('2%'), color: "#FBFBFB" }}>
//                             Name
//                     </Text>
//                     </View>
//                     <View style={{ height: '100%', width: '50%', justifyContent: "center", alignItems: "flex-start", paddingLeft: '11%', backgroundColor: "transparent" }}>
//                         <Text style={{ fontSize: hp('2%'), color: "#FBFBFB" }}>
//                             Hours
//                     </Text>
//                     </View>
//                 </View>
//                 <View style={{ height:'82%', width: '100%', backgroundColor: 'transparent', }}>
//                     <FlatList data={this.state.Data}
//                         keyExtractor={(item,index)=>index.toString()}
//                         renderItem={({ item }) => (
//                                 <View style={{ flexDirection: "row", height:hp('6%'),width:wp('90%'),borderBottomWidth: 1, borderBottomColor: "#D2D3D5", marginHorizontal: wp('5%'), backgroundColor:"transparent" }}>
//                                     <View style={{ width: wp('45%'), height: hp('5.6%'), backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '5%' }}>
//                                         <Text style={{ fontSize: hp('2%'), color: "#333333" }}>
//                                             {item.TeamMemberName}
//                                         </Text>
//                                     </View>
//                                     <View style={{ width:wp('45%'), height: hp('5.6%'), backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start", paddingLeft: '16%'}}>
//                                         <Text style={{ fontSize: hp('2%'), color: "#333333" }}>
//                                             {item.Hours}
//                                         </Text>
//                                     </View>
//                                 </View>
//                         )}>

//                     </FlatList>
//                 </View>
//                </View>
                
               

                    

                
                

//                 <View style={{height:'9%', width:'100%', backgroundColor:"#008BD0",}}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//                 </View>
//             </View>
//         )
//     }
// }

// // import React, { Component } from 'react';
// // import {
// //     SafeAreaView,
// //     StyleSheet,
// //     ScrollView,
// //     View,
// //     Text,
// //     StatusBar,
// //     Dimensions,
// //     Icon,
// //     search,
// //     FlatList,
// //     Image,
// //     TouchableOpacity
// // } from 'react-native';

// // import {
// //     Header,
// //     LearnMoreLinks,
// //     Colors,
// //     DebugInstructions,
// //     ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';
// // import DrawerHeader from "../CommonComponents/DrawerHeader"
// // import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// // import { SearchBar } from 'react-native-elements';
// // import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// // const height = Dimensions.get("screen").height
// // const width = Dimensions.get("screen").width

// // export default class TeamMember extends Component {
// //     constructor() {
// //         super();
// //         this.state = {
// //             Data: [{ TeamMemberName: "James Smith", Hours: "5" },
// //             { TeamMemberName: "Maria Garcia", Hours: "6" },
// //             { TeamMemberName: "Jackson D.", Hours: "7" },
// //             { TeamMemberName: "Daniel Gracia", Hours: "6" },
// //             { TeamMemberName: "Joseph M.", Hours: "8" },
// //             { TeamMemberName: "Daniel K.", Hours: "10" },
// //             { TeamMemberName: "Maria Garcia", Hours: "8" },
// //             { TeamMemberName: "Andrew Smith", Hours: "5" },
// //             { TeamMemberName: "Daniel Gracia", Hours: "4" },
// //             { TeamMemberName: "Joseph M.", Hours: "5" },
// //             { TeamMemberName: "Joseph M.", Hours: "5" },
// //             { TeamMemberName: "Joseph M.", Hours: "5" }],
// //         }
// //     }

// //     render() {
        
// //         return (
// //             <View style={{ flex: 1, height: hp('100%'), width: wp('100%'), backgroundColor: 'transparent' }}>
// //                 <StatusBar  
// //      backgroundColor = "#008BD0"  
// //      barStyle = "#ffffff"   
// //    /> 
// //                 <View style={{height:hp('9%'), width:wp('100%'), backgroundColor:"transparent"}}>
// //                <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false}/>
// //                </View>
// //                 <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: "#E6F7FF", justifyContent: "center", alignItems: "flex-start", paddingLeft: width * 0.06 }}>
// //                     <Text style={{ fontSize: 22, fontWeight: "bold", color: "#008AD2" }}>
// //                         Team Members
// //                     </Text>
// //                 </View>
// //                 {/* <View style={{ height: height * 0.06, width: width, backgroundColor: "#FFFFFF" }} /> */}

// //                 <View style={{ flexDirection: "row", width: wp('100%'), height: hp('7%'), backgroundColor: "#008AD2" }}>

// //                     <View style={{ height: hp('7%'), width: wp('50%'), justifyContent: "center", alignItems: "flex-start", paddingLeft: wp('11%'), backgroundColor: "transparent" }}>
// //                         <Text style={{ fontSize: hp('2.1%'), color: "#FBFBFB" }}>
// //                             Name
// //                     </Text>
// //                     </View>
// //                     <View style={{ height: hp('7%'), width: wp('50%'), justifyContent: "center", alignItems: "flex-start", paddingLeft: wp('11%'), backgroundColor: "transparent" }}>
// //                         <Text style={{ fontSize: hp('2.1%'), color: "#FBFBFB" }}>
// //                             Hours
// //                     </Text>
// //                     </View>
// //                 </View>

                
// //                 <View style={{ height: hp('63.9%'), width: wp('100%'), backgroundColor: "#FBFBFB", }}>
// //                     <FlatList data={this.state.Data}
// //                         keyExtractor={(item,index)=>index.toString()}
// //                         renderItem={({ item }) => (
// //                                 <View style={{ flexDirection: "row", height:hp('6%'),width:wp('90%'),borderBottomWidth: 1, borderBottomColor: "#D2D3D5", marginHorizontal: wp('5%'), backgroundColor:"transparent" }}>
// //                                     <View style={{ width: wp('48%'), height: hp('5.6%'), backgroundColor: "#FBFBFB", justifyContent: "center", alignItems: "flex-start", paddingLeft: width * 0.05 }}>
// //                                         <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>
// //                                             {item.TeamMemberName}
// //                                         </Text>
// //                                     </View>
// //                                     <View style={{ width:wp('48%'), height: hp('5.8%'), backgroundColor: "#FBFBFB", justifyContent: "center", alignItems: "flex-start", paddingLeft: width * 0.12 }}>
// //                                         <Text style={{ fontSize: hp('2.1%'), color: "#333333" }}>
// //                                             {item.Hours}
// //                                         </Text>
// //                                     </View>
// //                                 </View>
// //                         )}>

// //                     </FlatList>
// //                 </View>

// //                 <View style={{height:hp('9%'), width:wp('100%'), backgroundColor:"transparent",}}>
// //                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
// //                 </View>
// //             </View>
// //         )
// //     }
// // }
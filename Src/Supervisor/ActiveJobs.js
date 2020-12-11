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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

export default class ActiveJobs extends Component {
    static navigationOptions={
        title:'Technician',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'#008ad1'
        },
        headerTitleStyle:{
          fontWeight:'normal',
          textAlign:'left'
        }
        
        
        }
    constructor() {
        super();
        this.state = {
            Data: [{ JobNum: "JN-2345", MachineType: "3-Phase Induction motor", Machine: "Induction Motor", Segment: "Single Speed", Sub_segment: "3 Speed", Stage: "4", TotalTimeSpent: "25", TotalSpentToday: "4", TeamMember: "6" }]

        }
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar  
     backgroundColor = "#008BD0"  
     barStyle = "#ffffff"   
   /> 
            <View style={styles.StackHeader}>
            <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false} notification={true}/>
           </View>
           <View style={{height:'82%',width:'100%', backgroundColor:'transparent'}}>
            <View style={styles.activeJobs}>
                <Text style={styles.textActiveJobs}>
                    Active Jobs
                </Text>
            </View>
            <View style={styles.flatListDataContainer}>
                <FlatList data={this.state.Data}
                keyExtractor={(item,index)=>index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.viewFlatListdataContain}>
                            <View style={styles.viewJobNoContainer}>
                                <View style={styles.viewJobNo}>
                                    <Text style={styles.textJobNo}>
                                        Job Number
                                </Text>
                                </View>
                                <View style={styles.viewJobNoValue}>
                                    <Text style={styles.textJobNoValue}>
                                        {item.JobNum}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewMachinetypeContainer}>
                                <View style={styles.viewMachineType}>
                                    <Text style={styles.textMachineType}>
                                        Machine Type
                                </Text>
                                </View>
                                <View style={styles.viewMachineTypeValue}>
                                    <Text style={styles.textMachineTypeValue}>
                                        {item.MachineType}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewMachineContainer}>
                                <View style={styles.viewMachine}>
                                    <Text style={styles.textMachine}>
                                        Machine
                                </Text>
                                </View>
                                <View style={styles.viewMachineValue}>
                                    <Text style={styles.textMachineValue}>
                                        {item.Machine}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewSegmentcontainer}>
                                <View style={styles.viewSegment}>
                                    <Text style={styles.textSegment}>
                                        Segment
                                </Text>
                                </View>
                                <View style={styles.viewSegmentValue}>
                                    <Text style={styles.textSegmentValue}>
                                        {item.Segment}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewSubsegmentContainer}>
                                <View style={styles.viewSubsegment}>
                                    <Text style={styles.textSubSegment}>
                                        Sub-segment
                                </Text>
                                </View>
                                <View style={styles.viewSubsegmentValue}>
                                    <Text style={styles.textSubsegmentValue}>
                                        {item.Sub_segment}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewStageContainer}>
                                <View style={styles.viewStage}>
                                    <Text style={styles.textStage}>
                                        Stage
                                </Text>
                                </View>
                                <View style={styles.viewStageValue}>
                                    <Text style={styles.textStageValue}>
                                        {item.Stage}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewTotalTimeSpentContainer}>
                                <View style={styles.viewTotalTimeSpent}>
                                    <Text style={styles.textTotalTimeSpent}>
                                        Total Time Spent
                                </Text>
                                </View>
                                <View style={styles.viewTotalTimeSpentValue}>
                                    <Text style={styles.textTotalTimeSpentValue}>
                                        {item.TotalTimeSpent}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewTotalSpentTodayContainer}>
                                <View style={styles.viewTotalSpentToday}>
                                    <Text style={styles.textTotalSpentToday}>
                                        Total Spent Today
                                </Text>
                                </View>
                                <View style={styles.viewTotalSpentTodayValue}>
                                    <Text style={styles.textTotalSpentTodayValue}>
                                        {item.TotalSpentToday}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.viewTotalMemberContainer}>
                                <View style={styles.viewTotalMember}>
                                    <Text style={styles.textTotalMembers}>
                                        Total Member
                                </Text>
                                </View>
                                <View style={styles.viewTeamMemberBtn}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("TeamMember") }}>
                                        <Text style={styles.textTeamMemberBtn}>
                                            {item.TeamMember}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            
                            
                            


                        </View>
                    )}>

                </FlatList>

            </View>
            <View style={styles.viewAddMemberIcon}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Technicians") }}>
                    <Image style={{resizeMode:'contain',height:hp('10%'),width:wp('11.5%')}} source={require("../../assets/plus_icon.png")} />
                </TouchableOpacity>
            </View>
            {/* <View style={styles.viewAddMemberIcon}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Technicians") }}>
                    <Image source={require("../../assets/add.png")} />
                </TouchableOpacity>

            </View> */}
            </View>
            <View style={styles.BottomBarBtn}>
           <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
            </View>

        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
         flex: 1, 
         height: '100%', 
         width: '100%', 
         backgroundColor: "#FFFFFF",
        },
        StackHeader:{
            height:'9%', 
            width:'100%',
            backgroundColor:'#008BD0'
        },
    activeJobs:{ 
        height: '9%',
        width: '100%', 
        backgroundColor: "#E6F7FF", 
        justifyContent: "center", 
        alignItems: "flex-start", 
        paddingLeft: '6%' 
    },
    textActiveJobs:{ 
        fontSize: hp('2.6%'), 
        fontWeight: "bold", 
        color: "#008AD2" 
    },
    flatListDataContainer:{ 
        height: '81%',        // res
        width: '100%', 
        backgroundColor: "transparent"
    },
    viewFlatListdataContain:{
        backgroundColor: "transparent", 
        marginHorizontal: wp('3%') 
    },
    viewJobNoContainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'), 
        width: wp('94%'), 
        flexDirection: "row" 
    },
    viewJobNo:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start", 
        paddingLeft: wp('8%') 
    },
    textJobNo:{ 
        fontSize: hp('1.9%'), 
        color: "#333333", 
    },
    viewJobNoValue:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },
    textJobNoValue:{ 
        fontSize: hp('1.9%'),  
        color: "#333333" 
    },
    viewMachinetypeContainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'), 
        width: wp('94%'), 
        flexDirection: "row" 
    },
    viewMachineType:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start", 
        paddingLeft: wp('8%') 
    },
    textMachineType:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewMachineContainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'), 
        width: wp('94%'), 
        flexDirection: "row" 
    },
    viewMachineTypeValue:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },
    textMachineTypeValue:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewMachine:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start", 
        paddingLeft: wp('8%') ,
        // fontSize: hp('5%'),
    },
    textMachine:{
        fontSize: hp('1.9%'), 
        color: "#333333"
    },
    viewMachineValue:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },
    textMachineValue:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewSegmentcontainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'), 
        width: wp('94%'), 
        flexDirection: "row" 
    },
    viewSegment:{ 
        width:wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start", 
        paddingLeft: wp('8%') 
    },
    textSegment:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewSegmentValue:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },
    textSegmentValue:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewSubsegmentContainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'), 
        width: wp('94%'), 
        flexDirection: "row" 
    },
    viewSubsegment:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center",
        alignItems: "flex-start", 
        paddingLeft: wp('8%') 
    },
    textSubSegment:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewSubsegmentValue:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },textSubsegmentValue:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },viewStageContainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'), 
        width: wp('94%'), 
        flexDirection: "row" 
    },
    viewStage:{
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center",
        alignItems: "flex-start", 
        paddingLeft: wp('8%') 
    },
    textStage:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewStageValue:{ 
        width: wp('47%'), 
        height: hp('6%'), 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },
    textStageValue:{ 
        fontSize: hp('1.9%'), 
        color: "#333333" 
    },
    viewTotalTimeSpentContainer:{ 
        borderBottomWidth: 1, 
        borderBottomColor: "#D2D3D5", 
        height: hp('6%'),
         width: wp('94%'), 
         flexDirection: "row" 
        },
        viewTotalTimeSpent:{ 
            width: wp('47%'), 
            height: hp('6%'),  
            backgroundColor: "transparent", 
            justifyContent: "center", 
            alignItems: "flex-start", 
            paddingLeft: wp('8%') 
        },
        textTotalTimeSpent:{ 
            fontSize: hp('1.9%'), 
            color: "#333333" 
        },
        viewTotalTimeSpentValue:{ 
            width: wp('47%'), 
            height: hp('6%'), 
            backgroundColor: "transparent", 
            justifyContent: "center", 
            alignItems: "flex-start" 
        },
        textTotalTimeSpentValue:{ 
            fontSize: hp('1.9%'), 
            color: "#333333" 
        },
        viewTotalSpentTodayContainer:{ 
            borderBottomWidth: 1, 
            borderBottomColor: "#D2D3D5", 
            height: hp('6%'), 
            width: wp('94%'), 
            flexDirection: "row" 
        },
        viewTotalSpentToday:{ 
            width: wp('47%'), 
            height: hp('6%'), 
            backgroundColor: "transparent", 
            justifyContent: "center", 
            alignItems: "flex-start", 
            paddingLeft: wp('8%') 
        },
        textTotalSpentToday:{ 
            fontSize: hp('1.9%'), 
            color: "#333333" 
        },
        viewTotalSpentTodayValue:{ 
            width: wp('47%'), 
            height: hp('6%'), 
            backgroundColor: "transparent", 
            justifyContent: "center", 
            alignItems: "flex-start" 
        },
        textTotalSpentTodayValue:{ 
            fontSize: hp('1.9%'), 
            color: "#333333" 
        },
        viewTotalMemberContainer:{ 
            borderBottomWidth: 1, 
            borderBottomColor: "#D2D3D5", 
            height: hp('6%'),
            width: wp('94%'), 
            flexDirection: "row" 
        },
        viewTotalMember:{ 
            width: wp('47%'), 
            height: hp('6%'), 
            justifyContent: "center", 
            alignItems: "flex-start", 
            paddingLeft: wp('8%') 
        },
        textTotalMembers:{ 
            fontSize: hp('1.9%'), 
            color: "#333333" 
        },
        viewTeamMemberBtn:{ 
            width: wp('47%'), 
            height: hp('6%'), 
            justifyContent: "center", 
            alignItems: "flex-start" 
        },
        textTeamMemberBtn:{ 
            fontSize: hp('1.9%'), 
            color: "#008AD2" 
        },
        viewAddMemberIcon:{ 
            height: '10%', 
            width: '100%', 
            backgroundColor: "transparent", 
            justifyContent: "flex-end", 
            alignItems: "flex-end", 
            paddingRight: '8%', 
            paddingBottom: '4%',
        },
        BottomBarBtn:{ 
            height: '9%', 
            width: '100%', 
            backgroundColor: "#008BD0" 
        }



})


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
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width

// export default class ActiveJobs extends Component {
//     static navigationOptions={
//         title:'Technician',
//         headerTintColor:'#fff',
//         headerStyle:{
//             backgroundColor:'#008ad1'
//         },
//         headerTitleStyle:{
//           fontWeight:'normal',
//           textAlign:'left'
//         }
        
        
//         }
//     constructor() {
//         super();
//         this.state = {
//             Data: [{ JobNum: "JN-2345", MachineType: "3-Phase Induction motor", Machine: "Induction Motor", Segment: "Single Speed", Sub_segment: "3 Speed", Stage: "4", TotalTimeSpent: "25", TotalSpentToday: "4", TeamMember: "6" }]

//         }
//     }


//     render() {
//         return (
//             <SafeAreaView style={styles.container}>
//                 <StatusBar  
//      backgroundColor = "#008BD0"  
//      barStyle = "#ffffff"   
//    /> 
//             <View style={styles.StackHeader}>
//            <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false}/>
//            </View>
//             <View style={styles.activeJobs}>
//                 <Text style={styles.textActiveJobs}>
//                     Active Jobs
//                 </Text>
//             </View>
//             <View style={styles.flatListDataContainer}>
//                 <FlatList data={this.state.Data}
//                 keyExtractor={(item,index)=>index.toString()}
//                     renderItem={({ item }) => (
//                         <View style={styles.viewFlatListdataContain}>
//                             <View style={styles.viewJobNoContainer}>
//                                 <View style={styles.viewJobNo}>
//                                     <Text style={styles.textJobNo}>
//                                         Job Number
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewJobNoValue}>
//                                     <Text style={styles.textJobNoValue}>
//                                         {item.JobNum}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewMachinetypeContainer}>
//                                 <View style={styles.viewMachineType}>
//                                     <Text style={styles.textMachineType}>
//                                         Machine Type
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewMachineTypeValue}>
//                                     <Text style={styles.textMachineTypeValue}>
//                                         {item.MachineType}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewMachineContainer}>
//                                 <View style={styles.viewMachine}>
//                                     <Text style={styles.textMachine}>
//                                         Machine
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewMachineValue}>
//                                     <Text style={styles.textMachineValue}>
//                                         {item.Machine}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewSegmentcontainer}>
//                                 <View style={styles.viewSegment}>
//                                     <Text style={styles.textSegment}>
//                                         Segment
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewSegmentValue}>
//                                     <Text style={styles.textSegmentValue}>
//                                         {item.Segment}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewSubsegmentContainer}>
//                                 <View style={styles.viewSubsegment}>
//                                     <Text style={styles.textSubSegment}>
//                                         Sub-segment
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewSubsegmentValue}>
//                                     <Text style={styles.textSubsegmentValue}>
//                                         {item.Sub_segment}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewStageContainer}>
//                                 <View style={styles.viewStage}>
//                                     <Text style={styles.textStage}>
//                                         Stage
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewStageValue}>
//                                     <Text style={styles.textStageValue}>
//                                         {item.Stage}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewTotalTimeSpentContainer}>
//                                 <View style={styles.viewTotalTimeSpent}>
//                                     <Text style={styles.textTotalTimeSpent}>
//                                         Total Time Spent
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewTotalTimeSpentValue}>
//                                     <Text style={styles.textTotalTimeSpentValue}>
//                                         {item.TotalTimeSpent}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewTotalSpentTodayContainer}>
//                                 <View style={styles.viewTotalSpentToday}>
//                                     <Text style={styles.textTotalSpentToday}>
//                                         Total Spent Today
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewTotalSpentTodayValue}>
//                                     <Text style={styles.textTotalSpentTodayValue}>
//                                         {item.TotalSpentToday}
//                                     </Text>
//                                 </View>
//                             </View>

//                             <View style={styles.viewTotalMemberContainer}>
//                                 <View style={styles.viewTotalMember}>
//                                     <Text style={styles.textTotalMembers}>
//                                         Total Member
//                                 </Text>
//                                 </View>
//                                 <View style={styles.viewTeamMemberBtn}>
//                                     <TouchableOpacity onPress={() => { this.props.navigation.navigate("TeamMember") }}>
//                                         <Text style={styles.textTeamMemberBtn}>
//                                             {item.TeamMember}
//                                         </Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
                            
                            


//                         </View>
//                     )}>

//                 </FlatList>

//             </View>
//             <View style={styles.viewAddMemberIcon}>
//                 <TouchableOpacity onPress={() => { this.props.navigation.navigate("Technicians") }}>
//                     <Image source={require("../../assets/add.png")} />
//                 </TouchableOpacity>

//             </View>
//             <View style={styles.BottomBarBtn}>
//            <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//             </View>

//         </SafeAreaView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//          flex: 1, 
//          height: hp('100%'), 
//          width: wp('100%'), 
//          backgroundColor: "#FFFFFF",
//         },
//     activeJobs:{ 
//         height: hp('9%'),
//         width: wp('100%'), 
//         backgroundColor: "#E6F7FF", 
//         justifyContent: "center", 
//         alignItems: "flex-start", 
//         paddingLeft: wp('6%') 
//     },
//     textActiveJobs:{ 
//         fontSize: hp('3%'), 
//         fontWeight: "bold", 
//         color: "#008AD2" 
//     },
//     flatListDataContainer:{ 
//         height: hp('59.8%'),        // res
//         width: wp('100%'), 
//         backgroundColor: "transparent"
//     },
//     viewFlatListdataContain:{
//         backgroundColor: "transparent", 
//         marginHorizontal: wp('3%') 
//     },
//     viewJobNoContainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'), 
//         width: wp('94%'), 
//         flexDirection: "row" 
//     },
//     viewJobNo:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start", 
//         paddingLeft: wp('8%') 
//     },
//     textJobNo:{ 
//         fontSize: hp('2%'), 
//         color: "#333333", 
//         fontWeight: "bold" 
//     },
//     viewJobNoValue:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start" 
//     },
//     textJobNoValue:{ 
//         fontSize: hp('2%'), 
//         fontWeight: "bold", 
//         color: "#333333" 
//     },
//     viewMachinetypeContainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'), 
//         width: wp('94%'), 
//         flexDirection: "row" 
//     },
//     viewMachineType:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start", 
//         paddingLeft: wp('8%') 
//     },
//     textMachineType:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewMachineContainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'), 
//         width: wp('94%'), 
//         flexDirection: "row" 
//     },
//     viewMachineTypeValue:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start" 
//     },
//     textMachineTypeValue:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewMachine:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start", 
//         paddingLeft: wp('8%') ,
//         // fontSize: hp('5%'),
//     },
//     viewMachineValue:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start" 
//     },
//     textMachineValue:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewSegmentcontainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'), 
//         width: wp('94%'), 
//         flexDirection: "row" 
//     },
//     viewSegment:{ 
//         width:wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start", 
//         paddingLeft: wp('8%') 
//     },
//     textSegment:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewSegmentValue:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start" 
//     },
//     textSegmentValue:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewSubsegmentContainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'), 
//         width: wp('94%'), 
//         flexDirection: "row" 
//     },
//     viewSubsegment:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center",
//         alignItems: "flex-start", 
//         paddingLeft: wp('8%') 
//     },
//     textSubSegment:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewSubsegmentValue:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start" 
//     },textSubsegmentValue:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },viewStageContainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'), 
//         width: wp('94%'), 
//         flexDirection: "row" 
//     },
//     viewStage:{
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center",
//         alignItems: "flex-start", 
//         paddingLeft: wp('8%') 
//     },
//     textStage:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewStageValue:{ 
//         width: wp('47%'), 
//         height: hp('6%'), 
//         backgroundColor: "transparent", 
//         justifyContent: "center", 
//         alignItems: "flex-start" 
//     },
//     textStageValue:{ 
//         fontSize: hp('2%'), 
//         color: "#333333" 
//     },
//     viewTotalTimeSpentContainer:{ 
//         borderBottomWidth: 1, 
//         borderBottomColor: "#BDBDBD", 
//         height: hp('6%'),
//          width: wp('94%'), 
//          flexDirection: "row" 
//         },
//         viewTotalTimeSpent:{ 
//             width: wp('47%'), 
//             height: hp('6%'),  
//             backgroundColor: "transparent", 
//             justifyContent: "center", 
//             alignItems: "flex-start", 
//             paddingLeft: wp('8%') 
//         },
//         textTotalTimeSpent:{ 
//             fontSize: hp('2%'), 
//             color: "#333333" 
//         },
//         viewTotalTimeSpentValue:{ 
//             width: wp('47%'), 
//             height: hp('6%'), 
//             backgroundColor: "transparent", 
//             justifyContent: "center", 
//             alignItems: "flex-start" 
//         },
//         textTotalTimeSpentValue:{ 
//             fontSize: hp('2%'), 
//             color: "#333333" 
//         },
//         viewTotalSpentTodayContainer:{ 
//             borderBottomWidth: 1, 
//             borderBottomColor: "#BDBDBD", 
//             height: hp('6%'), 
//             width: wp('94%'), 
//             flexDirection: "row" 
//         },
//         viewTotalSpentToday:{ 
//             width: wp('47%'), 
//             height: hp('6%'), 
//             backgroundColor: "transparent", 
//             justifyContent: "center", 
//             alignItems: "flex-start", 
//             paddingLeft: wp('8%') 
//         },
//         textTotalSpentToday:{ 
//             fontSize: hp('2%'), 
//             color: "#333333" 
//         },
//         viewTotalSpentTodayValue:{ 
//             width: wp('47%'), 
//             height: hp('6%'), 
//             backgroundColor: "transparent", 
//             justifyContent: "center", 
//             alignItems: "flex-start" 
//         },
//         textTotalSpentTodayValue:{ 
//             fontSize: hp('2%'), 
//             color: "#333333" 
//         },
//         viewTotalMemberContainer:{ 
//             borderBottomWidth: 1, 
//             borderBottomColor: "#BDBDBD", 
//             height: hp('6%'),
//             width: wp('94%'), 
//             flexDirection: "row" 
//         },
//         viewTotalMember:{ 
//             width: wp('47%'), 
//             height: hp('6%'), 
//             justifyContent: "center", 
//             alignItems: "flex-start", 
//             paddingLeft: wp('8%') 
//         },
//         textTotalMembers:{ 
//             fontSize: hp('2%'), 
//             color: "#333333" 
//         },
//         viewTeamMemberBtn:{ 
//             width: wp('47%'), 
//             height: hp('6%'), 
//             justifyContent: "center", 
//             alignItems: "flex-start" 
//         },
//         textTeamMemberBtn:{ 
//             fontSize: hp('2%'), 
//             color: "#008AD2" 
//         },
//         viewAddMemberIcon:{ 
//             height: hp('10%'), 
//             width: wp('100%'), 
//             backgroundColor: "#FFFFFF", 
//             justifyContent: "flex-end", 
//             alignItems: "flex-end", 
//             paddingRight: wp('8%'), 
//             paddingBottom: hp('4%') 
//         },
//         BottomBarBtn:{ 
//             height: hp('9%'), 
//             width: wp('100%'), 
//             backgroundColor: "transparent" 
//         }



// })
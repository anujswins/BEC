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
    Image
} from 'react-native';
//import PercentageCircle from 'react-native-percentage-circle';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

export default class Equipment_Identification extends Component {
    constructor(props) {
        super();
        this.state = {
            selectId: true,
            showIdAvailable: false
        }
    }


    onPress = () => {
        this.setState({ selectId: false })
        console.log(this.state.selectId)


    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", }}>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
                <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true}/>
                </View>
                <View style={{ height: "82%", width: '100%', backgroundColor: '#FFFFFF' }}>
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
                    <View style={{height:'78%', width:'100%', backgroundColor:'transparent'}}>
                        
                    {this.state.selectId ? <View style={{ height: '40%', width: '90%', backgroundColor: "#E6F7FF", marginHorizontal:'5%', marginTop: '7%' }}>
                        <View style={{ height: '50%', width: '100%', justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", paddingTop: '7%' }}>
                            <Text style={{ fontSize: hp('2.8%'), backgroundColor:'transparent' }}>
                                Choose Job Type
                        </Text>
                        </View>
                        <View style={{ height: '50%', width: '100%', flexDirection: "row", justifyContent: "space-around", backgroundColor: "transparent" }}>
                            <View style={{ height:'48%', width:'28%', justifyContent:"center",  backgroundColor:"#008CD0", borderBottomWidth:4,borderBottomColor:"#074667" }}>
                                <TouchableOpacity onPress={() => this.onPress()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: hp('2.2'), color: "#FFFFFF", }}>In House</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{ height:'48%', width:'28%', justifyContent:"center",  backgroundColor:"#008CD0", borderBottomWidth:4,borderBottomColor:"#074667"}}>
                                <TouchableOpacity onPress={() => this.onPress()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{ fontSize: hp('2.2'), color: "#FFFFFF",textAlign:"center" }}>On Site</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>: 

<View style={{height: '40%', width: '90%', backgroundColor: "#E6F7FF", marginHorizontal:'5%', marginTop: '7%'  }}>
    
     <View style={{ height: '50%', width: '100%', justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", paddingTop: '7%' }}>
         <Text style={{ fontSize: hp('2.8%') }}>
             Machine ID available?
 </Text>
     </View>
     <View style={{ height: '50%', width: '100%', flexDirection: "row", justifyContent: "space-around", backgroundColor: "transparent"}}>
         <View style={{height:'48%', width:'28%', justifyContent:"center",  backgroundColor:"transparent", borderBottomWidth:5,borderBottomColor:"#074667"   }}>
             <TouchableOpacity onPress={() => { this.props.navigation.navigate("Equip_Id_Details") }} >
                 <View style={{ height:'100%', width: '100%', flexDirection: 'row', backgroundColor: "#015EA1", }}>
                     <View style={{ height:'100%', width:'35%',backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                         <Image source={require("../../assets/tick_icon.png")} style={{ resizeMode: "contain",height:'60%', backgroundColor:'transparent' }} />
                     </View>
                     <View style={{height:'100%', width:'65%',backgroundColor: '#008BD0', justifyContent: 'center', alignItems: 'center' }}>
                         <Text style={{ fontSize: hp('2.2%') , color: "#FFFFFF", }}>Yes</Text>
                     </View>
                 </View>
             </TouchableOpacity>
         </View>
         <View style={{height:'48%', width:'28%', justifyContent:"center",  backgroundColor:"pink", borderBottomWidth:5,borderBottomColor:"#074667"   }}>
             <TouchableOpacity onPress={() => { this.props.navigation.navigate("Equip_ID") }}>
             <View style={{ height:'100%', width: '100%', flexDirection: 'row', backgroundColor: "#015EA1", }}>
                     <View style={{  height:'100%', width:'35%',backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                         <Image source={require("../../assets/crossicon.png")} style={{ resizeMode: "contain",height:'60%', backgroundColor:'transparent' }} />
                     </View>
                     <View style={{ height:'100%', width:'65%',backgroundColor: '#008BD0', justifyContent: 'center', alignItems: 'center'  }}>
                         <Text style={{ fontSize: hp('2.2%'), color: "#FFFFFF", }}>No</Text>
                     </View>
                 </View>
             </TouchableOpacity>
         </View>
     </View>

 </View>
                    
                    }

                    </View>
                </View>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} />
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
//     Image
// } from 'react-native';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width

// export default class Equipment_Identification extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectId: true,
//             showIdAvailable: false
//         }
//     }


//     onPress = () => {
//         this.setState({ selectId: false })
//         console.log(this.state.selectId)


//     }


//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1, height: hp('100%'), width: wp('100%'), backgroundColor: "#FFFFFF", }}>
//                 <View style={{ height: hp('9%'), width: wp('100%'), backgroundColor: "transparent" }}>
//                     <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} />
//                 </View>
//                 <View style={{ height: hp('7%'), width: wp('100%'), justifyContent: "flex-start", alignItems: "center", backgroundColor: "#E6F7FF", paddingTop: hp('1%') }}>
//                     <Text style={{ fontSize: hp('2.7%'), fontWeight: "bold", }}>Stage</Text>
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
//                 <View>
//                     {this.state.selectId ? <View style={{ height: 'auto', width: wp('90%'), backgroundColor: "#E5F6FE", marginHorizontal: wp('5%'), marginTop: hp('3%') }}>
//                         <View style={{ height: hp('15%'), width: wp('90%'), justifyContent: "flex-start", alignItems: "center", backgroundColor: "#E6F7FF", paddingTop: hp('5%') }}>
//                             <Text style={{ fontSize: hp('3%') }}>
//                                 Choose Job Type
//                         </Text>
//                         </View>
//                         <View style={{ height: hp('12%'), width: wp('90%'), flexDirection: "row", justifyContent: "space-around", backgroundColor: "#E6F7FF" }}>
//                             <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
//                                 <TouchableOpacity onPress={() => this.onPress()}>
//                                     <View style={{ height: hp('7%'), width: wp('28%'), borderBottomWidth: 4, borderColor: "#004B73", backgroundColor: "#008AD2", alignItems: 'center', justifyContent: 'center' }}>
//                                         <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF", }}>In House</Text>
//                                     </View>
//                                 </TouchableOpacity>

//                             </View>
//                             <View style={{ justifyContent: "flex-start", alignItems: "flex-start", }}>
//                                 <TouchableOpacity onPress={() => this.onPress()}>
//                                     <View style={{ height: hp('7%'), width: wp('28%'), backgroundColor: "silver", borderBottomWidth: 4, borderColor: "#004B73", backgroundColor: "#008AD2", alignItems: 'center', justifyContent: 'center' }}>
//                                         <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF", }}>On Site</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                     </View> :

//                         <View style={{ height:'auto', width: wp('90%'), backgroundColor: "#E5F6FE", marginHorizontal: wp('5%'), marginTop: hp('3%') }}>
//                             <ScrollView>
//                             <View style={{ height: hp('15%'), width: wp('90%'), justifyContent: "flex-start", alignItems: "center", backgroundColor: "#E6F7FF", paddingTop: hp('5%') }}>
//                                 <Text style={{ fontSize: hp('3%') }}>
//                                     Machine ID Available?
//                         </Text>
//                             </View>
//                             <View style={{ height: hp('12%'), width: wp('90%'), flexDirection: "row", justifyContent: "space-around", backgroundColor: "#E6F7FF" }}>
//                                 <View style={{ height: hp('7%'), borderBottomWidth: 4, borderColor: "#1E3767",  }}>
//                                     <TouchableOpacity onPress={() => { this.props.navigation.navigate("Equip_Id_Details") }} style={{ flexDirection: "row" }}>
//                                         <View style={{ height: hp('7%'), width: wp('28%'), flexDirection: 'row', borderBottomWidth: 4, borderColor: "#004B73", backgroundColor: "#008BD0", alignItems: 'center', justifyContent: 'center' }}>
//                                             <View style={{ height: hp('6.1%'), width: wp('9%'), backgroundColor: '#015EA1', justifyContent: 'center', alignItems: 'center' }}>
//                                                 <Image source={require("../../assets/tick_icon.png")} style={{ height: hp('6%'), width: wp('6%'), marginHorizontal: wp('1%'), resizeMode: "contain", }} />
//                                             </View>
//                                             <View style={{ height: hp('6%'), width: wp('19%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
//                                                 <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF", }}>Yes</Text>
//                                             </View>
//                                         </View>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={{height: hp('7%'), borderBottomWidth: 4, borderColor: "#1E3767",  }}>
//                                     <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { this.props.navigation.navigate("Equip_ID") }}>
//                                     <View style={{ height: hp('7%'), width: wp('28%'), flexDirection: 'row', borderBottomWidth: 4, borderColor: "#004B73", backgroundColor: "#008BD0", alignItems: 'center', justifyContent: 'center' }}>
//                                             <View style={{ height: hp('6.1%'), width: wp('9%'), backgroundColor: '#015EA1', justifyContent: 'center', alignItems: 'center' }}>
//                                                 <Image source={require("../../assets/crossicon.png")} style={{ height: hp('6%'), width: wp('6%'), marginHorizontal: wp('1%'), resizeMode: "contain", }} />
//                                             </View>
//                                             <View style={{ height: hp('6%'), width: wp('19%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
//                                                 <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF", }}>No</Text>
//                                             </View>
//                                         </View>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                             </ScrollView>
//                         </View>

//                     }
//                 </View>
//                 <View style={{ height: hp('9%'), width: wp('100%'), backgroundColor: "pink", marginTop: hp('33.5%') }}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate} />
//                 </View>
//             </SafeAreaView>
//         )
//     }
// }
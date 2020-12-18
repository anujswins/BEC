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
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

export default class EquipPract extends Component {
    constructor(props) {
        super(props);
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
                    {/* <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} /> */}
                </View>
                <View style={{ height: "82%", width: '100%', backgroundColor: '#FFFFFF' }}>
                    <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
                        <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Stage</Text>
                        </View>
                        <View style={{ height: '60%', width: '100%', flexDirection: 'row', backgroundColor: 'transparent' }}>
                            <View style={{ height: '1%', width: '16%', backgroundColor: '#D0D0D0', marginTop: '5%' }} />
                            <View style={{ height: '60%', width: '12%', borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008BD0' }}>
                                <Text style={{ fontSize: 20, color:'#ffffff' }}>1</Text>
                            </View>
                            <View style={{ height: '1%', width: '16%', backgroundColor: '#D0D0D0', marginTop: '5%' }} />
                            <View style={{ height: '60%', width: '12%', borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0' }}>
                                <Text style={{ fontSize: 20 }}>2</Text>
                            </View>
                            <View style={{ height: '1%', width: '16%', backgroundColor: '#D0D0D0', marginTop: '5%' }} />
                            <View style={{ height: '60%', width: '12%', borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0' }}>
                                <Text style={{ fontSize: 20 }}>3</Text>
                            </View>
                            <View style={{ height: '1%', width: '16%', backgroundColor: '#D0D0D0', marginTop: '5%' }} />
                        </View>
                    </View>
                    <View style={{height:'78%', width:'100%', backgroundColor:'transparent'}}>
                        
                    {this.state.selectId ? <View style={{ height: '40%', width: '90%', backgroundColor: "#E6F7FF", marginHorizontal:'5%', marginTop: '7%' }}>
                        <View style={{ height: '50%', width: '100%', justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", paddingTop: '5%' }}>
                            <Text style={{ fontSize: 22 }}>
                                Choose Job Type
                        </Text>
                        </View>
                        <View style={{ height: '50%', width: '100%', flexDirection: "row", justifyContent: "space-around", backgroundColor: "transparent" }}>
                            <View style={{ height:'50%', width:'30%', justifyContent:"center",  backgroundColor:"#008CD0", borderBottomWidth:4,borderBottomColor:"#074667" }}>
                                <TouchableOpacity onPress={() => this.onPress()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, color: "#FFFFFF", }}>In House</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{ height:'50%', width:'30%', justifyContent:"center",  backgroundColor:"#008CD0", borderBottomWidth:4,borderBottomColor:"#074667"}}>
                                <TouchableOpacity onPress={() => this.onPress()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{ fontSize: 20, color: "#FFFFFF",textAlign:"center" }}>On Site</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>: null}

                    </View>
                </View>

                {/*<View style={{ flexDirection: "row", alignSelf: "flex-start", height: '8%', width: '100%', backgroundColor: "#E6F7FF" }}>
                    <View style={{ width:'17.5%', height: '0.5%', backgroundColor: "transparent", paddingTop: '4%', borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
                    <View style={{ height: '70%', width: '10%', backgroundColor: "#008AD2",
                     borderRadius:105, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{ fontSize: 20, color: "#FFFFFF" }}>1</Text>
                    </View>
                    <View style={{ width:'17.5%', height: '0.5%', backgroundColor: "#E6F7FF", paddingTop: '4%', borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />

                    <View style={{ height: '70%', width: '10%', backgroundColor: "#D0CFCD",
                     borderRadius:105, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{ fontSize: 20 , color: "#333333" }}>2</Text>
                    </View>
                    <View style={{ width: '17.5%', height: '0.5%', backgroundColor: "#E6F7FF", paddingTop: '4%', borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
                    <View style={{ height: '70%', width: '10%', backgroundColor: "#D0CFCD",
                     borderRadius:105, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{ fontSize: hp('2.5%'), color: "#333333" }}>3</Text>
                    </View>
                    <View style={{ width: '17.5%', height: '0.5%', backgroundColor: "#E6F7FF", paddingTop: '4%', borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
                </View> */}

                {/* <View>
                    {this.state.selectId ? <View style={{ height: '50%', width: '90%', backgroundColor: "#E6F7FF", marginHorizontal:'5%', marginTop: '3%' }}>
                        <View style={{ height: '50%', width: '100%', justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", paddingTop: '5%' }}>
                            <Text style={{ fontSize: 22 }}>
                                Choose Job Type
                        </Text>
                        </View>
                        <View style={{ height: '50%', width: '100%', flexDirection: "row", justifyContent: "space-around", backgroundColor: "transparent" }}>
                            <View style={{ height:'50%', width:'30%', justifyContent:"center",  backgroundColor:"#008CD0", borderBottomWidth:4,borderBottomColor:"#074667" }}>
                                <TouchableOpacity onPress={() => this.onPress()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, color: "#FFFFFF", }}>In House</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{ height:'50%', width:'30%', justifyContent:"center",  backgroundColor:"#008CD0", borderBottomWidth:4,borderBottomColor:"#074667"}}>
                                <TouchableOpacity onPress={() => this.onPress()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{ fontSize: 20, color: "#FFFFFF",textAlign:"center" }}>On Site</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View> :

                        // <View style={{ height:'auto', width: '90%', backgroundColor: "#E5F6FE", marginHorizontal: wp('5%'), marginTop: hp('3%') }}>
                        //     <ScrollView>
                        //     <View style={{ height: hp('15%'), width: wp('90%'), justifyContent: "flex-start", alignItems: "center", backgroundColor: "#E6F7FF", paddingTop: hp('5%') }}>
                        //         <Text style={{ fontSize: hp('3%') }}>
                        //             Machine ID Available?
                        // </Text>
                        //     </View>
                        //     <View style={{ height: hp('12%'), width: wp('90%'), flexDirection: "row", justifyContent: "space-around", backgroundColor: "#E6F7FF" }}>
                        //         <View style={{ height: hp('7%'), borderBottomWidth: 4, borderColor: "#1E3767",  }}>
                        //             <TouchableOpacity onPress={() => { this.props.navigation.navigate("Equip_Id_Details") }} style={{ flexDirection: "row" }}>
                        //                 <View style={{ height: hp('7%'), width: wp('28%'), flexDirection: 'row', borderBottomWidth: 4, borderColor: "#004B73", backgroundColor: "#008BD0", alignItems: 'center', justifyContent: 'center' }}>
                        //                     <View style={{ height: hp('6.1%'), width: wp('9%'), backgroundColor: '#015EA1', justifyContent: 'center', alignItems: 'center' }}>
                        //                         <Image source={require("../../assets/tick_icon.png")} style={{ height: hp('6%'), width: wp('6%'), marginHorizontal: wp('1%'), resizeMode: "contain", }} />
                        //                     </View>
                        //                     <View style={{ height: hp('6%'), width: wp('19%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                        //                         <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF", }}>Yes</Text>
                        //                     </View>
                        //                 </View>
                        //             </TouchableOpacity>
                        //         </View>
                        //         <View style={{height: hp('7%'), borderBottomWidth: 4, borderColor: "#1E3767",  }}>
                        //             <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { this.props.navigation.navigate("Equip_ID") }}>
                        //             <View style={{ height: hp('7%'), width: wp('28%'), flexDirection: 'row', borderBottomWidth: 4, borderColor: "#004B73", backgroundColor: "#008BD0", alignItems: 'center', justifyContent: 'center' }}>
                        //                     <View style={{ height: hp('6.1%'), width: wp('9%'), backgroundColor: '#015EA1', justifyContent: 'center', alignItems: 'center' }}>
                        //                         <Image source={require("../../assets/crossicon.png")} style={{ height: hp('6%'), width: wp('6%'), marginHorizontal: wp('1%'), resizeMode: "contain", }} />
                        //                     </View>
                        //                     <View style={{ height: hp('6%'), width: wp('19%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                        //                         <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF", }}>No</Text>
                        //                     </View>
                        //                 </View>
                        //             </TouchableOpacity>
                        //         </View>
                        //     </View>
                        //     </ScrollView>
                        // </View>
                        null

                    }
                </View> */}
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    {/* <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} /> */}
                </View>
            </SafeAreaView>
        )
    }
}
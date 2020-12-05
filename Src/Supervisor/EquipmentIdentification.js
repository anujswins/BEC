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

import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStorage, key } from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import { number } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

export default class Equipment_Identification extends Component {
    constructor(props) {
        super(props);
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
            response_JsonId:[],
            ChooseBtnData:[]

           
        }
    }
   

    getChooseJobTypesBtns = async () => {


        try {
            this.toggleLoader(true);
            var json_response_chooseJobType = await AuthService.GetChooseJobType(this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
            console.log('GetAllRecords', json_response_chooseJobType.data.data.jobTypeMainRespone.jobTypeResponse)

            if (json_response_chooseJobType.data.StatusCode == 200) {

           //     this.ChooseJobTypeStorage(json_response_chooseJobType)

                 this.state.ChooseBtnData = json_response_chooseJobType.data.data.jobTypeMainRespone.jobTypeResponse
console.log("*********",this.state.ChooseBtnData)
                for (i = 0; i <  this.state.ChooseBtnData.length; i++) {
                    this.state.response_Json.push( this.state.ChooseBtnData[i].JobType)
                    this.state.response_JsonId.push( this.state.ChooseBtnData[i].JobTypeId)

                }
                console.log("****response_Json*****", this.state.response_Json)
                console.log("****response_JsonID######", this.state.response_JsonId)
            }

        } catch (e) {


            console.log('GetAllRecords catch', e.json_response_chooseJobType);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally ');
        }
    }
    componentDidMount = () => {
        this.getChooseJobTypesBtns();
    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };


     // --------------AppStorage_ChooseJobType----------------------------
     ChooseJobTypeStorage = (value_Respo) => {
console.log("**********",value_Respo)
        AppStorage.saveKey(key.CHOOSE_JOB_TYPE, JSON.stringify(value_Respo)).then(() => {
            console.log("json_response_chooseJobType.data**", value_Respo)
        });


    };

    // -----------InHouse-Onsite_Btn-------------------
    onPress = (value) => {
        if(value){
      
            this.ChooseJobTypeStorage(value)
            this.setState({ selectId: false })
        }
       

    }

    // ---------------Machine Id Buttons------------------

    machineIdAvailable = (value) => {
        console.log("value", value)
        if (value == false) {
            this.props.navigation.navigate("Equip_ID")

        } else if (value == true) {
            this.props.navigation.navigate("Equip_Id_Details")
        }



        // 
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
                            <Text style={{ fontSize: hp('2.2%'), color: '#fff', }}>Equipment Identification</Text>

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
                    <View style={{ height: '78%', width: '100%', backgroundColor: 'transparent' }}>

                        {this.state.selectId ? <View style={{ height: 'auto', width: '90%', backgroundColor: "#E6F7FF", marginHorizontal: '5%', marginTop: '7%' }}>
                            <View style={{ height: '28%', width: '100%', justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", paddingTop: '7%' }}>
                                <Text style={{ fontSize: hp('2.8%'), backgroundColor: 'transparent' }}>
                                    Choose Job Type
                        </Text>
                            </View>
                            <View style={{ height: 'auto', width: '100%', backgroundColor: "transparent" }}>
                            <FlatList data={this.state.ChooseBtnData}   
                            keyExtractor={(item,index)=>index.toString()}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent:'space-between',marginLeft:'10%',marginRight:'10%',}}
                         renderItem={({item})=>(
                             <View style={{backgroundColor:'transparent',}}>
                                <TouchableOpacity activeOpacity={0.6} style={{height:hp('5.6%'),width:wp('25%'),alignItems:'center',justifyContent:'center',backgroundColor: '#008CD0', borderBottomWidth: 5, borderBottomColor: "#074667",marginTop:hp('5%') }} 
                                 onPress={() => this.onPress(item)}>  
                                    <Text style={{fontSize: hp('2'),color: "#FFFFFF", }}>
                                         {item.JobType}
                                     </Text>  
                                     </TouchableOpacity>
                               
                             </View>
                           
                             
                            )}>
                            </FlatList> 
                        
</View>
                        </View> :

                            <View style={{ height: '40%', width: '90%', backgroundColor: "#E6F7FF", marginHorizontal: '5%', marginTop: '7%' }}>

                                <View style={{ height: '50%', width: '100%', justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", paddingTop: '7%' }}>
                                    <Text style={{ fontSize: hp('2.8%') }}>
                                        Machine ID available?
 </Text>
                                </View>
                                <View style={{ height: '50%', width: '100%', flexDirection: "row", justifyContent: "space-around", backgroundColor: "transparent" }}>
                                    <View style={{ height: '48%', width: '28%', justifyContent: "center", backgroundColor: "transparent", borderBottomWidth: 5, borderBottomColor: "#074667" }}>
                                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.machineIdAvailable(true)} >
                                            <View style={{ height: '100%', width: '100%', flexDirection: 'row', backgroundColor: "#015EA1", }}>
                                                <View style={{ height: '100%', width: '35%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image source={require("../../assets/tick_icon.png")} style={{ resizeMode: "contain", height: '60%', backgroundColor: 'transparent' }} />
                                                </View>
                                                <View style={{ height: '100%', width: '65%', backgroundColor: '#008BD0', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: hp('2.2%'), color: "#FFFFFF", }}>Yes</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ height: '48%', width: '28%', justifyContent: "center", backgroundColor: "pink", borderBottomWidth: 5, borderBottomColor: "#074667" }}>
                                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.machineIdAvailable(false)}>
                                            <View style={{ height: '100%', width: '100%', flexDirection: 'row', backgroundColor: "#015EA1", }}>
                                                <View style={{ height: '100%', width: '35%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image source={require("../../assets/crossicon.png")} style={{ resizeMode: "contain", height: '60%', backgroundColor: 'transparent' }} />
                                                </View>
                                                <View style={{ height: '100%', width: '65%', backgroundColor: '#008BD0', justifyContent: 'center', alignItems: 'center' }}>
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
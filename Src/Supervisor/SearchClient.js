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
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { Picker } from '@react-native-community/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { AppStorage, key } from '../utils/AppStorage';
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
let data = [{ ClientName: "Adams Abgill", ClientCode: "CN-18976", ClientMob: "9637849328", ClientMail: "adamsabgrill@gmail.com" },
{ ClientName: "James S.", ClientCode: "CN-18977", ClientMob: "9637843238", ClientMail: "james@gmail.com" },
{ ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" },
{ ClientName: "Rakesh", ClientCode: "CN-18979", ClientMob: "9637849758", ClientMail: "rakesh@gmail.com" },
{ ClientName: "Daniel Gracia", ClientCode: "CN-18926", ClientMob: "6378493287", ClientMail: "danielgracia@gmail.com" },
{ ClientName: "Jackson D.", ClientCode: "CN-18956", ClientMob: "96378493287", ClientMail: "jackson@gmail.com" },
{ ClientName: "Alex Ross", ClientCode: "CN-18989", ClientMob: "9637849228", ClientMail: "alexross@gmail.com" },
{ ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" },
{ ClientName: "Alex Ross", ClientCode: "CN-18989", ClientMob: "9637849228", ClientMail: "alexross@gmail.com" },
{ ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" }]

export default class SearchClient extends Component {
    fil
    constructor() {
        super();
        this.state = {
            isLoading: false,
            Data: [],
            SelectedClient: '',
            ClientName1: '',
            clientCodeData1: '',
            ClientMob1: '',
            ClientMail1: '',
            name: '',
            clientId: '',

            searchText: '',
            page: 0,
            limit: 0,
            orderBy1: "CreatedOn",
            orderByDescending: true,
            allRecords: true

        }
    }
    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            Data: data.filter(x => (x.ClientName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.ClientCode).toString().toLowerCase().indexOf(searchText) > -1)
        })
    }

    onPress = (item) => {
        this.props.navigation.navigate("Equip_ID", {
            clientNameData: item.Name,
            clientCodeData: item.ClientCode, ClientMob: item.PhoneNumber, ClientMail: item.Email,Client_Record:item
        })
        console.log("********************", item)
    }

    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

    SearchClientRec = async () => {

        try {
            this.toggleLoader(true);
           
            let json_response = await AuthService.SuperviseGetSearchClientRecord(this.state.searchText,this.state.page,this.state.limit,
                this.state.orderBy1,this.state.orderByDescending,this.state.allRecords);

                let Json_respo=json_response.data.data.clientMainResponse.clientResponse


          
            if (json_response.data.StatusCode == 200) {
                this.state.Data = Json_respo
               
                AppStorage.saveKey(key.SEARCH_CLIENT_RECORDS, JSON.stringify(Json_respo)).then(() => {
                    console.log("=====AppStorage=========",Json_respo)
                });




            }

           

        } catch (e) {

            Alert.alert(e.json_response);
            console.log('GetAllRecords catch', e.json_response);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally');
        }

    }

    componentDidMount = async () => {
        this.SearchClientRec();
    };
    render() {
        const { isLoading } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "transparent" }}>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
                    <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} />
                </View>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }} />
                <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
                    <View style={{ height: '9%', width: '86%', marginHorizontal: '7%', backgroundColor: "transparent" }}>
                        <TextInput underlineColorAndroid={'#999999'} placeholder="Search Client" style={{ fontSize: hp('2.2%'), height: hp('6.5%'), paddingTop: hp('1%'), backgroundColor: "transparent", }}
                            onChangeText={(text) => this.updateSearch(text)} />

                    </View>
                    <View style={{ height: '9%', width: '100%', flexDirection: "row", backgroundColor: "#008BD0" }}>
                        <View style={{ height: '100%', width: '50%', alignItems: "flex-start", justifyContent: "center", paddingLeft: '7%', backgroundColor: "transparent   " }}>
                            <Text style={{ fontSize: hp('2%'), color: "#ffffff" }}>
                                Client Name
                    </Text>
                        </View>
                        <View style={{ height: '100%', width: '50%', alignItems: "flex-start", justifyContent: "center", paddingLeft: '7%', backgroundColor: "transparent" }}>
                            <Text style={{ fontSize: hp('2%'), color: "#ffffff" }}>
                                Client Code
                    </Text>
                        </View>
                    </View>
                    <View style={{ height: '82%', width: '96%', backgroundColor: "transparent", marginHorizontal: '2%' }}>
                        <FlatList data={this.state.Data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                console.log('******item*******', item)
                                return (
                                    <TouchableOpacity onPress={() => { this.onPress(item) }}>
                                        <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>

                                            <View style={{ height: hp('6%'), width: wp('50%'), justifyContent: "center", alignItems: "flex-start", padding: wp('5%') }}>
                                                <Text style={{ fontSize: hp('2%') }}>
                                                    {item.Name}
                                                </Text>
                                            </View>
                                            <View style={{ height: hp('6%'), width: wp('50%'), justifyContent: "center", alignItems: "flex-start", padding: wp('5%') }}>
                                                <Text style={{ fontSize: hp('2%') }}>
                                                    {item.ClientCode}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>)
                            }}>
                        </FlatList>

                    </View>
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
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { Picker } from '@react-native-community/picker';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import ApiLoader from '../../Src/PopUp/ApiLoader';
// import AuthService from '../../Src/RestClient/AuthService';
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width
// let data = [{ ClientName: "Adams Abgill", ClientCode: "CN-18976", ClientMob: "9637849328", ClientMail: "adamsabgrill@gmail.com" },
// { ClientName: "James S.", ClientCode: "CN-18977", ClientMob: "9637843238", ClientMail: "james@gmail.com" },
// { ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" },
// { ClientName: "Rakesh", ClientCode: "CN-18979", ClientMob: "9637849758", ClientMail: "rakesh@gmail.com" },
// { ClientName: "Daniel Gracia", ClientCode: "CN-18926", ClientMob: "6378493287", ClientMail: "danielgracia@gmail.com" },
// { ClientName: "Jackson D.", ClientCode: "CN-18956", ClientMob: "96378493287", ClientMail: "jackson@gmail.com" },
// { ClientName: "Alex Ross", ClientCode: "CN-18989", ClientMob: "9637849228", ClientMail: "alexross@gmail.com" },
// { ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" },
// { ClientName: "Alex Ross", ClientCode: "CN-18989", ClientMob: "9637849228", ClientMail: "alexross@gmail.com" },
// { ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" }]

// export default class SearchClient extends Component {
//     fil
//     constructor() {
//         super();
//         this.state = {
//             isLoading:false,
//             Data: [],
//             SelectedClient:'',
//             ClientName1:'',
//             clientCodeData1:'',
//             ClientMob1:'',
//             ClientMail1:'',
//             name:'',
//             clientId:'',
            
//         }
//     }
//     updateSearch = (search) => {
//         let searchText = search.toLowerCase();
//         this.setState({
//             Data: data.filter(x => (x.ClientName).toString().toLowerCase().indexOf(searchText) > -1 ||
//                 (x.ClientCode).toString().toLowerCase().indexOf(searchText) > -1)
//         })
//     }

//     onPress=(item)=>{
//         this.props.navigation.navigate("Equip_ID",{clientNameData:item.Name,
//                         clientCodeData:item.ClientCode, ClientMob:item.PhoneNumber, ClientMail:item.Email}) 
//                         console.log("********************",item.Name)
//     }

//     toggleLoader = (val) => {
//         this.setState(({ isLoading: val }));
//     };

//     SearchClientRec=async()=>{

//         try {
//             this.toggleLoader(true);
//             let json_response = await AuthService.SuperviseGetSearchClientRecord(this.state.clientId);

                

//             console.log('SearchClientData', json_response.data.StatusCode);
//             console.log('SearchClientData', json_response.data.data.clientMainResponse.clientResponse);

//             if(json_response.data.StatusCode==200){
//                 console.log('*****StatusCode*******',json_response.data.StatusCode)
//               this.state.Data=  json_response.data.data.clientMainResponse.clientResponse
//               console.log('######StatusCode#######',this.state.Data)
//               console.log('######StatusCode#######',json_response.data.data.clientMainResponse.clientResponse)
//             }
           
//             // mainData=json_response.data.Permissions;

//             // if (json_response.data.StatusCode === 200) {
//             //     // Alert.alert("data get successfully ");
//             //     //  console.log('response condition+++++++++', json_response.data.data.jobsMainResponse);
//             //     this.state.orderData=json_response.data.data.jobsMainResponse.jobResponse;
//             //      console.log('cht_list==========',this.state.orderData);
//             //     // this.GetData(myrespo);

//             // }

//         } catch (e) {

//              Alert.alert(e.json_response);
//             console.log('GetAllRecords catch', e.json_response);
//         } finally {
//             this.toggleLoader(false);
//             console.log('GetAllRecords finally');
//         }

//     }

//     componentDidMount = async () => {
//         this.SearchClientRec();
//     };
//     render() {
//         const {isLoading} = this.state;
//         return (
//             <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "transparent" }}>
//                 <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
//                     <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} />
//                 </View>
//                 <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//                     }}/>
//                 <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
//                     <View style={{ height: '9%', width: '86%', marginHorizontal: '7%', backgroundColor: "transparent" }}>
//                         <TextInput underlineColorAndroid={'#999999'} placeholder="Search Client" style={{ fontSize: hp('2.2%'), height: hp('6.5%'), paddingTop: hp('1%'), backgroundColor: "transparent", }}
//                             onChangeText={(text) => this.updateSearch(text)} />
                            
//                     </View>
//                     <View style={{ height: '9%', width: '100%', flexDirection: "row", backgroundColor: "#008BD0" }}>
//                     <View style={{ height: '100%', width: '50%', alignItems: "flex-start", justifyContent: "center", paddingLeft: '7%', backgroundColor: "transparent   " }}>
//                         <Text style={{fontSize:hp('2%'), color:"#ffffff"}}>
//                             Client Name
//                     </Text>
//                     </View>
//                     <View style={{  height: '100%', width: '50%', alignItems: "flex-start", justifyContent: "center", paddingLeft: '7%', backgroundColor: "transparent" }}>
//                         <Text style={{fontSize:hp('2%'), color:"#ffffff"}}>
//                             Client Code
//                     </Text>
//                     </View>
//                 </View>
//                 <View style={{ height: '82%', width: '96%', backgroundColor: "transparent", marginHorizontal:'2%' }}>
//                     <FlatList data={this.state.Data}
//                     keyExtractor={(item,index)=>index.toString()}
//                         renderItem={({ item }) => {
//                             console.log('******item*******',item)
//                             return(
//                         <TouchableOpacity onPress={() => {this.onPress(item)}}>
//                             <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#D2D3D5",backgroundColor:'transparent' }}>

//                                 <View style={{ height:hp('6%'),width: wp('50%'), justifyContent: "center", alignItems: "flex-start", padding: wp('5%') }}>
//                                     <Text style={{fontSize:hp('2%')}}>
//                                         {item.Name}
//                                     </Text>
//                                 </View>
//                                 <View style={{ height:hp('6%'),width: wp('50%'), justifyContent: "center", alignItems: "flex-start", padding: wp('5%')  }}>
//                                     <Text style={{fontSize:hp('2%')}}>
//                                         {item.ClientCode}
//                                     </Text>
//                                 </View>
//                             </View>
//                         </TouchableOpacity>)}}>
//                     </FlatList>

//                 </View>
//                 </View>
               

                
                
//                 <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//                 </View>
//             </SafeAreaView>
//         )
//     }
// }











// import React, { Component } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     Dimensions,

//     search,
//     FlatList,
//     Image,
//     TouchableOpacity,
//     TextInput,
//     Alert
// } from 'react-native';

// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { SearchBar } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/Feather';
// import { Picker } from '@react-native-community/picker';
// import {AppStorage, key} from '../utils/AppStorage';


// // import AppButton from "../CustomComponent/ButtonComp"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Label } from 'native-base';

// import ApiLoader from '../../Src/PopUp/ApiLoader';
// import AuthService from '../../Src/RestClient/AuthService';
// // const height = Dimensions.get("screen").height
// // const width = Dimensions.get("screen").width

// // let maindata = [{ id: 0, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// // { id: 1, TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// // { id: 2, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
// // { id: 3, TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// // { id: 4, TeamMemberName: "Joseph M.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "8" },
// // { id: 5, TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// // { id: 6, TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// // { id: 7, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
// // { id: 8, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
// // { id: 9, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// // { id: 10, TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "4" },
// // { id: 11, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "3" },
// // { id: 12, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" }]
// export default class Technicians extends Component {
//     constructor() {
//         super();
//         this.state = {
//             country: 'uk',
//             search: '',
//             selectDepartment: "",
//             DataSearch: "",
//             technicianType:[],
//             Data: [],
//             SelectTechnician:"",
//             UserType:'',
//             mainData:[],
//             updatedData:[],
//             Data1:
//                 [{ TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
//                 { TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
//                 { TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
//                 { TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
//                 { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
//                 { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },],
//             Data2: [
//                 { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
//                 { TeamMemberName: "Joseph M.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
//                 { TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
//                 { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
//                 { TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Button", CompletedJobs: "4" },

//             ],
//             DataSearch: "",
//             country:'uk',
//             item:null,
//             page:0,
//             limit:10,
//             searchTerm: ''

//         }
//     }
// componentDidMount(){

// this.fetchTechnicianDepartment();
// this.fetchTechnicianDetail();


// this.setState({
//     SelectTechnician:"All Technician"
// })

// }


// fetchTechnicianDepartment = async () => {
//     console.log('inside main method');

//     try {
//          this.toggleLoader(true);
//         console.log('inside try');
//         let json_response = await AuthService.getTechnicianDepartments(0,"User Type",0,0,"CreatedOn",true,true);
// this.setState({
//     technicianType:json_response.data.data.globalCodeMainResponse.globalCodeResponse,
// })

// ob1={"GlobalCodeCategoryId": 0,
// "GlobalCodeId": 0,
// "CodeName": "All Technician",
// "GlobalCodeCategory": "User Type",
// "Description": "",
// "ParentGlobalCodeId": 0,
// "ParentGlobalCode": "",
// "IsActive": true,
// "CreatedOn": "2019-04-24T02:06:41"}

//  this.state.technicianType.splice(0,0,ob1)



//     } catch (e) {

//         //  Alert.alert(e.response.data);
//       console.log('GetAllRecords catch', e.response.data);
//     } finally {
//         this.toggleLoader(false);
//         console.log('GetAllRecords finally print hua');
//     }

// };






// fetchTechnicianDetail = async () => {


//     console.log('technicianDetail++++++++++++++++++++++');
//     try {
//          this.toggleLoader(true);

//         let json_response = await AuthService.getTechnicianDetail(this.state.page,this.state.limit,"CreatedOn",true,true);

//            console.log('Guri************************', json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse);

//         this.setState({
//             Data:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
//             mainData:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
//         })


//         // AppStorage.saveKey(key.ALL_TECHNICIAN_DETAIL,JSON.stringify(json_response.data)).then(()=>
//         // {
//         //     // Alert.alert("Data saved")

//         // }

//         // );
//          this.filterListData("All Technician");

//     } catch (e) {

//         //  Alert.alert(e.response.data);
//         // console.log('GetAllRecords catch', e.response.data);
//     } finally {
//         this.toggleLoader(false);
//         console.log('GetAllRecords finally print hua');
//     }

// };

// filterListData=(selectedValue)=>{

//     this.state.updatedData=[]

//     let tempList=this.state.Data;

// for(var i=0;i<tempList.length;i++)
// {


//     if(tempList[i].UserType===selectedValue)
//     {


//        this.state.updatedData.push(tempList[i])
//     }

//     else if(selectedValue==="All Technician")
//     {
//        this.state.updatedData.push(tempList[i])

//     }
//     else{
//         console.log("Exception ")
//     }

// }








// //


// }





// toggleLoader = (val) => {
//     this.setState(({ isLoading: val }));
// };


// searchUpdated(term) {
//     this.setState({ searchTerm: term })
//     const updateData = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))


//   }


//     updateSearch = (search) => {
//         let searchText = search.toLowerCase();

//         console.log("in update Search&&&&&&&&&&&&&&&&&",this.state.mainData.filter(search))
//         this.setState({
//         //    updateData: this.state.mainData.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
//         //         // (x.UserType).toLowerCase().indexOf(searchText) > -1 ||
//         //         //  (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
//         //         (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
//         //          (x.ActiveJobCode).toString().toLowerCase().indexOf(searchText) > -1)

// // updatedData:this.state.mainData.filter(x=>x===searchText)


//         })
//     }

//     pickerChange = (value, index) => {
//         //    this.state.Data.map((v,i)=>{
//         //        if(i===index)
//         //        {
//         //            this.setState({
//         //             TeamMemberName:v.TeamMemberName,
//         //             TechDepartment:this.state.Data[index].TechDepartment,
//         //             AssignBtn:this.state.Data[index].AssignBtn,
//         //             CompletedJobs:this.state.Data[index].CompletedJobs
//         //            })
//         //        }
//         //    })
//         this.setState({ selectDepartment: value })
//         console.log(this.state.selectDepartment)
//         this.state.Data.map((v, i) => {
//             if (index == i) {

//                 this.setState({
//                     TeamMemberName: this.state.Data[index].TeamMemberName,
//                     TechDepartment: this.state.Data[index].TechDepartment
//                 })



//             }
//         })


//     }
//     render() {
//         const { search ,isLoading} = this.state;

//         // let myUsers = this.state.technicianType.map((myValue,myIndex)=>{
//         //     return(
//         //     <Picker.Item label={myValue.UserType } value={myIndex} key={myIndex}/>
//         //     )
//         //     });
//         return (
//             <SafeAreaView style={styles.container}>
//                 <StatusBar
//                     backgroundColor="#008BD0"
//                     barStyle="#ffffff"
//                 />
//                 <View style={styles.Stackheader}>
//                 <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//                     }}/>
//                 <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false} notification={true}/>
//                 </View>
//                 <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
//                     <View style={styles.viewSearchBar}>
//                         {/* <TextInput
//                             placeholder="Search"
//                             underlineColorAndroid={'#999999'}
//                             onChangeText={(text) => { this.updateSearch(text) }}
//                             style={styles.searchbarTextInput}
//                         /> */}

// <SearchInput
//           onChangeText={(term) => { this.searchUpdated(term) }}
//           style={styles.searchInput}
//           placeholder="Type a message to search"
//           />
//                     </View>




//                    <DropDownPicker

//     items={this.state.technicianType.map(item=>
//         ({label:item.CodeName,value:item.CodeName}))}

//     //  defaultValue="All Technician"
//     defaultNull={this.state.item === null}
//     placeholder="All Technician"
//     // placeholderStyle={{fontWeight: 'bold'}}

//     containerStyle={{height: "10%"}}
//     style={{backgroundColor: '#fafafa',marginHorizontal:'4%',marginVertical: "2%"}}
//     dropDownStyle={{backgroundColor: '#fafafa',marginHorizontal:'4%',alignItems:'flex-start',justifyContent:'flex-start'}}
//     // defaultIndex={0}
//     onChangeItem={item =>{
//        this.setState({
//            SelectTechnician:item.value
//        })

//         this.filterListData(item.value)

//     }
//     }
//     dropDownMaxHeight={240}
// />









//                             {/* </View>                 */}


//                     <View style={styles.dataHeadingContainer}>

//                         <View style={styles.viewTechnicianName}>
//                             <Text style={styles.textTechnicianName}>
//                                 Tech. Name
//                         </Text>
//                         </View>
//                         <View style={styles.viewCategory}>
//                             <Text style={styles.textCategory}>
//                                 Category
//                         </Text>
//                         </View>
//                         <View style={styles.viewActiveJobs}>
//                             <Text style={styles.textActiveJobs}>
//                                 Active Jobs
//                         </Text>
//                         </View>
//                         <View style={styles.viewCompletedJobs}>
//                             <Text style={styles.textCompletedJobs}>
//                                 Completed Jobs
//                         </Text>
//                         </View>
//                     </View>
//                     <View style={{ height: '75%', width: '98%', backgroundColor: 'transparent', marginHorizontal:'1%',}}>
//                         <FlatList data={this.state.updatedData}
//                         extraData={this.state.SelectTechnician}
//                         keyExtractor={(item)=> item.UserId}
//                             renderItem={({ item }) => (
//                                 <View style={{ flexDirection: 'row', backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                                     <View style={{ height: hp('6%'), width: wp('24%'),backgroundColor: 'transparent', paddingLeft:'1%',justifyContent: 'center', alignItems: 'flex-start' }}>
//                                         <Text style={{fontSize:hp('1.7%')}}>
//                                             {item.UserName}
//                                         </Text>
//                                     </View>
//                                     <View style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
//                                         <Text style={{fontSize:hp('1.7%')}}>
//                                             {item.UserType}
//                                         </Text>
//                                     </View>
//                                     {item.ActiveJobCode ?
//                                         <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
//                                             onPress={() =>
//                                                  this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId})
//                                                 // console.log("Kuldeep",item.JobId)
//                                                 }>
//                                                 {/* onPress={() => this.props.navigation.navigate("ForgotPassword",{itemId:65,myString:'gurjeet'})} */}
//                                             <Text style={{color: "#006DA6", fontSize:hp('1.7%')}}>
//                                                 {item.ActiveJobCode}
//                                             </Text>
//                                         </TouchableOpacity> :
//                                         <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
//                                             onPress={() => { this.props.navigation.navigate("JobAssign") }}>
//                                             <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
//                                              Assign
//                                             </Text>
//                                         </TouchableOpacity >}
//                                     <View style={{ height: hp('6%'), width: wp('30%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
//                                         <Text style={{fontSize:hp('1.7%')}}>
//                                             {item.CompletedJobs}
//                                         </Text>
//                                     </View>

//                                 </View>

//                             )}>

//                         </FlatList>


//                     </View>
//                 </View>
//                 <View style={styles.TouchableBottomBar}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//                 </View>
//             </SafeAreaView>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         //   width:wp('100%'),
//         backgroundColor: "transparent"
//     },
//     Stackheader: {
//         height: '9%',
//         width: '100%',
//         backgroundColor: "#008BD0"
//     },
//     viewSearchBar: {
//         height: '8%',
//         backgroundColor: "#FFFFFF"
//     },
//     searchbarTextInput: {
//         height: '100%',
//         width: '94%',
//         marginHorizontal: '3%',
//         backgroundColor: "red",
//         padding: '1.5%',
//         fontSize: hp('1.9%'),
//     },
//     viewPicker: {
//         height: '10%',
//         width: '100%',
//         paddingBottom:'1%',
//         backgroundColor: "transparent",
//         alignItems:'center',
//         justifyContent:'center',
//         zIndex:100
//     },
//     pickerAttribute: {
//         height: '100%',
//         width: '95%',
//         fontSize: hp('2.1%'),
//         marginLeft: '5%',
//         marginRight: '15%',
//     },
//     dataHeadingContainer: {
//          marginTop:'2%',
//         flexDirection: "row",
//         width: '100%',
//         height: '9%',
//         backgroundColor: "#008AD2"
//     },
//     viewTechnicianName: {
//         height: "100%",
//         width: '25%',

//         justifyContent: "center",
//         alignItems: "flex-start",
//         paddingLeft:'2%',
//         backgroundColor: "transparent",
//     },
//     textTechnicianName: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewCategory: {
//         height: '100%',
//         width: '21%',
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "transparent"
//     },
//     textCategory: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewActiveJobs: {
//         height: '100%',
//         width: '23%',
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "transparent"
//     },
//     textActiveJobs: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewCompletedJobs: {
//         height: '100%',
//         width: '31%',
//         paddingRight:'1%',
//         justifyContent: "center",
//         alignItems: "flex-end",
//         backgroundColor: "transparent"
//     },
//     textCompletedJobs: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewFlatListContainer: {
//         height: '50%',                // resp 55.5
//         width: '100%',
//         backgroundColor: "transparent"
//     },
//     viewFlatlistData: {
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "#D2D3D5",
//         backgroundColor: '#ffffff',
//         marginHorizontal: wp('2%'),
//         height: '27%',
//         width: '100%'
//     },
//     viewTeamMemNameValue: {
//         height: '100%',
//         width: '25%',
//         backgroundColor: "transparent",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         paddingLeft: wp('1%')
//     },
//     textTeamMemNameValue: {
//         fontSize: hp('1.9%'),
//         color: "#333333"
//     },
//     viewTechDepartValue: {
//         height: '100%',
//         width: '23%',
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textTechDepartValue: {
//         fontSize: hp('1.9%'),
//         color: "#333333"
//     },
//     viewActiveJobsBtn: {
//         height: '100%',
//         width: '21%',
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textActiveJobsBtn: {
//         fontSize: hp('2%'),
//         color: "#006DA6"
//     },
//     touchableAssgnBtn: {
//         height: hp('5.5%'),
//         width: wp('18%'),
//         backgroundColor: "#006DA6",
//         alignItems: "center",
//         justifyContent: "center",
//         borderBottomWidth: 4,
//         borderBottomColor: "#004B73"
//     },
//     textTouchableAssBtn: {
//         fontSize: hp('1.9%'),
//         color: "#FBFBFB"
//     },
//     viewCompletedJobsValue: {
//         height: hp('7%'),
//         width: wp('27%'),
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textCompletedJobsValue: {
//         fontSize: hp('1.9%'),
//         color: "#333333"
//     },
//     TouchableBottomBar: {
//         height: '9%',
//         width: '100%',
//         backgroundColor: "#008BD0"
//     },
//     searchInput:{
//         padding: 10,
//         borderColor: '#CCC',
//         borderWidth: 1
//       }

// })































import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,

    search,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SearchBar } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather';
=======
import {AppStorage, key} from '../utils/AppStorage';


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
// import AppButton from "../CustomComponent/ButtonComp"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import { Label } from 'native-base';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width

// let maindata = [{ id: 0, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// { id: 1, TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// { id: 2, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
// { id: 3, TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// { id: 4, TeamMemberName: "Joseph M.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "8" },
// { id: 5, TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// { id: 6, TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// { id: 7, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
// { id: 8, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
// { id: 9, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// { id: 10, TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "4" },
// { id: 11, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "3" },
// { id: 12, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" }]
export default class Technicians extends Component {
    constructor() {
        super();
        this.state = {
            country: 'uk',
            search: '',
            selectDepartment: "",
            DataSearch: "",
            technicianType:[],
            Data: [],
            SelectTechnician:"",
            UserType:'',
<<<<<<< HEAD
=======
            mainData:[],
            updatedData:[],
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            Data1:
                [{ TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
                    { TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
                    { TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
                    { TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
                    { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
                    { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },],
            Data2: [
                { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
                { TeamMemberName: "Joseph M.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
                { TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
                { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
                { TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Button", CompletedJobs: "4" },

            ],
<<<<<<< HEAD
            DataSearch: "",
            country:'uk',

            globalCodeCategoryId:0,
            categoryName:"User Type",
            page:0,
            limit:0,
            orderBy:"CreatedOn",
            orderByDescending:true,
            allRecords:true,
            Techiniciandata:[],

            searchField:[]
        }
    }
componentDidMount(){
// this.fetchTechnicianDepartment();
this.fetchTechnicianDetail();
this.SelectTechLabel();
}
=======
            item:null,
            page:0,
            limit:10,
        }
    }
    componentDidMount(){
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        this.fetchTechnicianDepartment();
        this.fetchTechnicianDetail();

<<<<<<< HEAD

SelectTechLabel = async () => {


    try {
        this.toggleLoader(true);
        
     
        var json_response_label = await AuthService.GetTechnicianlabel(this.state.globalCodeCategoryId, this.state.categoryName,this.state.page,this.state.limit,this.state.orderBy,this.state.orderByDescending,this.state.allRecords );

    console.log("Label*****",json_response_label.data)
    console.log("Label*****",json_response_label.data.data.globalCodeMainResponse.globalCodeResponse)
    var Technicianlabel = json_response_label.data.data.globalCodeMainResponse.globalCodeResponse
    console.log("^686868",Technicianlabel.length)

    for(i=0;i<Technicianlabel.length;i++){
        this.state.Techiniciandata.push(Technicianlabel[i].CodeName)
    }
    
    this.state.Techiniciandata = [].concat.apply([],this.state.Techiniciandata)
    console.log("*****", this.state.Techiniciandata)
  //  this.state.radio_props_MacType = [].concat.apply([], this.state.radio_props_MacType)
    // this.state.Techiniciandata = [].concat.apply([],this.state.Techiniciandata)
    // console.log("^686868",this.state.Techiniciandata)
 //   this.state.radio_props_Segment = [].concat.apply([], this.state.SegmentArray)

    
   

    } catch (e) {

    //    Alert.alert(e);
        console.log('catch block', e.json_response_label);
    } finally {
        this.toggleLoader(false);
        // console.log('login finally print hua');
    }
=======

        this.setState({
            SelectTechnician:"All Technician"
        })

    }


    fetchTechnicianDepartment = async () => {
        console.log('inside main method');
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        try {
            this.toggleLoader(true);
            console.log('inside try');
            let json_response = await AuthService.getTechnicianDepartments(0,"User Type",0,0,"CreatedOn",true,true);
            this.setState({
                technicianType:json_response.data.data.globalCodeMainResponse.globalCodeResponse,
            })

            ob1={"GlobalCodeCategoryId": 0,
                "GlobalCodeId": 0,
                "CodeName": "All Technician",
                "GlobalCodeCategory": "User Type",
                "Description": "",
                "ParentGlobalCodeId": 0,
                "ParentGlobalCode": "",
                "IsActive": true,
                "CreatedOn": "2019-04-24T02:06:41"}

<<<<<<< HEAD
fetchTechnicianDetail = async () => {
=======
            this.state.technicianType.splice(0,0,ob1)



        } catch (e) {

            //  Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e.response.data);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };






    fetchTechnicianDetail = async () => {


        console.log('technicianDetail++++++++++++++++++++++');
        try {
            this.toggleLoader(true);

            let json_response = await AuthService.getTechnicianDetail(this.state.page,this.state.limit,"CreatedOn",true,true);

            console.log('Guri************************', json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse);

            this.setState({
                Data:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
                mainData:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
            })


            // AppStorage.saveKey(key.ALL_TECHNICIAN_DETAIL,JSON.stringify(json_response.data)).then(()=>
            // {
            //     // Alert.alert("Data saved")

            // }

            // );
            this.filterListData("All Technician");

        } catch (e) {

            //  Alert.alert(e.response.data);
            // console.log('GetAllRecords catch', e.response.data);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };

    filterListData=(selectedValue)=>{

        this.state.updatedData=[]

        let tempList=this.state.Data;

        for(var i=0;i<tempList.length;i++)
        {


            if(tempList[i].UserType===selectedValue)
            {


                this.state.updatedData.push(tempList[i])
            }

            else if(selectedValue==="All Technician")
            {
                this.state.updatedData.push(tempList[i])

            }
            else{
                console.log("Exception ")
            }

        }

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc




<<<<<<< HEAD
        console.log('Guri************************', json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse);
        this.setState({
            Data:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
        })
       
console.log("arr*********",this.state.Data)
    } catch (e) {

        //  Alert.alert(e.response.data);
        // console.log('GetAllRecords catch', e.response.data);
    } finally {
        this.toggleLoader(false);
        console.log('GetAllRecords finally print hua');
    }

};

=======



//
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


    }

<<<<<<< HEAD
=======




    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc




    updateSearch = (search) => {
        let searchText = search.toLowerCase();

        console.log("in update Search&&&&&&&&&&&&&&&&&",this.state.mainData.filter(search))
        this.setState({
<<<<<<< HEAD
            Data: this.state.Data.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
  //             (x.UserType).join('').toLowerCase().indexOf(searchText) > -1 ||
   //             (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1)
=======
            //    updateData: this.state.mainData.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
            //         // (x.UserType).toLowerCase().indexOf(searchText) > -1 ||
            //         //  (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
            //         (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
            //          (x.ActiveJobCode).toString().toLowerCase().indexOf(searchText) > -1)

// updatedData:this.state.mainData.filter(x=>x===searchText)


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        })
    }

    pickerChange = (value, index) => {
        //    this.state.Data.map((v,i)=>{
        //        if(i===index)
        //        {
        //            this.setState({
        //             TeamMemberName:v.TeamMemberName,
        //             TechDepartment:this.state.Data[index].TechDepartment,
        //             AssignBtn:this.state.Data[index].AssignBtn,
        //             CompletedJobs:this.state.Data[index].CompletedJobs
        //            })
        //        }
        //    })
        this.setState({ selectDepartment: value })
        console.log("selectDepartment*****",this.state.selectDepartment)
        this.state.Data.map((v, i) => {
            if (index == i) {

                this.setState({
                    TeamMemberName: this.state.Data[index].TeamMemberName,
                    TechDepartment: this.state.Data[index].TechDepartment
                })



            }
        })


    }
    render() {
        const { search ,isLoading} = this.state;
        console.log("component data",this.state.Data)
        let myUsers = this.state.technicianType.map((myValue,myIndex)=>{
            return(
            <Picker.Item label={myValue.UserType } value={myIndex} key={myIndex}/>
            )
            });
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="#008BD0"
                    barStyle="#ffffff"
                />
                <View style={styles.Stackheader}>
                    <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                    }}/>
                    <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false} notification={true}/>
                </View>
                <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
                    <View style={styles.viewSearchBar}>
                        <TextInput
                            placeholder="Search"
                            underlineColorAndroid={'#999999'}
                            onChangeText={(text) => { this.updateSearch(text) }}
                            style={styles.searchbarTextInput}
                        />


                    </View>
<<<<<<< HEAD
                    <View 
                  style={{height:'9%',backgroundColor:'transparent',width:'90%',borderRadius:1, marginHorizontal:'5%', borderColor:'#D2D3D5', marginTop:'2%' }}
                  elevation={1.2}>
                  {/* <DropDownPicker
    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultValue="item1"
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => console.log(item.label, item.value)}
/> */}
                   <Picker selectedValue={this.state.selectDepartment}
                            style={styles.pickerAttribute}
                            onValueChange={(itemValue, itemIndex) => this.pickerChange(itemValue)}
                            enabled={true}
                            mode="dropdown"

                        >
                        
                   {this.state.Techiniciandata.map((item, index) => {console.log("key*****",item)
        return (
        <Picker.Item label={item} value={index} key={index} color="#666666"/>) 
    })}
                            {/* <Picker.Item label="All Technicians" value="All Technicians" color="#666666" />
                            <Picker.Item label="Mechanical Technicians" value="Mechanical Technicians" color="#666666" />
                            <Picker.Item label="Electrical Technicians" value="Electrical Technicians" color="#666666" /> */}
                            
                        </Picker>
                            </View>                
                            
                    
=======




                    <DropDownPicker

                        items={this.state.technicianType.map(item=>
                            ({label:item.CodeName,value:item.CodeName}))}

                        //  defaultValue="All Technician"
                        defaultNull={this.state.item === null}
                        placeholder="All Technician"
                        // placeholderStyle={{fontWeight: 'bold'}}

                        containerStyle={{height: "10%"}}
                        style={{backgroundColor: '#fafafa',marginHorizontal:'4%',marginVertical: "2%"}}
                        dropDownStyle={{backgroundColor: '#fafafa',marginHorizontal:'4%',alignItems:'flex-start',justifyContent:'flex-start'}}
                        // defaultIndex={0}
                        onChangeItem={item =>{
                            this.setState({
                                SelectTechnician:item.value
                            })

                            this.filterListData(item.value)

                        }
                        }
                        dropDownMaxHeight={240}
                    />









                    {/* </View>                 */}


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
                    <View style={styles.dataHeadingContainer}>

                        <View style={styles.viewTechnicianName}>
                            <Text style={styles.textTechnicianName}>
                                Tech. Name
                            </Text>
                        </View>
                        <View style={styles.viewCategory}>
                            <Text style={styles.textCategory}>
                                Category
                            </Text>
                        </View>
                        <View style={styles.viewActiveJobs}>
                            <Text style={styles.textActiveJobs}>
                                Active Jobs
                            </Text>
                        </View>
                        <View style={styles.viewCompletedJobs}>
                            <Text style={styles.textCompletedJobs}>
                                Completed Jobs
                            </Text>
                        </View>
                    </View>
<<<<<<< HEAD
                    <View style={{ height: '75%', width: '98%', backgroundColor: 'transparent', marginHorizontal:'1%' }}>
                        <FlatList data={this.state.Data}
                        keyExtractor={(item,index)=>index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                                    <View style={{ height: hp('6%'), width: wp('24%'),backgroundColor: 'transparent', paddingLeft:'1%',justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text style={{fontSize:hp('1.7%')}}>
                                            {item.UserName}
                                        </Text>
                                    </View>
                                    <View style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize:hp('1.7%')}}>
                                            {item.UserType}
                                        </Text>
                                    </View>
                                    {item.ActiveJobCode ?
                                        <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                            onPress={() =>  
                                                 this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId})
                                                // console.log("Kuldeep",item.JobId)
                                                }>
                                                {/* onPress={() => this.props.navigation.navigate("ForgotPassword",{itemId:65,myString:'gurjeet'})} */}
                                            <Text style={{color: "#006DA6", fontSize:hp('1.7%')}}>
                                                {item.ActiveJobCode}
                                            </Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                            onPress={() => { this.props.navigation.navigate("JobAssign") }}>
                                            <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                             Assign
                                            </Text>
                                        </TouchableOpacity >}
                                    <View style={{ height: hp('6%'), width: wp('30%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize:hp('1.7%')}}>
                                            {item.CompletedJobs}
                                        </Text>
                                    </View>
                                    
                                </View>

                            )}>
=======
                    <View style={{ height: '75%', width: '98%', backgroundColor: 'transparent', marginHorizontal:'1%',}}>
                        <FlatList data={this.state.updatedData}
                                  extraData={this.state.SelectTechnician}
                                  keyExtractor={(item)=> item.UserId}
                                  renderItem={({ item }) => (
                                      <View style={{ flexDirection: 'row', backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                                          <View style={{ height: hp('6%'), width: wp('24%'),backgroundColor: 'transparent', paddingLeft:'1%',justifyContent: 'center', alignItems: 'flex-start' }}>
                                              <Text style={{fontSize:hp('1.7%')}}>
                                                  {item.UserName}
                                              </Text>
                                          </View>
                                          <View style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                              <Text style={{fontSize:hp('1.7%')}}>
                                                  {item.UserType}
                                              </Text>
                                          </View>
                                          {item.ActiveJobCode ?
                                              <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                                                onPress={() =>
                                                                    this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId})
                                                                    // console.log("Kuldeep",item.JobId)
                                                                }>
                                                  {/* onPress={() => this.props.navigation.navigate("ForgotPassword",{itemId:65,myString:'gurjeet'})} */}
                                                  <Text style={{color: "#006DA6", fontSize:hp('1.7%')}}>
                                                      {item.ActiveJobCode}
                                                  </Text>
                                              </TouchableOpacity> :
                                              <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                                                onPress={() => { this.props.navigation.navigate("JobAssign") }}>
                                                  <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                                      Assign
                                                  </Text>
                                              </TouchableOpacity >}
                                          <View style={{ height: hp('6%'), width: wp('30%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                              <Text style={{fontSize:hp('1.7%')}}>
                                                  {item.CompletedJobs}
                                              </Text>
                                          </View>

                                      </View>

                                  )}>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                        </FlatList>


                    </View>
                </View>
                <View style={styles.TouchableBottomBar}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   width:wp('100%'),
        backgroundColor: "transparent"
    },
    Stackheader: {
        height: '9%',
        width: '100%',
        backgroundColor: "#008BD0"
    },
    viewSearchBar: {
        height: '8%',
        backgroundColor: "#FFFFFF"
    },
    searchbarTextInput: {
        height: '100%',
        width: '94%',
        marginHorizontal: '3%',
        backgroundColor: "#FFFFFF",
        padding: '1.5%',
        fontSize: hp('1.9%'),
    },
    viewPicker: {
        height: '10%',
        width: '100%',
        paddingBottom:'1%',
        backgroundColor: "transparent",
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    pickerAttribute: {
        height: '100%',
        width: '95%',
        fontSize: hp('2.1%'),
        marginLeft: '5%',
        marginRight: '15%',
    },
    dataHeadingContainer: {
<<<<<<< HEAD
        marginTop:'4%',
=======
        marginTop:'2%',
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        flexDirection: "row",
        width: '100%',
        height: '9%',
        backgroundColor: "#008AD2"
    },
    viewTechnicianName: {
        height: "100%",
        width: '25%',
<<<<<<< HEAD
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft:'2%',
        backgroundColor: "transparent",
    },
    textTechnicianName: {
        fontSize: hp('1.7%'),
        color: "#FFFFFF"
    },
    viewCategory: {
        height: '100%',
        width: '21%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    textCategory: {
        fontSize: hp('1.7%'),
        color: "#FFFFFF"
    },
    viewActiveJobs: {
        height: '100%',
        width: '23%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    textActiveJobs: {
        fontSize: hp('1.7%'),
        color: "#FFFFFF"
    },
    viewCompletedJobs: {
        height: '100%',
        width: '31%',
        paddingRight:'1%',
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "transparent"
    },
    textCompletedJobs: {
        fontSize: hp('1.7%'),
        color: "#FFFFFF"
    },
    viewFlatListContainer: {
        height: '50%',                // resp 55.5
        width: '100%',
        backgroundColor: "red"
    },
    viewFlatlistData: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#D2D3D5",
        backgroundColor: '#ffffff',
        marginHorizontal: wp('2%'),
        height: '27%',
        width: '100%'
    },
    viewTeamMemNameValue: {
        height: '100%',
        width: '25%',
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: wp('1%')
    },
    textTeamMemNameValue: {
        fontSize: hp('1.9%'),
        color: "#333333"
    },
    viewTechDepartValue: {
        height: '100%',
        width: '23%',
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    },
    textTechDepartValue: {
        fontSize: hp('1.9%'),
        color: "#333333"
    },
    viewActiveJobsBtn: {
        height: '100%',
        width: '21%',
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    },
    textActiveJobsBtn: {
        fontSize: hp('2%'),
        color: "#006DA6"
    },
    touchableAssgnBtn: {
        height: hp('5.5%'),
        width: wp('18%'),
        backgroundColor: "#006DA6",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 4,
        borderBottomColor: "#004B73"
    },
    textTouchableAssBtn: {
        fontSize: hp('1.9%'),
        color: "#FBFBFB"
    },
    viewCompletedJobsValue: {
        height: hp('7%'),
        width: wp('27%'),
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    },
    textCompletedJobsValue: {
        fontSize: hp('1.9%'),
        color: "#333333"
    },
    TouchableBottomBar: {
        height: '9%',
        width: '100%',
        backgroundColor: "#008BD0"
    },


})



<<<<<<< HEAD

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
//     TouchableOpacity,
//     TextInput
// } from 'react-native';

// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { SearchBar } from 'react-native-elements';
// import { Picker } from '@react-native-community/picker';
// // import AppButton from "../CustomComponent/ButtonComp"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Label } from 'native-base';
// // const height = Dimensions.get("screen").height
// // const width = Dimensions.get("screen").width

// let maindata = [{ id: 0, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// { id: 1, TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// { id: 2, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
// { id: 3, TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// { id: 4, TeamMemberName: "Joseph M.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "8" },
// { id: 5, TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// { id: 6, TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// { id: 7, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
// { id: 8, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
// { id: 9, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// { id: 10, TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "4" },
// { id: 11, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "3" },
// { id: 12, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" }]
// export default class Technicians extends Component {
//     constructor() {
//         super();
//         this.state = {
//             search: '',
//             selectDepartment: "",
//             DataSearch: "",
//             Data: maindata,
//             SelectTechnician:"",
//             Data1:
//                 [{ TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
//                 { TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
//                 { TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
//                 { TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
//                 { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
//                 { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },],
//             Data2: [
//                 { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
//                 { TeamMemberName: "Joseph M.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
//                 { TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
//                 { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
//                 { TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Button", CompletedJobs: "4" },

//             ],
//             DataSearch: "",
//             country:'uk',
//         }
//     }



//     updateSearch = (search) => {
//         let searchText = search.toLowerCase();
//         this.setState({
//             Data: maindata.filter(x => (x.TeamMemberName).toString().toLowerCase().indexOf(searchText) > -1 ||
//                 (x.TechDepartment).toString().toLowerCase().indexOf(searchText) > -1 ||
//                 // (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
//                 (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1)
//         })
//     }

//     pickerChange = (value, index) => {
//         //    this.state.Data.map((v,i)=>{
//         //        if(i===index)
//         //        {
//         //            this.setState({
//         //             TeamMemberName:v.TeamMemberName,
//         //             TechDepartment:this.state.Data[index].TechDepartment,
//         //             AssignBtn:this.state.Data[index].AssignBtn,
//         //             CompletedJobs:this.state.Data[index].CompletedJobs
//         //            })
//         //        }
//         //    })
//         this.setState({ selectDepartment: value })
//         console.log(this.state.selectDepartment)
//         this.state.Data.map((v, i) => {
//             if (index == i) {
=======






>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc






<<<<<<< HEAD
//     }
//     render() {
//         const { search } = this.state;
//         return (
//             <SafeAreaView style={styles.container}>
//                 <StatusBar
//                     backgroundColor="#008BD0"
//                     barStyle="#ffffff"
//                 />
//                 <View style={styles.Stackheader}>
//                 <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false} notification={true}/>
//                 </View>
//                 <View style={{ height: '82%', width: '100%', backgroundColor: '#FFFFFF' }}>
//                     <View style={styles.viewSearchBar}>
//                         <TextInput
//                             placeholder="Search"
//                             underlineColorAndroid={'#999999'}
//                             onChangeText={(text) => { this.updateSearch(text) }}
//                             style={styles.searchbarTextInput}
//                         />

//                         {/* <SearchBar inputStyle={{ backgroundColor: 'white' }}
//                         containerStyle={{ backgroundColor: '#0083C7', }}
//                         placeholderTextColor={'#g5g5g5'}
//                         placeholder="Search"
//                         onChangeText={this.updateSearch}
//                         value={search}
//                     /> */}
//                     </View>
//                   <View 
//                   style={{height:'9%',backgroundColor:'transparent',width:'90%',borderRadius:1, marginHorizontal:'5%', borderColor:'#D2D3D5', marginTop:'2%' }}
//                   elevation={1.2}>
//                   {/* <DropDownPicker
//     items={[
//         {label: 'Item 1', value: 'item1'},
//         {label: 'Item 2', value: 'item2'},
//     ]}
//     defaultValue="item1"
//     containerStyle={{height: 40}}
//     style={{backgroundColor: '#fafafa'}}
//     dropDownStyle={{backgroundColor: '#fafafa'}}
//     onChangeItem={item => console.log(item.label, item.value)}
// /> */}
//                    <Picker selectedValue={this.state.selectDepartment}
//                             style={styles.pickerAttribute}
//                             onValueChange={(itemValue, itemIndex) => this.pickerChange(itemValue)}
//                             enabled={true}
//                             mode="dropdown"

//                         >
                          
//                             <Picker.Item label="All Technicians" value="All Technicians" color="#666666" />
//                             <Picker.Item label="Mechanical Technicians" value="Mechanical Technicians" color="#666666" />
//                             <Picker.Item label="Electrical Technicians" value="Electrical Technicians" color="#666666" />
                            
//                         </Picker>
//                             </View>                
//                              {/* <DropDownPicker
//                                 items={[
//                                     { label: 'JN-73289089075', value: 'JN-73289089075', },
//                                     { label: 'JN-73289089076', value: 'JN-73289089076', },
//                                     { label: 'JN-73289089077', value: 'JN-73289089077', },
//                                     { label: 'JN-73289089078', value: 'JN-73289089078', },
//                                     { label: 'JN-73289089078', value: 'JN-73289089078', },

//                                 ]}

//                                 defaultValue={this.state.country}
//                                 containerStyle={{ height:'100%', width:'80%',backgroundColor:'red',  }}
//                                 placeholder="Select Job Numbers"    
//                                 style={{ backgroundColor: 'white'}}
//                                 itemStyle={{
//                                     justifyContent: 'flex-start',



//                                 }}

//                                 // dropDownStyle={{ backgroundColor: 'transparent' }}
//                                 onChangeItem={item => this.setState({
//                                     JobCode: item.value
//                                 })}

//                             /> */}
                        
                      
                    
//                     <View style={styles.dataHeadingContainer}>

//                         <View style={styles.viewTechnicianName}>
//                             <Text style={styles.textTechnicianName}>
//                                 Tech. Name
//                         </Text>
//                         </View>
//                         <View style={styles.viewCategory}>
//                             <Text style={styles.textCategory}>
//                                 Category
//                         </Text>
//                         </View>
//                         <View style={styles.viewActiveJobs}>
//                             <Text style={styles.textActiveJobs}>
//                                 Active Jobs
//                         </Text>
//                         </View>
//                         <View style={styles.viewCompletedJobs}>
//                             <Text style={styles.textCompletedJobs}>
//                                 Completed Jobs
//                         </Text>
//                         </View>
//                     </View>
//                     <View style={{ height: '75%', width: '98%', backgroundColor: 'transparent', marginHorizontal:'1%' }}>
//                         <FlatList data={this.state.Data}
//                         keyExtractor={(item,index)=>index.toString()}
//                             renderItem={({ item }) => (
//                                 <View style={{ flexDirection: 'row', backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                                     <View style={{ height: hp('6%'), width: wp('24%'),backgroundColor: 'transparent', paddingLeft:'1%',justifyContent: 'center', alignItems: 'flex-start' }}>
//                                         <Text style={{fontSize:hp('1.7%')}}>
//                                             {item.TeamMemberName}
//                                         </Text>
//                                     </View>
//                                     <View style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
//                                         <Text style={{fontSize:hp('1.7%')}}>
//                                             {item.TechDepartment}
//                                         </Text>
//                                     </View>
//                                     {item.ActiveJobs ?
//                                         <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
//                                             onPress={() => { this.props.navigation.navigate("ActiveJobs") }}>
//                                             <Text style={{color: "#006DA6", fontSize:hp('1.7%')}}>
//                                                 {item.ActiveJobs}
//                                             </Text>
//                                         </TouchableOpacity> :
//                                         <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
//                                             onPress={() => { this.props.navigation.navigate("JobAssign") }}>
//                                             <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
//                                                 {item.AssignBtn}
//                                             </Text>
//                                         </TouchableOpacity >}
//                                     <View style={{ height: hp('6%'), width: wp('30%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
//                                         <Text style={{fontSize:hp('1.7%')}}>
//                                             {item.CompletedJobs}
//                                         </Text>
//                                     </View>
                                    
//                                 </View>
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

//                             )}>

<<<<<<< HEAD
//                         </FlatList>
                      

//                     </View>
//                 </View>
//                 <View style={styles.TouchableBottomBar}>
//                     <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//                 </View>
//             </SafeAreaView>
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


<<<<<<< HEAD
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         //   width:wp('100%'),
//         backgroundColor: "transparent"
//     },
//     Stackheader: {
//         height: '9%',
//         width: '100%',
//         backgroundColor: "#008BD0"
//     },
//     viewSearchBar: {
//         height: '8%',
//         backgroundColor: "#FFFFFF"
//     },
//     searchbarTextInput: {
//         height: '100%',
//         width: '94%',
//         marginHorizontal: '3%',
//         backgroundColor: "#FFFFFF",
//         padding: '1.5%',
//         fontSize: hp('1.9%'),
//     },
//     viewPicker: {
//         height: '10%',
//         width: '100%',
//         paddingBottom:'1%',
//         backgroundColor: "transparent",
//         alignItems:'center',
//         justifyContent:'center',
//         zIndex:100
//     },
//     pickerAttribute: {
//         height: '100%',
//         width: '95%',
//         fontSize: hp('2.1%'),
//         marginLeft: '5%',
//         marginRight: '15%',
//     },
//     dataHeadingContainer: {
//         marginTop:'4%',
//         flexDirection: "row",
//         width: '100%',
//         height: '9%',
//         backgroundColor: "#008AD2"
//     },
//     viewTechnicianName: {
//         height: "100%",
//         width: '25%',
//         justifyContent: "center",
//         alignItems: "flex-start",
//         paddingLeft:'2%',
//         backgroundColor: "transparent",
//     },
//     textTechnicianName: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewCategory: {
//         height: '100%',
//         width: '21%',
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "transparent"
//     },
//     textCategory: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewActiveJobs: {
//         height: '100%',
//         width: '23%',
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "transparent"
//     },
//     textActiveJobs: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewCompletedJobs: {
//         height: '100%',
//         width: '31%',
//         paddingRight:'1%',
//         justifyContent: "center",
//         alignItems: "flex-end",
//         backgroundColor: "transparent"
//     },
//     textCompletedJobs: {
//         fontSize: hp('1.7%'),
//         color: "#FFFFFF"
//     },
//     viewFlatListContainer: {
//         height: '50%',                // resp 55.5
//         width: '100%',
//         backgroundColor: "red"
//     },
//     viewFlatlistData: {
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "#D2D3D5",
//         backgroundColor: '#ffffff',
//         marginHorizontal: wp('2%'),
//         height: '27%',
//         width: '100%'
//     },
//     viewTeamMemNameValue: {
//         height: '100%',
//         width: '25%',
//         backgroundColor: "transparent",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         paddingLeft: wp('1%')
//     },
//     textTeamMemNameValue: {
//         fontSize: hp('1.9%'),
//         color: "#333333"
//     },
//     viewTechDepartValue: {
//         height: '100%',
//         width: '23%',
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textTechDepartValue: {
//         fontSize: hp('1.9%'),
//         color: "#333333"
//     },
//     viewActiveJobsBtn: {
//         height: '100%',
//         width: '21%',
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textActiveJobsBtn: {
//         fontSize: hp('2%'),
//         color: "#006DA6"
//     },
//     touchableAssgnBtn: {
//         height: hp('5.5%'),
//         width: wp('18%'),
//         backgroundColor: "#006DA6",
//         alignItems: "center",
//         justifyContent: "center",
//         borderBottomWidth: 4,
//         borderBottomColor: "#004B73"
//     },
//     textTouchableAssBtn: {
//         fontSize: hp('1.9%'),
//         color: "#FBFBFB"
//     },
//     viewCompletedJobsValue: {
//         height: hp('7%'),
//         width: wp('27%'),
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textCompletedJobsValue: {
//         fontSize: hp('1.9%'),
//         color: "#333333"
//     },
//     TouchableBottomBar: {
//         height: '9%',
//         width: '100%',
//         backgroundColor: "#008BD0"
//     },
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


















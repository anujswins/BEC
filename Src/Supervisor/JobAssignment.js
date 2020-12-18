import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import { AppStorage, key } from '../utils/AppStorage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    TextInput,
    Dimensions,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    FlatList,
    Alert
} from 'react-native';
const KEYS_TO_FILTERS = ['UserName', 'UserType','CompletedJobs',];
import SearchInput, { createFilter } from 'react-native-search-filter';
// import StackHeader from '../StackHeader/StackHeader'
import DropDownPicker from 'react-native-dropdown-picker';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { Picker } from '@react-native-community/picker';
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;


export default class CurrentJobs extends Component {



    constructor() {
        super();

        this.state = {
            orderData: [],
            isFeebackIcon: true,
            isMenuIcon: true,
            mydata: [],
            item: null,
            technicianType: [],
            updatedData: [],
            Data: [],
            UserType: '',
            SelectTechnician: "",
            data: "",
            userTypeId: 0,
            NoJobAssigned: true,
            page: 1,
            limit: 40,
            orderBy: "CreatedOn",
            orderByDescending: true,
            allRecords: true,
            isLoading: false,
            jobId:'',
            mainData:[],

        }
    }


    // componentDidMount = async () => {
    //     this.Fun_GetJobAllRecords();
    //     this.fetchTechnicianDepartment();
    //     this.setState({
    //         data: "All Technician"
    //     })
    // };

    componentDidMount=async()=>{
        var jobId=this.props.navigation.getParam('JobId')
        console.log("Lamba^^^^^^^^^^^^^^^^^",jobId)
    
        this.fetchTechnicianDepartment();
        // var response = await AppStorage.getLoginResponse();
        // console.log("userId", response.userResponse.UserId);
        this.setState({
            data: "All Technician",
            // userId:response.userResponse.UserId,
            jobId:jobId
        });
        this.Fun_GetJobAllRecords();  
       
        

        
        }




    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

    Fun_GetJobAllRecords = async () => {
        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseAssignJobs(this.state.NoJobAssigned, this.state.page, this.state.limit, this.state.orderBy,
                this.state.orderByDescending, this.state.allRecords);

            console.log('GetJobAllRecords try==', json_response.data.data.
                jobsAssignmentMainResponse.jobsAssignmentResponse);

this.setState(

 { updatedData:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse}
)

            if (json_response.data.StatusCode === 200) {
                this.state.orderData = json_response.data.data;
                this.state.mydata = json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse;
                this.state.mainData=json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse;



                for (var i = 0; i < this.state.mydata.length; i++) {
                    var str_name = this.state.mydata[i].UserName
                    var str_CreatedOn = this.state.mydata[i].CreatedOn
                    var str_UserType = this.state.mydata[i].UserType
                    console.log('name agya h+++++++ ', str_name + str_CreatedOn)
                    console.log('CreatedOn agya h+++++++ ', str_CreatedOn)
                    console.log('UserType agya h+++++++ ', str_UserType)

                }
                this.filterListData("All Technician");

            }

        } catch (e) {

            Alert.alert(e);
            console.log('GetJobAllRecords catch', e);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }


    };


    // Technician Type
    fetchTechnicianDepartment = async () => {
        console.log('inside main method');

        try {
            this.toggleLoader(true);
            console.log('inside try');
            let json_response = await AuthService.getTechnicianDepartments
                (0, "User Type", 0, 0, "CreatedOn", true, true);
            // console.log('inside try', json_response);
            this.setState({
                technicianType: json_response.data.data.globalCodeMainResponse.globalCodeResponse,

            })
       

            ob1 = {
                "GlobalCodeCategoryId": 0,
                "GlobalCodeId": 0,
                "CodeName": "All Technician",
                "GlobalCodeCategory": "User Type",
                "Description": "",
                "ParentGlobalCodeId": 0,
                "ParentGlobalCode": "",
                "IsActive": true,
                "CreatedOn": "2019-04-24T02:06:41"
            }

            this.state.technicianType.splice(0, 0, ob1)

            // console.log("Gurjeet$$$$$$$$$$$$$$$$$$$$$", this.state.technicianType)

        } catch (e) {


            console.log('GetAllRecords catch', e);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };


    //filter data



    filterListData = (selectedValue) => {
        
        this.state.updatedData=[]
        console.log("templist Data",this.state.updatedData) 
        // this.state.updatedData.length = 0
        let tempList = this.state.mydata;
        console.log("FilterData called############", this.state.mydata)
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].UserType === selectedValue) {
              
               
                this.state.updatedData.push(tempList[i])
            }


            else if (selectedValue === "All Technician") {
                this.state.updatedData.push(tempList[i])
                
            }
            else {
                console.log("Exception ")
            }
        }
       
    }

    searchUpdated(term) {
        // this.setState({ searchTerm: term ,
        //        })
    
    
            this.setState({
        updatedData : this.state.mainData.filter(createFilter(term, KEYS_TO_FILTERS))
     } )
            
       
    
    
      }





    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            mydata: this.state.mydata.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1)
        });
    }
// -----------------------------IF USER NAVIGATE FROM  EQUIPMENTIDENTIFICATION OR JOB TECHNICIAN MODULE----------------------------
JobAssigned = async (jobId,userId) => {
    try {
      this.toggleLoader(true);
      console.log("JobId in job Assigned===================",userId)
      let json_response = await AuthService.AssignedJobs(userId,
        jobId,"Assigned");
      //  let json_response = await AuthService.AssignedJobs(39,
      //   150,"Assigned");
        console.log("get Assigned",json_response.data.StatusCode)

// if(json_response.data.StatusCode==200)
// {
// // this.props.navigation.navigate("ActiveJobs")

// }

    
    } catch (e) {
  
      // Alert.alert(e.response);
      // console.log('GetJobAssignRecords catch', e.response);
    } finally {
      this.toggleLoader(false);
      // console.log('GetJobAssignRecords finally print hua');
    }
  };





AssignOnPress=async(value,userId)=>{
        if(value==true){
       
            let respo_storage = await AppStorage.createJobEquipId();                                                //GetAll_Records_Data
            console.log('EquipmentIddetails=============', respo_storage.jobResponse.JobId);
            console.log('EquipmentIddetails=============', userId);
            let Job_id=respo_storage.jobResponse.JobId
         //   this.setState({jobId:Job_id})
            this.JobAssigned(Job_id,userId);
          Alert.alert(
              'Alert ',
              'Job Assigned',
              [
        
                { text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
                
          
              ]
              
            );








     
        }else if(value==false){
           this.props.navigation.navigate("JobAssign") 

        }

else if(value=="Active_Job")
{

    this.JobAssigned(this.state.jobId,userId);
    Alert.alert(
        'Alert ',
        'Job Assigned',
        [
  
          { text: 'OK', onPress: () => this.props.navigation.navigate('ActiveJobs')},
          
    
        ]
        
      );

    
}



  
}

    render() {
        const { dimensions } = this.state;
        const { search } = this.state;
        const { isLoading } = this.state;
        var NavigationBoolValue= this.props.navigation.getParam('JobAssignBool')
       console.log("NavigationBoolValue***",NavigationBoolValue)
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <StatusBar hidden={false} backgroundColor={"#008BD0"} />
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }} />
                <View style={{ height: '9%', backgroundColor: 'transparent', }}>
                    <DrawerHeader name="Job Assignment" openDrawer={this.props.navigation} status={false} notification={true} />
                </View>

                <View style={{ height: '7%', width: '98%', justifyContent: "center", paddingHorizontal: 10 }}>
                    {/* <TextInput style={{ fontSize: 17 }}
                        placeholder="Search"
                        underlineColorAndroid="grey"
                        multiline={true}
                        onChangeText={(text) => { this.updateSearch(text) }}
                    /> */}
                 <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchbarTextInput}

          placeholder="Search"
          />





                </View>

                <View style={{ height: '10%' }}>
                    <DropDownPicker
                        items={this.state.technicianType.map(item =>
                            ({ label: item.CodeName, value: item.CodeName }))}
                        defaultNull={this.state.item === null}

                        placeholder="All Technician"
                        containerStyle={{ height:"60%",marginHorizontal:'3%'}}
                        style={{ backgroundColor: '#fafafa', marginTop: "1%" }}
                        dropDownStyle={{ backgroundColor: '#fafafa', }}

                        onChangeItem={item => {
                            this.setState({
                                data: item.value
                            })

                            // this.filterListData(item.value)
                            
                        
                             this.filterListData(item.value)
                     
                         

                        }
                        }
                        dropDownMaxHeight={740}
                    />

                </View>
                <View style={{
                    height: '6%', width: '100%', backgroundColor: '#0288d5', alignItems: "center",
                    flexDirection: "row", justifyContent: "space-around",
                }}>
                    <Text style={styles.text}>Tech Name</Text>
                    <Text style={styles.textView}>Category</Text>
                    <Text style={styles.TextView}>Assign</Text>
                    <Text style={styles.TextmainView}>Completed Jobs</Text>
                </View>

                <View style={{ height: '60%', width: '100%', backgroundColor: "white" }}>

                
                    <FlatList data={this.state.updatedData}
                        extraData={this.state.data}
                        keyExtractor={(item,index)=>index.toString()}

                        renderItem={({ item }) => (
                            <View style={styles.FlatListView}>
                                <Text style={{
                                    width: '25%', height: '100%', padding: 10,
                                    textAlign: "center", backgroundColor: "white"
                                }}>{item.UserName}</Text>
                                <Text style={{
                                    width: '28%', height: '100%', padding: 10,
                                    textAlign: "center", backgroundColor: "white"
                                }}>{item.UserType}</Text>


                                <View style={{
                                    width: '20%', height: '90%', backgroundColor: '#0288d5', justifyContent: "center", alignItems: "center"
                                }}>
                                    <TouchableOpacity onPress={() => this.AssignOnPress(NavigationBoolValue,item.UserId)}>

                                        <Text style={{ color: 'white', justifyContent: "center", textAlign: "center" }}>Assign </Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={{ width: '30%', height: '100%', padding: 10, textAlign: "center", backgroundColor: "white" }}>
                                    {item.CompletedJobs}</Text>
                            </View>

                        )} >

                    </FlatList>

                </View>
                <View style={{ height: '9%', backgroundColor: 'transparent' }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}>
                    </BottomTabNavigator>

                </View>


            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: dwidth,
        height: dheight,
        backgroundColor: "white",

    },
    mainView: {

        width: dwidth,
        height: dheight * 0.06,
        backgroundColor: '#0288d5',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
   },
    TextmainView: {
        width: '30%',
        height: '100%',
        color: "white",
        paddingTop: 10,
        textAlign: "center",
},
       TextView: {
        width: '25%',
        height: '100%',
        color: "white",
        paddingTop: 10,
        textAlign: "center",

    },
    textView: {
        width: '30%',
        height: '100%',
        color: "white",
        paddingTop: 10,
        textAlign: "center",

    },
    text: {
        width: '25%',
        height: '100%',
        color: "white",
        paddingTop: 10,
        textAlign: "center",

    },

    FlatListView: {
        marginTop: '1%',
        width: dwidth,
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: "#d3d3d3",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around"

    },
});





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
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// // const height = Dimensions.get("screen").height
// // const width = Dimensions.get("screen").width

// let maindata = [{id:0, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// {id:1, TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// {id:2, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
// {id:3, TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// {id:4, TeamMemberName: "Joseph M.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "8" },
// {id:5, TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
// {id:6, TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
// {id:7, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
// {id:8, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
// {id:9, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
// {id:10, TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "4" },
// {id:11, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "3" },
// {id:12, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" }]
// export default class Technicians extends Component {
//     constructor() {
//         super();
//         this.state = {
//             search: '',
//             selectDepartment: "",
//             DataSearch:"",
//             Data: maindata,
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
//             DataSearch:"",
//         }
//     }



//     updateSearch = (search) => {
//         let searchText = search.toLowerCase();
//         this.setState({Data:maindata.filter(x=>(x.TeamMemberName).toString().toLowerCase().indexOf(searchText) > -1 ||
//             (x.TechDepartment).toString().toLowerCase().indexOf(searchText) > -1 ||
//            // (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
//             (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1 )})
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
//         const { search } = this.state;
//         return (
//             <SafeAreaView style={styles.container}>
//                <View style={styles.Stackheader}>
//                <DrawerHeader name="Technicians" status={false}/>
//                </View>
//                 <View style={styles.viewSearchBar}>
//                     <TextInput
//                         placeholder="Search"
//                         onChangeText={(text) => { this.updateSearch(text) }}
//                         style={styles.searchbarTextInput}
//                     />

//                     {/* <SearchBar inputStyle={{ backgroundColor: 'white' }}
//                         containerStyle={{ backgroundColor: '#0083C7', }}
//                         placeholderTextColor={'#g5g5g5'}
//                         placeholder="Search"
//                         onChangeText={this.updateSearch}
//                         value={search}
//                     /> */}
//                 </View>
//                 <View style={styles.viewPicker}>
//                     <Picker selectedValue={this.state.selectDepartment}
//                         style={styles.pickerAttribute}
//                         onValueChange={(itemValue, itemIndex) => this.pickerChange(itemValue)}
//                         enabled={true}
//                         mode="dropdown"
//                     >
//                         <Picker.Item label="Select Technicians" color="#666666"/>
//                         <Picker.Item label="All Technicians" value="All Technicians" color="#666666" />
//                         <Picker.Item label="Mechanical Technicians" value="Mechanical Technicians" color="#666666" />
//                         <Picker.Item label="Electrical Technicians" value="Electrical Technicians" color="#666666" />
//                         {/* {this.state.Data.map((v) => {
//                             return (
//                                 <Picker.Item label={"All Tech"} />
//                             )
//                         })} */}
//                     </Picker>
//                 </View>
//                 <View style={styles.dataHeadingContainer}>

//                     <View style={styles.viewTechnicianName}>
//                         <Text style={styles.textTechnicianName}>
//                             Tech. Name
//                         </Text>
//                     </View>
//                     <View style={styles.viewCategory}>
//                         <Text style={styles.textCategory}>
//                             Category
//                         </Text>
//                     </View>
//                     <View style={styles.viewActiveJobs}>
//                         <Text style={styles.textActiveJobs}>
//                             Active Jobs
//                         </Text>
//                     </View>
//                     <View style={styles.viewCompletedJobs}>
//                         <Text style={styles.textCompletedJobs}>
//                             Completed Jobs
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={styles.viewFlatListContainer}>
//                     <FlatList data={this.state.Data}
//                    keyExtractor={(item,index)=>index.toString()}
//                         renderItem={({ item }) => (
//                             <View style={styles.viewFlatlistData}>
//                                 <View style={styles.viewTeamMemNameValue}>
//                                     <Text style={styles.textTeamMemNameValue}>
//                                         {item.TeamMemberName}
//                                     </Text>
//                                 </View>
//                                 <View style={styles.viewTechDepartValue}>
//                                     <Text style={styles.textTechDepartValue}>
//                                         {item.TechDepartment}
//                                     </Text>
//                                 </View>
//                                 <View style={styles.viewActiveJobsBtn}>
//                                     {item.ActiveJobs ?
//                                         <TouchableOpacity onPress={() => { this.props.navigation.navigate("ActiveJobs") }}>
//                                             <Text style={styles.textActiveJobsBtn}>
//                                                 {item.ActiveJobs}
//                                             </Text>
//                                         </TouchableOpacity> :
//                                         <TouchableOpacity style={styles.touchableAssgnBtn} onPress={() => { this.props.navigation.navigate("JobAssign") }}>
//                                             <Text style={styles.textTouchableAssBtn}>
//                                                 {item.AssignBtn}
//                                             </Text>
//                                         </TouchableOpacity >}
//                                 </View>
//                                 <View style={styles.viewCompletedJobsValue}>
//                                     <Text style={styles.textCompletedJobsValue}>
//                                         {item.CompletedJobs}
//                                     </Text>
//                                 </View>
//                             </View>
//                         )}>


//                     </FlatList>

//                 </View>
//                 <View style={styles.TouchableBottomBar}>
//                   <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//                 </View>
//             </SafeAreaView>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
        
//         width: wp('100%'),
//         backgroundColor: "#FFFFFF"
//     },
//     Stackheader:{
//         height:hp('9%'), 
//         width:wp('100%'), 
//         backgroundColor:"transparent"
//     },
//     viewSearchBar: {
//         height: hp('8%'),
//         backgroundColor: "#FFFFFF"
//     },
//     searchbarTextInput: {
//         height: hp('8%'),
//         width: wp('94%'),
//         marginHorizontal:wp('3%'),
//         backgroundColor: "#FFFFFF",
//         borderBottomWidth: 1, 
//         borderColor: "#008AD2",
//         padding: wp('3%'),
//         fontSize:17,
//         borderBottomColor:"#ABABAB"
//     },
//     viewPicker: {
//         height: hp('8%'),
//         width: wp('100%'),
//         backgroundColor: "#FFFFFF"
//     },
//     pickerAttribute: {
//         height: hp('8%'),
//         width: wp('80%'),
//         fontSize: 18,
//         marginLeft: wp('5%'),
//         marginRight: wp('15%'),
//     },
//     dataHeadingContainer: {
//         flexDirection: "row",
//         width: wp('100%'),
//         height: hp('7.5%'),
//         backgroundColor: "#008AD2"
//     },
//     viewTechnicianName: {
//         height: hp('7.5%'),
//         width: wp('27%'),
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#008AD2",
//     },
//     textTechnicianName: {
//         fontSize: 14,
//         color: "#FFFFFF"
//     },
//     viewCategory: {
//         height: hp('7.5%'),
//         width: wp('22%'),
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#008AD2"
//     },
//     textCategory: {
//         fontSize: 14,
//         color: "#FFFFFF"
//     },
//     viewActiveJobs: {
//         height: hp('7.5%'),
//         width: wp('21%'),
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#008AD2"
//     },
//     textActiveJobs: {
//         fontSize: 14,
//         color: "#FFFFFF"
//     },
//     viewCompletedJobs: {
//         height: hp('7.5%'),
//         width: wp('30%'),
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#008AD2"
//     },
//     textCompletedJobs: {
//         fontSize: 14,
//         color: "#FFFFFF"
//     },
//     viewFlatListContainer: {
//         height: hp('56.5%'),                // resp 55.5
//         width: wp('100%'),
//         backgroundColor: "#FFFFFF"
//     },
//     viewFlatlistData: {
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "#BDBDBD",
//         backgroundColor: "#FFFFFF",
//         marginHorizontal: wp('2%')
//     },
//     viewTeamMemNameValue: {
//         height: hp('7%'),
//         width: wp('25%'),
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         paddingLeft: wp('1%')
//     },
//     textTeamMemNameValue: {
//         fontSize: 15,
//         color: "#333333"
//     },
//     viewTechDepartValue: {
//         height: hp('7%'),
//         width: wp('23%'),
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textTechDepartValue: {
//         fontSize: 15,
//         color: "#333333"
//     },
//     viewActiveJobsBtn: {
//         height: hp('7%'),
//         width: wp('21%'),
//         backgroundColor: "#FBFBFB",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textActiveJobsBtn: {
//         fontSize: 15,
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
//     textTouchableAssBtn:{ 
//         fontSize: 15, 
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
//         fontSize: 15,
//         color: "#333333"
//     },
//     TouchableBottomBar:{ 
//         height: hp('12%'), 
//         width: wp('100%'), 
//         backgroundColor: "transparent" 
//     },


// })


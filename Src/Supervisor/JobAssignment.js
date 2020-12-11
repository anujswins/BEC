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
            // userTypeId: 0,
            // NoJobAssigned: true,
            page: 0,
            limit: 0,
            orderBy: "CreatedOn",
            orderByDescending: true,
            allRecords: true,
            isLoading: false,
            jobId:'',

        }
    }


<<<<<<< HEAD
    componentDidMount = async () => {
        this.Fun_GetJobAllRecords();
=======
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
    
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
        this.fetchTechnicianDepartment();
        // var response = await AppStorage.getLoginResponse();
        // console.log("userId", response.userResponse.UserId);
        this.setState({
<<<<<<< HEAD
            data: "All Technician"
        })
    };

    
=======
            data: "All Technician",
            // userId:response.userResponse.UserId,
            jobId:jobId
        });
        this.Fun_GetJobAllRecords();  
       
       
        

        
        }
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0




    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

    Fun_GetJobAllRecords = async () => {
        try {
            this.toggleLoader(true);
<<<<<<< HEAD
            let json_response = await AuthService.SuperviseAssignJobs( this.state.page, this.state.limit, this.state.orderBy,
=======
            console.log("Checkingconsole=========",this.state.userTypeId,
            this.state.NoJobAssigned, this.state.page, this.state.limit, this.state.orderBy,
            this.state.orderByDescending, this.state.allRecords)
            let json_response = await AuthService.SuperviseAssignJobs(this.state.userTypeId,
                this.state.NoJobAssigned, this.state.page, this.state.limit, this.state.orderBy,
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                this.state.orderByDescending, this.state.allRecords);

        //    console.log('GetJobAllRecords try==', json_response.data.data.
             //   jobsAssignmentMainResponse.jobsAssignmentResponse);



            if (json_response.data.StatusCode === 200) {
                this.state.orderData = json_response.data.data;
                this.state.mydata = json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse;




                for (var i = 0; i < this.state.mydata.length; i++) {
                    var str_name = this.state.mydata[i].UserName
                    var str_CreatedOn = this.state.mydata[i].CreatedOn
                    var str_UserType = this.state.mydata[i].UserType
                    // console.log('name agya h+++++++ ', str_name + str_CreatedOn)
                    // console.log('CreatedOn agya h+++++++ ', str_CreatedOn)
                    // console.log('UserType agya h+++++++ ', str_UserType)

                }
                this.filterListData("All Technician");

            }

        } catch (e) {

            // Alert.alert(e);
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

<<<<<<< HEAD
            console.log("Miss $$$$$$$$$$$$$$$$$$$$$", this.state.technicianType)
=======
            // console.log("Gurjeet$$$$$$$$$$$$$$$$$$$$$", this.state.technicianType)
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        } catch (e) {


            console.log('GetAllRecords catch', e);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua=======');
        }

    };


    //filter data



    filterListData = (selectedValue) => {
        
        this.state.updatedData=[]
        console.log("templist Data",this.state.updatedData) 
        // this.state.updatedData.length = 0
        let tempList = this.state.mydata;
    //    console.log("FilterData called############", this.state.mydata)
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
    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            orderData: this.state.mydata.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1)
        });
    }
// -----------------------------IF USER NAVIGATE FROM  EQUIPMENTIDENTIFICATION OR JOB TECHNICIAN MODULE----------------------------
<<<<<<< HEAD
    AssignOnPress=(value)=>{
        if(value==true){

=======
JobAssigned = async (jobId,userId) => {
    try {
      this.toggleLoader(true);
      console.log("JobId in job Assigned===================",userId)
      let json_response = await AuthService.AssignedJobs(userId,
        jobId,"Assigned");
   
        console.log("get Assigned",json_response.data)

    
    } catch (e) {
  
  
      console.log('GetJobAssignRecords catch', e);
    } finally {
      this.toggleLoader(false);
      // console.log('GetJobAssignRecords finally print hua');
    }
  };





AssignOnPress=async(value,userId)=>{
        if(value==true){
       
            // Alert.alert("job id recived",jobId)
            let respo_storage = await AppStorage.createJobEquipId();                                                //GetAll_Records_Data
            console.log('EquipmentIddetails=============', respo_storage.jobResponse.JobId);
            console.log('EquipmentIddetails=============', userId);
            let Job_id=respo_storage.jobResponse.JobId
            this.setState({jobId:Job_id})
            this.JobAssigned(this.state.jobId,userId);
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
          Alert.alert(
              'Alert ',
              'Job Assigned',
              [
        
<<<<<<< HEAD
                { text: 'OK', onPress: () => this.props.navigation.navigate('JobsAssignment')},
=======
                { text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                
          
              ]
              
            );
        }else if(value==false){
           this.props.navigation.navigate("JobAssign") 

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
                    <TextInput style={{ fontSize: 17 }}
                        placeholder="Search"
                        underlineColorAndroid="grey"
                        multiline={true}
                        onChangeText={(text) => { this.updateSearch(text) }}
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
<<<<<<< HEAD
                                    <TouchableOpacity onPress={() => this.AssignOnPress(NavigationBoolValue)}>
=======
                                    <TouchableOpacity onPress={() => this.AssignOnPress(NavigationBoolValue,item.UserId)}>
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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


// -------------------------------------------------------------------------------------------------------------------------------
// import React, {Component} from 'react';
// import { SearchBar } from 'react-native-elements';
// import DrawerHeader from '../CommonComponents/DrawerHeader';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import {
//     SafeAreaView,
//     StatusBar,
//     StyleSheet,
//     Platform,
//     KeyboardAvoidingView,
//     TextInput,
//     Dimensions,
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     Button,
//     FlatList,
//     Alert
// } from 'react-native';
// // import StackHeader from '../StackHeader/StackHeader'
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import ApiLoader from '../../Src/PopUp/ApiLoader';
// import AuthService from '../../Src/RestClient/AuthService';
// import { Picker } from '@react-native-community/picker';
// const screen = Dimensions.get("screen");
// const dwidth = Dimensions.get('screen').width;
// const dheight = Dimensions.get('screen').height;

// const mainData = [
//     { UserName: 'Ishita rani', UserType: 'mechanical', Name: 0, Stage: 1, hours: 2 },
//     { UserName: 'Vikramjeet', UserType: 'Mechanical', Name: 1, Stage: 3, hours: 2 },
//     { UserName: 'AmitSingh', UserType: '', Name: 2, Stage: 4, hours: 5 },
//     { UserName: 'Anupreet', UserType: 'Electrical', Name: 0, Stage: 4, hours: 5 },
//     { UserName: 'Sareem', UserType: '', Name: 2, Stage: 4, hours: 5 },
//     { UserName: 'Parth', UserType: 'Electrical', Name: 0, Stage: 4, hours: 5 },

    

    
    
    
// ];
// export default class CurrentJobs extends Component {



//     constructor() {
//         super();

//         this.state = {
//             orderData: mainData ,
//             isFeebackIcon: true,
//             isMenuIcon: true,
//             mydata:[],

//  userTypeId: 0,
//  NoJobAssigned: true,
//  page: 0,
//  limit: 0,
//  orderBy: "CreatedOn",
//  orderByDescending: true,
//  allRecords: true,
//  isLoading: false,             
           
//         }       
//     }
//     componentDidMount = async () => {
//         this.Fun_GetJobAllRecords();
//     };


//     toggleLoader = (val) => {
//         this.setState(({ isLoading: val }));
//     };
//     Fun_GetJobAllRecords = async () => {
//         try {
//             this.toggleLoader(true);
//             let json_response = await AuthService.SuperviseAssignJobs(this.state.userTypeId,
//                 this.state.NoJobAssigned,this.state.page,this.state.limit,this.state.orderBy,
//                 this.state.orderByDescending,this.state.allRecords);

//              console.log('GetJobAllRecords try==', json_response.data.data.
//             jobsAssignmentMainResponse.jobsAssignmentResponse);
          
//             // mainData=json_response.data.Permissions;

//              if (json_response.data.StatusCode === 200) {
//             //      Alert.alert("data get successfully ");
//             //   console.log('response condition+++++++++', json_response.data.data.StatusCode);
//                 this.state.orderData=json_response.data.data;
//                 this.state.mydata=json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse;
//                 // console.log('name agya h=========== ', this.state.mydata[2].UserName)



//                 for(var i=0;i<this.state.mydata.length;i++){
//                     var str_name=this.state.mydata[i].UserName
//                     var str_CreatedOn=this.state.mydata[i].CreatedOn
//                     var str_UserType=this.state.mydata[i].UserType
//                     console.log('name agya h+++++++ ', str_name+str_CreatedOn)
//                     console.log('CreatedOn agya h+++++++ ', str_CreatedOn)
//                     console.log('UserType agya h+++++++ ', str_UserType)
                 
//                 }
//                 //  console.log('cht_list==========',json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse);
               
//                 // this.GetData(myrespo);

//             }

//         } catch (e) {

//              Alert.alert(e.response.data);
//             console.log('GetJobAllRecords catch', e.response);
//         } finally {
//             this.toggleLoader(false);
//             console.log('GetAllRecords finally print hua');
//         }
















//         // let resp = await AuthService.SuperviseCurrentJobs(this.state.stageId, this.state.jobTypeId, this.state.machineTypeId, this.state.startDate, this.state.endDate,
//         //     this.state.clientId, this.state.assignToId, this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);

//         // console.log('CurrentJobs response StatusCode ', resp.data.StatusCode);









//     };
//     updateSearch = (search) => {
//         let searchText = search.toLowerCase();
//         this.setState({ orderData: mainData.filter(x=>(x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
//            (x.UserType).toString().toLowerCase().indexOf(searchText) > -1||
//            (x.Stage).toString().indexOf(searchText) > -1||
//            (x.hours).toString().indexOf(searchText) > -1||
//            (x.jobcode).toString().toLowerCase().indexOf(searchText)> -1)});
//       }
//       AssignOnPress=(value)=>{
//           if(value==true){

//             Alert.alert(
//                 'Alert ',
//                 'Job Assigned',
//                 [
          
//                   { text: 'OK', onPress: () => this.props.navigation.navigate('JobAssignment')},
                  
            
//                 ]
                
//               );
//           }else if(value==false){
//              this.props.navigation.navigate("JobAssign") 

//           }
    
//   }

    
//     render() {
//         const { dimensions } = this.state;
//         const { search } = this.state;
//         const { isLoading } = this.state;
//        var NavigationBoolValue= this.props.navigation.getParam('JobAssignBool')
//        console.log("NavigationBoolValue***",NavigationBoolValue)
//         return (


//           <SafeAreaView style={{
//             flex: 1,
//             backgroundColor: "white",
          
        
//         }}>
//             <StatusBar hidden={false} backgroundColor={"#008BD0"} />
//             <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//                 }} />
//             <View style={{ height:'9%',backgroundColor: 'transparent', }}>
//                     <DrawerHeader name="Job Assignment" openDrawer={this.props.navigation} status={false} notification={true}/>  
//                     </View>
                
                
                
//                 <View style={{height: '7%', width: '98%',justifyContent:"center",paddingHorizontal:10}}>
//                 <TextInput style={{fontSize:17}}
//                     placeholder="Search"
//                     underlineColorAndroid = "grey"
//                     multiline={true}
//                     onChangeText={(text) => { this.updateSearch(text)}}
//                 />
//                 </View>
//                 <View style={{ height: '9%', width: '100%',
//                  backgroundColor: "transparent",justifyContent:"center",alignItems:"center"}}>


// <Picker
//   selectedValue={this.state.language}
//   placeholder="Select Job Number"
//   style={{ width:('100%'),  }}
//   mode="dropdown"
//   onValueChange={(itemValue, itemIndex) =>
//     this.setState({ language: itemValue })
//   }>
//   <Picker.Item label="Select Technician" value="Select Technicians" />
//   <Picker.Item label="All Technician" value="All Technician" />
//   <Picker.Item label="Mechanical technician" value="Mechanical Technician" />
//   <Picker.Item label="Electrical Technician" value="Electrical Technician" />
// </Picker>

// </View>
//                 <View style={{height: '6%', width: '100%', backgroundColor: '#0288d5', alignItems:"center",
//             flexDirection: "row", justifyContent: "space-around", }}>
//                     <Text style={styles.text}>Tech Name</Text>
//                     <Text style={styles.textView}>Category</Text>
//                     <Text style={styles.TextView}>Assign</Text>
//                     <Text style={styles.TextmainView}>Completed Jobs</Text>
//                 </View>
       
//                 <View style={{height:'60%', width: '100%', backgroundColor: "white" }}>

//                     <FlatList data={this.state.mydata}
//                         renderItem={({ item }) => (
//                             <View style={styles.FlatListView}>
//                                 <Text style={{ width: '25%', height: '100%',padding: 10,
//                                 textAlign:"center",backgroundColor:"white"}}>{item.UserName}</Text>
//                                 <Text style={{ width: '28%', height: '100%', padding: 10,
//                                 textAlign:"center",backgroundColor:"white"}}>{item.UserType}</Text>
                           
                             
//                                 <View style={{width:'20%',height:'90%',backgroundColor:'#0288d5',justifyContent:"center",alignItems:"center"
//                                 }}>
//                                        <TouchableOpacity onPress={() => this.AssignOnPress(NavigationBoolValue)}>
                                           
// <Text style={{ color: 'white',justifyContent:"center", textAlign:"center"}}>Assign </Text>
// </TouchableOpacity>
// </View> 

// <Text style={{ width: '30%', height: '100%',padding: 10,textAlign:"center",backgroundColor:"white"}}>
//                                     {item.CompletedJobs}</Text>
//                             </View>
                        
//                         )} >

//                     </FlatList>
                 
//                 </View>
//                 <View style={{ height:'9%',backgroundColor: 'transparent' }}>
//         <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}  navigate={this.props.navigation.navigate}>
//          </BottomTabNavigator>
//                        </View>
                

//             </SafeAreaView>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//        flexDirection: 'column',
//         width: dwidth,
//         height: dheight,
//         backgroundColor: "white",
        
//     },
//     mainView:{
        
//             width: dwidth, 
//             height: dheight*0.06,
//             backgroundColor: '#0288d5', 
//             alignItems:"center",
//             flexDirection: "row",
//             justifyContent: "space-around", 
            
        
//     },
//     TextmainView:{
//         width: '30%',
//         height: '100%',
//         color:"white",
//        paddingTop:10,
//         textAlign:"center",
        
//     },
//     TextView:{
//         width: '25%',
//         height: '100%',
//         color:"white",
//        paddingTop:10,
//         textAlign:"center",
        
//     },
//     textView:{
//         width: '30%',
//         height: '100%',
//         color:"white",
//        paddingTop:10,
//         textAlign:"center",
        
//     },
//     text:{
//         width: '25%',
//         height: '100%',
//         color:"white",
//        paddingTop:10,
//         textAlign:"center",
        
//     },
    
// FlatListView:{
//  marginTop: '1%', 
//  width: dwidth,
//    flex: 1,
//   justifyContent: 'center',
//    borderBottomColor: "#d3d3d3",
//     borderBottomWidth: 1,
//     flexDirection: "row", 
//     justifyContent: "space-around"
    
// },
// });



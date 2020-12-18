
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
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-community/picker';
import {AppStorage, key} from '../utils/AppStorage';

import SearchInput, { createFilter } from 'react-native-search-filter';
// import AppButton from "../CustomComponent/ButtonComp"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import { Label } from 'native-base';

import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import CompletedJobs from './CompletedJobs';
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
const KEYS_TO_FILTERS = ['UserName', 'UserType','CompletedJobs','ActiveJobCode',];
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
            mainData:[],
            updatedData:[],
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
            DataSearch: "",
            country:'uk',
            item:null,
            page:0,
            limit:10,
            searchTerm: ''

        }
    }
componentDidMount(){
   
this.fetchTechnicianDepartment();
this.fetchTechnicianDetail();


this.setState({
    SelectTechnician:"All Technician"
})

}


fetchTechnicianDepartment = async () => {
    console.log('inside main method');

    try {
         this.toggleLoader(true);
        console.log('inside try');
        let json_response = await AuthService.getTechnicianDepartments(0,"User Type",1,40,"CreatedOn",true,true);
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

          

        this.setState({
            Data:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
            mainData:json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse,
        })
        console.log('Guri************************', this.state.mainData);
      
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
  




 
  

// 


}





toggleLoader = (val) => {
    this.setState(({ isLoading: val }));
};


searchUpdated(term) {
    // this.setState({ searchTerm: term ,
    //        })


        this.setState({
    updatedData : this.state.mainData.filter(createFilter(term, KEYS_TO_FILTERS))
 } )
        
   


  }


    updateSearch = (search) => {
        let searchText = search.toLowerCase();

        console.log("in update Search&&&&&&&&&&&&&&&&&",this.state.mainData.filter(search))
        this.setState({
        //    updateData: this.state.mainData.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
        //         // (x.UserType).toLowerCase().indexOf(searchText) > -1 ||
        //         //  (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
        //         (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
        //          (x.ActiveJobCode).toString().toLowerCase().indexOf(searchText) > -1)

// updatedData:this.state.mainData.filter(x=>x===searchText)


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
        console.log(this.state.selectDepartment)
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
        
        // let myUsers = this.state.technicianType.map((myValue,myIndex)=>{
        //     return(
        //     <Picker.Item label={myValue.UserType } value={myIndex} key={myIndex}/>
        //     )
        //     });
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
                        {/* <TextInput
                            placeholder="Search"
                            underlineColorAndroid={'#999999'}
                            onChangeText={(text) => { this.updateSearch(text) }}
                            style={styles.searchbarTextInput}
                        /> */}

<SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchbarTextInput}

          placeholder="Search"
          />
                    </View>
                

                
                 
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
        width:'100%',
        height: '8%',
        backgroundColor: "#ffffff",
        
    },
    searchbarTextInput: {
        height: '100%',
        width: '90%',
        marginHorizontal: '4%',
        backgroundColor: "#ffffff",
        padding: '1.5%',
        fontSize: hp('1.9%'),
        borderBottomColor:'#999999',
        borderBottomWidth:1
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
         marginTop:'2%',
        flexDirection: "row",
        width: '100%',
        height: '9%',
        backgroundColor: "#008AD2"
    },
    viewTechnicianName: {
        height: "100%",
        width: '25%',
        
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
        backgroundColor: "transparent"
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
    searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        width:''
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
//                         <TextInput
//                             placeholder="Search"
//                             underlineColorAndroid={'#999999'}
//                             onChangeText={(text) => { this.updateSearch(text) }}
//                             style={styles.searchbarTextInput}
//                         />

                   
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


// })







































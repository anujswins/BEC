

import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import DrawerHeader from '../CommonComponents/DrawerHeader';
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
    FlatList
} from 'react-native';
// import StackHeader from '../StackHeader/StackHeader'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { AppStorage, key } from '../utils/AppStorage';
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

// const mainData = [
//     { id: 'BEC-2550', jobcode: 'j-65548', Name: 'Mac', Stage: 1, hours: 2 },
//     { id: 'BEC-2553', jobcode: 'j-65548', Name: 'motor', Stage: 3, hours: 2 },
//     { id: 'BEC-2554', jobcode: 'j-65548', Name: 'testing', Stage: 4, hours: 5 },
//     { id: 'BEC-2555', jobcode: 'j-65548', Name: ' motor', Stage: 4, hours: 5 },
//     { id: 'BEC-2556', jobcode: 'j-65548', Name: 'motor', Stage: 4, hours: 5 },
//     { id: 'BEC-2557', jobcode: 'j-65548', Name: 'Mac ', Stage: 4, hours: 5 },
//     { id: 'BEC-2558', jobcode: 'j-65548', Name: 'testing', Stage: 4, hours: 5 },






// ];


const AssignButtonView = ({ item, assignedJobcode, navigation,jobId }) => {
//   console.log("assigned Job code**********",assignedJobcode)
    
//   console.log('Current JobCode**********',item.JobCode)
    
 if(assignedJobcode===undefined)

    {
    
    // alert("assin enabled")

    return (

        <TouchableOpacity style={{
            width: '22%', height: '80%', backgroundColor: '#0288d5', marginHorizontal: 4,
            justifyContent: "center", alignItems: "center"
        }}
       onPress={()=>navigation.navigate("JobAssign") }
        >
            <Text style={{ color: '#fff', justifyContent: "center", textAlign: "center" }}>Assign </Text>

        </TouchableOpacity>



    );


    
        
    }
    else if ( item.JobCode === assignedJobcode) {
        AppStorage.saveKey(key.TECHNICIAN_ASSIGNED_JOB_ID, JSON.stringify(item.JobId)).then(() => {
           
        });
    console.log("show view button ")
        return (

            <TouchableOpacity style={{
                width: '22%', height: '80%', backgroundColor: '#0288d5', marginHorizontal: 4,
                justifyContent: "center", alignItems: "center"
            }}
                onPress={() => navigation.navigate("JobDetail",{JobId:item.JobId})}>
                {/* <Text style={{ color: 'white', justifyContent: "center", textAlign: "center" }}>View  </Text> */}
                <View style={{ height:'90%',color: '#000000', justifyContent: "center",alignItems:'center' }}>
                <Text style={{ color: '#fff' }}>View </Text>
                </View>
                <View  style={{ height:'10%',width:'100%',backgroundColor:'#000'}}></View>
            </TouchableOpacity>


        );


    }

    else if (item.JobCode != assignedJobcode) {
        return (

            <View style={{flex:1,
                width: '22%', height: '80%', backgroundColor: '#0288d5', marginHorizontal: 4,
                justifyContent: "center", alignItems: "center"
            }}
            // onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }
            >
                <View style={{ height:'90%',color: '#000000', justifyContent: "center",alignItems:'center' }}>
                <Text style={{ color: '#000000' }}>Assign </Text>
                </View>
              <View  style={{ height:'10%',width:'100%',backgroundColor:'#000'}}></View>
            </View>



        );

    } 

    else {
        alert("inside else")

      

    }



}




export default class CurrentJobs extends Component {



    constructor() {
        super();

        this.state = {
            isLoading: 'false',
            orderData: [],
            isFeebackIcon: true,
            isMenuIcon: true,
            stageId: 0,
            jobTypeId: 0,
            machineTypeId: 0,
            startDate: '',
            endDate: '',
            clientId: 0,
            assignToId: 0,
            status: 'In progress ',
            orderBy: 'CreatedOn',
            orderByDescending: true,
            allRecords: false,
            userId: '',
            assignedJobcode: '',
            page:1,
            limit:100,
            mainData : [],
            technician_list:[]

        }
    }
    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            orderData:this.state.mainData.filter(x => (x.EquipmentId).toString().toLowerCase().indexOf(searchText)> -1 ||
            (x.JobCode).toString().toLowerCase().indexOf(searchText) > -1 ||
            (x?.FirstName+' '+x?.LastName).toString().toLowerCase().indexOf(searchText) > -1 ||
            (x.Stage).toString().indexOf(searchText) > -1 ||
            (x.Hours).toString().toLowerCase().indexOf(searchText) > -1),
        });
    }
    componentDidMount() {
        this.fetchTechnicianDetail();
        this.Fun_GetAllRecords();

    }
    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };


    ViewOnclick = () => {

        this.props.navigation.navigate("JobDetail");

    }



    fetchTechnicianDetail = async () => {


      
        try {
            //  this.toggleLoader(true);fetchTechnicianDepartment



            
          
          
        
            let json_response1 = await AuthService.getTechnicianDetail(this.state.page,this.state.limit,"CreatedOn",true,true);
     let technician_list = json_response1.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse
            //  console.log("technician list data@@@@@@@@@@@@@@@@@@@@@@",technician_list)


             var response = await AppStorage.getLoginResponse();
            console.log("userId", response.userResponse.UserId);
            technician_list.map(item => {


                if (item.UserId === response.userResponse.UserId) {


            console.log("Lamba=================",item)
                    this.setState({
                        assignedJobcode: item.ActiveJobCode
                    })

                    AppStorage.saveKey(key.ASSIGNED_JOB_INFO, JSON.stringify(item)).then(() => {
                        // this.props.navigation.navigate('Dashboard');
                    });

                }


            }

            );
            this.setState({
                userId: response.userResponse.UserId,
            })
            // console.log("technician list &&&&&&&&&&&&&&&&&&&", this.state.assignedJobcode);
           
           
        } catch (e) {
    
            // console.log('GetAllRecords catch', e.response.data);
        } finally {
            // this.toggleLoader(false);
            // console.log('GetAllRecords finally print hua');
        }
    
    };


    Fun_GetAllRecords = async () => {


        try {
            this.toggleLoader(true);
            // let technician_list = await AppStorage.getAllTechnician();

            // 0 0 0   0 0  CreatedOn true true



            let json_response = await AuthService.SuperviseCurrentJobs( this.state.status, this.state.orderBy, 
                this.state.orderByDescending, this.state.allRecords,this.state.page,this.state.limit);



              console.log('gurjeet respo#####################################==', json_response.data.data.jobsMainResponse);

            // mainData=json_response.data.Permissions;
            if (json_response.data.StatusCode === 200) {
                // Alert.alert("data get successfully ");
                //  console.log('response condition+++++++++', json_response.data.data.jobsMainResponse);
                this.state.orderData = json_response.data.data.jobsMainResponse.jobResponse;
                this.state.mainData=json_response.data.data.jobsMainResponse.jobResponse;
                // console.log('cht_list==========', this.state.orderData);
                // this.GetData(myrespo);

            }

        } catch (e) {

            // Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };

    render() {
        const { dimensions } = this.state;
        const { search, isLoading } = this.state;

        return (


            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",


            }}>
                <StatusBar hidden={false} backgroundColor={"#008BD0"} />
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }} />

                <View style={{ height: '9%', backgroundColor: 'transparent', }}>
                    <DrawerHeader name="CurrentJobs" openDrawer={this.props.navigation} status={false} notification={true} />
                </View>



                <View style={{ height: '7%', width: '100%', justifyContent: "center", paddingHorizontal: 10 }}>
                    <TextInput style={{ fontSize: 17 }}
                        placeholder="Search"
                        underlineColorAndroid="grey"
                        onChangeText={(text) => { this.updateSearch(text) }}
                    />
                </View>
                <View style={{
                    height: '6%', width: '100%', backgroundColor: '#0288d5', alignItems: "center",
                    flexDirection: "row", justifyContent: "space-around",
                }}>
                    <Text style={styles.TextmainView}>Equip Id.</Text>
                    <Text style={styles.TextmainView}>Job Code</Text>
                    <Text style={styles.TextmainView}>Stage</Text>
                    <Text style={styles.TextmainView}>Assign Job </Text>
                </View>
                <View style={{ height: '69%', width: '100%', backgroundColor: "white" }}>

                    <FlatList
                        data={this.state.orderData}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({ item }) => {
                        // console.log("item****", item.JobCode)
                            return (
                                <View style={styles.FlatListView}>
                                    <Text style={{ width: '26%', height: '100%', padding: 10, textAlign: "center" }}>{item.EquipmentId}</Text>
                                    <Text style={{ width: '26%', height: '100%', padding: 10, textAlign: "center" }}>{item.JobCode}</Text>

                                    <Text style={{ width: '23%', height: '100%', padding: 10, textAlign: "center" }}>{item.StageId}</Text>


                                    {/*                                 
                {item.JobCode=== this.state.assignedJobcode  ?   



                 <TouchableOpacity style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
                                justifyContent:"center",alignItems:"center"}}
                                onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }>
<Text style={{ color: 'white',justifyContent:"center", textAlign:"center"}}>View  </Text>

</TouchableOpacity>

 :

<View style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
justifyContent:"center",alignItems:"center"}}>
<Text style={{ color: '#000000',justifyContent:"center", textAlign:"center"}}>Assign Job</Text>

</View>
} */}

                                    <AssignButtonView item={item} assignedJobcode={this.state.assignedJobcode} navigation={this.props.navigation} jobId={item.JobId}/>

                                </View>
                            )
                        }




                        }


                    >

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
        width: '25%',
        height: '100%',
        color: "white",
        padding: 10,
        textAlign: "center"
    },
    FlatListView: {
        marginTop: '1%',
        width: dwidth,
        flex: 1,
        // justifyContent: 'center',
        borderBottomColor: "#d3d3d3",
        borderBottomWidth: 1,
        flexDirection: "row",
         justifyContent: "space-around",
         alignItems:'center'

    },
});



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
            userTypeId: 0,
            NoJobAssigned: true,
            page: 0,
            limit: 0,
            orderBy: "CreatedOn",
            orderByDescending: true,
            allRecords: true,
            isLoading: false,

        }
    }


    // componentDidMount = async () => {
    //     this.Fun_GetJobAllRecords();
    //     this.fetchTechnicianDepartment();
    //     this.setState({
    //         data: "All Technician"
    //     })
    // };

    componentDidMount(){
       
        this.fetchTechnicianDepartment();
        this.setState({
            data: "All Technician"
        });
        this.Fun_GetJobAllRecords();
        
        }




    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };

    Fun_GetJobAllRecords = async () => {
        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseAssignJobs(this.state.userTypeId,
                this.state.NoJobAssigned, this.state.page, this.state.limit, this.state.orderBy,
                this.state.orderByDescending, this.state.allRecords);

            console.log('GetJobAllRecords try==', json_response.data.data.
                jobsAssignmentMainResponse.jobsAssignmentResponse);



            if (json_response.data.StatusCode === 200) {
                this.state.orderData = json_response.data.data;
                this.state.mydata = json_response.data.data.jobsAssignmentMainResponse.jobsAssignmentResponse;




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

            Alert.alert(e.response.data);
            console.log('GetJobAllRecords catch', e.response);
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
            console.log('inside try', json_response);
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

            console.log("Gurjeet$$$$$$$$$$$$$$$$$$$$$", this.state.technicianType)

        } catch (e) {


            console.log('GetAllRecords catch', e.response.data);
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
        console.log("Updated list", this.state.updatedData)
    }
    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            mydata: this.state.mydata.filter(x => (x.UserName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1)
        });
    }

    render() {
        const { dimensions } = this.state;
        const { search } = this.state;
        const { isLoading } = this.state;
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
                        keyExtractor={(item)=> item.UserId}

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
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("JobAssign") }}>

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



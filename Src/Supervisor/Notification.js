import React, {Component} from 'react';
import {
<<<<<<< HEAD
  ScrollView,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  Alert,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { Container, Header, Content, Button } from 'native-base';
=======
    ScrollView,
    Text,
    TextInput,
    View,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Image,
<<<<<<< HEAD
    StatusBar
} from 'react-native';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const screen = Dimensions.get("screen");
=======
    Alert,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import {Container, Header, Content, Button} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {showMessage} from 'react-native-flash-message';
import index from 'react-native-calendars/src/expandableCalendar';
import {ListItem} from 'react-native-elements';
import {AppStorage} from '../utils/AppStorage';


const screen = Dimensions.get('screen');
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
<<<<<<< HEAD
let colors = ['#e8f7ff', '#fafafa']
const tmparray = [];

export default class Notification extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      isAccepted: false,
      isCancel: false,
      Accepted: false,
      Cancel: false,
      Message:true,
      action:'',
      mydata:[],
      "userId": 39,
      "type": "USER",
      "page": 1,
      "limit": 10,
      "orderBy": "CreatedOn",
      "orderByDescending": true,
      "allRecords": true,
      "notificationId": 601,
      "userName": "parshantwins@gmail.com",

      tmparray: [],


    }
    this.create = {
      "userId": 39,
      "jobId": 68,
      "action": "Accepted",
    
=======
let colors = ['#e8f7ff', '#fafafa'];


export default class Notification extends Component {
    constructor(props) {
        super();
        this.state = {
<<<<<<< HEAD
=======
            isLoading: false,
            tmparray: [],
            userId: 39,
            type: 'USER',
            page: 1,
            limit: 10,
            orderBy: 'CreatedOn',
            orderByDescending: true,
            allRecords: true,
            notificationId: 601,
            jobId:68,
            respo_storage:'',
            storage_data:''
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

            tmparray: [
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    }
  }


<<<<<<< HEAD
  NotificationDecision = async (MessageType) => {
    if (MessageType === "job assigned") {
      this.setState({
        Accepted: true
      })
      console.log("get Accepted", this.state.Accepted)
    }
=======
<<<<<<< HEAD
                { id: "JN-62091", jobAssign: "This job has been assigned to vikramjeet singh", Jobcreate: "This job has been assigned to Arsh" },
                { id: "JN-62092", jobAssign: "This job has been assigned to KomalRani",  Jobcreate: "This job has been assigned to harsh" },
                { id: "JN-62093", jobAssign: "This job has been assigned to Anupreet",   Jobcreate: "This job has been assigned to harinder" },
                { id: "JN-62094", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate: "This job has been assigned to prince" },
                { id: "JN-62095", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Sachin" },
                { id: "JN-62096", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Jashan" },
                { id: "JN-62097", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Chand" },
                { id: "JN-62098", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Babu" },
                { id: "JN-62099", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Harshpreet" },
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                { id: "JN-62010", jobAssign:"This job has been assigned to swarnjeet", Jobcreate: "This job has been assigned to preet" },
                { id: "JN-62011", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to anil" },
                { id: "JN-62012", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to sumit" },

<<<<<<< HEAD
    else {
      console.log("Exception ")
    }
  }
=======
                { id: "JN-62013", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                { id: "JN-62014", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                { id: "JN-62015", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
=======
        };
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    }

    componentDidMount = async () => {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        let respo_storage = await AppStorage.createJobEquipId();                                                //GetAll_Records_Data
        console.log('notification_pr_data=============', respo_storage.jobResponse.JobId);

<<<<<<< HEAD
  componentDidMount = async () => {
    // this.NotificationDecision();
    this.Fun_GetNotification();
    // this.JobAssigned();
    // this.MarkAsRead();

  };


  toggleLoader = (val) => {
    this.setState(({ isLoading: val }));
  };
  showAlert = () => {
    Alert.alert(

      'Alert ',
      'Job Accepted',
      [

        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('JobAssignment')
        },


      ]

    );






  }

  job_accepeted_func = () => {
 
    this.JobAssigned();


  }



  Fun_GetNotification = async () => {

    try {
      this.toggleLoader(true);
      let json_response = await AuthService.SupNotificationScreen(this.state.userId,
        this.state.type, this.state.page, this.state.limit, this.state.orderBy,
        this.state.orderByDescending, this.state.allRecords);
      console.log('GetNotification try==', json_response.data.data.notificationMainResponse);

      if (json_response.data.StatusCode === 200) {
        console.log('GetNotification try==', json_response.data.data.notificationMainResponse.
          notificationResponse);
        this.setState({
          tmparray: json_response.data.data.notificationMainResponse.
            notificationResponse


            
        });
        
        // console.log("hey", this.state.tmparray)
      }


    }
    catch (e) {
      console.log('GetNotification  catch', e.response);
    } finally {
      this.toggleLoader(false);
      console.log('GetNotification finally print hua');
    }
  }

  Fun_GetJobAssignRecords = async () => {
    try {
      this.toggleLoader(true);
      let json_response = await AuthService.AssignmentJobs(this.state.userId,
        this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
        this.state.allRecords);
      if (json_response.data.StatusCode === 200) {
        console.log('GetJobAssignRecords try==', json_response.data.data.JobAssignMainDetail.jobAssignDetail);
        this.state.mydata = json_response.data.data.JobAssignMainDetail.jobAssignDetail;
        console.log("hey", this.state.mydata)

      }
    }
    catch (e) {

      Alert.alert(e.response);
      console.log('GetJobAssignRecords catch', e.response);
    } finally {
      this.toggleLoader(false);
      console.log('GetJobAssignRecords finally print hua');
    }
  };
  //Mark As Read
  MarkAsRead = async () => {
  
    try {
      this.toggleLoader(true);
      let json_response = await AuthService.MarkAsRead(this.state.notificationId, this.state.userName);
      if (json_response.data.StatusCode === 200) {
        console.log('markAsread method respo==================', json_response.data.Message);
      //  var index = json_response.indexOf()
        // if (index !== -1) {
        //   json_response.splice(index, 1);
        //    this.setState({Message:json_response});
        //   this.setState({Message:false})       
        //  }
      }
    }
    catch (e) {
      Alert.alert(e.response);
      console.log('Get Job error catch', e.response);
    } finally {
      this.toggleLoader(false);
      console.log('Mark as read exception');
    }
  };


  //Notification
  Fun_GetJobAssignRecords = async () => {
    try {
      this.toggleLoader(true);
      let json_response = await AuthService.AssignmentJobs(this.state.userId,
        this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
        this.state.allRecords);
      if (json_response.data.StatusCode === 200) {
        console.log('GetJobAssignRecords try==', json_response.data.data.JobAssignMainDetail.jobAssignDetail);
        this.state.mydata = json_response.data.data.JobAssignMainDetail.jobAssignDetail;
        console.log("hey", this.state.mydata)

      }
    }
    catch (e) {

      Alert.alert(e.response);
      console.log('GetJobAssignRecords catch', e.response);
    } finally {
      this.toggleLoader(false);
      console.log('GetJobAssignRecords finally print hua');
    }
  };
  JobAssigned = async () => {
    try {
      this.toggleLoader(true);
      let json_response = await AuthService.AssignedJobs(this.create.userId,
        this.create.jobId, this.create.action);
      console.log("get Assigned=================", json_response.data.Message)
      if (json_response.data.StatusCode === 200) {
        // console.log('GetJobAssignRecords try==', json_response.data.Message);
        Alert.alert( json_response.data.Message)
        this.MarkAsRead()


      }

    } catch (e) {

      Alert.alert(e.response);
      console.log('GetJobAssignRecords catch', e.response);
    } finally {
      this.toggleLoader(false);
      console.log('GetJobAssignRecords finally print hua');
    }
  };
  render() {
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
          <DrawerHeader name="Notification" openDrawer={this.props.navigation} status={false} />
        </View>

        <View style={{ height: '82%', width: '100%' }}>
          <ScrollView vertical={true}
            showsVerticalScrollIndicator={false}>
            {
              this.state.tmparray.map((item, key) => (
                <View>
                
                
                  <TouchableOpacity>
                  <View style={{
                    height: 'auto', width: wp('100%'),  flexDirection: "row",  backgroundColor: colors[key % colors.length],borderBottomColor:"grey",
                    borderBottomWidth:1,
                    alignItems: "center"
                  }}>
                    <View style={{
                      height: 'auto', width: wp('20%'), backgroundColor: "transparent",
                      alignItems: "center", justifyContent: 'center'
                    }}>
                      <Image style={{ height: hp('5%'), width: wp('10%'), }}
                        source={require('../../assets/client_feedback.png')}></Image>

=======
                { id: "JN-62010", jobAssign:"This job has been assigned to swarnjeet", Jobcreate: "This job has been assigned to preet" },
                { id: "JN-62011", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to anil" },
                { id: "JN-62012", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to sumit" },

                { id: "JN-62013", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                { id: "JN-62014", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                { id: "JN-62015", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },

<<<<<<< HEAD


=======

        // this.state.storage_data=respo_storage.data.jobsMainResponse.jobResponse

        this.Fun_GetNotification();


    };

    toggleLoader = (val) => {
        this.setState(({isLoading: val}));
    };
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    Fun_GetNotification = async () => {

<<<<<<< HEAD
            ],
=======

        try {
            this.toggleLoader(true);

            let json_response = await AuthService.SupNotificationScreen(this.state.userId,
                this.state.type, this.state.page, this.state.limit, this.state.orderBy,
                this.state.orderByDescending, this.state.allRecords);
            var myarray = json_response.data.data.notificationMainResponse.notificationResponse;
            console.log('Fun_GetNotification my whole arraresponse-----------------',myarray);


            var myStatus_code = json_response.data.StatusCode;

            var data_array = [];

            if (myStatus_code === 200) {
                this.toggleLoader(false);
                //console.log('myStatus_code========success hua');

                myarray.map(item => {
                    var a = item.Message;
                    var b = item.MessageType;
                    data_array.push({ab: {a: item.Message, b: item.MessageType}});


                    // console.log('data_array ================', data_array);

                });
                this.setState({
                    tmparray: data_array,
                });


            }
            console.log('sabse niceh ================', this.state.tmparray);


        } catch (e) {
            console.log('GetNotification  catch', e);
        } finally {

            console.log('Fun_GetNotification finally print hua====');
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        }
    };




    JobAssigned = async (value_click) => {


        try {
            // this.toggleLoader(true);

            let json_response = await AuthService.AssignedJobs(this.state.userId,
                this.state.jobId, value_click);
            var myarray = json_response.data.data;
            console.log('JobAssigned  main response=====', myarray);



            //
            // if (myStatus_code === 200) {
            //
            //
            //
            // }



        } catch (e) {
            console.log('JobAssigned  catch', e);
        } finally {

            console.log('JobAssigned finally print hua====');
        }
    };



    render() {
<<<<<<< HEAD
        return (

          <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
          
        
        }}>
            <StatusBar hidden={false} backgroundColor={"#008BD0"} />
    
            <View style={{ height:'9%',backgroundColor: 'transparent', }}>
                    <DrawerHeader name="Notification" openDrawer={this.props.navigation} status={false}/>  
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                    </View>
                    <View style={{
                      height: 'auto', width: wp('55%'), backgroundColor: "transparent",
                      alignItems: "center"
                    }}>
                      <Text style={{ padding: 15 }}> {item.id}{item.Message}</Text>

                    </View>

                    {item.MessageType === 'job assigned' ?

                      <View style={{
                        height: 'auto', width: wp('25%'), backgroundColor: "transparent",
                        alignItems: "center"
                      }}>


                        <View style={{
                          height: 'auto', width: wp('25%'), backgroundColor: "transparent",
                          alignItems: "center"
                        }}>
                          
                  {this.state.Message ?
                          <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.job_accepeted_func}>
                            <Text style={{ fontSize: hp('1.7%'), paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), color: '#ffffff', borderBottomWidth: 4, borderBottomColor: '#0F3276', backgroundColor: '#008BD0' }}>
                              Accept
                                        </Text>
                          </TouchableOpacity>
                          :null}

<<<<<<< HEAD


                        </View>


                        <View style={{
                          height: 'auto', width: wp('25%'), backgroundColor: "transparent",
                          alignItems: "center"
                        }}>
                       {this.state.Message ?
                          <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.job_accepeted_func}>
                            <Text style={{ fontSize: hp('1.7%'), paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), color: '#ffffff', borderBottomWidth: 4, borderBottomColor: '#0F3276', backgroundColor: '#008BD0' }}>
                              Cancel
                                        </Text>
                          </TouchableOpacity>
                          :null}


                        </View>

                      </View>
                      :
                      <Text>

                      </Text>
                    }
    
                  </View>
                  </TouchableOpacity>
                
                


=======
                    <View style={{ height: '82%', width: '100%' }}>
=======

        const {isLoading} = this.state;
        console.log('appstoarge_data@@@@@@@1111111111@@@@@@',this.state.storage_data)
        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white',


            }}>
                <StatusBar hidden={false} backgroundColor={'#008BD0'}/>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }}/>
                <View style={{height: '9%', backgroundColor: 'transparent'}}>
                    <DrawerHeader name="Notification" openDrawer={this.props.navigation} status={false}/>
                </View>

                <View style={{height: '82%', width: '100%'}}>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
                    <ScrollView vertical={true}
                                showsVerticalScrollIndicator={false}>
                        {
<<<<<<< HEAD
                            this.state.tmparray.map((item, key) => (
                                <View>
                                     <View style={{
                                       height: hp('8%'), width: wp('100%'), backgroundColor: "#f0f8ff", flexDirection: "row",
                                        alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
                                    }}>  
                                        <Image style={{height: hp('5%'), width: wp('10%'),}} source = {require('../../assets/client_feedback.png')}></Image>
                                <Text style={{padding:15}}> {item.id}{item.Jobcreate}</Text>
                                        

                                    </View>
                                     <View style={{
                                        height: hp('8%'), width: wp('99%'), backgroundColor: "white", flexDirection: "row",
                                        alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
                                    }}>
                                        <Image style={{height: hp('5%'), width: wp('10%'),}} source = {require('../../assets/client_feedback.png')}></Image>
                                <Text style={{padding:15}}> {item.id}{item.jobAssign}</Text>
                                    
=======
                            this.state.tmparray.map((item, key) => {
                                    // console.log('map_data', item.ab.b);

                                    return (
                                        <View key={key}>

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                                            <TouchableOpacity>
                                                <View style={{
                                                    height: 'auto',
                                                    width: wp('100%'),
                                                    flexDirection: 'row',
                                                    backgroundColor: colors[key % colors.length],
                                                    borderBottomColor: 'grey',
                                                    borderBottomWidth: 1,
                                                    alignItems: 'center',
                                                }}>
                                                    <View style={{
                                                        height: 'auto', width: wp('20%'), backgroundColor: 'transparent',
                                                        alignItems: 'center', justifyContent: 'center',
                                                    }}>
                                                        <Image style={{height: hp('5%'), width: wp('10%')}}
                                                               source={require('../../assets/client_feedback.png')}></Image>

                                                    </View>
                                                    <View style={{
                                                        height: 'auto', width: wp('55%'), backgroundColor: 'transparent',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{padding: 15}}>{item.ab.a}</Text>

                                                    </View>

                                                    {item.ab.b === 'job assigned' ?

                                                        <View style={{
                                                            height: hp('8%'), width: wp('25%'), backgroundColor: 'pink',
                                                            alignItems: 'center',
                                                        }}>


                                                            <TouchableOpacity onPress={this.JobAssigned('Accepted')}>
                                                                <Text style={{
                                                                    fontSize: hp('1.7%'),
                                                                    paddingHorizontal: hp('2%'),
                                                                    paddingVertical: hp('1%'),
                                                                    color: '#ffffff',
                                                                    borderBottomWidth: 4,
                                                                    borderBottomColor: '#0F3276',
                                                                    backgroundColor: '#008BD0',
                                                                }}>
                                                                    Accept
                                                                </Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={this.JobAssigned('Decline')}>
                                                                <Text style={{
                                                                    fontSize: hp('1.7%'),
                                                                    paddingHorizontal: hp('2%'),
                                                                    paddingVertical: hp('1%'),
                                                                    color: '#ffffff',
                                                                    borderBottomWidth: 4,
                                                                    borderBottomColor: '#0F3276',
                                                                    backgroundColor: '#008BD0',
                                                                }}>
                                                                    Cancel
                                                                </Text>
                                                            </TouchableOpacity>


                                                        </View>
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                                                        :
                                                        <Text>
                                                            anuj
                                                        </Text>
                                                    }

                                                </View>
                                            </TouchableOpacity>


<<<<<<< HEAD
                </View>



              ))}



          </ScrollView>

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
    width: dwidth,
    height: dheight,
    backgroundColor: "white"
  },
=======
                                        </View>


                                    );
                                },
                            )}


                    </ScrollView>

                </View>

                <View style={{height: '9%', backgroundColor: 'transparent'}}>


                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}
                                        navigate={this.props.navigation.navigate}>
                    </BottomTabNavigator>
                </View>

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: dwidth,
        height: dheight,
        backgroundColor: 'white',
    },
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

});

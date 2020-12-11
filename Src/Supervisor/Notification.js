import React, { Component } from 'react';
import {
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
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
    

    }
  }


  NotificationDecision = async (MessageType) => {
    if (MessageType === "job assigned") {
      this.setState({
        Accepted: true
      })
      console.log("get Accepted", this.state.Accepted)
    }


    else {
      console.log("Exception ")
    }
  }




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

});
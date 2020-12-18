// import React, { Component } from 'react';
// import {
//     ScrollView,
//     Text,
//     TextInput,
//     View,
//     Button,
//     SafeAreaView,
//     Dimensions,
//     StyleSheet,
//     Image,
//     Alert,
//     StatusBar
// } from 'react-native';
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import DrawerHeader from '../CommonComponents/DrawerHeader';
// import ApiLoader from '../../Src/PopUp/ApiLoader';
// import AuthService from '../../Src/RestClient/AuthService';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// const screen = Dimensions.get("screen");
// const dwidth = Dimensions.get('screen').width;
// const dheight = Dimensions.get('screen').height;

// const tmparray= [];

// export default class Notification extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//                 isLoading:false,
//                 "userId": 1,
//                 "type": "USER",
//                 "page": 1,
//                 "limit": 10,
//                 "orderBy": "CreatedOn",
//                 "orderByDescending": true,
//                 "allRecords": true,
             
//                 // mydata:tmparray,
//             tmparray:[],
//             //  [



//             //     { id: "JN-62091", Message: "This job has been assigned to vikramjeet singh", Jobcreate: "This job has been assigned to Arsh" },
//             //     { id: "JN-62092", Message: "This job has been assigned to KomalRani",  Jobcreate: "This job has been assigned to harsh" },
//             //     { id: "JN-62093", Message: "This job has been assigned to Anupreet",   Jobcreate: "This job has been assigned to harinder" },
//             //     { id: "JN-62094", Message: "This job has been assigned to swarnjeet",  Jobcreate: "This job has been assigned to prince" },
//             //     { id: "JN-62095", Message: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Sachin" },







//             // ],
//         }
//     }
    
//     componentDidMount = async () => {
//       this.Fun_GetNotification();
//     };


//     toggleLoader = (val) => {
//         this.setState(({ isLoading: val }));
//     };


    

//     Fun_GetNotification = async () => {
 
//         try {
//             this.toggleLoader(true);
//             let json_response = await AuthService.SupNotificationScreen(this.state.userId,
//                 this.state.type,this.state.page,this.state.limit,this.state.orderBy,
//                 this.state.orderByDescending,this.state.allRecords);
//                 console.log('GetNotification try==', json_response.data.data.notificationMainResponse);

//                 if (json_response.data.StatusCode === 200) {
//                 console.log('GetNotification try==', json_response.data.data);
//                 this.setState({tmparray : json_response.data.data.notificationMainResponse.notificationResponse});
//                 console.log("hey", this.state.tmparray)
//                 // this.state.tmparray = json_response.data.data.notificationMainResponse;
//                 // console.log("Data Entered", this.state.tmparray)
                

                
            
            
            
            
            
            
//                   }
//           } 
//           catch (e) {
//             //  Alert.alert(e.response);
//             console.log('GetNotification  catch', e.response);
//         } finally {
//             this.toggleLoader(false);
//             console.log('GetNotification finally print hua');
//         }
//     }
//     render() {
//         const { isLoading } = this.state;
//         return (

//           <SafeAreaView style={{
//             flex: 1,
//             backgroundColor: "white",
          
        
//         }}>
//             <StatusBar hidden={false} backgroundColor={"#008BD0"} />
//             <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
//                 }} />
//             <View style={{ height:'9%',backgroundColor: 'transparent', }}>
//                     <DrawerHeader name="Notification" openDrawer={this.props.navigation} status={false}/>  
//                     </View>

//                     <View style={{ height: '82%', width: '100%' }}>
//                     <ScrollView vertical={true}
//                     showsVerticalScrollIndicator={false}>
//                         {
//                             this.state.tmparray.map((item, key) => (
//                                 <View>
//                                      <View style={{
//                                        height: hp('8%'), width: wp('100%'), backgroundColor: "#f0f8ff", flexDirection: "row",
//                                         alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
//                                     }}>  
//                                         <Image style={{height: hp('5%'), width: wp('10%'),}} source = {require('../../assets/client_feedback.png')}></Image>
//                                 <Text style={{padding:15}}> {item.id}{item.Message}</Text>
                                        

//                                     </View>
//                                      <View style={{
//                                         height: hp('8%'), width: wp('99%'), backgroundColor: "white", flexDirection: "row",
//                                         alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
//                                     }}>
//                                         <Image style={{height: hp('5%'), width: wp('10%'),}} source = {require('../../assets/client_feedback.png')}></Image>
//                                 <Text style={{padding:15}}> {item.id}{item.Message}</Text>
                                    

//                                     </View>
                                           


//                                 </View>



//                             ))}
                   

//                 </ScrollView>
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

     
//         width: dwidth,
//         height: dheight,
//         backgroundColor: "white"
//     },

// });





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

const tmparray= [];

export default class Notification extends Component {
    constructor(props) {
        super();
        this.state = {
                isLoading:false,
                isAccepted:false,
                isCancel:false,
                Accepted:false,
                Cancel:false,
                "userId": 39,
                "type": "USER",
                "page": 1,
                "limit": 10,
                "orderBy": "CreatedOn",
                "orderByDescending": true,
                "allRecords": true,
                "notificationId": 601,
                "userName": "parshantwins@gmail.com",
             
            tmparray:[],

       
        }
        this.create={
            "userId": 39,
            "jobId": 68,
            "action":"Accepted"
          }
    }

      
    NotificationDecision = async (MessageType) => {
         if(MessageType==="job assigned"){
            this.setState({
            Accepted:true
        })
        console.log("get Accepted",this.state.Accepted)
         }
       
        
        else{
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
            
            { text: 'OK',
             onPress: () => this.props.navigation.navigate('JobAssignment') },
    
    
          ]
    
        );
        this.JobAssigned();   
    
    
      }

    Fun_GetNotification = async () => {
 
        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SupNotificationScreen(this.state.userId,
                this.state.type,this.state.page,this.state.limit,this.state.orderBy,
                this.state.orderByDescending,this.state.allRecords);
                console.log('GetNotification try==', json_response.data.data.notificationMainResponse);

                if (json_response.data.StatusCode === 200) {
                console.log('GetNotification try==', json_response.data.data.notificationMainResponse.
                notificationResponse);
                this.setState({tmparray : json_response.data.data.notificationMainResponse.
                    notificationResponse});
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
      let json_response = await AuthService.MarkAsRead(this.state.notificationId,this.state.userName);
      if (json_response.data.StatusCode === 200) {
        console.log('GetJobAssignRecords try==', json_response.data.Message);
      

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
        this.create.jobId,this.create.action);
        console.log("get Assigned",json_response)
    
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
            <View style={{ height:'9%',backgroundColor: 'transparent', }}>
                    <DrawerHeader name="Notification" openDrawer={this.props.navigation} status={false}/>  
                    </View>

                    <View style={{ height: '82%', width: '100%' }}>
                    <ScrollView vertical={true}
                    showsVerticalScrollIndicator={false}>
                        {
                            this.state.tmparray.map((item, key) => (
                                <View >
                                     <View style={{
                                       height: hp('8%'), width: wp('70%'), backgroundColor: "#f0f8ff",
                                        flexDirection: "row",
                                        alignItems: "center", borderBottomColor: "#d3d3d3", 
                                        borderBottomWidth: 1,backgroundColor:"transparent"
                                        
                                    }}>  
                                        <Image style={{height: hp('5%'), width: wp('10%'),}}
                                         source = {require('../../assets/client_feedback.png')}></Image>
                                
                                  <Text> {item.id}{item.Message}</Text>  
                            
                               {
                               item.MessageType==='job assigned'?
                               
                                      <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={this.showAlert}>
                                        <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                        Accept
                                        </Text>
                                        <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                        Cancel
                                        </Text>
                                    </TouchableOpacity>
                                     :
                                   <Text style={{color: "white", fontSize:hp('1.7%')}}>
                                        </Text>
                                        }
                                    </View>

                                     <View style={{
                                        height: hp('8%'), width: wp('70%'), backgroundColor: "white", flexDirection: "row",
                                        alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
                                    }}>
                                        <Image style={{height: hp('5%'), width: wp('10%'),}} 
                                        source = {require('../../assets/client_feedback.png')}></Image>
                                <Text style={{padding:15}}> {item.id}{item.Message}</Text>
                                {
                               item.MessageType==='job assigned'?
                                      <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={() => { this.props.navigation.navigate("Notification") }}>
                                        <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                        Accept
                                        </Text>
                                        <Text style={{fontSize:hp('1.7%'),paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                        Cancel
                                        </Text>
                                    </TouchableOpacity>
                                     :
                                        <Text style={{color: "white", fontSize:hp('1.7%')}}>
                                        
                                    </Text>
                                        }
                          
                                     </View>
                                

    


                                </View>



                            ))}

                   

                </ScrollView>

                </View>

                <View style={{ height:'9%',backgroundColor: 'transparent' }}>
                    

        <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}  navigate={this.props.navigation.navigate}>
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
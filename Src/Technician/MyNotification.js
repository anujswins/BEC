import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
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
            isFeebackIcon: true,
            isMenuIcon: true,
            "userId": 1,
            "type": "USER",
            "page": 1,
            "limit": 10,
            "orderBy": "CreatedOn",
            "orderByDescending": true,
            "allRecords": true,
            
            tmparray: [



                // { id: "JN-62091", jobAssign: "This job has been assigned to vikramjeet singh", Jobcreate: "This job has been assigned to Arsh" },
                // { id: "JN-62092", jobAssign: "This job has been assigned to KomalRani",  Jobcreate: "This job has been assigned to harsh" },
                // { id: "JN-62093", jobAssign: "This job has been assigned to Anupreet",   Jobcreate: "This job has been assigned to harinder" },
                // { id: "JN-62094", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate: "This job has been assigned to prince" },
                // { id: "JN-62095", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Sachin" },
                // { id: "JN-62096", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Jashan" },
                // { id: "JN-62097", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Chand" },
                // { id: "JN-62098", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Babu" },
                // { id: "JN-62099", jobAssign: "This job has been assigned to swarnjeet",  Jobcreate:"This job has been assigned to Harshpreet" },

                // { id: "JN-62010", jobAssign:"This job has been assigned to swarnjeet", Jobcreate: "This job has been assigned to preet" },
                // { id: "JN-62011", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to anil" },
                // { id: "JN-62012", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to sumit" },

                // { id: "JN-62013", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                // { id: "JN-62014", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                // { id: "JN-62015", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },


                // { id: "JN-62010", jobAssign:"This job has been assigned to swarnjeet", Jobcreate: "This job has been assigned to preet" },
                // { id: "JN-62011", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to anil" },
                // { id: "JN-62012", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to sumit" },

                // { id: "JN-62013", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                // { id: "JN-62014", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },
                // { id: "JN-62015", jobAssign:"This job has been assigned to swarnjeet", Jobcreate:"This job has been assigned to prince" },





            ],
            
        }}
        componentDidMount = async () => {
            this.Fun_GetNotification();
        };
    
    
        toggleLoader = (val) => {
            this.setState(({ isLoading: val }));
        };
    
    
        
    
        Fun_GetNotification = async () => {
     
            try {
                this.toggleLoader(true);
                let json_response = await AuthService.SupNotificationScreen(this.state.userId,
                    this.state.type,this.state.page,this.state.limit,this.state.orderBy,
                    this.state.orderByDescending,this.state.allRecords);
                    console.log('GetNotification try==', json_response.data.data.notificationMainResponse);
    
                    if (json_response.data.StatusCode === 200) {
                    console.log('GetNotification try==', json_response.data.data);
                    this.setState({tmparray : json_response.data.data.notificationMainResponse.notificationResponse});
                    console.log("hey", this.state.tmparray)
                    // this.state.tmparray = json_response.data.data.notificationMainResponse;
                    // console.log("Data Entered", this.state.tmparray)
                    
    
                    
                
                
                
                
                
                
                      }
              } 
              catch (e) {
                //  Alert.alert(e.response);
                console.log('GetNotification  catch', e.response);
            } finally {
                this.toggleLoader(false);
                console.log('GetNotification finally print hua');
            }
        }
    
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
                    <DrawerHeader name="Notification" openDrawer={this.props.navigation} status={false} notification={false}/>  
                    </View>

                    <View style={{ height: '82%', width: '100%' }}>
                    <ScrollView vertical={true}
                    showsVerticalScrollIndicator={false}>
                        {
                            this.state.tmparray.map((item, key) => (
                                <View>
                                     <View style={{
                                       height: hp('8%'), width: wp('100%'), backgroundColor: "#f0f8ff", flexDirection: "row",
                                        alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
                                    }}>  
                                        <Image style={{height: hp('5%'), width: wp('10%'),}} source = {require('../../assets/client_feedback.png')}></Image>
                                <Text style={{padding:15}}> {item.id}{item.Message}</Text>
                                        

                                    </View>
                                     <View style={{
                                        height: hp('8%'), width: wp('99%'), backgroundColor: "white", flexDirection: "row",
                                        alignItems: "center", borderBottomColor: "#d3d3d3", borderBottomWidth: 1,padding:10
                                        
                                    }}>
                                        <Image style={{height: hp('5%'), width: wp('10%'),}} source = {require('../../assets/client_feedback.png')}></Image>
                                <Text style={{padding:15}}> {item.id}{item.Message}</Text>
                                    

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
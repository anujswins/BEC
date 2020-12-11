import React, {Component} from 'react';
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
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
let colors = ['#e8f7ff', '#fafafa'];


export default class Notification extends Component {
    constructor(props) {
        super();
        this.state = {
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




        };

    }

    componentDidMount = async () => {

        let respo_storage = await AppStorage.createJobEquipId();                                                //GetAll_Records_Data
        console.log('notification_pr_data=============', respo_storage.jobResponse.JobId);




        // this.state.storage_data=respo_storage.data.jobsMainResponse.jobResponse

        this.Fun_GetNotification();


    };

    toggleLoader = (val) => {
        this.setState(({isLoading: val}));
    };

    Fun_GetNotification = async () => {


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
                    <ScrollView vertical={true}
                                showsVerticalScrollIndicator={false}>
                        {
                            this.state.tmparray.map((item, key) => {
                                    // console.log('map_data', item.ab.b);

                                    return (
                                        <View key={key}>


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

                                                        :
                                                        <Text>
                                                            anuj
                                                        </Text>
                                                    }

                                                </View>
                                            </TouchableOpacity>


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

});

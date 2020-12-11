<<<<<<< HEAD



import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
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
    Alert,
<<<<<<< HEAD
    ScrollView

=======
    ScrollView,
    FlatList,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import StarRating from 'react-native-star-rating';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

class Feedback extends Component {
   constructor(props) {
        super();

        this.state = {
            starCount: 2.5,
            selected: "key1",
            language: 'java',
            username: '',
<<<<<<< HEAD
            JobCode: ""
=======
            JobCode: '',
            itemA: null,
            isVisibleA: false,
            updatedData: [],
            itemB: null,
            isVisibleB: false,
            isLoading: false,
            my_selected_name: '',
            droparray: [],
            data: [],
            orderData: [],
            mainData: [],
            stageId: 0,
            jobTypeId: 0,
            machineTypeId: 0,
            startDate: '',
            endDate: '',
            clientId: 0,
            assignToId: 0,
            status: '',
            orderBy: 'CreatedOn',
            orderByDescending: true,
            allRecords: true,
            'jobId': 0,
            'page': 0,
            'limit': 0,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


        };
    }

<<<<<<< HEAD
    validates = () => {

        if (this.state.JobCode == "") {
         
            

            
            showMessage({
                message:"Please Select Job number",
                 type:"info",
                  backgroundColor: "black",
                 position:("top"),
                 hideStatusBar:false
              });
        }
        else {
            this.props.navigation.navigate("AddFeedback", { data: this.state.JobCode });
=======
    changeVisibility(state) {
        this.setState({
            isVisibleA: false,
            isVisibleB: false,
            ...state,
        });
    }

    componentDidMount = async () => {
        this.Fun_GetFeedbackRecords();
        this.Fun_GetAllRecords();


    };


    toggleLoader = (val) => {
        this.setState(({isLoading: val}));
    };


    Fun_GetFeedbackRecords = async () => {
        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseCommentAndFeedback(this.state.jobId,
                this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
                this.state.allRecords,
            );
            console.log('feedback data',
                json_response.data.data.feedbackMainResponse.feedbackResponse);


            if (json_response.data.StatusCode === 200) {

                this.state.data = json_response.data.data.feedbackMainResponse.feedbackResponse;

                // console.log('data getting ',
                //     json_response.data.data.feedbackMainResponse.feedbackResponse);


                // for (var i = 0; i < this.state.data.length; i++) {
                //     var data_jobcode = this.state.data[i].JobCode;
                //     // console.log('name agya h+++++++ ', data_jobcode);
                //     this.setState({
                //         my_selected_name: data_jobcode,
                //     });
                //     //  console.log('my_selected_name+++++++ ', this.state.my_selected_name);
                // }


            }
        } catch (e) {

            Alert.alert(e.response.data);
            console.log('GetFeedbackRecords catch', e.response.data);
        } finally {
            this.toggleLoader(false);
            console.log('GetFeedbackRecords finally print hua');
        }
    };

    // Get All Records

    Fun_GetAllRecords = async () => {

        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseCurrentJobs(this.state.stageId, this.state.jobTypeId, this.state.machineTypeId, this.state.startDate, this.state.endDate,
                this.state.clientId, this.state.assignToId, this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);
            //    console.log('GetAllRecords try==', json_response.data);
            if (json_response.data.StatusCode === 200) {

                this.state.orderData = json_response.data.data.jobsMainResponse.jobResponse;
                //    console.log('200 me agya==', this.state.orderData);


                for (var i = 0; i < this.state.orderData.length; i++) {
                    var data_jobcode = this.state.orderData[i].JobCode;
                    //console.log('name agya h+++++++ ', data_jobcode);
                    this.setState({
                        my_selected_name: data_jobcode,
                    });
                    //  console.log('my_selected_name+++++++ ', this.state.my_selected_name);
                }

            }

        } catch (e) {

            Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };
    validates = () => {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        }

    }




<<<<<<< HEAD
=======
    };
    filterListData = (selectedValue) => {
        this.state.updatedData.length = 0;
        let tempList = this.state.data;


        for (var i = 0; i < tempList.length; i++) {
            console.log('reetu', selectedValue);
            if (tempList[i].JobCode === selectedValue) {
                console.log('selected value in increasing order', selectedValue);

                console.log('templist Data', tempList[i].JobCode);
                this.state.updatedData.push(tempList[i]);

            } else if (selectedValue === 'JobCode') {
                this.state.updatedData.push(tempList[i]);
                console.log('templist Data', tempList[i].JobCode);
            } else {
                console.log('Exception ');
            }


        }
        // console.log("Updated list",this.state.updatedData)
    };
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    render() {

        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "transparent",
              
            
            }}>
<<<<<<< HEAD
                <StatusBar hidden={false} backgroundColor={"#008BD0"} />
            
=======
                <StatusBar hidden={false} backgroundColor={'#008BD0'}/>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }}/>

                <View style={{height: '82%', width: wp('100%'), backgroundColor: 'transaprent'}}>
                    <View style={{height: hp('9%'), width: wp('100%'), backgroundColor: 'gray'}}>
                        <DrawerHeader name=" Comments/Feedback" openDrawer={this.props.navigation} status={false}
                                      notification={true}/>
                    </View>
                    <View style={{height: 'auto', width: wp('100%'), backgroundColor: 'transaprent'}}>

                        <View style={{height: 'auto', width: wp('100%'), backgroundColor: 'transaprent'}}>

                            <DropDownPicker items={this.state.orderData.map(item =>
                                ({label: item.JobCode, value: item.JobCode}))}


                                            containerStyle={{height: hp('8%')}}
                                            placeholder="Select Job Numbers"

                                            style={{backgroundColor: 'transaprent'}}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}

                                            dropDownStyle={{backgroundColor: 'white', height: 'auto'}}


                                // onChangeItem={item => this.setState({
                                //     JobCode: item.value})

                                //     }/>
                                            onChangeItem={item => {
                                                this.setState({
                                                    JobCode: item.value,
                                                });
                                                this.filterListData(item.value);

                                            }
                                            }/>


                        </View>

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                <View style={{ height:'9%',backgroundColor: 'transparent' }}>
                <DrawerHeader name=" Comments/Feedback" openDrawer={this.props.navigation} status={false} notification={true}/>  
                </View>


                  
                <View style={{  height: '62%', width:'100%', backgroundColor: "transparent",
                  alignItems: 'center', }}>

                             <View style={{ height: '50%', width: '100%', backgroundColor: 'transparent' }}>
                            <DropDownPicker
                                items={[
                                    { label: 'JN-73289089075', value: 'JN-73289089075', },
                                    { label: 'JN-73289089076', value: 'JN-73289089076', },
                                    { label: 'JN-73289089077', value: 'JN-73289089077', },
                                    { label: 'JN-73289089078', value: 'JN-73289089078', },
                                    { label: 'JN-73289089078', value: 'JN-73289089078', },

<<<<<<< HEAD
                                ]}

                                defaultValue={this.state.country}
                                containerStyle={{ height: '20%'}}
                                placeholder="Select Job Numbers"
                                style={{ backgroundColor: 'white' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',



                                }}
=======
                            <FlatList
                                data={this.state.updatedData}
                                extraData={this.state.data}
                                //  keyExtractor={(item)=> item.JobCode}
                                renderItem={({item}) => (
                                    <View style={{
                                        backgroundColor: 'transparent',
                                        width: wp('100%'),
                                        flexDirection: 'row',
                                        margin: 2,
                                        padding: 3,
                                        borderBottomWidth: .5,
                                        alignItems: 'center',
                                        height: hp('15%'),
                                    }}>

                                        <View style={{
                                            height: hp('5%'),
                                            width: wp('15%'),

                                            backgroundColor: 'transaprent',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Image resizeMode={'contain'} style={{height: hp('3%'), width: hp('4%')}}
                                                   source={require('../../assets/client_feedback.png')}></Image>

                                        </View>
                                        <View style={{
                                            height: hp('100%'),
                                            width: wp('50%'),
                                            backgroundColor: 'transparent',
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                        }}>

                                            <Text
                                                style={{color: 'grey', fontSize: 12}}>{item.Feedback}
                                            </Text>
                                        </View>


                                    </View>

                                )}>

                            </FlatList>
                        </View>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                                dropDownStyle={{ backgroundColor: 'transparent' }}
                                onChangeItem={item => this.setState({
                                    JobCode: item.value
                                })}

                            />
                  </View>
                  
               
</View>
<View style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: "transparent",
                            alignItems: 'center', justifyContent: 'center'
                        }}>


<<<<<<< HEAD
=======
                </View>
                <View style={{
                    height: hp('10%'),
                    width: wp('100%'),
                    backgroundColor: 'transparent',
                }}>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                            <View style={{ width: '80%', height: '30%', 
                            backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={this.validates}>

<<<<<<< HEAD

=======
                    <View style={{
                        height: hp('10%'),
                        width: wp('100%'),
                        backgroundColor: 'transparent',

                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={this.validates}>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


                            <View style={{
                                elevation: 4, backgroundColor: 'transaprent', width: wp('40%'),
                                height: hp('8%'),
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                            }}>

                                <View style={{
<<<<<<< HEAD
                                        elevation: 4, backgroundColor: 'transparent',width: '40%', height: '100%', 
                                        flexDirection: 'row',justifyContent:'center',alignItems:'center'
                                    }}>

                                        <View style={{ backgroundColor: '#015ea1', width: '40%', height: '100%', 
                                        justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../assets/tick_icon.png')}
                                                style={{ width: 25, height: 25 }} />

                                        </View>

                                        <View style={{ backgroundColor: '#0288d5', width: '100%', height:'100%', alignItems: 'center', justifyContent: 'center' }}>
<Text style={{ color: 'white' }}>Add FeedBack</Text>
</View>

                                    </View>

                        
=======
                                    backgroundColor: '#015ea1', width: wp('10%'), height: hp('8%'),
                                    justifyContent: 'center', alignItems: 'center',
                                }}>
                                    <Image source={require('../../assets/tick_icon.png')}
                                           style={{width: 25, height: 25}}/>

                                </View>


                                <View style={{
                                    backgroundColor: '#0288d5',
                                    width: wp('30%'),
                                    height: hp('8%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{color: 'white'}}>Add FeedBack</Text>
                                </View>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                            </View>


<<<<<<< HEAD
=======
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: hp('10%'),
                        width: wp('100%'),
                        backgroundColor: 'transparent',
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                                </TouchableOpacity>

                            </View>



                        </View>

                        <View style={{ height:'10%',backgroundColor: 'transparent' }}>
                          <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={false}  navigate={this.props.navigation.navigate}>

                       </BottomTabNavigator>
                       </View>
             

            </SafeAreaView>
        );
    }
}



 
export default Feedback
const styles = StyleSheet.create({
    container: {

    
        width: dwidth,
        height: dheight,
        backgroundColor: "white"
    },
    dropdown: {

        flexDirection: 'column',

        width: dwidth,
        height: dheight * 0.60,
        backgroundColor: "white"
    },
    buttonView: {
        width: dwidth,
        height: dheight * 0.20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        alignItems: "center",
        width: dwidth * 0.50,
        height: dheight * 0.05,
        justifyContent: "center",
        backgroundColor: "white",
        marginTop: '20%',
        backgroundColor: "#33a1De",


    },
});

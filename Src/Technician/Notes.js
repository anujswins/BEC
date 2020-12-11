


import React, { Component } from 'react';
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
    ScrollView

} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import StarRating from 'react-native-star-rating';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
<<<<<<< HEAD
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
const screen = Dimensions.get("screen");
=======
<<<<<<< HEAD
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
const screen = Dimensions.get("screen");
=======
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';

const screen = Dimensions.get('screen');
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
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
            JobCode: "",
            isLoading: false,
            droparray:[],
            data: [],
                "jobId": 0,
                "page": 0,
                "limit": 0,
                "orderBy": "CreatedOn",
                "orderByDescending": true,
                "allRecords": true
               
=======
            JobCode: ""
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


        };
    }
<<<<<<< HEAD
    componentDidMount = async () => {
        this.Fun_GetFeedbackRecords();
=======

<<<<<<< HEAD
    validates = () => {
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
        
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    };


    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };
    

    Fun_GetFeedbackRecords = async () => {
           try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseCommentAndFeedback(this.state.jobId,
<<<<<<< HEAD
                this.state.page,this.state.limit,this.state.orderBy,this.state.orderByDescending,
                this.state.allRecords
              );
            //    console.log("data get ho gya",  
            //    json_response.data.data.feedbackMainResponse.feedbackResponse) 
           

             
           
           
               if (json_response.data.StatusCode === 200) {
     
                    this.state.data=json_response.data.data.feedbackMainResponse.
                    feedbackResponse
                   
                    // console.log("data get ho gya",  
                    // json_response.data.data.feedbackMainResponse.feedbackResponse)
    
    
                 
                        for(var i=0; i < this.state.data.length; i++) {
                         var data= this.state.data[i].JobCode;
                         console.log('name agya h+++++++ ',data )
                        }
                    
            
            }
        } 
        catch (e) {

             Alert.alert(e.response.data);
            console.log('GetFeedbackRecords catch', e.response.data);
        } finally {
            this.toggleLoader(false);
            console.log('GetFeedbackRecords finally print hua');
        }
    }
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
            console.log('hey',this.state.JobCode )
            this.props.navigation.navigate("AddFeedback", { datasend:this.state.JobCode });

        }
=======
                this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
                this.state.allRecords,
            );
            console.log('feedback data',
                json_response.data.data.feedbackMainResponse.feedbackResponse);


            if (json_response.data.StatusCode === 200) {

                this.state.data = json_response.data.data.feedbackMainResponse.feedbackResponse;

                console.log('data getting ',
                    json_response.data.data.feedbackMainResponse.feedbackResponse);


                for (var i = 0; i < this.state.data.length; i++) {
                    var data_jobcode = this.state.data[i].JobCode;
                    // console.log('name agya h+++++++ ', data_jobcode);
                    this.setState({
                        my_selected_name: data_jobcode,
                    });
                    // console.log('my_selected_name+++++++ ', this.state.my_selected_name);
                }

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

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

        }

    }




>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    }





<<<<<<< HEAD
    render() {
        const { isLoading } = this.state;
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "transparent",
              
            
            }}>
                <StatusBar hidden={false} backgroundColor={"#008BD0"} />
<<<<<<< HEAD
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
        }} />

                <View style={{ height:'9%',backgroundColor: 'transparent' }}>
                <DrawerHeader name=" Comments/Feedback" openDrawer={this.props.navigation} status={false} notification={true}/>  
                </View>


                  
                <View style={{  height: '62%', width:'100%', backgroundColor: "transparent",
                  alignItems: 'center', }}>

                             <View style={{ height: '50%', width: '100%', backgroundColor: 'transparent' }}>
                             
                            <DropDownPicker items={this.state.data.map(item=>
                                        ({label:item.JobCode,value:item.JobCode}))}
                                
                                
                                // defaultValue={this.state.item}
                                containerStyle={{ height: '20%'}}
                                placeholder="Select Job Numbers"
                                style={{ backgroundColor: 'white' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',

=======
            

                <View style={{ height:'9%',backgroundColor: 'transparent' }}>
                <DrawerHeader name="Feedback" openDrawer={this.props.navigation} status={false} notification={true}/>  
                </View>


                  
                <View style={{  height: '62%', width:'100%', backgroundColor: "transparent",
                  alignItems: 'center', }}>
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                             <View style={{ height: '50%', width: '100%', backgroundColor: 'transparent' }}>
                            <DropDownPicker
                                items={[
                                    { label: 'JN-73289089075', value: 'JN-73289089075', },
                                    { label: 'JN-73289089076', value: 'JN-73289089076', },
                                    { label: 'JN-73289089077', value: 'JN-73289089077', },
                                    { label: 'JN-73289089078', value: 'JN-73289089078', },
                                    { label: 'JN-73289089078', value: 'JN-73289089078', },

<<<<<<< HEAD
                                }}

                                dropDownStyle={{ backgroundColor: 'transparent' }}
                                onChangeItem={item => this.setState({
                                    JobCode: item.value
                                    
                                })}

                
                />
=======
                                ]}

                                defaultValue={this.state.country}
                                containerStyle={{ height: '20%'}}
                                placeholder="Select Job Numbers"
                                style={{ backgroundColor: 'white' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',



                                }}

                                dropDownStyle={{ backgroundColor: 'transparent' }}
                                onChangeItem={item => this.setState({
                                    JobCode: item.value
                                })}

                            />
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                  </View>
                  
               
</View>
<View style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: "transparent",
                            alignItems: 'center', justifyContent: 'center'
                        }}>



                            <View style={{ width: '80%', height: '30%', 
                            backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={this.validates}>




                                <View style={{
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

                        
<<<<<<< HEAD



                                </TouchableOpacity>

                            </View>



=======



                                </TouchableOpacity>

                            </View>



>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
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

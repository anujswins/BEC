


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
            JobCode: ""


        };
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
            this.props.navigation.navigate("AddFeedback", { data: this.state.JobCode });

        }

    }





    render() {

        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "transparent",
              
            
            }}>
                <StatusBar hidden={false} backgroundColor={"#008BD0"} />
            

                <View style={{ height:'9%',backgroundColor: 'transparent' }}>
                <DrawerHeader name="Feedback" openDrawer={this.props.navigation} status={false} notification={true}/>  
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

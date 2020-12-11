import React, {Component} from 'react';
import {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
import { Picker } from '@react-native-community/picker';

import DropDownPicker from 'react-native-dropdown-picker';
import StarRating from 'react-native-star-rating';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DrawerHeader from '../CommonComponents/DrawerHeader'
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

class AddFeedback extends Component {



  constructor(props) {
    super();

    this.state = {
      starCount: 1,
      selected: "key1",
      select: "",
      language: 'Select Feedback Type',
      Priority: "Select Feedback Priority",
      feed: ""

    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  validates = () => {

    if (this.state.language == "Select Feedback Type") {
               showMessage({
               message:"Please Select FeedBack Type",
                type:"info",
                 backgroundColor: "black",
                position:("top"),
                hideStatusBar:false
             });
    

    }


    else if (this.state.Priority == "Select Feedback Priority") {
   
      showMessage({
        message:"Please Select Feedback Priority",
         type:"info",
          backgroundColor: "black",
         position:("top"),
         hideStatusBar:false
      });
    }
    
    else if (this.state.starCount == 1) {
      showMessage({
        message:"Please rating",
         type:"info",
          backgroundColor: "black",
         position:("top"),
         hideStatusBar:false
      });
    }
    else if (this.state.feed == " ") {
      showMessage({
        message:"Please write something",
         type:"info",
          backgroundColor: "black",
         position:("top"),
         hideStatusBar:false
      });
    }
    else {
      Alert.alert("Thank you for your Feedback")
      this.props.navigation.navigate('Feedback')

    }

  }

  render() {
    const { dimensions } = this.state;
    
    
    

    return (


      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
    
    
    }}>
        <StatusBar  
     backgroundColor = "#008BD0"  
     barStyle = "#ffffff"   
   /> 

        <View style={{ height:'9%',backgroundColor: 'transparent', }}>
                <DrawerHeader name="Add Feedback" openDrawer={this.props.navigation} status={false}  notification={true}/>  
                </View>
                
                <View style={{ height: '8%', width: '100%', alignItems:"center",justifyContent:"center",
                backgroundColor:"transparent",justifyContent:"center",  resizeMode:'contain',  }}>

<View style={{ height: '60%', width: '90%', backgroundColor: "white",justifyContent:"center",resizeMode:'contain',
elevation:20}}>
<Text style={{textAlign:"justify",padding:15}}>{(this.props.navigation.getParam('data'))}</Text>
  </View>
</View>
<View style={{ height: '7%', width: '100%', backgroundColor: "transparent",justifyContent:"center",alignItems:"center"}}>

<Picker
  selectedValue={this.state.language}
  placeholder="Select Job Number"

  style={{ width:('90%')}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({ language: itemValue })
  }>
  <Picker.Item color="black"  label="Select Feedback Type" value="Select Feedback Type" />


  <Picker.Item  color="grey" label="Comment"  value="Comment" />
  <Picker.Item  color="grey" label="Feedback" value="Feedback" />
  <Picker.Item color="grey" label="Suggestion" value="Suggestion" />
</Picker>

</View>

<View style={{ height: '7%', width: '100%', backgroundColor: "transparent",justifyContent:"center",alignItems:"center" }}>

<Picker
  selectedValue={this.state.Priority}
  placeholder="Select Job Number"
  itemStyle
  style={{  width: '90%',  }}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({ Priority: itemValue })
  }>
  <Picker.Item label="Select Feedback Priority"  value="Select Feedback Type" />
  <Picker.Item label="High"color="grey" value="High" />
  <Picker.Item label="Low" color="grey"value="Low" />
  <Picker.Item label="Normal"color="grey" value="Normal" />
</Picker>


</View>
<View style={{ height: '5%', width: '100%', backgroundColor: "white",justifyContent:"center",padding:25}}>
          <Text style={{ fontWeight: "900", fontSize: 18 }}>Rate Us</Text>
        </View>

        <View style={{height: '7%', width: '60%', backgroundColor: "transparent",justifyContent:"center",paddingLeft:25}}>

<StarRating
  disabled={false}
  maxStars={5}
  fullStarColor={'#33a1De'}
  halfStarColor={'#33a1De'}
  emptyStarColor={'#33a1De'}
  starSize={30}
  rating={this.state.starCount}
  selectedStar={(rating) => this.onStarRatingPress(rating)}
/>

</View>

<View style={{ height: '31%', width: '100%', backgroundColor: "white", alignItems: "center",}}>

          <Card style={{  height: '80%', width: '90%', backgroundColor: "white" }}>

            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Write Feedback"
              placeholderTextColor='#9B9B9B'
              autoCapitalize="none"
              multiline={true}
             onChangeText={(text) => { this.setState({ feed: text }) }} />
        
          </Card>
          
          
          </View>
          <View style={{
                            width: '100%',
                            height: '16%',
                            backgroundColor: "transparent",
                            alignItems: 'center', justifyContent: 'center'
                        }}>



                            <View style={{ width: '80%', height: '40%', 
                            backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={this.validates}>


=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
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
    ScrollView,
    Modal,

} from 'react-native';
import {Picker} from '@react-native-community/picker';

import DropDownPicker from 'react-native-dropdown-picker';
import StarRating from 'react-native-star-rating';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel}
    from 'react-native-simple-radio-button';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import {NavigationActions} from 'react-navigation';

const screen = Dimensions.get('screen');
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;


var radio_props = [
    {label: 'Comment', value: 'Comment'},
    {label: 'Feedback', value: 'Feedback'},
    {label: 'Suggestion', value: 'Suggestion'},
];

var radio_props1 = [
  {label: 'Comment', value: 'Comment'},
  {label: 'Feedback', value: 'Feedback'},
  {label: 'Suggestion', value: 'Suggestion'},
];

class AddFeedback extends Component {


    constructor(props) {
        super();

        this.state = {
            starCount: 1,
            selected: 'key1',
            select: '',
            language: 'Select Feedback Type',
            Priority: 'Select Feedback Priority',
            feed: '',
            showModal: false,
            showtext: 'Select Priority Type',
            showtext1: 'Select Feedback Type',
            choosecategory: true,
            showModal1: false,
            choosePriority: true,
            drop: [],
            dropdown: [],
            'categoryName': 'Feedback Type',
            'orderBy': 'CodeName',
            'orderByDescending': false,
            'allRecords': true,


        };

        this.dropdown = {
            'categoryName': 'Feedback Priority',
            'orderBy': 'CodeName',
            'orderByDescending': false,
            'allRecords': true,
        };

        this.create = {

          "jobId":"" ,
          "feedbackType":"",
          "feedbackPriority": "",
          "feedback": "string",
          "userId": 1

        };

    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating,
        });
    }


    showAlert = (value) => {
    this.setState({showModal: true});
};
    showAlert1 = (value) => {
 this.setState({showModal1: true});
};
    componentDidMount = async () => {
        this.Fun_GetFeedbackType();
        this.Fun_GetFeedbackPriority();
        // this. Fun_GetFeedbackCreate();
    };


    toggleLoader = (val) => {
        this.setState(({isLoading: val}));
    };
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


<<<<<<< HEAD
=======
            let json_response = await AuthService.superFeedbackType(this.state.categoryName,
                this.state.orderBy, this.state.orderByDescending, this.state.allRecords,
            );


            console.log('GetFeedbackPriority try==', json_response.data.data.globalCodeMainResponse.globalCodeResponse);
            if (json_response.data.StatusCode === 200) {

                this.state.drop = json_response.data.data.globalCodeMainResponse.globalCodeResponse;
                 console.log('data get ho gya', this.state.drop);
             for (var i = 0; i < this.state.drop.length; i++) {
                    var clientName = this.state.drop[i].CodeName;
                    console.log('name agya h+++++++ ', clientName);
                }
 }


        } catch (e) {


            console.log('GetFeedbackPriority catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetFeedbackPriority finally print hua');
        }
    };


    Fun_GetFeedbackPriority = async () => {
        try {
            this.toggleLoader(true);
              let json_response = await AuthService.superFeedbackPriority(this.dropdown.categoryName,
                this.dropdown.orderBy, this.dropdown.orderByDescending, this.dropdown.allRecords,
            );
            console.log('GetFeedbackPriority try==', json_response.data.data.globalCodeMainResponse.globalCodeResponse);
            if (json_response.data.StatusCode === 200) {
              this.state.dropdown = json_response.data.data.globalCodeMainResponse.globalCodeResponse;
             console.log('data get ho gya', this.state.dropdown);
                 for (var i = 0; i < this.state.dropdown.length; i++) {
                    var clientName = this.state.dropdown[i].CodeName;
                    console.log('get+++++++ ', clientName);
                }
 }


        } catch (e) {
 console.log('GetFeedbackPriority catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetFeedbackPriority finally print hua');
        }
    };

    Fun_GetFeedbackCreate = async () => {
        try {
            this.toggleLoader(true);

            let json_response = await AuthService.CreateFeedback(this.create.jobId, this.create.feedbackType,
                this.create.feedbackPriority, this.create.feedback, this.create.userId,
        
<<<<<<< HEAD
=======

 );
 
 
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

 );
 
 

<<<<<<< HEAD

=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
            console.log('GetFeedbackCreate try', json_response);

            if (json_response.data.StatusCode === 200) {
                console.log('200 data geti', json_response.data.StatusCode);
                Alert.alert('Thank you for your Feedback');
                this.props.navigation.navigate('Feedback');

            }


        } 
        catch (e) {

                Alert.alert('Authentication failed, see inner exception.');
            console.log('GetFeedbackPriority catch', e.response.data.Message);
        } 
        finally {
            this.toggleLoader(false);
            console.log('GetFeedbackPriority finally print hua');
            Alert.alert('Authentication failed, see inner exception.');
        }
    };
    validates = () => {

        if (this.state.language == 'Select Feedback Type') {
            showMessage({
                message: 'Please Select FeedBack Type',
                type: 'info',
                backgroundColor: 'black',
                position: ('top'),
                hideStatusBar: false,
            });


        } else if (this.state.Priority == 'Select Feedback Priority') {

            showMessage({
                message: 'Please Select Feedback Priority',
                type: 'info',
                backgroundColor: 'black',
                position: ('top'),
                hideStatusBar: false,
            });
        } else if (this.state.starCount == 1) {
            showMessage({
                message: 'Please rating',
                type: 'info',
                backgroundColor: 'black',
                position: ('top'),
                hideStatusBar: false,
            });
        } else if (this.state.feed == ' ') {
            showMessage({
                message: 'Please write something',
                type: 'info',
                backgroundColor: 'black',
                position: ('top'),
                hideStatusBar: false,
            });
        } else {
            // Alert.alert('Thank you for your Feedback');
            // this.Fun_GetFeedbackType();
            // this.Fun_GetFeedbackPriority();
            this.Fun_GetFeedbackCreate();

            // this.props.navigation.navigate('Feedback');

        }

    };


    render() {
        const {dimensions} = this.state;



        return (


            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white',


            }}>
                <StatusBar
                    backgroundColor="#008BD0"
                    barStyle="#ffffff"
                />

                <View style={{height: '9%', backgroundColor: 'transparent'}}>
                    <DrawerHeader name="Add Feedback" openDrawer={this.props.navigation} status={false}
                                  notification={true}/>
                </View>

                <View style={{
                    height: '8%', width: '100%', alignItems: 'center',
                    backgroundColor: 'transparent', justifyContent: 'center', resizeMode: 'contain',
                }}>

                    <View style={{
                        height: '60%',
                        width: '90%',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        resizeMode: 'contain',
                        elevation:3,
                    }}>
                        <Text style={{
                            textAlign: 'justify',
                            padding:5,
                        }}>{(this.props.navigation.getParam('datasend'))}</Text>
                    </View>
                </View>


                <View style={{
                    height: '7%', width: '100%', backgroundColor: 'white', justifyContent: 'center',
                    paddingHorizontal: '7%',
                }}>

                    <TouchableOpacity
                        style={{width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center'}}
                        onPress={this.showAlert1}>

                        {this.state.choosecategory ?

                            <Text>
                                Select Type
                            </Text> :

                            <Text style={{
                                 fontSize: hp('2.1%'),
                                backgroundColor: 'white',
                                color:'grey'
                            }}>
                                {this.state.showtext}
                            </Text>}


                        <Modal

                            visible={this.state.showModal1}

                            transparent={true}>


                            <View style={{
                                height: 'auto', width: '90%', backgroundColor: 'white',
                                marginLeft: '5%',
                                marginTop: '45%', elevation:3}}>
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
                                <View style={{
                                        elevation: 4, backgroundColor: 'transparent',width: '35%', height: '100%', 
                                        flexDirection: 'row',justifyContent:'center',alignItems:'center'
                                    }}>

                                        <View style={{ backgroundColor: '#015ea1', width: '40%', height: '100%', 
                                        justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../assets/tick_icon.png')}
                                                style={{ width: 25, height: 25 }} />

                                        </View>

                                        <View style={{ backgroundColor: '#0288d5', width: '100%', height:'100%', 
                                        alignItems: 'center', justifyContent: 'center' }}>
<Text style={{ color: 'white' }}>Save</Text>
</View>

                                    </View>

                        



                                </TouchableOpacity>

                            </View>



                        </View>

                        <View style={{ height:'9%',backgroundColor: 'transparent' }}>
        <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={false}  navigate={this.props.navigation.navigate}>
         </BottomTabNavigator>
                       </View>
                  
      </SafeAreaView>



    )
  }
}
export default AddFeedback
const styles = StyleSheet.create({
  container: {

    flexDirection: 'column',
    flex: 1,
    width: dwidth,
    height: dheight,
    backgroundColor: "white",

  },
  button: {
    alignItems: "center",

    marginHorizontal: 50,
    backgroundColor: "white",
    padding: 10,
    backgroundColor: "#33a1De",


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




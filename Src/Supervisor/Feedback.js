import React, {Component} from 'react';
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
    ScrollView,
    FlatList
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import StarRating from 'react-native-star-rating';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';

const screen = Dimensions.get('screen');
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

class Feedback extends Component {
    constructor(props) {
        super();

        this.state = {
            starCount: 2.5,
            selected: 'key1',
            language: 'java',
            username: '',
            JobCode: '',
            itemA: null,
            isVisibleA: false,
            updatedData:[],
            itemB: null,
            isVisibleB: false,
            isLoading: false,
            my_selected_name: '',
            droparray: [],
            data: [],
            orderData:[],
            mainData:[],
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
            'orderBy': 'CreatedOn',
            'orderByDescending': true,
            'allRecords': true,


        };
    }

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
        
               this.state.orderData=json_response.data.data.jobsMainResponse.jobResponse;
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


        if (this.state.JobCode == '') {

            console.log('Please Select Job number===null');
            showMessage({
                message: 'Please Select Job number',
                type: 'info',
                backgroundColor: 'black',
                position: ('top'),
                hideStatusBar: false,
            });
        } else {
            console.log('Please Select Job number===value agai ');

            this.props.navigation.navigate('AddFeedback', {datasend: this.state.JobCode});

        }

    };
    filterListData=(selectedValue)=>{
        this.state.updatedData.length=0
            let tempList=this.state.data;
         
        
        for(var i=0;i<tempList.length;i++)
        {
            console.log("reetu", selectedValue)
         if(tempList[i].JobCode===selectedValue){
             console.log("selected value in increasing order",selectedValue)
         
            console.log("templist Data",tempList[i].JobCode) 
            this.state.updatedData.push(tempList[i]) 
            
         }
        
         else if(selectedValue==="JobCode")
         {
            this.state.updatedData.push(tempList[i]) 
            console.log("templist Data",tempList[i].JobCode) 
         }
        else{
            console.log("Exception ") 
        }
        
         
          
        
        }
        // console.log("Updated list",this.state.updatedData)
        }





    render() {

        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "transparent",
              
            
            }}>
                <StatusBar hidden={false} backgroundColor={"#008BD0"} />
            

                <View style={{ height:'9%',backgroundColor: 'transparent' }}>
                <DrawerHeader name=" Comments/Feedback" openDrawer={this.props.navigation} status={false} notification={true}/>  
                </View>


                  
                <View style={{  height: '62%', width:'100%', backgroundColor: "transparent",
                  alignItems: 'center', }}>

                             <View style={{ height: '50%', width: '100%', backgroundColor: 'transparent' }}>
                         
                                <DropDownPicker items={this.state.orderData.map(item =>
                                    ({label: item.JobCode, value: item.JobCode}))}
                                 

                                defaultValue={this.state.country}
                                containerStyle={{ height: '20%'}}
                                placeholder="Select Job Numbers"
                                style={{ backgroundColor: 'white' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',



                                }}

                                onChangeItem={item =>{
                                                this.setState({
                                                    JobCode: item.value
                                                })
                                                 this.filterListData(item.value)
                                         
                                             }
                                             }/>
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

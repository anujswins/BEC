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
            status: 'In progress',
            // orderBy: 'CreatedOn',
            orderByDescending: true,
            allRecords: true,
            JobId:'',
            // 'jobId': 0,
            page: 1,
            limit: 40,
            orderBy: 'CreatedOn',
            // orderByDescending: true,
            // allRecords: true,


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
    //   this.Fun_GetFeedbackRecords();
         this.Fun_GetAllRecords();
        

    };
    


    toggleLoader = (val) => {
        this.setState(({isLoading: val}));
    };


    Fun_GetFeedbackRecords = async (jobCode,jobId) => {
        try {
            this.toggleLoader(true);
            
             this.setState({
               JobCode: jobCode,
               JobId:jobId
               });

               console.log('feedback data before****************************',jobId, this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
               this.state.allRecords);

               

            let json_response = await AuthService.SuperviseCommentAndFeedback(jobId,
                this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
                this.state.allRecords);
            console.log('feedback data****************************',json_response.data.StatusCode);

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

            // Alert.alert(e);
            console.log('GetFeedbackRecords catch', e);
        } finally {
            this.toggleLoader(false);
            console.log('GetFeedbackRecords finally print hua');
        }
    };

    // Get All Records
    
    Fun_GetAllRecords = async () => {

   try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseCurrentJobs(this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords,1,40);
             
             if (json_response.data.StatusCode === 200) {
                this.toggleLoader(false);
                var all_data=json_response.data.data.jobsMainResponse.jobResponse;
                console.log('guri==============', all_data);
                all_data.map(item => {
                    //  var a = item.JobCode;
                    
                    //  var b = item.JobId;
                   
                    // console.log('data_array gouri------ ================', a);
    this.state.orderData.push({Jobcode:item.JobCode,JobId:item.JobId} )

                })
               
               console.log('guri two==============', this.state.orderData);
        
//                this.setState({

// orderData:json_response.data.data.jobsMainResponse.jobResponse

//                })
               
            //    console.log('200 me agya==', this.state.orderData);
                
 
            

                // for (var i = 0; i < this.state.orderData.length; i++) {
                //     var data_jobcode = this.state.orderData[i].JobCode;
                //      //console.log('name agya h+++++++ ', data_jobcode);
                //     this.setState({
                //         my_selected_name: data_jobcode,
                //         my_selected_name: data_jobcode,
                //     });
                //   //  console.log('my_selected_name+++++++ ', this.state.my_selected_name);
                // }
                
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

             console.log('inside if',this.state.JobCode);
            showMessage({
                message: 'Please Select Job number',
                type: 'info',
                backgroundColor: 'black',
                position: ('top'),
                hideStatusBar: false,
            });
        } else {
            console.log('Guri$$$$$$$$$$$$$$$$$$$$$$4444444',this.state.JobId);

            this.props.navigation.navigate('AddFeedback', {datasend: this.state.JobCode,jobId:this.state.JobId});

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

        // console.log('render drowpdown value============', this.state.JobCode);
        // console.log('Job id value@@@@@@@@@@@@@@@@@@@@@@@@@@@@',this.state.JobCode);
        const {isLoading} = this.state;
        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white',


            }}>
                <StatusBar hidden={false} backgroundColor={'#008BD0'}/>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }}/>

                <View style={{height: '82%', width: wp('100%'), backgroundColor: 'transparent'}}>
                    <View style={{height: hp('9%'), width: wp('100%'), backgroundColor: 'gray'}}>
                        <DrawerHeader name=" Comments/Feedback" openDrawer={this.props.navigation} status={false}
                                      notification={true}/>
                    </View>
                    <View style={{height: 'auto', width: wp('100%'), backgroundColor: 'transparent'}}>

                        <View style={{height: 'auto', width: wp('100%'), backgroundColor: 'transparent'}}>


                        {/* { this.state.tmparray.map((item, key) => {
                                console.log("map_data",item)

                                return(
                                    <View key={key}>




                                    </View>


                                )
                            }
                            )} */}
                    
                            {/* <DropDownPicker items={this.state.orderData.map(item =>{
                            console.log("item in dropdown",item)
                            
                            return(  
                                
                                {label: item, value: item})

                            }
                            
                          
                            
                            )
                        
                        
                        }
                             

                                            containerStyle={{height: hp('8%')}}
                                            placeholder="Select Job Numbers"

                                            style={{backgroundColor: '#ffffff'}}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}

                                            dropDownStyle={{backgroundColor: 'white', height: 'auto'}}


                                            // onChangeItem={item => this.setState({
                                            //     JobCode: item.value})
                                                
                                            //     }/>
                                            onChangeItem={item =>{
                                                this.setState({
                                                    JobCode: item.value
                                                })
                                                 this.filterListData(item.value)
                                         
                                             }
                                             }/> */}
                                                      
                   <DropDownPicker
   
   items={this.state.orderData.map(item=>
{
    //  console.log("value in orderdata@@@@@@@@@@@@@@@@@",item)
    return  ({label:item.Jobcode,value:item.JobId})

}
   )
    
    }

   //  defaultValue="All Technician"
//    defaultNull={this.state.item === null}
   placeholder="Select Job Number"
   // placeholderStyle={{fontWeight: 'bold'}}
   itemStyle={{
    justifyContent: 'flex-start',
    alignItems: 'center',
}}
  containerStyle={{height: "50%"}}
   style={{backgroundColor: '#fafafa',marginHorizontal:'4%',marginVertical: "2%",alignItems:'flex-start'}}
   dropDownStyle={{flex:1,backgroundColor: '#fafafa',marginHorizontal:'4%',alignItems:'flex-start',justifyContent:'flex-start'}}
   // defaultIndex={0}
   onChangeItem={item =>{
   
  
    console.log("after selecting dropdown@@@@@@@@@@@@@@@@@@@@@@@",this.state.Jobcode)
    this.Fun_GetFeedbackRecords(item.label,item.value)   ;
  
    //  this.filterListData(item.job)
    //   this.setState({
    //       SelectTechnician:item.value
    //   })
  
    //   this.filterListData(item.value)

   }
   }
   dropDownMaxHeight={240}
/>         
                                
                        </View>


                    </View>

                    {this.state.JobCode == 0 ?

                        <View style={{
                            height: hp('60%'),
                            width: wp('100%'),
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{justifyContent: 'center', alignItems: 'center'}}>
                                Please select Job Code
                            </Text>
                        </View>
                        :

                        <View style={{
                            height: hp('60%'),
                            width: wp('100%'),
                            backgroundColor: 'transaprent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>



<FlatList 
 data={this.state.updatedData}
 extraData={this.state.data}
//  keyExtractor={(item)=> item.JobCode}
                        renderItem={({ item }) => (
                            <View style={{
                                backgroundColor: 'transparent',
                                width: wp('100%'),
                                flexDirection: 'row',
                                margin:2,
                                padding:3,
                                borderBottomWidth:.5,
                                alignItems: 'center',
                                height: hp('15%'),
                            }}>

<View style={{
                                                height: hp('5%'),
                                                width: wp('15%'),

                                                backgroundColor: 'transaprent',
                                                justifyContent: 'center',
                                                alignItems: 'center'}}>
                                                <Image resizeMode={"contain"} style={{height:hp('3%'), width:hp('4%')}}
                                                source={require('../../assets/client_feedback.png')}></Image>

                                            </View>
                                            <View style={{
                                                height: hp('100%'),
                                                width: wp('50%'),
                                                backgroundColor: 'transparent',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start'}}>
                                                    
                                                <Text
                                                    style={{color: 'grey',fontSize:12}}>{item.Feedback}
                                                    </Text>
                                                  </View> 
                          

                            </View>
                            
                        )}>

                    </FlatList>
                        </View>


                    }


                </View>
                <View style={{
                    height: hp('10%'),
                    width: wp('100%'),
                    backgroundColor: 'transparent'}}>


                        <View style={{
                            height: hp('10%'),
                            width: wp('100%'),
                            backgroundColor: 'transparent',

                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity onPress={()=>this.validates()}>


                                <View style={{
                                    elevation: 4, backgroundColor: 'transaprent',width: wp('40%'),
                                     height: hp('8%'),
                                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                                }}>

                                    <View style={{
                                        backgroundColor: '#015ea1', width: wp('10%'),  height: hp('8%'),
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <Image source={require('../../assets/tick_icon.png')}
                                               style={{width:25,height:25}}/>

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

                                </View>


                            </TouchableOpacity>
                        </View>
                    <View style={{
                        height: hp('10%'),
                        width: wp('100%'),
                        backgroundColor: 'transparent',

                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={false}
                                            navigate={this.props.navigation.navigate}>

                        </BottomTabNavigator>
                    </View>


                </View>

            </SafeAreaView>
        );
    }
}


export default Feedback;
const styles = StyleSheet.create({
    container: {


        width: dwidth,
        height: dheight,
        backgroundColor: 'white',
    },
    dropdown: {

        flexDirection: 'column',

        width: dwidth,
        height: dheight * 0.60,
        backgroundColor: 'white',
    },
    buttonView: {
        width: dwidth,
        height: dheight * 0.20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        width: dwidth * 0.50,
        height: dheight * 0.05,
        justifyContent: 'center',
        marginTop: '20%',
        backgroundColor: '#33a1De',


    },
});

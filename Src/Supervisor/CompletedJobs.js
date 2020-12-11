
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
    ScrollView
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import StarRating from 'react-native-star-rating';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

 class CompletedJobs extends Component {

    static navigationOptions={
        title:'Completed Jobs',
        headerTintColor:'#fff',
        headerStyle:{backgroundColor:'#008ad1'
        },
        headerTitleStyle:{
          fontWeight:'normal',
          textAlign:'left'
        }
        
        
        }

    constructor() {
        super();

        this.state = {
          starCount: 2.5,
          selected: "key1",
          language: 'java',
          tmpArray : [


            {typeno:"job number",Tool: "machine", speedtype: "Segment",time:"Time",date:"Date",Status:"Status",
            jobNumber:1089,machinename:'Gear Motor',Segmentspeed:"single Speed",Time:'2:00',dates:'23sep',ritu:'ritu',
            status:"Pending Delivery"},
            {typeno:"job number",Tool: "machine", speedtype: "Segment",time:"Time",date:"Date",Status:"Status",
            jobNumber:1090,machinename:'Motor',Segmentspeed:"Dual Speed",Time:'2:00',dates:'23sep',
            status:"Delivered"},
            {typeno:"job number",Tool: "machine", speedtype: "Segment",time:"Time",date:"date",Status:"Status",
            jobNumber:1091,machinename:'Machine Motor',Segmentspeed:"single Speed",Time:'2:00',dates:'23sep',
            status:"Dispatch"},
            {typeno:"job number",Tool: "machine", speedtype: "Segment",time:"Time",date:"date",Status:"Status",
            jobNumber:1092,machinename:'Gear Motor',Segmentspeed:"single Speed",Time:'2:00',dates:'23sep',
            status:"Pending Delivery"},
            {typeno:"job number",Tool: "machine", speedtype: "Segment",time:"Time",date:"date",Status:"Status",
            jobNumber:1093,machinename:'Electric Motor',Segmentspeed:"single Speed",Time:'2:00',dates:'23sep',
            status:"Dispatch"},


      
            
            ]
          
        };
      }


      
<<<<<<< HEAD


    Fun_CompletedAllRecords = async () => {
         try {
          this.toggleLoader(true);
          let json_response = await AuthService.SupCompletedJobs(this.state.stageId,this.state.jobTypeId,
            this.state.machineTypeId,this.state.startDate,this.state.endDate,this.state.clientId,
            this.state.clientId,this.state.assignToId,this.state.orderBy,this.state.orderByDescending,
            this.state.Page,this.state.limit,this.state.allRecords);
         

              

          console.log('CompletedAllRecords try==', json_response.data);
        
      

          if (json_response.data.StatusCode === 200) {
               Alert.alert("data get successfully ");
 

          }
     


       

      } 
      catch (e) {

          //  Alert.alert(e.response.data.Message);
          this.state.mylistcheck=e.response.data.Message;
          console.log('GetAllRecords catch', e.response);
      } finally {
          this.toggleLoader(false);
          console.log('GetAllRecords finally print hua');
      }











  };
=======
  
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


    render() {
        const { dimensions } = this.state;
        
        return (

         

          <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
          
        
        }}>
            <StatusBar hidden={false} backgroundColor={"#008BD0"} />
            <View style={{ height:'9%',backgroundColor: 'transparent' }}>
            <DrawerHeader name='Completed Jobs' openDrawer={this.props.navigation} status={false} notification={true}/>  
            </View>
            <View style={{justifyContent:"center",alignItems:"center",height:'82%',width:"100%",backgroundColor:"transparent"}}>
            <ScrollView vertical={true}
                showsVerticalScrollIndicator={false}
               >
           {                  
               this.state.tmpArray.map((item, key) => (
                <View style={{justifyContent:"center",alignItems:"center",padding:10}}>
           <Collapse>
    <CollapseHeader>
      <View style={{backgroundColor:"white",height: hp('6%'), width: wp('80%'), justifyContent:"center",padding:10,
      borderColor:"#d3d3d3",borderWidth:1,}}>
        <Text style={{color:"black"}}>JobNo-{item.jobNumber}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody style={{backgroundColor:"white",height:'auto', width: wp('80%'),
       borderColor:"#d3d3d3",borderWidth:1}}>
    <View style={{height:'auto',width: wp('80%'),flexDirection:"row"}}>
    <View style={{height:'auto',width: wp('40%'),flexDirection:"column"}}>
         <Text style={{color:"#33a1De",fontSize:17,fontWeight:"bold"}}> Job No-
        </Text>
               <Text style={{color:"#33a1De",fontSize:17,fontWeight:"bold"}}> {item.Tool}-</Text>
               <Text style={{color:"#33a1De",fontSize:17,fontWeight:"bold"}}> {item.speedtype}-</Text>
               <Text style={{color:"#33a1De",fontSize:17,fontWeight:"bold"}}> {item.time}</Text>
               <Text style={{color:"#33a1De",fontSize:17,fontWeight:"bold"}}> {item.date}</Text>
               <Text style={{color:"#33a1De",fontSize:17,fontWeight:"bold"}}> {item.Status}</Text>
            
         </View>
         <View style={{height:'auto', width: wp('40%'),flexDirection:"column"}}>
         <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}> {item.jobNumber}</Text>
         <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}> {item.machinename} </Text>
         <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}>{item.Segmentspeed}</Text>
         <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}> {item.Time} </Text>
         <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}> {item.dates} </Text>
         <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}> {item.status} </Text>
     
        </View>
        
         </View>

        
    </CollapseBody>
</Collapse>

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
export default CompletedJobs
const styles = StyleSheet.create({
    container: {

        width: dwidth,
        height: dheight,
        backgroundColor: "white"
    },
    dropdown: {

        width: dwidth,
        height: dheight*0.70,
        backgroundColor: "white",
        alignItems:"center",
        
    },
    buttonView:{
        width: dwidth,
        height: dheight*0.10,
        backgroundColor: "white"
    },
    
    button: {
        alignItems: "center",
        
        marginHorizontal:50,
        backgroundColor: "white",
        padding: 10,
        backgroundColor: "#33a1De",
        
      
       },
});


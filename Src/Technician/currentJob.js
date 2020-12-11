import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    FlatList
} from 'react-native';
// import StackHeader from '../StackHeader/StackHeader'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import {AppStorage, key} from '../utils/AppStorage';
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

const mainData = [
    { id: 'BEC-2550', jobcode: 'j-65548', Name: 'Mac', Stage: 1, hours: 2 },
    { id: 'BEC-2553', jobcode: 'j-65548', Name: 'motor', Stage: 3, hours: 2 },
    { id: 'BEC-2554', jobcode: 'j-65548', Name: 'testing', Stage: 4, hours: 5 },
    { id: 'BEC-2555', jobcode: 'j-65548', Name: ' motor', Stage: 4, hours: 5 },
    { id: 'BEC-2556', jobcode: 'j-65548', Name: 'motor', Stage: 4, hours: 5 },
    { id: 'BEC-2557', jobcode: 'j-65548', Name: 'Mac ', Stage: 4, hours: 5 },
    { id: 'BEC-2558', jobcode: 'j-65548', Name: 'testing', Stage: 4, hours: 5 },

    

    
    
    
];


 const AssignButtonView=({item,assignedJobcode})=>{

    // if(assignedJobcode!=null)
    // {
        if (assignedJobcode!=null  && item.JobCode=== assignedJobcode)
        {
        
        return(
         
            <TouchableOpacity style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
            justifyContent:"center",alignItems:"center"}}
            onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }>
        <Text style={{ color: 'white',justifyContent:"center", textAlign:"center"}}>View  </Text>
        
        </TouchableOpacity>
       
        
        );
        
        
        }
        
        else if(item.JobCode!= assignedJobcode)
        {
            return(
            
                       <TouchableOpacity style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
            justifyContent:"center",alignItems:"center"}}
            onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }>
        <Text style={{ color: '#000000',justifyContent:"center", textAlign:"center"}}>Assign </Text>
        
        </TouchableOpacity>
        
            
            
            );
    
    }
    
    else{

        return(
            
            <TouchableOpacity style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
 justifyContent:"center",alignItems:"center"}}
 onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }>
<Text style={{ color: '#ffffff',justifyContent:"center", textAlign:"center"}}>Assign </Text>

</TouchableOpacity>

 
 
 );

    }
        
    
    
    }
    
    // else{
    // d   
    //     return(
          
    //         <TouchableOpacity style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
    //         justifyContent:"center",alignItems:"center"}}
    //         onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }>
    //     <Text style={{ color: '#ffffff',justifyContent:"center", textAlign:"center"}}>Assign </Text>
        
    //     </TouchableOpacity>
        
       
    //     );
    
    
    // }
    
    
    
    
export default class CurrentJobs extends Component {



    constructor() {
        super();

        this.state = {
            orderData: mainData ,
            isFeebackIcon: true,
            isMenuIcon: true,
<<<<<<< HEAD
           
=======
<<<<<<< HEAD
           
=======
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
            userId:'',
            assignedJobcode:''
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
        }       
    }
    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({ orderData: mainData.filter(x=>(x.Name).toString().toLowerCase().indexOf(searchText) > -1 ||
           (x.id).toString().toLowerCase().indexOf(searchText) > -1||
           (x.Stage).toString().indexOf(searchText) > -1||
           (x.hours).toString().indexOf(searchText) > -1||
           (x.jobcode).toString().toLowerCase().indexOf(searchText)> -1)});
      }
  

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  }
  toggleLoader = (val) => {
    this.setState(({ isLoading: val }));
};
      








Fun_GetAllRecords = async () => {


        try {
            this.toggleLoader(true);
             let technician_list= await AppStorage.getAllTechnician();

            //  {this.state.technicianType.map(item=>
            //     ({label:item.CodeName,value:item.CodeName}))}
       


            var response=await AppStorage.getLoginResponse();
console.log("userId",response.userResponse.UserId);
technician_list.map(item=>
    {


if(item.UserId===response.userResponse.UserId)
{
    

console.log("job code",item.ActiveJobCode);
this.setState({
    assignedJobcode:item.ActiveJobCode
})
}


    }
    
    );
this.setState({
    userId:response.userResponse.UserId,
})
            console.log("technician list &&&&&&&&&&&&&&&&&&&",this.state.assignedJobcode);     
            
            

            let json_response = await AuthService.SuperviseCurrentJobs(this.state.stageId, this.state.jobTypeId, this.state.machineTypeId, this.state.startDate, this.state.endDate,
                this.state.clientId, this.state.assignToId, this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);

                

            console.log('GetAllRecords try==', json_response.data);
          
            // mainData=json_response.data.Permissions;
            if (json_response.data.StatusCode === 200) {
                // Alert.alert("data get successfully ");
                //  console.log('response condition+++++++++', json_response.data.data.jobsMainResponse);
                this.state.orderData=json_response.data.data.jobsMainResponse.jobResponse;
                 console.log('cht_list==========',this.state.orderData);
                // this.GetData(myrespo);

            }

        } catch (e) {

             Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }

    };
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    
    render() {
        const { dimensions } = this.state;
        const { search } = this.state;
        
        return (


          <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
          
        
        }}>
            <StatusBar hidden={false} backgroundColor={"#008BD0"} />
    
            <View style={{ height:'9%',backgroundColor: 'transparent', }}>
                    <DrawerHeader name="CurrentJobs" openDrawer={this.props.navigation} status={false} notification={true}/>  
                    </View>
                
                
                
                <View style={{height: '7%', width: '100%',justifyContent:"center",paddingHorizontal:10}}>
                <TextInput style={{fontSize:17}}
                    placeholder="Search"
                    underlineColorAndroid = "grey"
                    onChangeText={(text) => { this.updateSearch(text)}}
                />
                </View>
                <View style={{height: '6%', width: '100%', backgroundColor: '#0288d5', alignItems:"center",
            flexDirection: "row", justifyContent: "space-around", }}>
                    <Text style={styles.TextmainView}>Equip Id.</Text>
                    <Text style={styles.TextmainView}>Job Code</Text>
                    <Text style={styles.TextmainView}>Stage</Text>
                    <Text style={styles.TextmainView}>Assign Job </Text>
                </View>
                <View style={{height:'69%', width: '100%', backgroundColor: "white" }}>

                    <FlatList
                     data={this.state.orderData}
                        renderItem={({ item }) => {console.log("item****",item.JobCode)
                            return(
                            <View style={styles.FlatListView}>
                                <Text style={{ width: '25%', height: '100%',padding: 10,textAlign:"center"}}>{item.id}</Text>
                                <Text style={{ width: '25%', height: '100%', padding: 10,textAlign:"center"}}>{item.jobcode}</Text>
                              
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
                                <Text style={{ width: '25%', height: '100%',padding: 10, textAlign:"center"}}>{item.Stage}</Text>
                                <View style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
                                justifyContent:"center",alignItems:"center"}}>
<Text style={{ color: 'white',justifyContent:"center", textAlign:"center"}}>Assign Job</Text>
=======
                                <Text style={{ width: '23%', height: '100%',padding: 10, textAlign:"center"}}>{item.StageId}</Text>
                               

{/*                                 
                {item.JobCode=== this.state.assignedJobcode  ?   
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc



                 <TouchableOpacity style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
                                justifyContent:"center",alignItems:"center"}}
                                onPress={()=>this.props.navigation.navigate("ActiveJobs",{JobId:item.JobId}) }>
<Text style={{ color: 'white',justifyContent:"center", textAlign:"center"}}>View  </Text>

</TouchableOpacity>

 :

<View style={{width:'22%',height:'90%',backgroundColor:'#0288d5',marginHorizontal:4,
justifyContent:"center",alignItems:"center"}}>
<Text style={{ color: '#000000',justifyContent:"center", textAlign:"center"}}>Assign Job</Text>

</View>
} */}

<AssignButtonView item={item} assignedJobcode={this.state.assignedJobcode}/>
                                
                            </View>
                        )} 




                        } 
                        
                        
                        >

                    </FlatList>
                 
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
       flexDirection: 'column',
        width: dwidth,
        height: dheight,
        backgroundColor: "white",
        
    },
    mainView:{
        
            width: dwidth, 
            height: dheight*0.06,
            backgroundColor: '#0288d5', 
            alignItems:"center",
            flexDirection: "row",
            justifyContent: "space-around", 
            
        
    },
    TextmainView:{
        width: '25%',
        height: '100%',
        color:"white",
        padding: 10,
        textAlign:"center"
    },
FlatListView:{
 marginTop: '1%', 
 width: dwidth,
   flex: 1,
  justifyContent: 'center',
   borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    flexDirection: "row", 
    justifyContent: "space-around"
    
},
});



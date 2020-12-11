


import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, Dimensions, Image, FlatList, Alert, TouchableOpacity,StatusBar,SafeAreaView,BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//  import {} from 'react-native-gesture-handler';
import BottomHomeComponent from '../CommonComponents/BottomHomeComponent';
import DrawerHeader from '../CommonComponents/DrawerHeader'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AppStorage, key} from '../utils/AppStorage';
import AuthService from '../RestClient/AuthService';
<<<<<<< HEAD
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


let colors = ['#e8f7ff', '#fafafa']






export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'In Progress',
      allRecords: true,
      CategoryList: [
        {
          CategoryName: 'Current Jobs',
          CategoryIcon: require('../../assets/current_jobs.png'),

        },
        {
          CategoryName: 'Equipment Identification',
          CategoryIcon: require('../../assets/equipment_identification.png'),

        },
        {
          CategoryName: 'Technicians',
          CategoryIcon: require('../../assets/Technician.png'),

        },
        {
          CategoryName: 'Job Assignment',
          CategoryIcon: require('../../assets/job_assignment.png'),

        },
        {
          CategoryName: 'Completed Jobs',
          CategoryIcon: require('../../assets/completed_jobs.png'),

        },
        {
          CategoryName: 'Client Feedback/Comments',
          CategoryIcon: require('../../assets/client_feedback.png'),

        },





      ]




    }

  }
  componentDidMount = async () => {
    let UserId = await AppStorage.getUserId();


    try {
      let respo = await AuthService.JobDetails(UserId,UserId,this.state.status,this.state.allRecords);
      console.log('dashboard_respo_home########################',respo.data.data.jobsMainResponse);


      AppStorage.saveKey(key.USER_JOBSDETAILS, JSON.stringify(respo.data)).then(() => {

      });

    } catch (e) {

      //Alert.alert(e.response.data.Message);
      console.log('dashboard_techincian catch me print hua', e);
    } finally {
      console.log('dashboard_techincian finally print hua');
    }

    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );



  }
componentWillUnmount=()=>{

}
  handleBackButtonClick=()=> {
 
    return true;
  }



  componentDidMount = async () => {
    let UserId = await AppStorage.getUserId();


    try {
      let respo = await AuthService.JobDetails(UserId,UserId,this.state.status,this.state.allRecords);
      alert(JSON.stringify(respo));
  console.log('dashboard_respo_home_superviser########################',respo.data.data.jobsMainResponse.jobResponse);


      AppStorage.saveKey(key.ALL_RECORDS_DATA, JSON.stringify(respo.data)).then(() => {

      });

    } catch (e) {

      //Alert.alert(e.response.data.Message);
      console.log('dashboard_techincian catch me print hua', e);
    } finally {
      // console.log('dashboard_techincian finally print hua');
    }

  }

  OnListItemClick = (item) => {


// Alert.alert(this.props.navigation.getParam('username'))

    if (item.CategoryName == "Current Jobs") {
      this.props.navigation.navigate("CurrentJobs")

    }



    else if (item.CategoryName == "Equipment Identification") {
      this.props.navigation.navigate("Equipment_Identification")
      this.props.navigation

    }

    else if (item.CategoryName == "Technicians") {
      this.props.navigation.navigate("Technicians")

    }
    else if (item.CategoryName == "Job Assignment") {
      this.props.navigation.navigate("JobAssignment",{JobAssignBool:false})

    }

    else if (item.CategoryName == "Completed Jobs") {
      this.props.navigation.navigate("CompletedJobs")

    }

    else if (item.CategoryName == "Client Feedback/Comments") {
      this.props.navigation.navigate("Feedback")
      // Alert.alert("feedback");
    }


  }



  renderItem = ({ item }) => (
    <Item item1={item} />

  )


  render() {
    return (
      <SafeAreaView style={styles.container}>
<<<<<<< HEAD
  
=======
           <StatusBar
     backgroundColor = "#008BD0"
     barStyle = "#ffffff"
   />
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        {/* ---------header-------------- */}
        <View style={styles.headerStyle}>
          <DrawerHeader name="Supervisor Dashboard" openDrawer={this.props.navigation} status={true} notification={true}/>
        </View>

        {/*  ----------category List------------           */}
        <View style={styles.CategoryListContainer}>
          <FlatList
            data={this.state.CategoryList}
            // renderItem={this.renderItem}
            renderItem={({ item, index }) => (
              <View style={{
                backgroundColor: colors[index % colors.length], marginHorizontal: wp('3%'),
                marginVertical: hp('1%')
              }}>
                <TouchableOpacity onPress={() => this.OnListItemClick(item)} style={styles.ListItem}>


                  <Text style={styles.CategoryNameStyle}>{item.CategoryName} </Text>
                  <View style={styles.CategoryIconBackground}>
                    <Image
                      style={styles.CategoryIconStyle}
                      source={item.CategoryIcon}
                    />
                  </View>


                </TouchableOpacity>
              </View>


            )}
            keyExtractor={(item) => item.CategoryName}
          />

        </View>

        {/*------------- Footer------------- */}
        <View style={styles.FooterStyle}>
        <BottomTabNavigator isFeedbackIcon={false} isMenuIcon={true} navigate={this.props.navigation.navigate}/>

        </View>



      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
   width:'100%',
   height:'100%'

  },
  headerStyle: {

    height:'9%',
    width:'100%',
    backgroundColor: 'red',
  },

  CategoryListContainer: {

    height:'82%',
    width:'100%',
    marginVertical:'1%',


      // backgroundColor:'yellow',

  },

  FooterStyle: {

    backgroundColor: 'orange',
    height:'9%',


  },

  ListItem: {


    //  backgroundColor:colors[index%colors.length],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('4%')
  },
  CategoryIconStyle: {
    height: hp('5.9%'),
    width: wp('6%'),
    resizeMode: 'contain',
    // backgroundColor:'red'

  },
  CategoryNameStyle: {
    fontSize: hp('2.5%'),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
  },

  CategoryIconBackground: {
    backgroundColor: '#fff',
    // paddingVertical:hp('1%'),
     paddingHorizontal:wp('2%'),
    borderRadius: 35,
  }

});






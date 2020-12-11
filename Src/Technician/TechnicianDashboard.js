import React from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image,
    FlatList,
    Alert,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppStorage} from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';

//  import {} from 'react-native-gesture-handler';
import BottomHomeComponent from '../CommonComponents/BottomHomeComponent';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import {AppStorage, key} from '../utils/AppStorage';
import AuthService from '../../Src/RestClient/AuthService';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
<<<<<<< HEAD
import { SafeAreaView } from 'react-native-safe-area-context';
<<<<<<< HEAD
   let colors = ['#e8f7ff', '#fafafa']

  export default class TechnicianDashboard extends React.Component {
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
                          CategoryName: 'Notes',
                          CategoryIcon: require('../../assets/nav_dashboard.png'),
                
                        },
                        {
                          CategoryName: 'My Notification',
                          CategoryIcon: require('../../assets/notification_black.png'),
                
                        },
                        {
                          CategoryName: 'My Team',
                          CategoryIcon: require('../../assets/Technician.png'),
                
                        },
                        {
                          CategoryName: 'Jobs in Progress',
                          CategoryIcon: require('../../assets/job_in_progress.png'),
                
                        },
                        {
                          CategoryName: 'Additional Work Hours',
                          CategoryIcon: require('../../assets/job_assignment.png'),
                
                        },
                
           ]
                
                
 }

  }

=======
import {AppStorage, key} from '../utils/AppStorage';
import AuthService from '../RestClient/AuthService';



let colors = ['#e8f7ff', '#fafafa']


=======
import {SafeAreaView} from 'react-native-safe-area-context';
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc


let colors = ['#e8f7ff', '#fafafa'];


export default class TechnicianDashboard extends React.Component {
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
                    CategoryName: 'Notes',
                    CategoryIcon: require('../../assets/nav_dashboard.png'),

<<<<<<< HEAD
    }

  }

  componentDidMount = async () => {
    let UserId = await AppStorage.getUserId();
    console.log("userid**********",UserId)
   
    try {
      let respo = await AuthService.JobDetails(UserId,UserId,this.state.status,this.state.allRecords);

      alert(JSON.stringify(respo));
      AppStorage.saveKey(key.USER_JOBSDETAILS, JSON.stringify(respo.data)).then(() => {
        this.props.navigation.navigate('Dashboard');
    });
=======
                },
                {
                    CategoryName: 'My Notification',
                    CategoryIcon: require('../../assets/notification_black.png'),

                },
                {
                    CategoryName: 'My Team',
                    CategoryIcon: require('../../assets/Technician.png'),
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                },
                {
                    CategoryName: 'Jobs in Progress',
                    CategoryIcon: require('../../assets/job_in_progress.png'),

                },
                {
                    CategoryName: 'Additional Work Hours',
                    CategoryIcon: require('../../assets/job_assignment.png'),
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                },

            ],


        };

    }

<<<<<<< HEAD
     else if (item.CategoryName == "Notes") {
      this.props.navigation.navigate("Notes")
     }

    else if (item.CategoryName == 'My Notification') 
    {
      this.props.navigation.navigate("MyNotification")
    }
    else if (item.CategoryName == "My Team") {
      this.props.navigation.navigate("TeamMemberTechnician")
   }
    else if (item.CategoryName == "CompletedJobs")
    {
      this.props.navigation.navigate("CompletedJobs")
=======
    componentDidMount = async () => {
        let UserId = await AppStorage.getUserId();


        try {
            let respo = await AuthService.JobDetails(UserId, UserId, this.state.status, this.state.allRecords);
            console.log('dashboard_respo technician########################', respo.data.data.jobsMainResponse.jobResponse);

            AppStorage.saveKey(key.ALL_RECORDS_DATA, JSON.stringify(respo.data.data.jobsMainResponse.jobResponse)).then(() => {

            });

        } catch (e) {

            //Alert.alert(e.response.data.Message);
            console.log('dashboard_techincian catch me print hua', e);
        } finally {
            // console.log('dashboard_techincian finally print hua');
        }

    };

<<<<<<< HEAD
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    }
    else if (item.CategoryName == "Jobs in Progress") 
    {
      this.props.navigation.navigate("JobInProgress")
<<<<<<< HEAD
=======
     
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    }

    else if (item.CategoryName == "Additional Work Hours") {
      this.props.navigation.navigate("AdditionalHours")
      
    }
<<<<<<< HEAD

=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    OnListItemClick = (item) => {

  componentDidMount = async () => {
    let UserId = await AppStorage.getUserId();
   
    try {
      let respo = await AuthService.JobDetails(UserId,UserId,this.state.status,this.state.allRecords);

<<<<<<< HEAD
      alert(JSON.stringify(respo));
      AppStorage.saveKey(key.USER_JOBSDETAILS, JSON.stringify(respo.data)).then(() => {
        this.props.navigation.navigate('Dashboard');
    });

  } catch (e) {

      Alert.alert(e.response.data.Message);
    //  console.log('login catch me print hua', e.respo);
  } finally {
       console.log('login finally print hua');
  }

 }
  renderItem = ({ item }) => (
    <Item item1={item} />

  )


  render() {
    return (
      
      <SafeAreaView style={styles.container}>
           <StatusBar  
     backgroundColor = "#008BD0"  
     barStyle = "#ffffff"   
   /> 
        {/* ---------header-------------- */}
        <View style={styles.headerStyle}>
          <DrawerHeader name="Technician" openDrawer={this.props.navigation} status={true} notification={true}/>
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
=======
        if (item.CategoryName == 'Current Jobs') {
            this.props.navigation.navigate('currentJob');

        } else if (item.CategoryName == 'Notes') {
            this.props.navigation.navigate('Notes');
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


        } else if (item.CategoryName == 'My Notification') {
            this.props.navigation.navigate('MyNotification');

        } else if (item.CategoryName == 'My Team') {
            this.props.navigation.navigate('TeamMemberTechnician');

        } else if (item.CategoryName == 'CompletedJobs') {
            this.props.navigation.navigate('CompletedJobs');

        } else if (item.CategoryName == 'Jobs in Progress') {
            this.props.navigation.navigate('JobInProgress');
            // Alert.alert("feedback");
        } else if (item.CategoryName == 'Additional Work Hours') {
            this.props.navigation.navigate('AdditionalHours');
            // Alert.alert("feedback");
        }


    };


    renderItem = ({item}) => (
        <Item item1={item}/>

    );


    render() {
        return (

            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="#008BD0"
                    barStyle="#ffffff"
                />
                {/* ---------header-------------- */}
                <View style={styles.headerStyle}>
                    <DrawerHeader name="Technician" openDrawer={this.props.navigation} status={true}
                                  notification={true}/>
                </View>

                {/*  ----------category List------------           */}
                <View style={styles.CategoryListContainer}>
                    <FlatList
                        data={this.state.CategoryList}
                        // renderItem={this.renderItem}
                        renderItem={({item, index}) => (
                            <View style={{
                                backgroundColor: colors[index % colors.length], marginHorizontal: wp('3%'),
                                marginVertical: hp('1%'),
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
                    <BottomTabNavigator isFeedbackIcon={false} isMenuIcon={true}
                                        navigate={this.props.navigation.navigate}/>

                </View>


            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',


    },
    headerStyle: {

        height: '9%',
        width: '100%',
        backgroundColor: 'red',
    },

    CategoryListContainer: {

        height: '82%',
        width: '100%',
        marginVertical: '1%',


        // backgroundColor:'yellow',

    },

    FooterStyle: {

        backgroundColor: 'orange',
        height: '9%',


    },

    ListItem: {


        //  backgroundColor:colors[index%colors.length],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp('2.5%'),
        paddingHorizontal: wp('4%'),
    },
    CategoryIconStyle: {
        height: hp('5.9%'),
        width: wp('6%'),
        resizeMode: 'contain',
        // backgroundColor:'red'

    },
    CategoryNameStyle: {
        fontSize: hp('2.5%'),
    },

    CategoryIconBackground: {
        backgroundColor: '#fff',
        // paddingVertical:hp('1%'),
        paddingHorizontal: wp('2%'),
        borderRadius: 35,
    },

});












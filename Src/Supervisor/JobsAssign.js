
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
  TouchableHighlight,
  Modal,
  FlatList,
  Picker,
  Alert,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { Container, Header, Title, Left, Right, Body, Card } from 'native-base'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DrawerHeader from '../CommonComponents/DrawerHeader'
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
const mainData = [];








export default class JobAssign extends Component {



  constructor(props) {
    super();
    this.state = {
      isFeebackIcon: true,
      isMenuIcon: true,
      userId: 0,
      page: 0,
      limit: 0,
      orderBy: "CreatedOn",
      orderByDescending: true,
      allRecords: true,
      isLoading: false,
      mydata: [],
      orderData: mainData,
      // orderData: [



      //   { MachineId: 1, JobCode: "JN-789009",
      //     MachineName: "BEC-Induction Motor",MachineTypeName: "BEC-Phase Motor" },
      //   { MachineId: 2, JobCode: "JN-789006",  
      //   MachineName: "BEC-Induction Motor",MachineTypeName: "Phase Motor" },
      //   { MachineId: 3, JobCode: "JN-789007", 
      //    MachineName: "BEC-Induction Motor",MachineTypeName: "BEC-Phase Motor" },

      //   { MachineId: 4, JobCode: "JN-789008", 
      //    MachineName: "BEC-Induction Motor",
      //    MachineTypeName: "Phase Motor" },
      //   { MachineId: 5, JobCode: "JN-789009", 
      //    MachineName: "BEC-Induction Motor",MachineTypeName: "BEC-Phase Motor" },
      //   { MachineId: 6, JobCode: "JN-789011", 
      //    MachineName: "BEC-Induction Motor",MachineTypeName: "Phase Motor" },

      //   { MachineId: 7, JobCode: "JN-789012", 
      //    MachineName: "BEC-Induction Motor",MachineTypeName: "Phase Motor" },
      //   { MachineId: 8, JobCode: "JN-789013", 
      //    MachineName: "BEC-Induction Motor",MachineTypeName: "BEC-Phase Motor" },
      //   { MachineId: 9, JobCode: "JN-789014",  
      //   MachineName: "BEC-Induction Motor",MachineTypeName: "Phase Motor" },





      // ],


      selectedcat: "",
      category: [
        {
          itemName: '1'
        },
        {
          itemName: '2'
        },
        {
          itemName: '3'
        },
        {
          itemName: '4'
        },
        {
          itemName: '5'
        },
        {
          itemName: '6'
        }
      ]

    }


  }
  showAlert = () => {
    Alert.alert(
      'Alert ',
      'Job Assigned',
      [

        { text: 'OK', onPress: () => this.props.navigation.navigate('Technicians') },


      ]

    );


  }
  componentDidMount = async () => {
    this.Fun_GetJobAssignRecords();
  };


  toggleLoader = (val) => {
    this.setState(({ isLoading: val }));
  };


  Fun_GetJobAssignRecords = async () => {
    try {
      this.toggleLoader(true);
      let json_response = await AuthService.AssignmentJobs(this.state.userId,
        this.state.page, this.state.limit, this.state.orderBy, this.state.orderByDescending,
        this.state.allRecords);

      //  console.log('GetJobAssignRecords try==', json_response.data.
      //  data.JobAssignMainDetail.jobAssignDetail);


      if (json_response.data.StatusCode === 200) {


        console.log('GetJobAssignRecords try==', json_response.data.
          data.JobAssignMainDetail.jobAssignDetail);

        this.state.mydata = json_response.data.data.JobAssignMainDetail.jobAssignDetail;
        console.log("hey", this.state.mydata)
        this.state.orderData = json_response.data.data.JobAssignMainDetail.jobAssignDetail;
        console.log("Data entered", this.state.orderData)






      }
    } catch (e) {

      Alert.alert(e.response);
      console.log('GetJobAssignRecords catch', e.response);
    } finally {
      this.toggleLoader(false);
      console.log('GetJobAssignRecords finally print hua');
    }
  };
  updateSearch = (search) => {
    let searchText = search.toLowerCase();
    this.setState({
      orderData: mainData.filter(x => (x.Name).toString().toLowerCase().indexOf(searchText) > -1 ||
        (x.id).toString().toLowerCase().indexOf(searchText) > -1 ||
        (x.address).toString().toLowerCase().indexOf(searchText) > -1 ||
        (x.Data).toString().toLowerCase().indexOf(searchText) > -1)
    });

  }

  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }




  render() {
    const { dimensions } = this.state;
    const { modalVisible } = this.state;
    const { isLoading } = this.state;
    return (

      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",


      }}>
        <StatusBar hidden={false} backgroundColor={"#008BD0"} />
        <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
        }} />
        <View style={{ height: '10%', backgroundColor: 'transparent' }}>
          <DrawerHeader name="Current Jobs" openDrawer={this.props.navigation} status={false} notification={true} />
        </View>
        <View style={{ height: '10%', width: '97%', justifyContent: "center", backgroundColor: "transparent", paddingHorizontal: 10 }}>
          <TextInput style={{ fontSize: 17 }}
            placeholder="Search"
            underlineColorAndroid="grey"
            multiline={true}
            onChangeText={(text) => { this.updateSearch(text) }}
          />
        </View>
        <View style={{ height: '70%', width: '100%', backgroundColor: "transparent", alignItems: "center", marginBottom: 9 }}>
          <ScrollView vertical={true}
            showsVerticalScrollIndicator={false}
          >
            {
              this.state.orderData.map((item, key) => (

                <Card style={{
                  height: '1.2%', width: '97%',
                  backgroundColor: "#e6f7ff", flexDirection: "row",
                  justifyContent: "center", alignItems: 'center'

                }}>
                  <View style={{
                    height: '25%', width: '47%', backgroundColor: "transparent", justifyContent: "center", alignItems: 'flex-start'

                  }}>


                    <Text style={{ marginLeft: 5 }}>{item.JobCode}</Text>
                    <Text style={{ marginLeft: 5, top: 10 }}>
                      {"\n"}
                      {item.MachineName}</Text>
                  </View>
                  <View style={{
                    height: hp('15%'), width: wp('47%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center'

                  }}>


                    <TouchableOpacity onPress={this.showAlert}>

                      <View style={{ elevation: 4, backgroundColor: 'transparent', width: wp('35%'), height: hp('5%'), flexDirection: 'row' }}>

                        <View style={{ backgroundColor: '#015ea1', width: wp('10%'), height: hp('5%'), justifyContent: 'center', alignItems: 'center' }}>
                          <Image source={require('../../assets/tick_icon.png')}
                            style={{ width: 25, height: 25 }} />

                        </View>
                        <View style={{ backgroundColor: '#0288d5', width: wp('25%'), height: hp('5%'), alignItems: 'center', justifyContent: 'center' }}>
                          <Text style={{ color: 'white' }}>Assign Job</Text>
                        </View>

                      </View>

                      <Text style={{ textAlign: "center", }}>
                        {"\n"}

                        {item.MachineTypeName}</Text>
                    </TouchableOpacity>
                  </View>

                </Card>



              ))}
          </ScrollView>
        </View>


        <View>

          <View style={{ height: '9%', backgroundColor: 'transparent' }}>
            <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}>
            </BottomTabNavigator>
          </View>


        </View>


      </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: 'center',
    height: dheight,
    backgroundColor: "white"
  },

  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007aff"
  },
  pickerStyle: {

    height: 40,
    color: "black",
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  }
});



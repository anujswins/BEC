
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
  TouchableHighlight,
  Modal,
  FlatList,
  Picker,
  Alert,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';

import { Container, Header, Title, Left, Right, Body, Card } from 'native-base'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DrawerHeader from '../CommonComponents/DrawerHeader'
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
const mainData = [

  { id: 1, Name: "JN-789005", Data: "BEC-INDUCTION MOTOR", address: "BEC-Phase Motor" },
  { id: 2, Name: "JN-789005", Data: "BEC-Induction Motor", address: "BEC-Phase Motor" },
  { id: 3, Name: "JN-789005", Data: "BEC-Induction Motor", address: "BEC-Phase Motor" },





];
export default class JobAssign extends Component {



  constructor(props) {
    super();
    this.state = {
      isFeebackIcon: true,
      isMenuIcon: true,
      orderData: mainData,
      orderData: [



        { id: 1, Name: "JN-789009", Data: "BEC-Induction Motor", address: "BEC-Phase Motor" },
        { id: 2, Name: "JN-789006", Data: "BEC-Induction Motor", address: "Phase Motor" },
        { id: 3, Name: "JN-789007", Data: "BEC-Induction Motor", address: "BEC-Phase Motor" },

        { id: 4, Name: "JN-789008", Data: "BEC-Induction Motor", address: "Phase Motor" },
        { id: 5, Name: "JN-789009", Data: "BEC-Induction Motor", address: "BEC-Phase Motor" },
        { id: 6, Name: "JN-789011", Data: "BEC-Induction Motor", address: "Phase Motor" },

        { id: 7, Name: "JN-789012", Data: "BEC-Induction Motor", address: "Phase Motor" },
        { id: 8, Name: "JN-789013", Data: "BEC-Induction Motor", address: "BEC-Phase Motor" },
        { id: 9, Name: "JN-789014", Data: "BEC-Induction Motor", address: "Phase Motor" },
        




      ],


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

        { text: 'OK', onPress: () =>     this.props.navigation.navigate('JobAssignment')},
        
  
      ]
      
    );


  }
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

    return (

      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
      
    
    }}>
        <StatusBar hidden={false} backgroundColor={ "#008BD0"} />
        <View style={{ height:'10%',backgroundColor: 'transparent' }}>
        <DrawerHeader name="Current Jobs" openDrawer={this.props.navigation} status={false} notification={true}/>  
        </View>
        <View style={{ height: '10%', width: '97%', justifyContent: "center",backgroundColor: "transparent",paddingHorizontal:10 }}>
          <TextInput style={{fontSize:17}}
            placeholder="Search"
            underlineColorAndroid="grey"
            multiline={true}
            onChangeText={(text) => { this.updateSearch(text) }}
          />
        </View>
        <View style={{ height: '70%', width: '100%', backgroundColor: "transparent", alignItems: "center",marginBottom:9 }}>
          <ScrollView vertical={true}
            showsVerticalScrollIndicator={false}
          >
            {
              this.state.orderData.map((item, key) => (
                <Card style={{
                  height: '10%', width: '97%', backgroundColor: "#e6f7ff", flexDirection: "row", justifyContent: "center", alignItems: 'center'

                }}>
                  <View style={{
                 height: '15%', width: '47%', backgroundColor: "transparent", justifyContent: "center", alignItems: 'flex-start'

                  }}>


                    <Text style={{ marginLeft: 5 }}>{item.Name}</Text>
                    <Text style={{ marginLeft: 5, top: 10 }}>
                      {"\n"}
                      {item.Data}</Text>
                  </View>
                  <View style={{
                    height: hp('15%'), width: wp('47%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center'

                  }}>

                    
                    <TouchableOpacity onPress={this.showAlert}>

                      <View style={{ elevation: 4, backgroundColor: 'transparent', width: wp('35%'), height:hp('5%'), flexDirection: 'row' }}>

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

                        {item.address}</Text>
                    </TouchableOpacity>
                  </View>

                </Card>



              ))}
           </ScrollView> 
          </View>
    

          <View>

<View style={{ height:'9%',backgroundColor: 'transparent' }}>
<BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}  navigate={this.props.navigation.navigate}>
 </BottomTabNavigator>
               </View>

  
</View>


      </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
  container: {

  flex:1,
   alignItems:'center',
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



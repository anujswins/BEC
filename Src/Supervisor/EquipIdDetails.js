
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Modal
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } 
from "react-native-simple-radio-button";
import { TickButton } from '../CommonComponents/TickButton';
import { Picker } from '@react-native-community/picker';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { showMessage, hideMessage } from "react-native-flash-message";
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var radio_props = [
  { label: "Regular", value: 0 },
  { label: "Cash", value: 1 }
]

var radio_props1 = [
  { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
  { label: "BEC-2-Phase Motor", value: "BEC-2-Phase Motor" },
  { label: "BEC-1-Phase Motor", value: "BEC-1-Phase Motor" },
  { label: "BEC-3-Phase Induction Motor", value: "BEC-3-Phase Induction Motor" },
  { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
  { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
  { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
  { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
  
]

var Mac_A = [{ Mactype: "Machine Type", MacValue: "BEC-3-Phase Motor" }]
var Mac_B = [{ Mactype: "Machine", MacValue: "BEC - Induction Motor" }]
export default class Equip_ID extends Component {
  constructor() {
    super();
    this.state = {
      Data: [{ Equipment_id: "BEC-72164", Job_Num: "JN-66888" }],
      radio: radio_props,
      value: "",
      value1: "",
      SearchClient: "",
      ClientNameData: "",
      ClientCodeData: "",
      isValid: true,
      MachineType: Mac_A,
      Machine: Mac_B,
      lang: "",
      ClientCode: [{ Client_Code: "C-Cash" }],
      show: true,
      showModal:false,
      MachType:[{Motor:"BEC-3-Phase Motor"}],
      showMachineTypeModal:true,
      value2:"",
      Mtype:"",
      click:false,
      isfocusClientName:true,
      isfocusMobileNo:true,
      isfocusEmail:true,
      enterMobileNo:'',


    }
  }

  onFocus = () => {
  
    this.props.navigation.navigate("SearchClient") 
    {this.setState({click:true})}
   { this.setState({ show: false }) }
  }

  Machinetype=()=>{
     //this.props.navigation.navigate("Modal", {showModal:true})
    //  if (this.state.value2==""){
    // this.setState({showMachineTypeModal:true})}
    // else{
    //   this.setState({showMachineTypeModal:false})}
      this.setState({showMachineTypeModal:false})
    this.setState({showModal:true})
  

  }
  validates = () => {

    if (this.state.click == false) {
     
        
        showMessage({
            message:"Please select client",
             type:"info",
              backgroundColor: "black",
             position:(0,0,100,100),
             hideStatusBar:false
          });
    }
    else {
         
      {this.props.navigation.navigate("JobAssignment")}

    }

}
handleFocus =()=>{
this.setState({isfocusClientName:false})
}
handleFocusMobNo=()=>{
  this.setState({isfocusMobileNo:false})
  this.setState({isfocusClientName:true})
}
handleFocusEmail=()=>{
  this.setState({isfocusEmail:false})
  this.setState({isfocusClientName:true})
  this.setState({isfocusMobileNo:true})
}
MobileNumText=(value)=>{
  //alert('')
  this.setState({enterMobileNo: value})
 // this.setState({isfocus:true})
  console.log(this.state.enterMobileNo)
}
  render() {

    // let ClientNameData = this.props.route.params.ClientNameData
    // let ClientCodeData = this.props.route.params.ClientCodeData
    // const {ClientNameData} = this.props.route.params
    // console.log(ClientNameData)
    // //console.log(ClientCodeData)
    var options = ["Home", "Savings", "Car", "GirlFriend"];
    return (
      <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "#FFFFFF", }}>
        <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
        <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} notification={true}/>
                </View>
        <View style={{height:'82%', width:'100%', backgroundColor:'#FFFFFF'}}>
        <View style={{ height: '22%', width: '100%', backgroundColor: "#E6F7FF" }}>
        <View style={{ height: '40%', width: '100%', paddingTop: '2%', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('2.2%'), fontWeight: 'bold', backgroundColor:'transparent',width:'15%',paddingLeft:'0.5%'}}>Stage</Text>
                        </View>
                        <View style={{ height: '60%', width: '100%', flexDirection: 'row', backgroundColor: 'transparent' }}>
                        <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05, }} />
                            <View style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008BD0'
                            }}>
                                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>1</Text>
                            </View>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
                            <View style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
                            }}>
                                <Text style={{ fontSize: hp('2%') }}>2</Text>
                            </View>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
                            <View style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.1,
                                height: Dimensions.get('window').width * 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D0D0'
                            }}>
                                <Text style={{ fontSize: hp('2%') }}>3</Text>
                            </View>
                            <View style={{ height: '1%', width: wp('17.5%'), backgroundColor: '#D0D0D0', marginTop: Dimensions.get('window').width * 0.05 }} />
                        </View>
                    </View>
                    <View style={{height:"68%", width:'100%', backgroundColor:'transparent'}}>
                        <ScrollView>
                        <FlatList data={this.state.Data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ backgroundColor: "transparent" }}>

                <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                  <View style={{ width: wp('44%'),  justifyContent: "center",  backgroundColor: "transparent" }}>
                    <Text style={{ fontSize: hp('1.8%'), }}>
                      Enter Equipment Id
                                        </Text>
                    
                  </View>
                  <View style={{ width: wp('46%'),height:hp('4.5'),paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                    <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                      {item.Equipment_id}
                    </Text>
                  </View>
                </View>
                <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                  <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                    <Text style={{ fontSize: hp('1.8%') }}>
                      Job Number
                                            </Text>

                  </View>
                  <View style={{ width: wp('46%'),height:hp('4.5'),paddingBottom: hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                    <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                      {item.Job_Num}
                    </Text>
                  </View>
                </View>




              </View>
            )}>
          </FlatList>



          <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
            <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
              <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                Client
            </Text>
            </View>
            <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={true}
                buttonColor={"#0089CF"}
                animation={false}
                buttonSize={7}
                radioStyle={{marginTop:hp('1%')}}
                labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%')}}
                onPress={(value, index) => {
                  this.setState({ value1: value })
                  this.setState({ value1: index })
                  console.log(this.state.value1)
                }}

              />
            </View>
          </View>
          {this.state.value1 == 0 ? <View>{this.state.show?
            <View style={{height: hp('6%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
              <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>
                  Search Client
                </Text>
              </View>
              <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end",}}>
                <TextInput underlineColorAndroid={'#D2D3D5'} style={{width: wp('46%'), fontSize: hp('1.8%'), backgroundColor: "transparent",paddingTop:hp('1%') }}
                  placeholder="Code/F.Name/L.Name"
                  onFocus={() => this.onFocus()}  
                />
              </View>
            </View>
            : <View>
              <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
                </View>
                <TouchableOpacity onPress={()=> this.onFocus()}>
                <View style={{ width: wp('46%'),height: hp('4.5%'),paddingBottom:hp('0.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientCodeData'))}</Text>
                </View>
                </TouchableOpacity>
              </View>
              <View style={{height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
                </View>
                <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientNameData'))}</Text>
                </View>
              </View>
              <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
                </View>
                <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMob'))}</Text>
                </View>
              </View>
              <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email id</Text>
                </View>
                <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMail'))}</Text>
                </View>
              </View>
            </View> }
            <TouchableOpacity activeOpacity={0.8} onPress={()=>this.Machinetype()}>
            <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
               
                <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
       {this.state.showMachineTypeModal?     <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine Type</Text>
        :<Text style={{ fontSize: hp('2%'), backgroundColor: "transparent" }}>{this.state.Mtype}</Text>

        }
                </View>
                <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                  <Image source={require('../../assets/dropdown_icon.png')}
                    style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                </View>
              </View>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine</Text>
                </View>
                <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                  <Image source={require('../../assets/dropdown_icon.png')}
                    style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                </View>
              </View>
              <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Segment</Text>
                </View>
                <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                  <Image source={require('../../assets/dropdown_icon.png')}
                    style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                </View>
              </View>

              <Modal visible={this.state.showModal}
                    transparent={true}>
                        <View style={{backgroundColor:"#000000aa", flex:1}}>
                            <View style={{height:'30%',width:'90%',backgroundColor:"#ffffff", marginTop:'60%', marginHorizontal:'5%'}}>
                                <View style={{height:'18%', width:'100%', backgroundColor:"transparent", justifyContent:"center", alignItems:"flex-start", paddingLeft:'5%'}}>
                                <Text style={{fontWeight:"bold", fontSize:hp('2.1%'), backgroundColor:'transparent',width:'60%'}}>
                                    Select Machine Type
                                </Text>
                                </View>
                                <View style={{height:'62%', width:'100%', backgroundColor:'#ffffff'}}>
                                    <FlatList data={this.state.MachType}
                                    keyExtractor={(item,index)=>index.toString()}
                                    renderItem={({item})=>(
                                        <View style={{backgroundColor:"transparent", marginLeft:wp('5%')}}>
 <RadioForm
              radio_props={radio_props1}
              initial={-1}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#D6D6D6"}
              animation={false}
              buttonSize={8}
              labelStyle={{ fontSize: hp('1.9%'), marginRight: wp('4%'),}}
              onPress={(value, index) => {
                this.setState({ value2: value })
                // this.setState({ value2: index })
                console.log(this.state.value2)
              }}
              radioStyle={{paddingRight: 40, marginVertical:hp('1%')}}
              wrapStyle={{marginVertical:hp('9%')}}
              

            />
                                        </View>
                                    )}>

                                    </FlatList>
                               
            </View>
            <View style={{height:'20%', width:'100%', backgroundColor:"transparent", paddingRight:'5%', paddingBottom:'4%'}}>
                                <TouchableOpacity onPress={()=>{this.setState({Mtype:this.state.value2})
                                this.setState({showModal:false})
                              console.log(this.state.Mtype)}}>
                                <View style={{ backgroundColor:'transparent', alignItems:'flex-end', justifyContent:'flex-end', marginTop:'8%'}}>
                                <Text style={{fontSize:hp('1.9%'), color:"#008AD2", fontWeight:"bold", backgroundColor:'transparent',width:'22%'}}>
                                    CHOOSE
                                </Text>
                                </View>
                                </TouchableOpacity>
                                </View>
                            
                                
                            </View>
                        </View>

                    </Modal>







          </View> : <View>
              <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Name</Text>
                </View>

                <View style={{ width: wp('47%'), height: hp('5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                  <TextInput underlineColorAndroid={this.state.isfocusClientName?'#D2D3D5':"#008BD0"} 
                  maxLength={25}
                  onFocus={this.handleFocus} style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
                </View>
              </View>
              <FlatList data={this.state.ClientCode}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                    <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                      <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Client Code</Text>
                    </View>
                    <View style={{ width: wp('46%'),height: hp('4.5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end",paddingBottom:hp('0.5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                      <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>{item.Client_Code}</Text>
                    </View>

                  </View>
                )}>

              </FlatList>
              <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Mobile Number</Text>
                </View>
                <View style={{ width: wp('47%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
                  <TextInput underlineColorAndroid={this.state.isfocusMobileNo?'#D2D3D5':"#008BD0"} 
                  onFocus={this.handleFocusMobNo} 
                  onChangeText={(value)=>this.MobileNumText(value)}
                  maxLength={12}
                  keyboardType={"numeric"}
                  style={{ fontSize: hp('1.8%'), width: wp('46%'), backgroundColor: "transparent" }} />
                </View>
              </View>
              <View style={{height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: wp('43%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Email</Text>
                </View>
                <View style={{  width: wp('47%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center",}}>
                  <TextInput underlineColorAndroid={this.state.isfocusEmail?'#D2D3D5':"#008BD0"} 
                  onFocus={this.handleFocusEmail}  
                  maxLength={30}
                  style={{ fontSize: hp('1.8%'),  width: wp('46%'), backgroundColor: "transparent" }} />
                </View>
              </View>
              <View style={{ flexDirection: "row",height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine Type</Text>
                </View>
                <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                  <Image source={require('../../assets/dropdown_icon.png')}
                    style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                </View>
              </View>
              <View style={{ flexDirection: "row",height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Machine</Text>
                </View>
                <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                  <Image source={require('../../assets/dropdown_icon.png')}
                    style={{  height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                </View>
              </View>
              <View style={{ flexDirection: "row",height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
                <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: hp('1.8%'), backgroundColor: "transparent" }}>Select Segment</Text>
                </View>
                <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                  <Image source={require('../../assets/dropdown_icon.png')}
                    style={{  height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
                </View>
              </View>

            </View>}



                        </ScrollView>
                        
                    </View>
                    <View style={{ height: '10%', width:'100%',backgroundColor: 'transparent', alignItems: "center", justifyContent: "center",}}>
          <TickButton label="Save" handleClick={this.validates} />
        </View> 
        </View>
      
       <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
                </View>
      </SafeAreaView>

    )
  }
}
// this.props.navigation.navigate("Technicians")
{/* <RadioForm 
               radio_props={radio_props}
               initial={-1}
               formHorizontal={true}
               buttonColor={'red'}
               animation={true}
               buttonSize={20}
               onPress={(value) => {this.setState({value:value})}}
               buttonStyle={{}}
          buttonWrapStyle={{marginLeft: 30}}
          onPress={this.props.navigation.navigate("")}
              /> */}





// import React, { Component } from 'react';
// import { Button, View, Text } from 'react-native';

// class Equip_ID extends Component {


//   constructor(props) {
//     super(props);
//     this.state={
//       username:"",
//       itemId: "",
//       myString: ""
//     }
// }


//   render() {  
//     let itemId = this.props.route.params.itemId
//     let myString = this.props.route.params.myString

//     // Access the postId and otherParam via Destructuring assignment
//  // const { postId, otherParam } = this.props.route.params;
// //   const { params } = this.props.navigation.state;
// //   const postId = params ? params.postId : null
// //   const otherParam = params ? params.otherParam : null
//     return (
//       <View>
//         <Button 
//          title={'Go to screen 2'} 
//          onPress={() => this.props.navigation.navigate('SearchClient')} />
//           <Text>itemId:{itemId}</Text>
//     <Text>MyString:{myString}</Text>
//          <View>

//                 </View>
//       </View>
//     );
//   }
// }

// export default Equip_ID;














// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Dimensions,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   TextInput,
//   Modal
// } from 'react-native';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
// import { TickButton } from '../CommonComponents/TickButton';
// import { Picker } from '@react-native-community/picker';
// import DrawerHeader from "../CommonComponents/DrawerHeader"
// import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
// import { showMessage, hideMessage } from "react-native-flash-message";
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// var radio_props = [
//   { label: "Regular", value: 0 },
//   { label: "Cash", value: 1 }
// ]

// var radio_props1 = [
//   { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
//   { label: "BEC-2-Phase Motor", value: "BEC-2-Phase Motor" },
//   { label: "BEC-1-Phase Motor", value: "BEC-1-Phase Motor" },
//   { label: "BEC-3-Phase Induction Motor", value: "BEC-3-Phase Induction Motor" },
//   { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
//   { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
//   { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
//   { label: "BEC-3-Phase Motor", value: "BEC-3-Phase Motor" },
  
// ]

// var Mac_A = [{ Mactype: "Machine Type", MacValue: "BEC-3-Phase Motor" }]
// var Mac_B = [{ Mactype: "Machine", MacValue: "BEC - Induction Motor" }]
// export default class Equip_ID extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Data: [{ Equipment_id: "BEC-72164", Job_Num: "JN-66888" }],
//       radio: radio_props,
//       value: "",
//       value1: "",
//       SearchClient: "",
//       ClientNameData: "",
//       ClientCodeData: "",
//       isValid: true,
//       MachineType: Mac_A,
//       Machine: Mac_B,
//       lang: "",
//       ClientCode: [{ Client_Code: "C-Cash" }],
//       show: false,
//       showModal:false,
//       MachType:[{Motor:"BEC-3-Phase Motor"}],
//       showMachineTypeModal:true,
//       value2:"",
//       Mtype:"",
//       click:false


//     }
//   }

//   onFocus = () => {
  
//     this.props.navigation.navigate("SearchClient") 
//     {this.setState({click:true})}
//    { this.setState({ show: true }) }
//   }

//   Machinetype=()=>{
//      //this.props.navigation.navigate("Modal", {showModal:true})
//     //  if (this.state.value2==""){
//     // this.setState({showMachineTypeModal:true})}
//     // else{
//     //   this.setState({showMachineTypeModal:false})}
//       this.setState({showMachineTypeModal:false})
//     this.setState({showModal:true})
  

//   }
//   validates = () => {

//     if (this.state.click == false) {
     
        
//         showMessage({
//             message:"Please select client",
//              type:"info",
//               backgroundColor: "black",
//              position:(0,0,100,100),
//              hideStatusBar:false
//           });
//     }
//     else {
         
//       {this.props.navigation.navigate("Technicians")}

//     }

// }
//   render() {

//     // let ClientNameData = this.props.route.params.ClientNameData
//     // let ClientCodeData = this.props.route.params.ClientCodeData
//     // const {ClientNameData} = this.props.route.params
//     // console.log(ClientNameData)
//     // //console.log(ClientCodeData)
//     var options = ["Home", "Savings", "Car", "GirlFriend"];
//     return (
//       <SafeAreaView style={{ flex: 1, height: hp('100%'), width: wp('100%'), backgroundColor: "#FFFFFF", }}>
//         <View style={{ height: hp('9%'), width: wp('100%'), backgroundColor: "transparent" }}>
//           <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} />
//         </View>
        
//         <View style={{ height: hp('7%'), width:wp('100%'),justifyContent: "flex-start", alignItems: "center", backgroundColor: "#E6F7FF", paddingTop:hp('1%') }}>
//                     <Text style={{ fontSize: hp('2.5%'), fontWeight: "bold" }}>Stage</Text>
//                 </View>

//                 <View style={{ flexDirection: "row", alignSelf: "flex-start", height: hp('8%'), width: wp('100%'), backgroundColor: "#E6F7FF" }}>
//                     <View style={{ width:wp('17.5%'), height: hp('0.5%'), backgroundColor: "transparent", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
//                     <View style={{ height: hp('5.8%'), width: wp('10%'), backgroundColor: "#008AD2",
//                      borderRadius:105, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={{ fontSize: hp('2.5%'), color: "#FFFFFF" }}>1</Text>
//                     </View>
//                     <View style={{ width: wp('17.5%'), height: hp('0.5%'), backgroundColor: "#E6F7FF", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />

//                     <View style={{ height: hp('5.8%'), width: wp('10%'), backgroundColor: "#D0CFCD",
//                      borderRadius:105, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={{ fontSize: hp('2.5%'), color: "#333333" }}>2</Text>
//                     </View>
//                     <View style={{ width: wp('17.5%'), height: hp('0.5%'), backgroundColor: "#E6F7FF", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
//                     <View style={{ height: hp('5.8%'), width: wp('10%'), backgroundColor: "#D0CFCD",
//                      borderRadius:105, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={{ fontSize: hp('2.5%'), color: "#333333" }}>3</Text>
//                     </View>
//                     <View style={{ width: wp('17.5%'), height: hp('0.5%'), backgroundColor: "#E6F7FF", paddingTop: hp('2.5%'), borderBottomWidth: 2, borderBottomColor: "#D2D3D5" }} />
//                 </View>
// <View style={{height:hp('54.5%'), width:wp('100%'), backgroundColor:'transparent'}}>
//         <ScrollView>


//           <FlatList data={this.state.Data}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <View style={{ backgroundColor: "transparent" }}>

//                 <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                   <View style={{ width: wp('44%'), flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}>
//                     <Text style={{ fontSize: hp('2.1%')}}>
//                       Enter Equipment ID
//                                         </Text>
//                     <Text style={{ fontSize: hp('2.1%'), color: "#008AD2" }}>
//                       *
//                                         </Text>
//                   </View>
//                   <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                     <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>
//                       {item.Equipment_id}
//                     </Text>
//                   </View>
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                   <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                     <Text style={{ fontSize: hp('2.1%') }}>
//                       Job Number
//                                             </Text>

//                   </View>
//                   <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                     <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>
//                       {item.Job_Num}
//                     </Text>
//                   </View>
//                 </View>




//               </View>
//             )}>
//           </FlatList>



//           <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//             <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//               <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>
//                 Client
//             </Text>
//             </View>
//             <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", paddingTop: height * 0.01 }}>
//               <RadioForm
//                 radio_props={radio_props}
//                 initial={0}
//                 formHorizontal={true}
//                 buttonColor={"#0089CF"}
//                 animation={false}
//                 buttonSize={7}
//                 labelStyle={{ fontSize: hp('2.2%'), marginRight: wp('4%') }}
//                 onPress={(value, index) => {
//                   this.setState({ value1: value })
//                   this.setState({ value1: index })
//                   console.log(this.state.value1)
//                 }}

//               />
//             </View>
//           </View>
//           {this.state.value1 == 0 ? <View>
//             <View style={{height: hp('6%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//               <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                 <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>
//                   Search Client
//                                         </Text>
//               </View>
//               <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "flex-end", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                 <TextInput style={{ fontSize: hp('2.1%'), backgroundColor: "transparent",paddingTop:hp('1%') }}
//                   placeholder="Code/F.Name/L.Name"
//                   onFocus={() => this.onFocus()}
//                 />
//               </View>
//             </View>
//             {this.state.show ? <View>
//               <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Client Code</Text>
//                 </View>
//                 <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientCodeData'))}</Text>
//                 </View>

//               </View>
//               <View style={{height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Client Name</Text>
//                 </View>
//                 <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('clientNameData'))}</Text>
//                 </View>
//               </View>
//               <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Mobile No.</Text>
//                 </View>
//                 <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMob'))}</Text>
//                 </View>
//               </View>
//               <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Email Id</Text>
//                 </View>
//                 <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>{(this.props.navigation.getParam('ClientMail'))}</Text>
//                 </View>
//               </View>
//             </View> : null}
//             <TouchableOpacity activeOpacity={0.8} onPress={()=>this.Machinetype()}>
//             <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
               
//                 <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//        {this.state.showMachineTypeModal?     <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Select Machine Type</Text>
//         :<Text>{this.state.Mtype}</Text>

//         }
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                   <Image source={require('../../assets/dropdown_icon.png')}
//                     style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               </TouchableOpacity>
//               <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                 <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Select Machine</Text>
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                   <Image source={require('../../assets/dropdown_icon.png')}
//                     style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               <View style={{ flexDirection: "row", height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                 <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Select Segment</Text>
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                   <Image source={require('../../assets/dropdown_icon.png')}
//                     style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                 </View>
//               </View>

//               <Modal visible={this.state.showModal}
//                     transparent={true}>
//                         <View style={{backgroundColor:"#000000aa", flex:1}}>
//                             <View style={{height:hp('30%'),width:wp('90%'),backgroundColor:"#ffffff", marginVertical:hp('25%'), marginHorizontal:wp('5%')}}>
//                                 <View style={{height:hp('7%'), width:wp('90%'), backgroundColor:"#ffffff", justifyContent:"center", alignItems:"flex-start", paddingLeft:wp('5%')}}>
//                                 <Text style={{fontWeight:"bold", fontSize:18}}>
//                                     Select Machine Type
//                                 </Text>
//                                 </View>
//                                 <View style={{height:hp('18%'), width:wp('90%')}}>
//                                     <FlatList data={this.state.MachType}
//                                     keyExtractor={(item,index)=>index.toString()}
//                                     renderItem={({item})=>(
//                                         <View style={{backgroundColor:"#ffffff", marginLeft:wp('5%')}}>
//  <RadioForm
//               radio_props={radio_props1}
//               initial={-1}
//               formHorizontal={false}
//               labelHorizontal={true}
//               buttonColor={"#D6D6D6"}
//               animation={false}
//               buttonSize={8}
//               labelStyle={{ fontSize: 15, marginRight: wp('4%'),}}
//               onPress={(value, index) => {
//                 this.setState({ value2: value })
//                 // this.setState({ value2: index })
//                 console.log(this.state.value2)
//               }}
//               radioStyle={{paddingRight: 40, marginVertical:hp('1%')}}
//               wrapStyle={{marginVertical:hp('9%')}}
              

//             />
//                                         </View>
//                                     )}>

//                                     </FlatList>
                               
//             </View>
//             <View style={{height:hp('5%'), width:wp('90%'), backgroundColor:"#ffffff", alignItems:"flex-end", justifyContent:"flex-end", paddingRight:wp('5%'), paddingBottom:hp('2%')}}>
//                                 <TouchableOpacity onPress={()=>{this.setState({Mtype:this.state.value2})
//                                 this.setState({showModal:false})
//                               console.log(this.state.Mtype)}}>
//                                 <Text style={{fontSize:16, color:"#008AD2", fontWeight:"bold"}}>
//                                     CHOOSE
//                                 </Text>
//                                 </TouchableOpacity>
//                                 </View>
                            
                                
//                             </View>
//                         </View>

//                     </Modal>







//           </View> : <View>
//               <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Client Name.</Text>
//                 </View>

//                 <View style={{ width: wp('46%'), height: hp('5%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                   <TextInput style={{ fontSize: hp('2.1%'), width: wp('46%'), backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               <FlatList data={this.state.ClientCode}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                   <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                     <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                       <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Client Code</Text>
//                     </View>
//                     <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                       <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>{item.Client_Code}</Text>
//                     </View>

//                   </View>
//                 )}>

//               </FlatList>
//               <View style={{ height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Mobile No.</Text>
//                 </View>
//                 <View style={{ width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                   <TextInput style={{ fontSize: hp('2.1%'), width: wp('46%'), backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               <View style={{height: hp('5%'), width: wp('90%'), marginHorizontal: wp('5%'), flexDirection: "row", backgroundColor: "transparent" }}>
//                 <View style={{ width: wp('44%'), justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent" }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Email</Text>
//                 </View>
//                 <View style={{  width: wp('46%'), backgroundColor: "transparent", alignItems: "flex-start", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
//                   <TextInput style={{ fontSize: hp('2.1%'),  width: wp('46%'), backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               <View style={{ flexDirection: "row",height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                 <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Select Machine Type</Text>
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                   <Image source={require('../../assets/dropdown_icon.png')}
//                     style={{ height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               <View style={{ flexDirection: "row",height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                 <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Select Machine</Text>
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                   <Image source={require('../../assets/dropdown_icon.png')}
//                     style={{  height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                 </View>
//               </View>
//               <View style={{ flexDirection: "row",height: hp('5%'), width: wp('90%'), justifyContent: "center", marginHorizontal: wp('5%'), borderBottomWidth: 1, borderBottomColor: "#D2D3D5", backgroundColor: 'transparent' }}>
//                 <View style={{ height: hp('5%'), width: wp('80%'), backgroundColor: "transparent", justifyContent: 'center', alignItems: 'flex-start' }}>
//                   <Text style={{ fontSize: hp('2.1%'), backgroundColor: "transparent" }}>Select Segment</Text>
//                 </View>
//                 <View style={{ height: hp('5%'), width: wp('10%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
//                   <Image source={require('../../assets/dropdown_icon.png')}
//                     style={{  height: hp('2%'), width: wp('7%'), justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }} />
//                 </View>
//               </View>

//             </View>}

//         </ScrollView>
//         </View>
//         <View style={{ height: hp('7.5%'), width: wp('100%'), marginTop:hp('1.5%'),backgroundColor: 'transparent', alignItems: "center", justifyContent: "center",}}>
//           <TickButton label="Save" handleClick={this.validates} />
//         </View>
//         <View style={{ height:'auto', width: wp('100%'), backgroundColor: "transparent",}}>
//         <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/>
//         </View>
//       </SafeAreaView>

//     )
//   }
// }

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
    TextInput
} from 'react-native';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import { Picker } from '@react-native-community/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
let data = [{ ClientName: "Adams Abgill", ClientCode: "CN-18976", ClientMob: "9637849328", ClientMail: "adamsabgrill@gmail.com" },
{ ClientName: "James S.", ClientCode: "CN-18977", ClientMob: "9637843238", ClientMail: "james@gmail.com" },
{ ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" },
{ ClientName: "Rakesh", ClientCode: "CN-18979", ClientMob: "9637849758", ClientMail: "rakesh@gmail.com" },
{ ClientName: "Daniel Gracia", ClientCode: "CN-18926", ClientMob: "6378493287", ClientMail: "danielgracia@gmail.com" },
{ ClientName: "Jackson D.", ClientCode: "CN-18956", ClientMob: "96378493287", ClientMail: "jackson@gmail.com" },
{ ClientName: "Alex Ross", ClientCode: "CN-18989", ClientMob: "9637849228", ClientMail: "alexross@gmail.com" },
{ ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" },
{ ClientName: "Alex Ross", ClientCode: "CN-18989", ClientMob: "9637849228", ClientMail: "alexross@gmail.com" },
{ ClientName: "Avneet ", ClientCode: "CN-18978", ClientMob: "9647849328", ClientMail: "avneet@gmail.com" }]

export default class SearchClientPractise extends Component {
    fil
    constructor() {
        super();
        this.state = {
            Data: data,
            SelectedClient: ""

        }
    }
    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            Data: data.filter(x => (x.ClientName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.ClientCode).toString().toLowerCase().indexOf(searchText) > -1)
        })
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1, height: '100%', width: '100%', backgroundColor: "transparent" }}>
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0" }}>
                    {/* <DrawerHeader name="Equipment Identification" openDrawer={this.props.navigation} status={false} /> */}
                </View>
                <View style={{ height: '82%', width: '100%', backgroundColor: 'transparent' }}>
                    <View style={{ height: '9%', width: '85%', marginHorizontal: '7.5%', backgroundColor: "transparent" }}>
                        <TextInput placeholder="Search Client" style={{ fontSize: hp('2.2%'), height: hp('6%'), width: wp('85%'), paddingTop: hp('1%'), backgroundColor: "transparent", borderBottomWidth: 1, borderBottomColor: "#ABABAB", }}
                            onChangeText={(text) => this.updateSearch(text)} />
                    </View>
                    <View style={{ height: '8%', width: '100%', flexDirection: "row", backgroundColor: "#008BD0" }}>
                    <View style={{ height: '100%', width: '50%', alignItems: "flex-start", justifyContent: "center", paddingLeft: '5%', backgroundColor: "transparent   " }}>
                        <Text style={{fontSize:hp('2.2%'), color:"#ffffff"}}>
                            Client Name
                    </Text>
                    </View>
                    <View style={{  height: '100%', width: '50%', alignItems: "flex-start", justifyContent: "center", paddingLeft: '5%', backgroundColor: "transparent" }}>
                        <Text style={{fontSize:hp('2.2%'), color:"#ffffff"}}>
                            Client Code
                    </Text>
                    </View>
                </View>
                <View style={{ height: '83%', width: '96%', backgroundColor: "transparent", marginHorizontal:'2%' }}>
                    <FlatList data={this.state.Data}
                    keyExtractor={(item)=>item.ClientName}
                        renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Equip_ID",{clientNameData:'Alex Abrol',
                        clientCodeData:"CN-18976", ClientMob:"8768668765", ClientMail:"abrol@gmail.com"}) }}>
                            <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>

                                <View style={{ height:hp('6%'),width: wp('50%'), justifyContent: "center", alignItems: "flex-start", padding: wp('5%') }}>
                                    <Text style={{fontSize:hp('2.2%')}}>
                                        {item.ClientName}
                                    </Text>
                                </View>
                                <View style={{ height:hp('6%'),width: wp('50%'), justifyContent: "center", alignItems: "flex-start", padding: wp('5%')  }}>
                                    <Text style={{fontSize:hp('2.2%')}}>
                                        {item.ClientCode}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>)}>
                    </FlatList>

                </View>
                </View>
               

                
                
                <View style={{ height: '9%', width: '100%', backgroundColor: "#008BD0", }}>
                    {/* <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/> */}
                </View>
            </SafeAreaView>
        )
    }
}

// onPress=(item)=>{
//     console.log(item)
//     console.log(item.ClientName)
//     // this.setState({name:item.ClientName})
// //     // this.setState({clientCodeData1:item.ClientCode})
// //     // this.setState({ClientMob1:item.ClientMob})
// //     // this.setState({ClientMail1:item.ClientMail})
// //    console.log(this.state.name)
//     this.props.navigation.navigate("Equip_ID",{clientNameData:item.ClientName,
//                     clientCodeData:item.ClientCode, ClientMob:item.ClientMob, ClientMail:item.ClientMail}) 
// }

// import React, { Component } from 'react';
// import { Button, View, Text } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// class SearchClient extends Component {

//     constructor() {
//         super();
//         this.state = {
//             itemId: "",
//       myString: ""

//         }
//     }

//     render() {
//      //   let itemId = this.props.route.params.itemId
//        // let myString = this.props.route.params.myString
//         return (
//             <View>

//                 <Button
//                     title={'Go back'}
//                     onPress={() => this.props.navigation.navigate('Equip_ID',{itemId:"Navi", myString:"Smart"})} />
//               <Text>
//                   itemId
//               </Text>
//               <Text>
//                   myString
//               </Text>
//             </View>
//         )
//     }
// }

// export default SearchClient;

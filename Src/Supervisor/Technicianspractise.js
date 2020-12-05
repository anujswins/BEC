import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Icon,
    search,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SearchBar } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
// import AppButton from "../CustomComponent/ButtonComp"
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from "../CommonComponents/DrawerHeader"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// const height = Dimensions.get("screen").height
// const width = Dimensions.get("screen").width

let maindata = [{ id: 0, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
{ id: 1, TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
{ id: 2, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
{ id: 3, TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
{ id: 4, TeamMemberName: "Joseph M.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "8" },
{ id: 5, TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
{ id: 6, TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
{ id: 7, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
{ id: 8, TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
{ id: 9, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
{ id: 10, TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Assign", CompletedJobs: "4" },
{ id: 11, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "3" },
{ id: 12, TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" }]
export default class TechniciansPract extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            selectDepartment: "",
            DataSearch: "",
            Data: maindata,
            Data1:
                [{ TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },
                { TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
                { TeamMemberName: "James. smith", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
                { TeamMemberName: "Alex Ross", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "6" },
                { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
                { TeamMemberName: "James S.", TechDepartment: "Mechanical", ActiveJobs: "JN-2345", CompletedJobs: "5" },],
            Data2: [
                { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "7" },
                { TeamMemberName: "Joseph M.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "8" },
                { TeamMemberName: "Andrew J.", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "4" },
                { TeamMemberName: "Daniel Gracia", TechDepartment: "Electrical", ActiveJobs: "JN-2345", CompletedJobs: "9" },
                { TeamMemberName: "Jackson D.", TechDepartment: "Electrical", AssignBtn: "Button", CompletedJobs: "4" },

            ],
            DataSearch: "",
        }
    }



    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            Data: maindata.filter(x => (x.TeamMemberName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.TechDepartment).toString().toLowerCase().indexOf(searchText) > -1 ||
                // (x.ActiveJobs).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.CompletedJobs).toString().toLowerCase().indexOf(searchText) > -1)
        })
    }

    pickerChange = (value, index) => {
        //    this.state.Data.map((v,i)=>{
        //        if(i===index)
        //        {
        //            this.setState({
        //             TeamMemberName:v.TeamMemberName,
        //             TechDepartment:this.state.Data[index].TechDepartment,
        //             AssignBtn:this.state.Data[index].AssignBtn,
        //             CompletedJobs:this.state.Data[index].CompletedJobs
        //            })
        //        }
        //    })
        this.setState({ selectDepartment: value })
        console.log(this.state.selectDepartment)
        this.state.Data.map((v, i) => {
            if (index == i) {

                this.setState({
                    TeamMemberName: this.state.Data[index].TeamMemberName,
                    TechDepartment: this.state.Data[index].TechDepartment
                })



            }
        })


    }
    render() {
        const { search } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="#008BD0"
                    barStyle="#ffffff"
                />
                <View style={styles.Stackheader}>
                    {/* <DrawerHeader name="Technicians" openDrawer={this.props.navigation} status={false}/> */}
                </View>
                <View style={{ height: '82%', width: '100%', backgroundColor: 'transparent' }}>
                    <View style={styles.viewSearchBar}>
                        <TextInput
                            placeholder="Search"
                            onChangeText={(text) => { this.updateSearch(text) }}
                            style={styles.searchbarTextInput}
                        />

                        {/* <SearchBar inputStyle={{ backgroundColor: 'white' }}
                        containerStyle={{ backgroundColor: '#0083C7', }}
                        placeholderTextColor={'#g5g5g5'}
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}
                    /> */}
                    </View>
                    <View style={styles.viewPicker}>
                        <Picker selectedValue={this.state.selectDepartment}
                            style={styles.pickerAttribute}
                            onValueChange={(itemValue, itemIndex) => this.pickerChange(itemValue)}
                            enabled={true}
                            mode="dropdown"

                        >
                            <Picker.Item label="Select Technicians" color="#666666" />
                            <Picker.Item label="All Technicians" value="All Technicians" color="#666666" />
                            <Picker.Item label="Mechanical Technicians" value="Mechanical Technicians" color="#666666" />
                            <Picker.Item label="Electrical Technicians" value="Electrical Technicians" color="#666666" />
                            {/* {this.state.Data.map((v) => {
                            return (
                                <Picker.Item label={"All Tech"} />
                            )
                        })} */}
                        </Picker>
                    </View>
                    <View style={styles.dataHeadingContainer}>

                        <View style={styles.viewTechnicianName}>
                            <Text style={styles.textTechnicianName}>
                                Tech. Name
                        </Text>
                        </View>
                        <View style={styles.viewCategory}>
                            <Text style={styles.textCategory}>
                                Category
                        </Text>
                        </View>
                        <View style={styles.viewActiveJobs}>
                            <Text style={styles.textActiveJobs}>
                                Active Jobs
                        </Text>
                        </View>
                        <View style={styles.viewCompletedJobs}>
                            <Text style={styles.textCompletedJobs}>
                                Completed Jobs
                        </Text>
                        </View>
                    </View>
                    <View style={{ height: '75%', width: '96%', backgroundColor: 'transparent', marginHorizontal:'2%' }}>
                        <FlatList data={this.state.Data}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: "#D2D3D5", }}>
                                    <View style={{ height: hp('6%'), width: wp('25%'),backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text>
                                            {item.TeamMemberName}
                                        </Text>
                                    </View>
                                    <View style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text >
                                            {item.TechDepartment}
                                        </Text>
                                    </View>
                                    {item.ActiveJobs ?
                                        <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                            onPress={() => { this.props.navigation.navigate("ActiveJobs") }}>
                                            <Text >
                                                {item.ActiveJobs}
                                            </Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity style={{ height: hp('6%'), width: wp('22%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                                            onPress={() => { this.props.navigation.navigate("JobAssign") }}>
                                            <Text style={{paddingHorizontal:hp('2%'),paddingVertical:hp('1%'),color:'#ffffff',borderBottomWidth:4, borderBottomColor:'#0F3276',backgroundColor:'#008BD0'}}>
                                                {item.AssignBtn}
                                            </Text>
                                        </TouchableOpacity >}
                                    <View style={{ height: hp('6%'), width: wp('27%'), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>
                                            {item.CompletedJobs}
                                        </Text>
                                    </View>
                                    
                                </View>

                            )}>

                        </FlatList>
                        {/* <FlatList data={this.state.Data}
                   keyExtractor={(item,index)=>index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.viewFlatlistData}>
                                <View style={styles.viewTeamMemNameValue}>
                                    <Text style={styles.textTeamMemNameValue}>
                                        {item.TeamMemberName}
                                    </Text>
                                </View>
                                <View style={styles.viewTechDepartValue}>
                                    <Text style={styles.textTechDepartValue}>
                                        {item.TechDepartment}
                                    </Text>
                                </View>
                                <View style={styles.viewActiveJobsBtn}>
                                    {item.ActiveJobs ?
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("ActiveJobs") }}>
                                            <Text style={styles.textActiveJobsBtn}>
                                                {item.ActiveJobs}
                                            </Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity style={styles.touchableAssgnBtn} onPress={() => { this.props.navigation.navigate("JobAssign") }}>
                                            <Text style={styles.textTouchableAssBtn}>
                                                {item.AssignBtn}
                                            </Text>
                                        </TouchableOpacity >}
                                </View>
                                <View style={styles.viewCompletedJobsValue}>
                                    <Text style={styles.textCompletedJobsValue}>
                                        {item.CompletedJobs}
                                    </Text>
                                </View>
                            </View>
                        )}>


                    </FlatList> */}

                    </View>
                </View>
                <View style={styles.TouchableBottomBar}>
                    {/* <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true} navigate={this.props.navigation.navigate}/> */}
                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   width:wp('100%'),
        backgroundColor: "transparent"
    },
    Stackheader: {
        height: '9%',
        width: '100%',
        backgroundColor: "#008BD0"
    },
    viewSearchBar: {
        height: '8%',
        backgroundColor: "#FFFFFF"
    },
    searchbarTextInput: {
        height: '100%',
        width: '94%',
        marginHorizontal: '3%',
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderColor: "#008AD2",
        padding: '3%',
        fontSize: 15,
        borderBottomColor: "#ABABAB"
    },
    viewPicker: {
        height: '8%',
        width: '100%',
        backgroundColor: "#FFFFFF"
    },
    pickerAttribute: {
        height: '100%',
        width: '80%',
        fontSize: 15,
        marginLeft: '5%',
        marginRight: '15%',

    },
    dataHeadingContainer: {
        flexDirection: "row",
        width: '100%',
        height: '9%',
        backgroundColor: "#008AD2"
    },
    viewTechnicianName: {
        height: "100%",
        width: '27%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    textTechnicianName: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    viewCategory: {
        height: '100%',
        width: '22%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    textCategory: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    viewActiveJobs: {
        height: '100%',
        width: '22%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    textActiveJobs: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    viewCompletedJobs: {
        height: '100%',
        width: '29%',
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "transparent"
    },
    textCompletedJobs: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    viewFlatListContainer: {
        height: '74%',                // resp 55.5
        width: '100%',
        backgroundColor: "red"
    },
    viewFlatlistData: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#D2D3D5",
        backgroundColor: "green",
        marginHorizontal: wp('2%'),
        height: '27%',
        width: '100%'
    },
    viewTeamMemNameValue: {
        height: '100%',
        width: '25%',
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: wp('1%')
    },
    textTeamMemNameValue: {
        fontSize: hp('2%'),
        color: "#333333"
    },
    viewTechDepartValue: {
        height: '100%',
        width: '23%',
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    },
    textTechDepartValue: {
        fontSize: hp('2%'),
        color: "#333333"
    },
    viewActiveJobsBtn: {
        height: '100%',
        width: '21%',
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    },
    textActiveJobsBtn: {
        fontSize: hp('2%'),
        color: "#006DA6"
    },
    touchableAssgnBtn: {
        height: hp('5.5%'),
        width: wp('18%'),
        backgroundColor: "#006DA6",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 4,
        borderBottomColor: "#004B73"
    },
    textTouchableAssBtn: {
        fontSize: hp('2%'),
        color: "#FBFBFB"
    },
    viewCompletedJobsValue: {
        height: hp('7%'),
        width: wp('27%'),
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    },
    textCompletedJobsValue: {
        fontSize: hp('2%'),
        color: "#333333"
    },
    TouchableBottomBar: {
        height: '9%',
        width: '100%',
        backgroundColor: "#008BD0"
    },


})


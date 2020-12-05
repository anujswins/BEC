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
    TextInput,
    Alert
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Picker } from '@react-native-community/picker';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

import { SearchBar } from 'react-native-elements';

export default class AddTechnician extends React.Component {

    static navigationOptions={
        title:'Add Technician',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'#008ad1'
        },
        headerTitleStyle:{
          fontWeight:'normal',
          textAlign:'left'
        }
        
        
        }
    state = {
        search: '',
        selectDepartment: "",
        Data: [{ TeamMemberName: "James smith", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Jackson D.", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Daniel Gracia", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Andrew Smith", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "James. smith", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Joseph M.", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Joseph M.", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Joseph M.", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Joseph M.", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" },
        { TeamMemberName: "Joseph M.", TechDepartment: "Mechanical", AssignJobBtnTxt: "Assign" }
    ]
    };

    showAlert() {  
        Alert.alert(  
            'Alert ',  
            'Job Assigned',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
    } 

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewSearchBar}>
                <TextInput
                        placeholder="Search"
                        onChangeText={(text) => { this.updateSearch(text) }}
                        style={styles.searchbarTextInput}
                    />{/* <SearchBar inputStyle={{ backgroundColor: 'white' }}
                        containerStyle={{ backgroundColor: '#0083C7',}}
                        placeholderTextColor={'#g5g5g5'}
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}
                    /> */}
                </View>
                <View style={styles.viewPickerStyle}>
                    <Picker selectedValue={this.state.selectDepartment}
                        style={styles.Picker}
                        onValueChange={(itemValue, itemIndex) => this.setState({ selectDepartment: itemValue })}
                        enabled={true}
                        mode="dropdown"
                    >
                        <Picker.Item label="Select Technicians" color="#666666" />
                        <Picker.Item label="All Technicians" value="All Technicians" color="#666666" />
                        <Picker.Item label="Mechanical Technicians" value="Mechanical Technicians" color="#666666" />
                        <Picker.Item label="Electrical Technicians" value="Electrical Technicians" color="#666666" />
                    </Picker>
                </View>
                <View style={styles.viewHeadingStrip}>

                    <View style={styles.viewTechName}>
                        <Text style={styles.textTechName}>
                            Tech. Name
                    </Text>
                    </View>
                    <View style={styles.viewCategory}>
                        <Text style={styles.textCategory}>
                            Category
                    </Text>
                    </View>
                    <View style={styles.viewAssignJobs}>
                        <Text style={styles.textAssignJobs}>
                            Assign Jobs
                    </Text>
                    </View>
                </View>
                <View style={{height:height*0.7, width:width, backgroundColor:"#FFFFFF"}}>
                    <FlatList data={this.state.Data}
                        renderItem={({ item }) => (
                            <View style={styles.viewFlatListContainer}>
                                <View style={styles.viewTeamMember}>
                                    <Text style={{ fontSize:16, color:"#333333" }}>
                                        {item.TeamMemberName}
                                    </Text>
                                </View>
                                <View style={{height:height*0.067, width:width*0.32, backgroundColor:"transparent", justifyContent:"center", alignItems:"center", }}>
                                    <Text style={{ fontSize:16, color:"#666666" }}>
                                        {item.TechDepartment}
                                    </Text>
                                </View>
                                <View style={{height:height*0.067, width:width*0.32, backgroundColor:"transparent", justifyContent:"center", alignItems:"center",}}>
                                    <TouchableOpacity onPress={this.showAlert}>
                                        <View>
                                            <Text style={{borderBottomWidth:4,borderBottomColor:"#004B73", fontSize:16, color:"#FBFBFB" ,paddingHorizontal:width*0.04, paddingVertical:height*0.01, backgroundColor:"#006DA6"}}>
                                                {item.AssignJobBtnTxt}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}>

                    </FlatList>
                </View>
                <View style={{height:height*0.08, width:width, backgroundColor:"transparent"}}>
                   <BottomTabNavigator/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        height: height, 
        width: width, 
        backgroundColor:"#FFFFFF" 
    },
    viewSearchBar:{ 
        height: height * 0.08, 
        backgroundColor: "#FFFFFF" 
    },
    searchbarTextInput: {
        height: height * 0.08,
        width: width*0.94,
        marginHorizontal:width*0.03,
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1, 
        borderColor: "#008AD2",
        padding: width * 0.03,
        fontSize:17
    },
    viewPickerStyle:{ 
        height: height * 0.08, 
        width: width * 0.8, 
        marginLeft: width * 0.05, 
        backgroundColor: "#FFFFFF" 
    },
    Picker:{ 
        height: height * 0.08, 
        width: width * 0.8, 
        fontSize: 18 
    },
    viewHeadingStrip:{ 
        flexDirection: "row", 
        width: width, 
        height: height * 0.075, 
        backgroundColor: "#008AD2" 
    },
    viewTechName:{ 
        height: height * 0.075, 
        width: width * 0.34, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        backgroundColor: "transparent", 
        paddingLeft:width*0.05 
    },
    textTechName:{ 
        fontSize: 15, 
        color: "#FBFBFB" 
    },
    viewCategory:{ 
        height: height * 0.075, 
        width: width * 0.33, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "transparent" 
    },
    textCategory:{ 
        fontSize: 15, 
        color: "#FBFBFB" 
    },
    viewAssignJobs:{ 
        height: height * 0.075, 
        width: width * 0.33, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "transparent" 
    },
    textAssignJobs:{ 
        fontSize: 15, 
        color: "#FBFBFB" 
    },
    viewFlatListContainer:{ 
        marginHorizontal:width*0.02,
        borderBottomWidth:1 ,
        borderBottomColor:"#BDBDBD",
        flexDirection:"row",
        backgroundColor:"#FBFBFB"
    },
    viewTeamMember:{
        height:height*0.07, 
        width:width*0.32, 
        backgroundColor:"transparent", 
        justifyContent:"center", 
        alignItems:"flex-start", 
        paddingLeft:width*0.03 
    },
})



import React, { Component } from 'react';
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
    Alert,
    Image,
    TouchableOpacity,
    Button,
    FlatList,
} from 'react-native';
// import StackHeader from '../StackHeader/StackHeader'
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';

import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';

const screen = Dimensions.get('screen');
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;


export default class CurrentJobs extends Component {


    constructor() {
        super();

        this.state = {
            orderData:[],
            isFeebackIcon: true,
            isMenuIcon: true,
            isLoading: false,
             mainData:[],
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

        };
    }




    componentDidMount = async () => {
        this.Fun_GetAllRecords();
    };


    toggleLoader = (val) => {
        this.setState(({ isLoading: val }));
    };




    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
           orderData:this.state.mainData.filter(x => (x.EquipmentId).toString().toLowerCase().indexOf(searchText)> -1 ||
                (x.JobCode).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x?.FirstName+' '+x?.LastName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.Stage).toString().indexOf(searchText) > -1 ||
                (x.Hours).toString().toLowerCase().indexOf(searchText) > -1),
        });
    }


    Fun_GetAllRecords = async () => {






        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseCurrentJobs( this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);

                

            console.log('GetAllRecords try==', json_response.data);
          
        

            if (json_response.data.StatusCode === 200)
             {

                this.state.orderData=json_response.data.data.jobsMainResponse.jobResponse;
                this.state.mainData=json_response.data.data.jobsMainResponse.jobResponse;
                  console.log('cht_list==========',this.state.orderData);
                //  console.log('hey how r u==========',this.state.mainData);
            

            }

        } catch (e) {

             Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }
















        // let resp = await AuthService.SuperviseCurrentJobs(this.state.stageId, this.state.jobTypeId, this.state.machineTypeId, this.state.startDate, this.state.endDate,
        //     this.state.clientId, this.state.assignToId, this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);

        // console.log('CurrentJobs response StatusCode ', resp.data.StatusCode);









    };


    GetData = (myrespo) => {

        Alert.alert(resp.data.Message);

        this.props.navigation.navigate('Dashboard');

    };


    render() {
        const { dimensions } = this.state;
        const { search } = this.state;
        const { isLoading } = this.state;

        return (


            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white',


            }}>
                <StatusBar hidden={false} backgroundColor={'#008BD0'} />
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }} />

                <View style={{ height: '9%', backgroundColor: 'transparent' }}>
                    <DrawerHeader name="Current Jobs" openDrawer={this.props.navigation} status={false}
                        notification={true} />
                </View>


                <View style={{
                    height: '9%', width: '97%', justifyContent: 'center', paddingHorizontal: 10,
                    backgroundColor: 'white',
                }}>


                    <View style={{
                        borderBottomWidth: 1,backgroundColor:"white",

                        borderBottomColor: 'gray',
                    }}>
                        <TextInput style={{ fontSize: 17 }}

                            placeholder="Search"
                            placeholderTextColor="black"
                            onChangeText={(text) => {
                                this.updateSearch(text);
                            }}
                        />
                    </View>

                </View>
                <View style={{
                    height: '6%', width: '100%', backgroundColor: '#0288d5', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-around',
                }}>
                    <Text style={styles.TextmainView}>Equip Id.</Text>
                    <Text style={styles.TextmainView}>Job Code</Text>
                    <Text style={styles.TextmainView}>Name</Text>
                    <Text style={styles.TextmainView}>Stage</Text>
                    <Text style={styles.TextmainView}>Hours</Text>
                </View>
                <View style={{ height: '67%', width: '100%', backgroundColor: 'white' }}>

                    <FlatList data={this.state.orderData}
                        renderItem={({ item }) => (
                            <View style={styles.FlatListView}>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    padding: 10,
                                    fontSize:13,
                                    textAlign: 'center',
                                }}>{item.EquipmentId}</Text>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    fontSize:13,
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.JobCode}</Text>
                                <Text style={{
                                    width: '23%',
                                    height: '100%',
                                    fontSize:13,
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.FirstName+item.LastName}</Text>
                                <Text style={{
                                    width: '29%',
                                    height: '100%',
                                    padding: 10,
                                   fontSize:13,
                                    textAlign: 'center',
                                }}>{item.StageId}</Text>
                                <Text style={{
                                    width: '13%',
                                    height: '100%',
                                    margin:5,
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.Hours}</Text>

                            </View>
                        )}>

                    </FlatList>

                </View>
                <View style={{ height: '9%', backgroundColor: 'transparent' }}>
                    <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}
                        navigate={this.props.navigation.navigate}>
                    </BottomTabNavigator>
                </View>


            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: dwidth,
        height: dheight,
        backgroundColor: 'white',

    },
    mainView: {

        width: dwidth,
        height: dheight * 0.06,
        backgroundColor: '#0288d5',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    TextmainView: {
        width: '25%',
        height: '100%',
        color: 'white',
        padding: 10,
        textAlign: 'center',
    },
    FlatListView: {
        marginTop: '1%',
        width: dwidth,
        flex: 1,
        padding:6,
        justifyContent: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});


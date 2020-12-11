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
//import {AppStorage, key} from './utils/AppStorage';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';

const screen = Dimensions.get('screen');
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;

const mainData = [];
export default class CurrentJobs extends Component {


    constructor() {
        super();

        this.state = {
            orderData: mainData,
            isFeebackIcon: true,
            isMenuIcon: true,
            isLoading: false,

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
            orderData: mainData.filter(x => (x.Name).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.id).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.Stage).toString().indexOf(searchText) > -1 ||
                (x.hours).toString().indexOf(searchText) > -1 ||
                (x.jobcode).toString().toLowerCase().indexOf(searchText) > -1),
        });
    };


    Fun_GetAllRecords = async () => {

        // const formData = new FormData()
        // formData.append('stageId', this.state.stageId);
        // formData.append('jobTypeId', this.state.jobTypeId);
        // formData.append('machineTypeId', this.state.machineTypeId);
        // formData.append('startDate', this.state.startDate);
        // formData.append('endDate', this.state.endDate);
        // formData.append('clientId', this.state.clientId);
        // formData.append('assignToId', this.state.assignToId);
        // formData.append('status', this.state.status);
        // formData.append('orderBy', this.state.orderBy);
        // formData.append('orderByDescending', this.state.orderByDescending);
        // formData.append('allRecords', this.state.allRecords);
        // const token = 'token'





        try {
            this.toggleLoader(true);
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
                    height: '7%', width: '97%', justifyContent: 'center', paddingHorizontal: 10,
                    backgroundColor: 'white',
                }}>


                    <View style={{
                        height: '5%', width: '97%', borderBottomWidth: 1,

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
                <View style={{ height: '69%', width: '100%', backgroundColor: 'white' }}>

                    <FlatList data={this.state.orderData}
                       
                       renderItem={({ item }) => {
                           debugger
                           return(
                            <View style={styles.FlatListView}>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.EquipmentId}</Text>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.JobCode}</Text>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.FirstName+item.LastName}</Text>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.Stage}</Text>
                                <Text style={{
                                    width: '25%',
                                    height: '100%',
                                    padding: 10,
                                    textAlign: 'center',
                                }}>{item.Hours}</Text>

                            </View>
                        )}}>

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
        justifyContent: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});


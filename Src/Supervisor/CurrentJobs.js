import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
            orderData: [],
            isFeebackIcon: true,
            isMenuIcon: true,
            isLoading: false,
            mainData: [],
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
        this.setState(({isLoading: val}));
    };


    updateSearch = (search) => {
        let searchText = search.toLowerCase();
        this.setState({
            orderData: this.state.mainData.filter(x => (x.EquipmentId).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.JobCode).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x?.FirstName + ' ' + x?.LastName).toString().toLowerCase().indexOf(searchText) > -1 ||
                (x.Stage).toString().indexOf(searchText) > -1 ||
                (x.Hours).toString().toLowerCase().indexOf(searchText) > -1),
        });
    };


    Fun_GetAllRecords = async () => {


        try {
            this.toggleLoader(true);
            let json_response = await AuthService.SuperviseCurrentJobs(this.state.stageId, this.state.jobTypeId, this.state.machineTypeId, this.state.startDate, this.state.endDate,
                this.state.clientId, this.state.assignToId, this.state.status, this.state.orderBy, this.state.orderByDescending, this.state.allRecords);


            console.log('GetAllRecords try==', json_response.data);


            if (json_response.data.StatusCode === 200) {

                this.state.orderData = json_response.data.data.jobsMainResponse.jobResponse;
                this.state.mainData = json_response.data.data.jobsMainResponse.jobResponse;


            }

        } catch (e) {

            Alert.alert(e.response.data);
            console.log('GetAllRecords catch', e.response);
        } finally {
            this.toggleLoader(false);
            console.log('GetAllRecords finally print hua');
        }


    };


    GetData = (myrespo) => {

        Alert.alert(resp.data.Message);

        this.props.navigation.navigate('Dashboard');

    };


    render() {
        const {dimensions} = this.state;
        const {search} = this.state;
        const {isLoading} = this.state;

        return (


            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white',


            }}>
                <StatusBar hidden={false} backgroundColor={'#008BD0'}/>
                <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                }}/>

                <View style={{height: '9%', backgroundColor: 'transparent'}}>
                    <DrawerHeader name="Current Jobs" openDrawer={this.props.navigation} status={false}
                                  notification={true}/>
                </View>


                <View style={{
                    height: '9%', width: '97%', justifyContent: 'center', paddingHorizontal: 10,
                    backgroundColor: 'white',
                }}>


                    <View style={{
                        borderBottomWidth: 1, backgroundColor: 'white',

                        borderBottomColor: 'gray',
                    }}>
                        <TextInput style={{fontSize: 17, fontFamily: 'Roboto-Regular'}}

                                   placeholder="Searchjjj"
                                   placeholderTextColor="gray"
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

                    <View style={{
                        height: 'auto',
                        width: '30%',
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.TextmainView}>Equip Id.</Text>
                    </View>
                    <View style={{
                        height: 'auto',
                        width: '30%',
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.TextmainView}>Job Code</Text>
                    </View>
                    <View style={{
                        height: 'auto',
                        width: '20%',
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Text style={styles.TextmainView}>Name</Text>
                    </View>
                    <View style={{
                        height: 'auto',
                        width: '14%',
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}>

                        <Text style={styles.TextmainView}>Stage</Text>
                    </View>
                    <View style={{
                        height: 'auto',
                        width: '14%',
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.TextmainView}>Hours</Text>
                    </View>


                </View>
                <View style={{height: '68%', width: '100%', backgroundColor: 'white', marginBottom: 10}}>


                    {this.state.orderData <= 0 ?
                        <Text style={{
                            padding: 5,
                            fontSize: 20,
                            textAlign: 'center',
                            color: '#000000',
                        }}>No data</Text>
                        :


                        <FlatList data={this.state.orderData}
                                  renderItem={({item}) => (
                                      <View style={styles.FlatListView}>


                                          <View style={{height: 'auto', width: '28%', backgroundColor: 'transparent'}}>

                                              <Text style={{
                                                  padding: 5,
                                                  fontSize: 12,
                                                  textAlign: 'left',
                                                  color: '#000000',
                                                  fontFamily: 'Roboto-Regular',
                                              }}>{item.EquipmentId}</Text>
                                          </View>
                                          <View style={{height: 'auto', width: '26%', backgroundColor: 'transparent'}}>
                                              <Text style={{
                                                  fontSize: 12,
                                                  padding: 5,
                                                  textAlign: 'center',
                                                  color: '#000000',
                                                  fontFamily: 'Roboto-Regular',
                                              }}>{item.JobCode}</Text>
                                          </View>
                                          <View style={{height: 'auto', width: '30%', backgroundColor: 'transparent'}}>
                                              <Text style={{
                                                  color: '#000000',
                                                  fontSize: 12,
                                                  textAlign: 'center',
                                                  fontFamily: 'Roboto-Regular',
                                              }}>{item.FirstName} {item.LastName}</Text>
                                          </View>
                                          <View style={{height: 'auto', width: '8%', backgroundColor: 'transparent'}}>
                                              <Text style={{
                                                  color: '#000000',
                                                  padding: 5,
                                                  fontSize: 12,
                                                  textAlign: 'center',
                                                  fontFamily: 'Roboto-Regular',
                                              }}>{item.StageId}</Text>
                                          </View>
                                          <View style={{height: 'auto', width: '8%', backgroundColor: 'transparent'}}>

                                              <Text style={{
                                                  color: '#000000',
                                                  padding: 5,
                                                  fontSize: 12,
                                                  textAlign: 'center',
                                                  fontFamily: 'Roboto-Regular',
                                              }}>{item.Hours}</Text>
                                          </View>


                                      </View>
                                  )}>

                        </FlatList>
                    }

                </View>
                <View style={{height: '20%', backgroundColor: 'transparent'}}>
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
        color: 'white',
        padding: 5,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',

    },
    FlatListView: {
        marginTop: '1%',
        width: dwidth,
        flex: 1,
        padding: 6,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});


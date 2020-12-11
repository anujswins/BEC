import React from 'react';
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
    Button,
    SearchBar,
    Alert,
} from 'react-native';
import Snackbar, {showSnackBar} from '@prince8verma/react-native-snackbar';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppStorage, key} from './utils/AppStorage';

import axios from 'axios';
import AuthService from '../Src/RestClient/AuthService';
import ApiLoader from '../Src/PopUp/ApiLoader';


const screen = Dimensions.get('screen');
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
import {NavigationActions} from 'react-navigation';


//import AppContainer from './Navigation';
class Login extends React.Component {


    constructor() {
        super();

        this.state = {
            isLoading: false,
            email: 'parshantwins@gmail.com',
            Password: 'Sayomsairam21!',
            count: 0,
            Name: '',
            userId: '',

        };


    }


    toggleLoader = (val) => {
        this.setState(({isLoading: val}));
    };


    loginUser = async (role) => {


        try {
            this.toggleLoader(true);

            let respo = await AuthService.authenticate(this.state.email, this.state.Password, role);

            this.setState({
                Name: respo.data.data.userResponse.FirstName + ' ' + respo.data.data.userResponse.LastName,
                //  userId:respo.data.data.userResponse.UserId

            });
            console.log('userId ', respo.data.data.userResponse.UserId);
            this.toggleLoader(false);


            if (respo.data.StatusCode === 200) {

                this.onLogin(respo);
                this.toggleLoader(false);
                if (role == 'S') {
                    console.log('inside if block  ');

                    this.props.navigation.navigate(
                        'Drawer',
                        {
                            username: this.state.email,
                            Name: this.state.Name,
                        },


                        NavigationActions.navigate({
                            routeName: 'Dashboard',
                        }),
                    );
                } else {

                    // this.toggleLoader(false);
                    this.props.navigation.navigate(
                        'TechnicianDrawer',
                        {
                            username: this.state.email,
                            Name: this.state.Name,
                            userId: respo.data.data.userResponse.UserId,


                        },
                        NavigationActions.navigate({
                            routeName: 'Dashboard',
                        }),
                    );
                    //alert('drawer')
                }
            }


        } catch (e) {
            this.toggleLoader(false);
            //  Alert.alert(e.response.data.Message);
            showMessage({
                message: e.response.data.Message,
                type: 'info',
                backgroundColor: 'black',
                position: 'top',

            });

        } finally {


        }

    };


    onLogin = (respo) => {
        // console.log('login response data ', respo.data);


        AppStorage.saveKey(key.USER_PROFILE_DATA, JSON.stringify(respo.data)).then(() => {
            // this.props.navigation.navigate('Dashboard');
        });
        AppStorage.saveKey(key.ALL_LOGINRESPO, JSON.stringify(respo.data)).then(() => {
            // this.props.navigation.navigate('Dashboard');
        });


        // Alert.alert(respo.data.Message);


    };


    validates = (status) => {


        let text = this.state.email;
        let emailError = this.state.emails;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (text == '') {
            showMessage({
                message: 'please enter Email',
                type: 'info',
                backgroundColor: 'black',

            });
        } else if (reg.test(text) === false) {

            showMessage({
                message: 'Incorrect Email',
                type: 'info',
                backgroundColor: 'black',
                position: 'top',
                hideStatusBar: true,
            });

            this.setState({email: text});
            return false;


        } else if (this.state.Password == '') {


            showMessage({
                message: 'Please enter password',
                type: 'info',
                backgroundColor: 'black',
                position: 'top',

            });

        } else if (this.state.Password.length <= 8) {
            showMessage({
                message: 'Password must be of minimum  8 characters',
                type: 'info',
                backgroundColor: 'black',
                position: 'top',

            });
        } else {
            this.setState({email: text});
            // console.log('Email is Correct');
            this.loginUser(status);


        }

    };



    render() {
        const {dimensions} = this.state;
        const {isLoading} = this.state;
        return (


            <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                <StatusBar hidden={false} backgroundColor={'#008BD0'}/>

                <KeyboardAwareScrollView style={{backgroundColor: 'transparent'}}>
                    <ApiLoader visibility={isLoading} loadingColor={'green'} onCancelPress={() => {
                    }}/>

                    <View style={styles.mainView}>
                        <Text style={styles.mainViewText}>WELCOME TO</Text>
                        <Image source={require('../assets/smalllogo.png')}
                               style={styles.mainImageText}/>
                    </View>

                    <View style={styles.TextInputView}>


                        <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   placeholder="Supervisor/Technican email"
                                   placeholderTextColor='#9B9B9B'
                                   autoCapitalize="none"
                                   maxLength={30}
                                   value={this.state.email}
                                   onChangeText={(text) => {
                                       this.setState({email: text});
                                   }}/>


                        <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   placeholder="Password"
                                   placeholderTextColor="grey"
                                   autoCapitalize="none"
                                   secureTextEntry={true}
                                   maxLength={20}
                                   value={this.state.Password}
                                   onChangeText={(text) => {
                                       this.setState({Password: text});
                                   }}/>


                    </View>


                    <View style={styles.loginView}>

                        <TouchableOpacity style={styles.buttonSupervisor} onPress={() => this.validates('S')}>
                            <Text style={{color: 'white'}}>Login as Supervisor</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.validates('T')


                        }>
                            <Text style={{color: 'white',fontFamily: 'Roboto-Regular'}}>Login as Technician</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.forgotPasswordView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={{color:'#33a1De',fontFamily: 'Roboto-Regular'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAwareScrollView>
            </SafeAreaView>

            // </ScrollView>

        );
    }
}

// {this.props.isBusy  ? <Activity /> : null}


const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        justifyContent: 'center',
        width: dwidth,
        height: dheight,
        backgroundColor: 'white',
        padding: 10,
    },
    mainView: {
        height: hp('50%'), width: wp('100%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainViewText: {
        height: hp('5%'), width: wp('100%'),
        backgroundColor: 'white',
        color: '#00bfff',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
    },

    mainImageText: {
        height: hp('30%'), width: wp('60%'),
        backgroundColor: 'white',
        resizeMode: 'contain',
    },
    TextInputView: {
        height: hp('20%'), width: wp('100%'),
        backgroundColor: 'white',
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'grey',
        borderBottomWidth: 1,
        fontFamily: 'Roboto-Regular',
    },
    loginView: {
        flexDirection: 'row',
        height: hp('10%'),
        width: wp('100%'),

        backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        height: hp('6%'),
        width: wp('50%'),
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonSupervisor: {
        alignItems: 'center',
        height: hp('6%'),
        width: wp('50%'),
        justifyContent: 'center',
        backgroundColor: '#008BD0',
        borderColor: '#008BD0',
        borderWidth: 1,
    },
    forgotPasswordView: {
        height: hp('10%'),
        width: wp('100%'),
        backgroundColor: 'white',
        alignItems: 'flex-end',
        padding: 10,
    },
});


export default Login;

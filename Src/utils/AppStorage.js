import AsyncStorage from '@react-native-community/async-storage';
import store from '../Redux/Store';
import Action from '../Redux/Action';
import {Alert} from 'react-native';
import Equip_ID from '../Supervisor/EquipIdDetails';


const key = {
    USER_PROFILE_DATA: 'USER_PROFILE_DATA',
    USER_TOKEN: 'USER_TOKEN',
    USER_REMEMBER_ME: 'USER_REMEMBER_ME',
    NOTIFICATION_TOKEN_STATUS: 'NOTIFICATION_TOKEN_STATUS',
    CHOOSE_JOB_TYPE: 'CHOOSE_JOB_TYPE',
    EQUIP_ID_DETAILS: 'EQUIP_ID_DETAILS',
    SAVE_EMAIL: 'SAVE_EMAIL',
    ALL_TECHNICIAN_DETAIL: 'ALL_TECHNICIAN_DETAIL',
    ALL_RECORDS_DATA:'ALL_RECORDS_DATA',
    ALL_LOGINRESPO:'ALL_LOGINRESPO',
    EQUIP_AVAIL_ID_DETAILS:'EQUIP_AVAIL_ID_DETAILS'
};
const AppStorage = {


    async saveKey(keyName, value) {
        try {
            await AsyncStorage.setItem(keyName, value);
        } catch (error) {

        }
    },


    async saveRememberMeKey(keyName, value) {
        try {
            await AsyncStorage.setItem(keyName, value);
        } catch (error) {
        }
    },
    async loadRememberMeKey(keyName) {
        try {
            return await AsyncStorage.getItem(keyName);
        } catch (error) {
            return '';
        }
    },
    async loadKey() {
        try {
            return await AsyncStorage.getItem(key.USER_PROFILE_DATA);
        } catch (error) {
            return '';
        }
    },
    async loadNotificationToken() {
        try {
            let fcmToken = await AsyncStorage.getItem('Token_Notification');

            return fcmToken;
        } catch (error) {

            return '';
        }
    },
    async saveNotificationToken(token) {
        try {

            return await AsyncStorage.setItem('Token_Notification', token);
        } catch (error) {
            return '';
        }
    },


    async getToken() {
        try {
            let response = await AsyncStorage.getItem(key.USER_PROFILE_DATA);
            response = JSON.parse(response);
            let token = response.data.userResponse.token;

            // console.log('token login----- response++++++++++++++++',response);

            return response.data.userResponse.token;
        } catch (error) {
            return null;
        }
    },



    async getLoginResponse() {
        try {
            let response1 = await AsyncStorage.getItem(key.USER_PROFILE_DATA);
            var response = JSON.parse(response1);
            return response.data;
        } catch (error) {

            return null;
        }

    },

    async getUserId() {
        try {
            let response = await AsyncStorage.getItem(key.USER_PROFILE_DATA);
            response = JSON.parse(response);

            return response.data.userResponse.UserId;
        } catch (error) {
            return null;
        }
    },






    async getAllTechnician() {
        try {
            let json_response = await AsyncStorage.getItem(key.ALL_TECHNICIAN_DETAIL);

            let response = JSON.parse(json_response);

            return response.data.jobsAssignmentMainResponse.jobsAssignmentResponse;

        } catch (error) {

            return null;

        }
    },
    async createJobEquipId() {
        try {
            let response = await AsyncStorage.getItem(key.EQUIP_AVAIL_ID_DETAILS);
            var respo_createJob = JSON.parse(response);
            console.log("respo_createJob+++++++",respo_createJob)
            return respo_createJob;
        } catch (error) {

            return null;
        }

    },



    async getJobDetails() {
        try {
            let response = await AsyncStorage.getItem(key.ALL_RECORDS_DATA);
            response = JSON.parse(response);

        // console.log('navi appstorage_data=====================================',response);

            return response;
        } catch (error) {
            return null;
        }
    },
    async getlogin_Respo() {
        try {
            let responselogin = await AsyncStorage.getItem(key.ALL_LOGINRESPO);
            responselogin = JSON.parse(response);

       console.log('navi appstorage_data from login=====================================',responselogin);

            return responselogin;
        } catch (error) {
            return null;
        }
    },
    async getjobid() {
        try {
            let response = await AsyncStorage.getItem(key.ALL_RECORDS_DATA);
            response = JSON.parse(response);

            return response.data.jobsMainResponse.jobResponse;
        } catch (error) {
            return null;
        }
    },

// ----------------ChooseJobTypeKey--------------------------------
    async ChooseJobTypeKey(keyName, value) {
        try {
            await AsyncStorage.setItem(keyName, value);
        } catch (error) {

        }
    },

    async getJobTypeId() {
        try {
            let response_JobTypeid = await AsyncStorage.getItem(key.CHOOSE_JOB_TYPE);
            response_JobTypeid = JSON.parse(response_JobTypeid);
            let value_JobTypeId = response_JobTypeid;
          console.log('value_JobTypeId++++++++++++++++',value_JobTypeId);

            return value_JobTypeId;
        } catch (error) {
            return null;
        }
    },



    async clearStorage() {
        try {
            store.dispatch({type: Action.SIGN_OUT});
            await AsyncStorage.removeItem(key.USER_PROFILE_DATA);
            await AsyncStorage.removeItem('Token_Notification');
        } catch (error) {
        }
    },
    async clearRememberStorage() {
        try {
            await AsyncStorage.removeItem(key.USER_REMEMBER_ME);
        } catch (error) {

        }
    },


};
export {AppStorage, key};


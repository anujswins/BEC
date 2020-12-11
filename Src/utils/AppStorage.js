import AsyncStorage from '@react-native-community/async-storage';
import store from '../Redux/Store';
import Action from '../Redux/Action';


const key = {
    USER_PROFILE_DATA: 'USER_PROFILE_DATA',
    USER_TOKEN: 'USER_TOKEN',
    USER_REMEMBER_ME: 'USER_REMEMBER_ME',
    NOTIFICATION_TOKEN_STATUS: 'NOTIFICATION_TOKEN_STATUS',
    JOBASSIGNMENT: 'JOBASSIGNMENT',

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

            return fcmToken
        } catch (error) {
            console.log('PUSH NOTIFICATION TOKEN: error  ', error);
            return "";
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
            let token = response.data.userResponse.token
            // console.log('token response++++++++++++++++',response);
            // console.log('mera token agya ===',token);
            return response.data.userResponse.token;
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
    async getJobDetails() {
        try {
            let response = await AsyncStorage.getItem(key.USER_JOBSDETAILS);
            response = JSON.parse(response);

            return response;
        } catch (error) {
            return null;
        }
    },
    // Job Assignment
    async SuperviseAssignJobs() {
        try {
            let response = await AsyncStorage.getItem(key.JOBASSIGNMENT);
            response = JSON.parse(response);

            console.log('appstorage data from assign job++++++++++++++++++++++++++++', response)


            return response;
        }
        catch (error) {
            return null;
        }
    },



    async clearStorage() {
        try {
            store.dispatch({ type: Action.SIGN_OUT });
            await AsyncStorage.removeItem(key.USER_PROFILE_DATA);
            await AsyncStorage.removeItem("Token_Notification");
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
export { AppStorage, key };


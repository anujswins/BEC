import AsyncStorage from '@react-native-community/async-storage';
import store from '../Redux/Store';
import Action from '../Redux/Action';


const key = {
    USER_PROFILE_DATA: 'USER_PROFILE_DATA',
    USER_TOKEN: 'USER_TOKEN',
    USER_REMEMBER_ME: 'USER_REMEMBER_ME',
    NOTIFICATION_TOKEN_STATUS: 'NOTIFICATION_TOKEN_STATUS',
    CHOOSE_JOB_TYPE:'CHOOSE_JOB_TYPE',                    // Choose Job Type
    EQUIP_AVAIL_ID_DETAILS:'EQUIP_AVAIL_ID_DETAILS',        //EquipIdYesDetails
    EQUIP_ID_DETAILS:'EQUIP_ID_DETAILS',                   //EquipIdDetails
    USER_JOBSDETAILS: 'USER_JOBSDETAILS',                  //JobDetails
    SEARCH_CLIENT_RECORDS: 'SEARCH_CLIENT_RECORDS',         //SearchClientRecords
    GET_CLIENT_TYPES:'GET_CLIENT_TYPES',                     //Client-Types
    GET_MACHINETYPE_ID:'GET_MACHINETYPE_ID',                  //MachineType_Id
    GET_MACHINE_ID:"GET_MACHINE_ID",
    CREATEJOB_EQUIPID:'CREATEJOB_EQUIPID'                      //CreateJobEquipId
};
const AppStorage = {


    async saveKey(keyName, value) {
        try {
            await AsyncStorage.setItem(keyName, value);
        } catch (error) {

        }
    },
// // ----------------ChooseJobTypeKey--------------------------------


    async getJobTypeId() {
        try {
            let Get_Choose_JobType_Resp = await AsyncStorage.getItem(key.CHOOSE_JOB_TYPE);
            response_JobType = JSON.parse(Get_Choose_JobType_Resp);
            let value_JobTypeId=response_JobType
             console.log('token response++++++++++++++++',value_JobTypeId);
            // console.log('mera token agya ===',token);
            return value_JobTypeId;
        } catch (error) {
            return null;
        }
    },

// ----------------------EquipIDAvail----------------------------
async EquipIdAvail(keyName, value) {
    try {
        await AsyncStorage.setItem(keyName, value);
    } catch (error) {

    }
},

// -------------------------AllRecordData------------------------
async getJobDetails() {
    try {
        let response = await AsyncStorage.getItem(key.USER_JOBSDETAILS);
        response = JSON.parse(response);
        
        return response;
    } catch (error) {
        return null;
    }
},

async getjobid() {
    try {
        let response = await AsyncStorage.getItem(key.USER_JOBSDETAILS);
        response = JSON.parse(response);
     
        return response;
    } catch (error) {
        return null;
    }
},

// ---------------getUserId--------------------------------
async getUserId() {
    try {
        let response = await AsyncStorage.getItem(key.USER_PROFILE_DATA);
        response = JSON.parse(response);
        
        return response.data.userResponse.UserId;
    } catch (error) {
        return null;
    }
},

// ---------------getLoginResponse------------------
async getLoginResponse() {
    try {
        let response1 = await AsyncStorage.getItem(key.USER_PROFILE_DATA);
        var response = JSON.parse(response1);
      //  console.log("getLoginResponse===========",response)
        return response.data;
    } catch (error) {

        return null;
    }

},
// -----------------Client_Records--------------------------
async GetSearchClientRecords() {
    try {
        let response1 = await AsyncStorage.getItem(key.SEARCH_CLIENT_RECORDS);
        var respo_ClientRecords = JSON.parse(response1);
        return respo_ClientRecords;
    } catch (error) {

        return null;
    }

},
// -----------------Client_Type--------------------------
async getClientTypeRecords() {
    try {
        let response1 = await AsyncStorage.getItem(key.GET_CLIENT_TYPES);
        var respo_ClientType = JSON.parse(response1);
        return respo_ClientType;
    } catch (error) {

        return null;
    }

},
// ----------------MachineType_Id_details--------------------------
async getMachineTypeIdDetails() {
    try {
        let response1 = await AsyncStorage.getItem(key.GET_MACHINETYPE_ID);
        var respo_MachineType = JSON.parse(response1);
      //  console.log("appstor+++++++",respo_MachineType)
        return respo_MachineType;
    } catch (error) {

        return null;
    }

},
// -----------------Machine_Id_Details--------------------------
async getMachineIdDetails() {
    try {
        let response1 = await AsyncStorage.getItem(key.GET_MACHINE_ID);
        var respo_MachineDetails = JSON.parse(response1);
      //  console.log("appstorrespo_MachineDetails+++++++",respo_MachineDetails)
        return respo_MachineDetails;
    } catch (error) {

        return null;
    }

},
// --------------createJobEquipId--------------
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
            let token=response.data.userResponse.token
            // console.log('token response++++++++++++++++',response);
            // console.log('mera token agya ===',token);
            return response.data.userResponse.token;
        } catch (error) {
            return null;
        }
    },


    async clearStorage() {
        try {
            store.dispatch({type: Action.SIGN_OUT});
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
export {AppStorage, key};


import AsyncStorage from '@react-native-community/async-storage';
import store from '../Redux/Store';
import Action from '../Redux/Action';
import { Alert } from 'react-native';


const key = {
    USER_PROFILE_DATA: 'USER_PROFILE_DATA',
    ASSIGNED_JOB_INFO:"ASSIGNED_JOB_INFO",
    USER_TOKEN: 'USER_TOKEN',
    USER_REMEMBER_ME: 'USER_REMEMBER_ME',
    NOTIFICATION_TOKEN_STATUS: 'NOTIFICATION_TOKEN_STATUS',
    CHOOSE_JOB_TYPE:'CHOOSE_JOB_TYPE',                
       
    SAVE_EMAIL:"SAVE_EMAIL",
    ALL_TECHNICIAN_DETAIL:'ALL_TECHNICIAN_DETAIL',
    TECHNICIAN_ASSIGNED_JOB_ID:'ASSIGNED_JOB_ID',



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

    async getLoginResponse(){
      try{
         let  response1=await AsyncStorage.getItem(key.USER_PROFILE_DATA);
        var  response = JSON.parse(response1);
         return response.data
      }
catch(error)
{
    console.log("error occured",error);
    return null;
}

    },

async getAssignedJobInfo(){
  try{
       let  response1=await AsyncStorage.getItem(key.ASSIGNED_JOB_INFO);
       var  response = JSON.parse(response1);
        return response
     }
   catch(error)
   {
   console.log("error occured",error);
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



//////////////Assigned job Id (technician team member screen)

async getAssignedJobId() {
    try {
        let response = await AsyncStorage.getItem(key.TECHNICIAN_ASSIGNED_JOB_ID);
        // response = JSON.parse(response);
        
        return response;
    } catch (error) {
        return null;
    }
},

async getAllTechnician(){
try{
let json_response=await AsyncStorage.getItem(key.ALL_TECHNICIAN_DETAIL);
console.log("get Alltechnician called",json_response)
 let response=JSON.parse(json_response);

return response.data.jobsAssignmentMainResponse.jobsAssignmentResponse;

}
catch(error)
{
    console.log("error occured",error)
return null

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
        let value_JobTypeId=response_JobTypeid
        // console.log('token response++++++++++++++++',response);
        // console.log('mera token agya ===',token);
        return value_JobTypeId;
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

// --------------------------------
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

// async getEmail(){

// try{
// let email=await AsyncStorage.getItem(key.SAVE_EMAIL);
// Alert.alert("Email recived",email)


// }

// catch(error)
// {
//   return null;  
// }




// },






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


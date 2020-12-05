import Api from './ApiCofig';
import axios from 'axios';
import CommonData from './commonAxiosData';

import store from '../Redux/Store';
import Action from '../Redux/Action';
import RestUtils from './RestUtils';
import Utils from '../UtilsNew/Utils';
import {AppStorage} from '../utils/AppStorage';


export default class AuthService {

    static async updateData(action, data) {
        store.dispatch({
            type: action,
            data: data,
        });

    }

    static async authenticate(email, password, role) {
      

        return axios({
            method: 'POST',
            url: Api.login,
            data: {
                email,
                password,
                role,

            },


        });

    }
    static async JobDetails(assignToId,loggedInUserId,status,allRecords) {
        let token = await AppStorage.getToken();

        return axios({
            method: 'POST',
            url: Api.JobDetails,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }, 
            data: {
                assignToId,
                loggedInUserId,
               status,
               allRecords

            },


        });

    }


    static async getJobNoEquipId(JobNumber) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

        

        return axios({
            method: 'POST',
            url: Api.GetJobNoByEquipId,

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }, 
    
            data: {
           
                JobNumber
            },


        });

    }
    static async getJobByEquipId(EquipmentId) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

        

        return axios({
            method: 'POST',
            url: Api.GetJobByEquipmentId,

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }, 
    
            data: {
           
                EquipmentId
            },


        });

    }


////////////////////////Additional Work hour ///////////////////

    static async requestAdditionalHours(jobId,userId,requestStartTime,requestEndTime,workRequestDate,Description) {
      
        let token = await AppStorage.getToken();
        return axios({
            method: 'POST',
            url: Api.AdditionalHours,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }, 
            data: {
                jobId,userId,requestStartTime,requestEndTime,workRequestDate,Description
            },


        });

    }












//////////////////////////Technician part of supervisor module screen 1
    static async getActiveJobDetail( JobId) {
        console.log("inside getTechnician")
          let token = await AppStorage.getToken();
          return axios({
              method: 'POST',
              url: Api.ActiveJobDetail,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token
              }, 
              data: {
                JobId
                
              },
  
  
          });
  
      }


      static async TeamMemberSupervisor( ActiveJobId) {
        console.log("inside teammembersupervisor")
          let token = await AppStorage.getToken();
          return axios({
              method: 'POST',
              url: Api.TeamMembersupervisor,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token
              }, 
              data: {
                ActiveJobId
                
              },
  
  
          });
  
      }







//////////////////////////Technician part of supervisor module screen 1

    static async getTechnicianDepartments(  
        globalCodeCategoryId,
        categoryName,
        page ,
        limit,
        orderBy,
        orderByDescending,
        allRecords) {
      console.log("inside getTechnician")
        let token = await AppStorage.getToken();
        return axios({
            method: 'POST',
            url: Api.TechnicianTypes,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }, 
            data: {
                
                    globalCodeCategoryId,
                    categoryName,
                    page ,
                    limit,
                    orderBy,
                    orderByDescending,
                    allRecords
                  
              
            },


        });

    }

    static async getTechnicianDetail(   userTypeId,page,limit,CreatedOn,orderByDescending,allRecords) {
        console.log("getTechnicianDetail called")
          let token = await AppStorage.getToken();
          return axios({
              method: 'POST',
              url: Api.TechnicianDetail,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token
              }, 
              data: {
                userTypeId,
                page,
                limit,
                CreatedOn,
                orderByDescending,
                allRecords
                
              },
  
  
          });
  
      }

    static async ObjectAttributes(jobId, userId, subSegmentId, segmentId, machineId,machineTypeId,namePlate,orderBy,orderByDescending,allRecords) {
       
        let token = await AppStorage.getToken();
    // console.log('token  auth class   ',token);




    return axios({
        method: 'POST',
        url: Api.GetAllAttributes,


        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

    
           
        data: {
           
            jobId,
  userId,
 subSegmentId,
 segmentId,
 machineId,
 machineTypeId,
 namePlate,
 orderBy,
 orderByDescending,
 allRecords

       
        
        },


    });


        

    }



    static async SuperviseCurrentJobs(stageId, jobTypeId, machineTypeId, startDate, endDate, clientId, assignToId, status,orderBy, orderByDescending, allRecords) {
       
        let token = await AppStorage.getToken();
    // console.log('token  auth class   ',token);




    return axios({
        method: 'POST',
        url: Api.GetAllRecordsCurrent,


        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

    
           
        data: {
           
            stageId,
            jobTypeId,
            machineTypeId,
            startDate,
            endDate,
            clientId,
            assignToId,
            status,
            orderBy,
            orderByDescending,
            allRecords,
       
        
        },


    });


        

    }



    ////////////////////////////////Technician module (My team )
    static async GetTechnicianTeamMember(jobId,userId,page,limit,orderBy,orderByDescending,allRecords)
     {
       
        let token = await AppStorage.getToken();
  




    return axios({
        method: 'POST',
        url: Api.TechniciansTeamMembers,


        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

    
           
        data: {
            jobId,userId,page,limit,orderBy,orderByDescending,allRecords
        
        },


    });


        

    }


////////////////////ForgotPassword/////////////////////

static async getOTP(email) {
      

    return axios({
        method: 'POST',
        url: Api.forgotPassword,
        data: {
            email
           
        },


    });

}



//Assigned jobs
static async SuperviseAssignJobs(
    
    userTypeId,
    NoJobAssigned,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords,
    ) {
let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




return axios({
method: 'POST',
url: Api.GetAllRecordsJob,


headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
}, 


   
data: 
   
    {
        userTypeId,
        NoJobAssigned,
        page,
        limit,
        orderBy,
        orderByDescending,
        allRecords
       }





});





}

//Feedback and Comments

static async SuperviseCommentAndFeedback(


    jobId,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
   
) {

let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




return axios({
method: 'POST',
url: Api.GetCommentAndFeedback,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
    jobId,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
   }





});






}
// Completed Jobs
static async SupCompletedJobs(

          
stageId,
jobTypeId,
machineTypeId,
startDate,
endDate,
clientId,
assignToId,
status,
orderBy,
orderByDescending,
Page,
limit,
allRecords

) {

let token = await AppStorage.getToken();




return axios({
method: 'POST',
url: Api.GetSupCompletedJobs,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
stageId,
jobTypeId,
machineTypeId,
startDate,
endDate,
clientId,
assignToId ,
status,
orderBy,
orderByDescending,
Page,
limit,
allRecords
}






});







}
// Supervisior ActiveJobs
static async SupActiveJobs(

          

    JobId,
   

) {

let token = await AppStorage.getToken();





return axios({
method: 'POST',
url: Api.GetSupActiveJobs,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
JobId,
}






});







}

//SupNotificationScreen





static async SupNotificationScreen(

          

    userId,
    type,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
    

) {

let token = await AppStorage.getToken();

console.log('Hanji',token)




return axios({
method: 'POST',
url: Api.GetSupNotification ,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
userId,
type,
page,
limit,
orderBy,
orderByDescending,
allRecords

}






});







}
// Assignment Jobs
static async AssignmentJobs(

    userId,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords,
    
) {


    let token = await AppStorage.getToken();
console.log('token  auth class   ',token);




return axios({
method: 'POST',
url: Api.GetJobAssignment,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{

    userId,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords,
   }





});





}
//Feedback Type
static async superFeedbackType (


    categoryName,
    orderBy,
    orderByDescending,
    allRecords
   

) {

let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




return axios({
method: 'POST',
url: Api.GetFeedbackType,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{

categoryName,
orderBy,
orderByDescending,
allRecords
}





});






}
// Feedback Priority
static async superFeedbackPriority (


categoryName,
orderBy,
orderByDescending,
allRecords


) {

let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




return axios({
method: 'POST',
url: Api.GetFeedbackPriority,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{

categoryName,
orderBy,
orderByDescending,
allRecords
}





});






}

//TechniciansCommentAndFeedback

static async TechnicianCommentAndFeedback(


jobId,
page,
limit,
orderBy,
orderByDescending,
allRecords

) {

let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




return axios({
method: 'POST',
url: Api.GetTechCommentAndFeedback,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
jobId,
page,
limit,
orderBy,
orderByDescending,
allRecords
}





});






}


static async GetTechNotification(

          
{
    userId,
    type,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
    }

) {

let token = await AppStorage.getToken();

console.log('Hanji',token)




return axios({
method: 'POST',
url: Api.GetSupNotification ,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
userId,
type,
page,
limit,
orderBy,
orderByDescending,
allRecords

}






});







}
// Get Notification of Technician Module

static async techNotificationScreen(

          
{
    userId,
    type,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
    }

) {

let token = await AppStorage.getToken();

console.log('Hanji',token)




return axios({
method: 'POST',
url: Api.GetSTechNotification,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 



data: 

{
userId,
type,
page,
limit,
orderBy,
orderByDescending,
allRecords

}






});







}

static async getAutoGenEquipJobNo() {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetAutoGenEquipId,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
       
           
        },


    });

}

static async getClientType(globalCodeCategoryId,categoryName,page,limit,orderBy,orderByDescending,allRecords) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetRecordsClientType,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
            globalCodeCategoryId,
            categoryName,
            page,
            limit,
            orderBy,
            orderByDescending,
            allRecords
        },


    });

}

static async SuperviseGetSearchClientRecord(searchText,page,limit,orderBy,orderByDescending,allRecords) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetSearchClientRecord,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
       
            searchText,
            page,
            limit,
            orderBy,
            orderByDescending,
            allRecords
        },


    });

}

static async GetMachineTypeDropdown(orderBy,orderByDescending,allRecords) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetRecordsMachineType,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
            orderBy,
            orderByDescending,
            allRecords
        },


    });

}

static async GetMachineDropdown(machineTypeId,orderBy,orderByDescending,allRecords) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetAllRecordsMachine,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
            machineTypeId,
            orderBy,
            orderByDescending,
            allRecords
        },


    });

}

static async GetSegmentDropdown(machineId,orderBy,orderByDescending,allRecords) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetAllRecordsSegment,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
            machineId,
            orderBy,
            orderByDescending,
            allRecords
        },


    });

}

static async GetChooseJobType(page,limit,orderBy,orderByDescending,allRecords) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.GetAllChooseJobType,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
            page,
            limit,
            orderBy,
            orderByDescending,
            allRecords
        },


    });

}

static async CreateJobClientEquipId(EquipmentId,jobTypeId,machineTypeId,machineId,segmentId,clientId,clientType,clientName,phoneNumber,userId,jobCode) {
    let token = await AppStorage.getToken();
    console.log('token  auth class   ',token);

    

    return axios({
        method: 'POST',
        url: Api.CreateJobClientType,

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 

        data: {
            EquipmentId,
            jobTypeId,
            machineTypeId,
            machineId,
            segmentId,
            clientId,
            clientType,
            clientName,
            phoneNumber,
            userId,
            jobCode
        },


    });

}

// Drop down of Questionnaire
static async getDropDown(
    globalCodeCategoryId,
    orderBy,
    orderByDescending,
    allRecords) {
    
    let token = await AppStorage.getToken();
    return axios({
    method: 'POST',
    url: Api.jobInprogressDropDown,
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
    },
    data: {
    
    globalCodeCategoryId,
    orderBy,
    orderByDescending,
    allRecords
    
    
    },
    
    
    });
    
    }


    static async ObjectAttributes(jobId, userId, subSegmentId, segmentId, machineId,machineTypeId,namePlate,orderBy,orderByDescending,allRecords) {

        let token = await AppStorage.getToken();
        // console.log('token auth class ',token);
        
        
        
        
        return axios({
        method: 'POST',
        url: Api.GetAllAttributes,
        
        
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
        },
        
        
        
        data: {
        
        jobId,
        userId,
        subSegmentId,
        segmentId,
        machineId,
        machineTypeId,
        namePlate,
        orderBy,
        orderByDescending,
        allRecords
        
        
        
        },
        
        
        });
        
        
        
        
        }



}





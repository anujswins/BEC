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
<<<<<<< HEAD
=======


<<<<<<< HEAD




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

=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
    static async getJobByEquipId(EquipmentId) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

<<<<<<< HEAD
        
=======

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        return axios({
            method: 'POST',
            url: Api.GetJobByEquipmentId,

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
<<<<<<< HEAD
            }, 
    
            data: {
           
=======
            },

            data: {

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
                EquipmentId
            },

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


<<<<<<< HEAD




    
static async SuperviseCurrentJobs( status,orderBy, orderByDescending, allRecords,page,limit) {
=======
<<<<<<< HEAD
    static async getJobNoEquipId(JobNumber) {
=======
    static async getAutoGenEquipJobNo() {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
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
<<<<<<< HEAD

    static async getAutoGenEquipJobNo() {
=======
    static async getClientType(globalCodeCategoryId,categoryName,page,limit,orderBy,orderByDescending,allRecords) {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);



        return axios({
            method: 'POST',
<<<<<<< HEAD
            url: Api.GetAutoGenEquipId,
=======
            url: Api.GetRecordsClientType,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },

            data: {
<<<<<<< HEAD
           
               
=======
                globalCodeCategoryId,
                categoryName,
                page,
                limit,
                orderBy,
                orderByDescending,
                allRecords
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            },


        });

    }
    static async GetMachineDropdown(machineTypeId,orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

    static async getClientType(globalCodeCategoryId,categoryName,page,limit,orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

        

<<<<<<< HEAD
        return axios({
            method: 'POST',
            url: Api.GetRecordsClientType,
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    let token = await AppStorage.getToken();
    // console.log('token auth class ',token);
    
    
    
    
    return axios({
    method: 'POST',
    url: Api.GetAllRecordsCurrent,
    
    
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
    },
    
    
    
    data: {
    
    
    status,
    orderBy,
    orderByDescending,
    allRecords,
    page,
    limit
    
    
    },
    
    
    });
    
    
    
    
<<<<<<< HEAD
=======
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

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    }

    static async GetMachineTypeDropdown(orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

<<<<<<< HEAD
    // static async resendemail(email) {
    //     return axios({
    //         method: 'GET',
    //         url: Api.resend(email),
    //         headers: CommonData.getHeaderWithoutToken(),
    //     });

    // }
=======
        

        return axios({
            method: 'POST',
            url: Api.GetRecordsMachineType,
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        return axios({
            method: 'POST',
            url: Api.GetAllRecordsMachine,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

<<<<<<< HEAD
//Assigned jobs
static async SuperviseAssignJobs(
    
        // userTypeId,
        // NoJobAssigned,
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
            //  userTypeId,
            // NoJobAssigned,
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
=======
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
<<<<<<< HEAD
            }, 
    
            data: {
=======
            },

            data: {
                machineTypeId,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
                orderBy,
                orderByDescending,
                allRecords
            },


        });

    }
    static async GetMachineTypeDropdown(orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

    static async GetMachineDropdown(machineTypeId,orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

        

        return axios({
            method: 'POST',
<<<<<<< HEAD
            url: Api.GetAllRecordsMachine,
=======
            url: Api.GetRecordsMachineType,
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
<<<<<<< HEAD
            }, 
    
            data: {
                machineTypeId,
                orderBy,
                orderByDescending,
                allRecords
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            },

            data: {
                orderBy,
                orderByDescending,
                allRecords
            },

        });

<<<<<<< HEAD
    }

    static async GetSegmentDropdown(machineId,orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

        
=======
        });

    }
    static async SuperviseCurrentJobs(stageId, jobTypeId, machineTypeId, startDate, endDate, clientId, assignToId, status,orderBy, orderByDescending, allRecords) {

        let token = await AppStorage.getToken();
        // console.log('token  auth class   ',token);
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

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

<<<<<<< HEAD

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
=======

        return axios({
            method: 'POST',
            url: Api.GetAllRecordsCurrent,

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
<<<<<<< HEAD
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
=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
            },



            data: {

<<<<<<< HEAD



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
      static async GetTechnicianlabel(globalCodeCategoryId,categoryName,page,limit,orderBy,orderByDescending,allRecords   ) {
      
          let token = await AppStorage.getToken();
          return axios({
              method: 'POST',
              url: Api.GetTechnicianTypeLabel,
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


      
//Assigned jobs
static async SuperviseAssignJobs(
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0
    
    
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
=======
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

<<<<<<< HEAD

}
// Create Feedback 
static async CreateFeedback(
    
    
        jobId,
        feedbackType,
        feedbackPriority,
        feedback,
        userId
   
) {
=======



    }
    static async getJobNoEquipId(JobNumber) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


        return axios({
            method: 'POST',
            url: Api.GetJobNoByEquipId,

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },

            data: {

<<<<<<< HEAD
return axios({
method: 'POST',
url: Api.GetFeedbackCreate,
=======
                JobNumber
            },
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


        });

    }
    static async GetChooseJobType(page,limit,orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);



<<<<<<< HEAD
{
    
        jobId,
        feedbackType,
        feedbackPriority,
        feedback,
        userId
       
   }
=======
        return axios({
            method: 'POST',
            url: Api.GetAllChooseJobType,
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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

<<<<<<< HEAD
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
=======
                searchText,
                page,
                limit,
                orderBy,
                orderByDescending,
                allRecords
            },


        });
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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
    static async GetSegmentDropdown(machineId,orderBy,orderByDescending,allRecords) {
        let token = await AppStorage.getToken();
        console.log('token  auth class   ',token);

<<<<<<< HEAD
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
   
=======

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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



<<<<<<< HEAD
}
// Supervisior ActiveJobs
static async SupActiveJobs(
    
              
    
        JobId,
       
   
) {
=======

        return axios({
            method: 'POST',
            url: Api.GetAllRecordsJob,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0



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



<<<<<<< HEAD
{
    JobId,
   }
   
=======

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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

<<<<<<< HEAD
static async SupNotificationScreen(
    
              
    
        userId,
        type,
        page,
        limit,
        orderBy,
        orderByDescending,
        allRecords
        
   
) {
=======



>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        });

<<<<<<< HEAD
console.log('',token)
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0





    }
// Create Feedback
    static async CreateFeedback(


        jobId,
        feedbackType,
        feedbackPriority,
        feedback,
        userId

    ) {

        let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);

<<<<<<< HEAD
{
    userId,
    type,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
    
   }
   
=======


>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        return axios({
            method: 'POST',
            url: Api.GetFeedbackCreate,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },



            data:

                {

                    jobId,
                    feedbackType,
                    feedbackPriority,
                    feedback,
                    userId

                }



<<<<<<< HEAD
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
 console.log('token  auth class ',token);
=======


        });

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0





    }
// Completed Jobs
    static async SupCompletedJobs(

<<<<<<< HEAD
headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
}, 
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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

<<<<<<< HEAD
   
data: 
   
    {

        userId,
        page,
        limit,
        orderBy,
        orderByDescending,
        allRecords,
       }
=======
    ) {

        let token = await AppStorage.getToken();


>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


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


<<<<<<< HEAD
}
//Assigned Jobs
static async AssignedJobs(
    
userId,
jobId,
action,
    
    
) {


    let token = await AppStorage.getToken();
console.log('token  auth class ',token);
=======




        });
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0




<<<<<<< HEAD
return axios({
method: 'POST',
url: Api.JobAssigned,
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0



    }
// Supervisior ActiveJobs
    static async SupActiveJobs(



<<<<<<< HEAD
{
    userId,
    jobId,
    action,
    
   }
=======
        JobId,

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    ) {

        let token = await AppStorage.getToken();





        return axios({
            method: 'POST',
            url: Api.GetSupActiveJobs,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },

<<<<<<< HEAD
}
//Feedback Type
static async superFeedbackType (
    
    
        categoryName,
        orderBy,
        orderByDescending,
        allRecords
       
   
) {
=======


            data:

                {
                    JobId,
                }


>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0




        });

<<<<<<< HEAD
return axios({
method: 'POST',
url: Api.GetFeedbackType,
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0






    }

<<<<<<< HEAD
    categoryName,
    orderBy,
    orderByDescending,
    allRecords
   }
=======
//SupNotificationScreen
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0





    static async SupNotificationScreen(



        userId,
        type,
        page,
        limit,
        orderBy,
        orderByDescending,
        allRecords


    ) {

<<<<<<< HEAD
}
// Feedback Priority
static async superFeedbackPriority (
    
    
    categoryName,
    orderBy,
    orderByDescending,
    allRecords
   
=======
        let token = await AppStorage.getToken();

        console.log('',token)



>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        return axios({
            method: 'POST',
            url: Api.GetSupNotification ,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },



<<<<<<< HEAD
return axios({
method: 'POST',
url: Api.GetFeedbackPriority,
=======
            data:
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                {
                    userId,
                    type,
                    page,
                    limit,
                    orderBy,
                    orderByDescending,
                    allRecords

                }




<<<<<<< HEAD
{

    categoryName,
    orderBy,
    orderByDescending,
    allRecords
}
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


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

//////////////////////////Technician part of supervisor module screen 1

<<<<<<< HEAD
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
=======
        let token = await AppStorage.getToken();
        console.log('token  auth class ',token);




        return axios({
            method: 'POST',
            url: Api.GetJobAssignment,
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

static async getTechnicianDetail(userTypeId,page,limit,CreatedOn,orderByDescending,allRecords) {
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

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },

      });

<<<<<<< HEAD
  }
=======
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

            data:

<<<<<<< HEAD
=======
                {
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                    userId,
                    page,
                    limit,
                    orderBy,
                    orderByDescending,
                    allRecords,
                }

static async SuperviseCurrentJobs(stageId, jobTypeId, machineTypeId, startDate, endDate, clientId, assignToId, status,orderBy, orderByDescending, allRecords) {
   
    let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




<<<<<<< HEAD
return axios({
    method: 'POST',
    url: Api.GetAllRecordsCurrent,
=======
        });
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
    }, 


<<<<<<< HEAD
       
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
=======

    }
//Assigned Jobs
    static async AssignedJobs(

        userId,
        jobId,
        action,

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    ) {

});

        let token = await AppStorage.getToken();
        console.log('token  auth class ',token);

    

<<<<<<< HEAD
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
=======


        return axios({
            method: 'POST',
            url: Api.JobAssigned,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


            data:

                {
                    userId,
                    jobId,
                    action,

<<<<<<< HEAD
return axios({
method: 'POST',
url: Api.GetTechCommentAndFeedback,
=======
                }
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0





        });

<<<<<<< HEAD
{
    jobId,
    page,
    limit,
    orderBy,
    orderByDescending,
    allRecords
   }
=======


>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0


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




<<<<<<< HEAD
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
=======
        return axios({
            method: 'POST',
            url: Api.GetFeedbackType,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },



            data:

                {
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

                    categoryName,
                    orderBy,
                    orderByDescending,
                    allRecords
                }



<<<<<<< HEAD
return axios({
method: 'POST',
url: Api.GetSupNotification ,


headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token
}, 
=======


        });
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0



data: 

<<<<<<< HEAD
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

=======


    }
// Feedback Priority
    static async superFeedbackPriority (


        categoryName,
        orderBy,
        orderByDescending,
        allRecords


    ) {
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        let token = await AppStorage.getToken();
// console.log('token  auth class   ',token);




<<<<<<< HEAD

}


// job in Progress
=======
        return axios({
            method: 'POST',
            url: Api.GetFeedbackPriority,


            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },

>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

static async ObjectAttributes(jobId, userId, subSegmentId, segmentId, machineId,machineTypeId,namePlate,orderBy,orderByDescending,allRecords) {

<<<<<<< HEAD
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
    
    
    // get dropdown Questionnaire
    
    
    }



    //Dashboard
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
//Notification Mark as Read
static async MarkAsRead(  
    
        notificationId,
        userName,
      
    ) {

    let token = await AppStorage.getToken();
    return axios({
        method: 'POST',
        url: Api.markasreadNotification,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }, 
        data: {
         notificationId,
            userName,
     },
=======
            data:

                {

                    categoryName,
                    orderBy,
                    orderByDescending,
                    allRecords
                }




>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

        });


<<<<<<< HEAD
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
=======




    }

//////////////////////////Technician part of supervisor module screen 1
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

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


<<<<<<< HEAD

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
   
=======
            },


        });

    }

    static async getTechnicianDetail(userTypeId,page,limit,CreatedOn,orderByDescending,allRecords) {
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
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc




<<<<<<< HEAD
=======
    }
//TechniciansCommentAndFeedback
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

    static async TechnicianCommentAndFeedback(

<<<<<<< HEAD
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
=======

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
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

                {
                    jobId,
                    page,
                    limit,
                    orderBy,
                    orderByDescending,
                    allRecords
                }

<<<<<<< HEAD
    

}
//Job_Assignment_TechDepart
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
=======




        });


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc



<<<<<<< HEAD
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
=======

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
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

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



<<<<<<< HEAD
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

=======
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        });

<<<<<<< HEAD
    }


static async AssignedJobs(
    
    userId,
    jobId,
    action,
        
        
    ) {
    
    
        let token = await AppStorage.getToken();
    console.log('token  auth class ',token);
    
    
    
    
    return axios({
    method: 'POST',
    url: Api.JobAssigned,
    
    
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
    }, 
    
    
    
    data: 
    
    {
        userId,
        jobId,
        action,
        
       }
    
    
    
    
    
    });
    
    
    
    
    
=======


>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
    }
    // static async resendemail(email) {
    //     return axios({
    //         method: 'GET',
    //         url: Api.resend(email),
    //         headers: CommonData.getHeaderWithoutToken(),
    //     });
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

<<<<<<< HEAD
    // }
=======

// job in Progress


<<<<<<< HEAD
=======
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


        // get dropdown Questionnaire


    }



    //Dashboard
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
//Notification Mark as Read
    static async MarkAsRead(

        notificationId,
        userName,

    ) {

        let token = await AppStorage.getToken();
        return axios({
            method: 'POST',
            url: Api.markasreadNotification,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            data: {
                notificationId,
                userName,
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
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

    ) {
>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc

        let token = await AppStorage.getToken();

        console.log('Hanji',token)

});

<<<<<<< HEAD
=======


        return axios({
            method: 'POST',
            url: Api.GetSTechNotification,

<<<<<<< HEAD
}
=======

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
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0






<<<<<<< HEAD
}

}

=======
        });







    }

}

>>>>>>> cdc289e2804b5bc3c721f86018d5aca4d96f9fbc
>>>>>>> 1efb17fd4e6918320511e82874706b886d9fece0

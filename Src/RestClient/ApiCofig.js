
// const Root = url => `http://64.202.184.112:5000/api/${url}`;  //live

const Root = url => `http://64.202.184.112:5000/api/${url}`;  //local


class Api {
    static login = Root('AuthAPI/Login');
    static GetAllRecordsCurrent = Root('JobsAPI/GetAllRecords');
    static GetAllRecordsJob = Root('JobsAssignmentAPI/GetAllRecords');
    static GetCommentAndFeedback= Root('CommentsAndFeedback/GetAllRecords');
    static GetSupCompletedJobs= Root('JobsAPI/GetAllRecords')
    static GetSupActiveJobs= Root('JobsAssignmentAPI/ActiveJobDetail')
    static GetSupNotification = Root('Notification/GetAllRecords')
    static GetJobAssignment = Root('JobsAssignmentAPI/JobAssignDetail')
    static GetFeedbackType = Root('GlobalCodeAPI/GetAllRecords')
    static GetFeedbackPriority=Root('GlobalCodeAPI/GetAllRecords')
    static GetFeedbackCreate=Root('CommentsAndFeedback/Create')
    static TechnicianTypes=Root('GlobalCodeAPI/GetAllRecords');
    static JobAssigned=Root('JobsAssignmentAPI/CreateJobAssign');
    
    static jobInprogressDropDown=Root('GlobalCodeAPI/GetAllRecords');
    static markasreadNotification=Root('Notification/MarkAsRead');

    
  
// Technicians
static GetTechCommentAndFeedback= Root('CommentsAndFeedback/GetAllRecords');
static GetSTechNotification = Root('Notification/GetAllRecords')
static GetAllAttributes = Root('ObjectAttributesAPI/GetAllObjectAttributeRecords');
static JobDetails = Root('JobsAPI/GetAllRecords'); 

}

export default Api;




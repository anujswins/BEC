import Action from './Action';



const AppDefaultState = {
    config: null,
    mUserProfileData: '',
    connectionStatus: 'Online',
    vitalScreenData: null,

    toastObj: {
        show: false,
        variant: 'error',
        message: '',
        autodismiss: true,
        duration: 6000,
        position: 'top',
    },
    DashboardData_currentUser: null,
    Notification_Status: 0,
    VITAL_TYPE: 'all',


};

const Reducer = (state = AppDefaultState, action) => {

    switch (action.type) {

        case Action.PROFILE_DATA_APIRESPONSE:
            return {...state, mUserProfileData: action.data};


        case Action.IS_INTERNET_CONNECTED:
            return {...state, connectionStatus: action.data};

        case Action.VITAL_SCREEN_DATA:
            return {...state, vitalScreenData: action.data};

        case Action.HOME.NOTIFICATION_STATUS:
            return {...state, Notification_Status: action.data};

        case  Action.HDA.VITAL_TYPE:
            return {...state, VITAL_TYPE: action.data};

        case Action.HOME.CURRENT_DASH_USER:
            return {...state, DashboardData_currentUser: action.data};

   


        default:
            return state;
    }
};


export {Reducer};

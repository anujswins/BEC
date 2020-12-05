import Action from '../../Action';

const AppDefaultState = {
    HD_VitalList: [],
    HD_VitalListBackUp: [],

};

const Reducer = (state = AppDefaultState, action) => {

    switch (action.type) {
        case Action.HOME.VITALLIST.API_UNDER_PROGRESS:
            return {...state, HD_VitalList: action.data};

        case Action.HOME.VITALLIST.API_FAIL:
            return {...state, HD_VitalList: state.HD_VitalList};

        case Action.HOME.VITALLIST.API_DATA:
            return {...state, HD_VitalList: action.data, HD_VitalListBackUp: action.data};
        default:
            return state;
    }
};


export default Reducer;

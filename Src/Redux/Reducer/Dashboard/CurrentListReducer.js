import Action from '../../Action';

const AppDefaultState = {
    HCurrentVitals: [],
    H_CurrentVitalsBackUp: [],

};

const Reducer = (state = AppDefaultState, action) => {
    switch (action.type) {
        case Action.HOME.CURRENTLIST.API_UNDER_PROGRESS:
            return {...state, HCurrentVitals: action.data};

        case Action.HOME.CURRENTLIST.API_FAIL:
            return {...state, HCurrentVitals: state.H_CurrentVitals};

        case Action.HOME.CURRENTLIST.API_DATA:
            return {...state, HCurrentVitals: action.data, H_CurrentVitalsBackUp: action.data};
        default:
            return state;
    }
};


export default Reducer;

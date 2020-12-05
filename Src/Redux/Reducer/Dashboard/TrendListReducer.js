import Action from '../../Action';

const AppDefaultState = {
    HTrendVitals: [],
    H_TrendVitalsBackUp: [],

};

const Reducer = (state = AppDefaultState, action) => {
    switch (action.type) {
        case Action.HOME.TRENDLIST.API_UNDER_PROGRESS:
            return {...state, HTrendVitals: action.data};

        case Action.HOME.TRENDLIST.API_FAIL:
            return {...state, HTrendVitals: state.HTrendVitals};

        case Action.HOME.TRENDLIST.API_DATA:
            return {...state, HTrendVitals: action.data, H_TrendVitalsBackUp: action.data};
        default:
            return state;
    }
};


export default Reducer;

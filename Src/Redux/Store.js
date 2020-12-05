import {combineReducers, createStore} from 'redux';
import {Reducer} from './ReducerMain';


import H_CurrentListReducer from './Reducer/Dashboard/CurrentListReducer';
import H_TrendListReducer from './Reducer/Dashboard/TrendListReducer';








const AppReducers = combineReducers({
    Reducer,
 
  
    H_CurrentListReducer,
    H_TrendListReducer,


  
  


  

    


});

const rootReducer = (state, action, ...val) => {
    if (action.type === 'USER_LOGGED_IN') {
        state = undefined;
    }
    return AppReducers(state, action, ...val);
};

const store = createStore(rootReducer);

export default store;

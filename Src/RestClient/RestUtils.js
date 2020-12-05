import store from '../Redux/Store';
import {NavigationActions} from 'react-navigation';


export default class RestUtils {

    static async prepareRefresh(action) {
        store.dispatch({
            type: action,
            data: 'refreshing',
        });
    }

    static async restoreData(action) {
        store.dispatch({
            type: action,
        });
    }

    static async updateData(action, data) {
        store.dispatch({
            type: action,
            data: data,
        });
    }

    static async logoutUser() {
        store.dispatch({
            type: 'USER_LOGGED_IN',
            data: 'data',
        });
    
  
        NavigationActions.navigate({
            routeName: 'Dashboard' });
    }

    static Console(errorTag, e) {
        console.log(errorTag, e);
    }

}

import store from './Store';
import Action from './Action';


export function onNotificationChange(userData) {
    store.dispatch({
        type: Action.HOME.NOTIFICATION_STATUS,
        data: userData,
    });

}

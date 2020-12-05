import store from './Store';
import Action from './Action';
import HomeModuleApi from '../RestClient/HomeModuleApi';


export function onUserDashboardRefreshData(userData) {
    if (userData == null) {
        return;
    }
    let identityId = userData.identityId;
    let userId = userData._id;

    try {
        HomeModuleApi.getCurrentVitalList(identityId);
        HomeModuleApi.getHomeDashboard(identityId, userId);

    } catch (e) {
        console.log('onUserDashboardRefreshData error  >>>>>>>>>>>>>>>>>>>', e);
    }

}

export function onUserDashboardSelect(userData) {
    onUserDashboardRefreshData(userData);
    store.dispatch({
        type: Action.HOME.CURRENT_DASH_USER,
        data: userData,
    });

}

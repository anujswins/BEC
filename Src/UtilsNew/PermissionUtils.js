class PermissionUtils {

    static hasAccessPermisson(arr, index) {
        try {
            if (arr[index] == 1) {
                return true;
            }
        } catch (e) {
            return false;
        }

    }

    static hasViewPermisson(arr, index) {
        try {
            if (arr[index] == 1) {
                return true;
            }
        } catch (e) {
            return false;
        }

    }

    static hasManagePermisson(arr, index) {
        try {
            if (arr[index] == 1) {
                return true;
            }
        } catch (e) {
            return false;
        }

    }

}

export default PermissionUtils;

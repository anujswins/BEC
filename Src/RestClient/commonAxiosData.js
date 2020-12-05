

class CommonData {
    static appVersion = '1.0';
    static deviceName = 'android';
    static baseUrl = 'http://64.202.184.112:5000/api/AuthAPI/';
    // static baseUrl='http://192.168.0.65:4008/';

    static getHeaderWithToken = async () => {
    
        console.log('token>>>>>>>>>>>>>>>', token);
        return {
            version: CommonData.appVersion,
            device: CommonData.deviceName,
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'token',
        };
    };

    static getHeaderWithoutToken = () => {
        return {
            version: CommonData.appVersion,
            device: CommonData.deviceName,
            'Content-Type': 'application/json',

        };
    };
}

export default CommonData;

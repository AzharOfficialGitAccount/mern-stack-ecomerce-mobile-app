import { Platform } from 'react-native'


let baseURL = '';

{
    Platform.OS == 'android'
        ? baseURL = 'http://10.52.22.23:3000/api/v1/'
        : baseURL = 'http://10.52.22.23:3000/api/v1/'
}

export default baseURL;

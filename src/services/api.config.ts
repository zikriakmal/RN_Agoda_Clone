// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import Config from 'react-native-config';

const API_URL = "https://api.agoda-clone.zikriakmal.com"

const guardApi = axios.create({ baseURL: API_URL });
const publicApi = axios.create({ baseURL: API_URL });

guardApi.interceptors.request.use(
    async config => {
        // const token = await AsyncStorage.getItem('access_token');
        const token = 'dummy_token';
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        console.log(error, 'error status will be here');
        return Promise.reject(error);
    },
);

export { guardApi, publicApi };

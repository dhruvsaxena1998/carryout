import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {apiUrl} from './constants';

const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@authtoken');
    if (token !== null) {
      return token;
    }

    return false;
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

const defaultOptions = {
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};

const authInstance = axios.create(defaultOptions);
const publicInstance = axios.create(defaultOptions);

// set authInstance to use AUTH token
authInstance.interceptors.request.use(async config => {
  const token = await getAuthToken();

  if (!token) {
    console.log('Interceptor failed!');
    throw {message: 'AUTH token not found'};
  }

  config.header.Authorization = `Bearer ${token}`;
  return config;
});

/**
 * @exports {authInstance, publicInstance, axios}
 */
export {authInstance, publicInstance, axios};

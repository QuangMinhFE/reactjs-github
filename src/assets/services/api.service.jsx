// import axios from 'axios';
import axios from './axios.customize';

const CreateUserAPI = (username, email, password, phone) => {
    const URL_BACKEND = '/users';
    const data = { username, email, password, phone };
    return axios.post(URL_BACKEND, data)
}

const UpdateUserAPI = () => {
    return 123;
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = '/users';
    return axios.get(URL_BACKEND)
}

export { CreateUserAPI, UpdateUserAPI, fetchAllUserAPI }
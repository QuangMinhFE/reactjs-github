// import axios from 'axios';
import axios from './axios.customize';

const CreateUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user/register';
    const data = { fullName, email, password, phone };

    return axios.post(URL_BACKEND, data)
}

const UpdateUserAPI = () => {
    return 123;
}

export { CreateUserAPI, UpdateUserAPI }
// import axios from 'axios';
import axios from './axios.customize';

const CreateUserAPI = (username, email, password, phone) => {
    const URL_BACKEND = '/users';
    const data = { username, email, password, phone };
    return axios.post(URL_BACKEND, data)
}

const UpdateUserAPI = (id, username, email, password, phone) => {
    const URL_BACKEND = `/users/${id}`
    const data = {
        id,
        username,
        email,
        password,
        phone,
    }

    return axios.put(URL_BACKEND, data)
}

const DeleteUserAPI = (id) => {
    const URL_BACKEND = `/users/${id}`
    return axios.delete(URL_BACKEND)
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = '/users';
    return axios.get(URL_BACKEND)
}


export { CreateUserAPI, UpdateUserAPI, fetchAllUserAPI, DeleteUserAPI }
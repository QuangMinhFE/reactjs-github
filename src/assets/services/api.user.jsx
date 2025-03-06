import axios from "./axios.user.jsx";
const RegisterUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user/register';
    const data = { fullName, email, password, phone };
    return axios.post(URL_BACKEND, data)
}

const LoginUserAPI = (username, password) => {
    const URL_BACKEND = '/api/v1/auth/login';
    const data = { username, password };
    return axios.post(URL_BACKEND, data)
}

export { RegisterUserAPI, LoginUserAPI }
import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});


instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // debugger
    if (response.data && response?.data?.data) {
        return response.data;
    }
    return response;
}, function (error) {
    // debugger
    if (error.response && error?.response?.data) return error.response.data
    return Promise.reject(error);
});


export default instance
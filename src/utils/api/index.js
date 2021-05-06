import * as axios from "axios";


const baseURL = "https://swapi.dev/api/";

const baseAuthURL = "https://test-for-roman.herokuapp.com/api/auth/";

const instance = axios.create({baseURL});

export const userLogin = (data) => {
    return axios.post(`${baseAuthURL}login`, data)
};

export const register = ({formData}) => {
    return axios.post(`${baseAuthURL}register`, formData)
};

export const login = ({formData}) => {
    return instance.post(`${baseAuthURL}login`, formData);
};

export const getItemsInfo = ({resource, page}) => {
    return instance.get(`${resource}/?page=${page}`);
};

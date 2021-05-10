import * as axios from "axios";

const baseURL = "https://swapi.dev/api/";

const baseAuthURL = "https://test-for-roman.herokuapp.com/api/auth/";

const instance = axios.create({baseURL});

export const register = ({formData}) => axios.post(`${baseAuthURL}register`, formData)

export const login = ({formData}) => instance.post(`${baseAuthURL}login`, formData);

export const getItemsInfo = ({resource, page}) => instance.get(`${resource}/?page=${page}`);

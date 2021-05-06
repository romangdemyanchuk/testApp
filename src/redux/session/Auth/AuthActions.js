import {LOGIN_CREATOR, REGISTER_CREATOR} from "./AuthConstants";

export const loginCreator = (data) => ({ type: LOGIN_CREATOR});
export const registerCreator = () => ({ type: REGISTER_CREATOR});

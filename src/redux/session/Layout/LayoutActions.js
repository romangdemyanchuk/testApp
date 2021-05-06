import {ITEMS, RESOURCE, LOADING, GET_ITEMS_CREATOR} from "./LayoutConstants";


export const allItems = (data) => ({type: ITEMS, payload: data});
export const expectedResource = (data) => ({type: RESOURCE, payload: data});
export const loading = (data) => ({type: LOADING, payload: data});
export const all = () => ({type: GET_ITEMS_CREATOR});


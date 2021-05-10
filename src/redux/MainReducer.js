import {ITEMS, LOAD_MORE_ITEMS_BUTTON_IS_DISABLED, LOADING, MORE_ITEMS} from './Layout/LayoutConstants';

const initialState = {
    items: [],
    loadItems: [],
    isLoading: false,
    loadMoreItemsButtonIsDisabled: false
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
    case ITEMS:
        return {
            ...state,
            items: action.payload
        };
    case MORE_ITEMS:
        return {
            ...state,
            items: state.items.concat(action.payload)
        };
    case LOADING:
        return {
            ...state,
            isLoading: action.payload
        };
    case LOAD_MORE_ITEMS_BUTTON_IS_DISABLED:
        return {
            ...state,
            loadMoreItemsButtonIsDisabled: action.payload
        };

    default:
        return state;
    }
};
export default MainReducer;

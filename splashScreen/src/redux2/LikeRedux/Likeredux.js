// actionTypes.js
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';


// actions.js

export const addtoFavoirate = (item) => ({
    type: ADD_TO_FAVORITES,
    payload: item,
});

export const removeFromFavorites = (itemId) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: itemId,
});


// likesReducer.js

const initialState = {
    favorites: [],
};

const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default likesReducer;

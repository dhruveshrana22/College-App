// actionTypes.js
export const ADD_TO_CART = 'ADD_TO_CART';


// actions.js

export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: {
        ...item,
        quantity: 1, // Make sure quantity is a number
    },
});


// Add_to_cart.js
export const incrementItem = (itemId) => ({
    type: 'INCREMENT_ITEM',
    payload: { itemId },
});

export const decrementItem = (itemId) => ({
    type: 'DECREMENT_ITEM',
    payload: { itemId },
});

// ... other actions, reducers, etc.

// Add_to_cart.js
export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    payload: { itemId },
});









// cartReducer.js

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'INCREMENT_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.itemId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case 'DECREMENT_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.itemId && item.quantity > 0
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.itemId),
            };

        default:
            return state;
    }
};

export default cartReducer;

// saleActionTypes.js
export const ADD_SALE = 'ADD_SALE';

// saleActions.js

export const addSale = (saleData) => ({
  type: ADD_SALE,
  payload: saleData,
});

// saleReducer.js

const initialState = {
  sales: [],
};

const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload],
      };
    default:
      return state;
  }
};

export default saleReducer;

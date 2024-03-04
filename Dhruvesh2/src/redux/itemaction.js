// SaleItemActions.js

export const ADD_SALE_ITEM = 'ADD_SALE_ITEM';
export const CLEAR_SALE_ITEMS = 'CLEAR_SALE_ITEMS';

export const addSaleItem = (saleData) => ({
  type: ADD_SALE_ITEM,
  payload: saleData,
});

export const clearSaleItems = () => ({
  type: CLEAR_SALE_ITEMS,
});


// SaleItemReducer.js


const initialState = {
  saleItems: [],
};

const saleItemReducer = (state = initialState, action) => {
    console.log("Saleitem",action.payload)

  switch (action.type) {
    case ADD_SALE_ITEM:
      return {
        ...state,
        saleItems: [...state.saleItems, action.payload],
      };
    case CLEAR_SALE_ITEMS:
      return {
        ...state,
        saleItems: [],
      };
    default:
      return state;
  }
};

export default saleItemReducer;

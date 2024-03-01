// actionTypes.js
export const SET_BASIC_DETAILS = 'SET_BASIC_DETAILS';
export const SET_BUSINESS_DETAILS = 'SET_BUSINESS_DETAILS';
export const SET_ERRORS = 'SET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// actions.js

  
  export const setBasicDetails = (basicDetails) => ({
    type: SET_BASIC_DETAILS,
    payload: basicDetails,
  });
  
  export const setBusinessDetails = (businessDetails) => ({
    type: SET_BUSINESS_DETAILS,
    payload: businessDetails,
  });
  
  export const setErrors = (errors) => ({
    type: SET_ERRORS,
    payload: errors,
  });
  
  export const clearErrors = () => ({
    type: CLEAR_ERRORS,
  });
  


  // reducers.js
  const initialState = {
    basicDetails: {
      signature: '',
      businessName: '',
      GSTIN: '',
      email: '',
      businessAddress: '',
      description: '',
      pincode: '',
    },
    businessDetails: {},
    errors: {
      signature: '',
      businessName: '',
      GSTIN: '',
      email: '',
      businessAddress: '',
      description: '',
      pincode: '',
    },
  };
  
  const businessProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_BASIC_DETAILS:
        return {
          ...state,
          basicDetails: action.payload,
        };
      case SET_BUSINESS_DETAILS:
        return {
          ...state,
          businessDetails: action.payload,
        };
      case SET_ERRORS:
        return {
          ...state,
          errors: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          errors: initialState.errors,
        };
      default:
        return state;
    }
  };
  
  export default businessProfileReducer;
  
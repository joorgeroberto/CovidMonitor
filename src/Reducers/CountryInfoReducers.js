import {
  GET_COUNTRY_DATA,
  GET_COUNTRY_DATA_FAIL,
  GET_COUNTRY_DATA_SUCCESS,
} from '../Actions/types.js';

const INITIAL_STATE = {
  loading: false,
  error: false,
  countryData: null,
};

export default (state = INITIAL_STATE, action) => {
  
  console.log(action)
  switch (action.type) {
    case GET_COUNTRY_DATA: {
      return {
        ...state,
        error: false,
        loading: true,
      };
    }
    case GET_COUNTRY_DATA_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        countryData: action.payload.countryData,
      };
    }
    case GET_COUNTRY_DATA_FAIL: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default:
      return state;
  }
};

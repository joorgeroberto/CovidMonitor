import {
  GET_GLOBAL_DATA,
  GET_GLOBAL_DATA_FAIL,
  GET_GLOBAL_DATA_SUCCESS,
} from '../Actions/types.js';

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false,
  globalData: null,
  countriesData: null,
  firstTime: true,
};

export default (state = INITIAL_STATE, action) => {
  
  console.log(action)
  switch (action.type) {
    case GET_GLOBAL_DATA: {
      return {
        ...state,
        error: false,
        loading: true,
      };
    }
    case GET_GLOBAL_DATA_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        globalData: action.payload.globalData,
        countriesData: action.payload.countriesData,
        firstTime: false,
      };
    }
    case GET_GLOBAL_DATA_FAIL: {
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

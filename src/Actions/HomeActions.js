import {
  GET_GLOBAL_DATA,
  GET_GLOBAL_DATA_SUCCESS,
  GET_GLOBAL_DATA_FAIL,
} from './types.js';

import {ApiGlobal} from '../Config/Apis';
export const getData = () => {
  console.log('aqui')
  return(dispatch) => {
    dispatch({type: GET_GLOBAL_DATA});

    async function loadData() {
      await ApiGlobal.get('/summary', {})
        .then((res) => {
          console.log('res', res.data.Countries)
          dispatch({
            type: GET_GLOBAL_DATA_SUCCESS,
            payload: {
              globalData: res.data.Global,
              countriesData: res.data.Countries,
            },
          });
        })
        .catch((error) => {
          console.error(error);
          dispatch({type: GET_GLOBAL_DATA_FAIL});
        });
    }

    loadData();
  }
};

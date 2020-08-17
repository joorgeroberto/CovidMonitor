import {
  GET_COUNTRY_DATA,
  GET_COUNTRY_DATA_SUCCESS,
  GET_COUNTRY_DATA_FAIL,
} from './types.js';

import {ApiGlobal} from '../Config/Apis';
export const getCountryData = ({country}) => {
  console.log('aqui')
  return (dispatch) => {
    //dispatch({type: GET_COUNTRY_DATA});

    async function loadData() {
      await ApiGlobal.get(
        `/dayone/country/${country}/status/confirmed/live`,
        {},
      )
        .then((res) => {
          console.log('res', res)
          // dispatch({
          //   type: GET_COUNTRY_DATA_SUCCESS,
          //   payload: {
          //     countryData: res.data.Countries,
          //   },
          // });
        })
        .catch((error) => {
          console.error(error);
          //dispatch({type: GET_COUNTRY_DATA_FAIL});
        });
    }

    loadData();
  }
};

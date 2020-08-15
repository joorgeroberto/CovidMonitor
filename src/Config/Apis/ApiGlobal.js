import {create} from 'apisauce';

const BASE_URL_GLOBAL = 'http://api.covid19api.com';

const ApiGlobal = create({
  baseURL: `${BASE_URL_GLOBAL}`,

  timeout: 30000,
});

export {ApiGlobal};

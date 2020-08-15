import {create} from 'apisauce';

const BASE_URL_BRAZIL = 'https://covid19-brazil-api.now.sh';

const ApiBrazil = create({
  baseURL: `${BASE_URL_BRAZIL}`,
  timeout: 30000,
});

export {ApiBrazil};

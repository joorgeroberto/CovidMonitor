import {combineReducers} from 'redux';
import HomeReducers from './HomeReducers';
import CountryInfoReducers from './CountryInfoReducers';

export default combineReducers({
  home: HomeReducers,
  countryInfo: CountryInfoReducers,
});

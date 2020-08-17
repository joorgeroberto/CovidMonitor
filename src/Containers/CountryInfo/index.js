import React, { useEffect } from 'react';
import {View} from 'react-native';

import {getCountryData} from '../../Actions';
import {connect} from 'react-redux';

// import { Container } from './styles';

const CountryInfo = ({navigation, countryData, getCountryData}) => {
  const {initialCountryData} = navigation.state.params;
  useEffect(() => {
    console.log(initialCountryData)
    getCountryData({country: initialCountryData.Slug})
  }, [initialCountryData]);
  return <View />;
}


const mapStateToProps = (state) => {
  const {countryData} = state.countryInfo;
  return {countryData};
};

export default connect(mapStateToProps, {getCountryData})(CountryInfo);
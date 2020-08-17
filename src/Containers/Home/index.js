import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {styles} from './styles';
import {GlobalHeader} from '../../Components';
import CountriesList from '../CountriesList';
import {countries} from '../../Config/Utils';

import {getData} from '../../Actions';
import {connect} from 'react-redux';

const Home = ({
  navigation,
  getData,
  firstTime,
  globalData,
  countriesData,
  loading,
}) => {
  // const global = {
  //   "NewConfirmed": 100282,
  //   "TotalConfirmed": 1162857,
  //   "NewDeaths": 5658,
  //   "TotalDeaths": 63263,
  //   "NewRecovered": 15405,
  //   "TotalRecovered": 230845
  // };
  
  useEffect(() => {
    if (firstTime) getData();
    //console.log(firstTime, globalData, countriesData);
  }, [firstTime]);

  return (
    <View style={styles.Container}>
    {/* {loading || global === null || countries === null ? */}
      {loading || globalData === null || countriesData === null ?
        <Text>Loading...</Text>
        :
        <>
          <GlobalHeader data={globalData} />
          <CountriesList navigation={navigation} data={countriesData} />
        </>
      }
    </View>
  );
}

const mapStateToProps = (state) => {
  const {data, firstTime, globalData, countriesData, loading} = state.home;
  return {data, firstTime, globalData, countriesData, loading};
};

export default connect(mapStateToProps, {getData})(Home);

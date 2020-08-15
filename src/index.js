/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  LogBox,
} from 'react-native';
import Routes from './Config/Routes';
import reducers from './Reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import 'react-native-gesture-handler';

LogBox.ignoreLogs([
  'Warning',
]);

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
});

export default App;

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from '../Containers/Home';
import CountryInfo from '../Containers/CountryInfo';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home,
      CountryInfo,
    },
    {
      initialRouteName: 'Home',
      unmountInactiveRoutes: true,
    },
  ),
);

export default Routes;

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from '../Containers/Home';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home,
    },
    {
      initialRouteName: 'Home',
      unmountInactiveRoutes: true,
    },
  ),
);

export default Routes;

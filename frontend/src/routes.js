import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'

export default createAppContainer(createSwitchNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
  }
));

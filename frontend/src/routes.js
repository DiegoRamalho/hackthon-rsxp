import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'
import Step2 from './screens/Step2'

export default createAppContainer(createSwitchNavigator(
  {
    Home
    Step2
  },
  {
    initialRouteName: 'Home',
  }
));

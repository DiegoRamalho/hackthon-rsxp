import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'
import Step1 from './screens/Step1'
import Step2 from './screens/Step2'
import Timeline from './screens/Timeline'

export default createAppContainer(createSwitchNavigator(
  {
    Home,
    Step1,
    Step2,
    Timeline,
  },
  {
    initialRouteName: 'Home',
  }
));

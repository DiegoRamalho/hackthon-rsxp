import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'
import Step1 from './screens/Step1'
import Step2 from './screens/Step2'
import Step3 from './screens/Step3'
import Timeline from './screens/Timeline'
import ErrorPage from './screens/ErrorPage'

export default createAppContainer(createSwitchNavigator(
  {
    Home,
    Step1,
    Step2,
    Step3,
    Timeline,
    ErrorPage,
  },
  {
    initialRouteName: 'Home',
  }
));

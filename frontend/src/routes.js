import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home'
import Step1 from './screens/Step1'
import Step2 from './screens/Step2'
import Step3 from './screens/Step3'
import ErrorPage from './screens/ErrorPage'
import Timeline from './screens/Timeline'
import CompanyList from './screens/CompanyList'
import CompanyDetail from './screens/CompanyDetail'

const Company = createStackNavigator({
  CompanyList: {
    screen: CompanyList,
    navigationOptions: {
      title: 'Empresas'
    }
  },
  CompanyDetail,
}, {
  initialRouteName: 'CompanyList',
  headerBackTitleVisible: false
});

export default createAppContainer(createSwitchNavigator(
  {
    Home,
    Step1,
    Step2,
    Step3,
    ErrorPage,
    Timeline,
    Company
  },
  {
    initialRouteName: 'Home',
  }
));

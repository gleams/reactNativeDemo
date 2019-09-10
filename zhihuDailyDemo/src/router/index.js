import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../page/HomeScreen';
import DrawerScreen from '../page/DrawerScreen';
import DetailScreen from '../page/DetailScreen';

const mainNavigation = createStackNavigator({
    HomeScreen,
    DetailScreen
});


const drawerNavigation = createDrawerNavigator({
    main: mainNavigation,
    drawer: DrawerScreen,
},{
    contentComponent:DrawerScreen,
});

export default createAppContainer(drawerNavigation);


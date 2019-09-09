/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigation from './App';
// import {name as appName} from './app.json';
import {registerScreens} from './Src/Navigation';

registerScreens();
const App = new AppNavigation();

AppRegistry.registerComponent('rnnintegrationv3', () => App);

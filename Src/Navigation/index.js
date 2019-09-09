import {Navigation} from 'react-native-navigation';
import Login from '../Screens/Login/';

export function registerScreens() {
  Navigation.registerComponent('Login', () => Login);
}

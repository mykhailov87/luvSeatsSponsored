// Core
import { AppRegistry } from 'react-native';
// App
import App from './App';
// Data
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);

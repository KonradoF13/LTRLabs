/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/app';
import {name as appName} from './app.json';

global.WebSocket = global.WebSocket || require('ws');
AppRegistry.registerComponent(appName, () => App);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Navigation} from './node_modules/react-native-navigation';

const App = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'AURORA',
          children: [
            {
              component: {
                name: 'Login',
                options: {
                  statusBar: {
                    visible: true,
                    style: 'dark',
                    backgroundColor: 'transparent',
                  },
                  largeTitle: {visible: false},
                  topBar: {
                    drawBehind: true,
                    visible: false,
                    animate: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};

export default App;

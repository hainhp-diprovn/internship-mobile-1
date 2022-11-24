
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BT1 from './src/thanh/screens/BT1'
import BT2 from './src/thanh/screens/BT2'
import BT3 from './src/thanh/screens/BT3'
import BT4 from './src/thanh/screens/BT4'
import BT5 from './src/thanh/screens/BT5'

const App = () => {


  return (
    // <BT1 />
    // <BT2 />
    // <BT3 />
    // <BT4 />
    <BT5 />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

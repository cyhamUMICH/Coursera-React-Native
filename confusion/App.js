import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Platform } from 'react-native';
import Main from './components/MainComponent';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
};

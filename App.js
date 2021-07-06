import React from 'react';
import MainStackNavigator from './src/navigation/MainStackNavigator'
import ConfigureStore from './src/store/ConfigureStore';

export default function App() {
  return (
    <ConfigureStore>
      <MainStackNavigator></MainStackNavigator>
    </ConfigureStore>
  );
}
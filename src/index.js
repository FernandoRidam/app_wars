import React from 'react';

import { YellowBox } from 'react-native';

import FlashMessage from "react-native-flash-message";

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
]);

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />

      <FlashMessage
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 55,
        }}
        duration={ 2500 }
        position="bottom"
      />
    </>
  );
};

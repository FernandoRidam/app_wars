import React from 'react';

import {
  View,
  ActivityIndicator,
} from 'react-native';

import Styles from './styles';

export function Loading() {
  return (
    <View style={ Styles.loadView }>
      <ActivityIndicator size={ 80 } color="#D9D9D9" />
    </View>
  );
};

import React from 'react';

import {
  TouchableOpacity,
  Text,
} from 'react-native';

import Styles from './styles';

export function Card({ text, openDetails }) {
  return (
    <TouchableOpacity
      activeOpacity={ .6 }
      style={ Styles.card }
      onPress={ openDetails }
    >
      <Text style={ Styles.text }>{ text }</Text>
    </TouchableOpacity>
  );
};

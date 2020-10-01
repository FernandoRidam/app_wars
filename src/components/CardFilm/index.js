import React from 'react';

import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import logo from '../../assets/icon.png';

import Styles from './styles';

export function CardFilms({ title, ep }) {
  return (
    <TouchableOpacity
      activeOpacity={ .6 }
      style={ Styles.card }
    >
      <Image source={ logo } style={ Styles.backgroundImage }/>

      <Text style={ Styles.title }>{ title }</Text>

      <View style={ Styles.epView }>
        <Text style={ Styles.ep }>Ep. { ep }</Text>
      </View>
    </TouchableOpacity>
  );
};

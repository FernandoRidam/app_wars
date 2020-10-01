import React from 'react';

import { format } from 'date-fns'

import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import logo from '../../assets/icon.png';

import Styles from './styles';

export function CardFilms({ title, ep, release, producer, director }) {
  return (
    <TouchableOpacity
      activeOpacity={ .6 }
      style={ Styles.card }
    >
      <Image source={ logo } style={ Styles.backgroundImage }/>

      <Text style={ Styles.title }>{ title }</Text>

      <View style={ Styles.information }>
        <Text style={ Styles.label }>Producer</Text>
        <Text style={ Styles.info }>{ producer }</Text>

        <Text style={ Styles.label }>Director</Text>
        <Text style={ Styles.info }>{ director }</Text>
      </View>

      <View style={ Styles.epView }>
        <Text style={ Styles.ep }>Ep. { ep }</Text>
      </View>

      <View style={ Styles.releaseView }>
        <Text style={ Styles.release }>Release date</Text>

        <Text style={ Styles.release }>{ format( new Date( release ), 'MMMM dd, yyyy')}</Text>
      </View>
    </TouchableOpacity>
  );
};

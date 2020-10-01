import React, { useState, useEffect } from 'react';

import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import {
  getFilms,
} from '../../services';

import {
  CardFilms,
} from '../../components';

import Styles from './styles';

export function Films() {
  const isFocused = useIsFocused();

  const [ films, setFilms ] = useState([]);

  async function startGetFilms() {
    const { success, message, films } = await getFilms();

    if( success ) {
      setFilms( films );
    } else {
      // alertar erro...
    }
  };

  // useEffect(() => {
  //   if( isFocused )
  //     startGetFilms();
  // }, [ isFocused ]);

  return (
    <KeyboardAvoidingView style={ Styles.container }>
      <ScrollView contentContainerStyle={ Styles.scrollView }>
        {
          films.length !== 0
            ? films.map( film =>
              <CardFilms
                key={ film.episode_id }
                title={ film.title }
                ep={ film.episode_id }
              />
            )
            : <View style={ Styles.emptyView }>
                <Text style={ Styles.empty }>Empty...</Text>
              </View>
        }
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

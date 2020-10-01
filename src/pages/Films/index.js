import React, { useState, useEffect } from 'react';

import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import {
  getFilms,
} from '../../services';

import {
  CardFilms, Loading,
} from '../../components';

import Styles from './styles';

export function Films() {
  const isFocused = useIsFocused();

  const [ loading, setLoading ] = useState( false );

  const [ films, setFilms ] = useState([]);

  async function startGetFilms() {
    setLoading( true );

    const { success, message, films } = await getFilms();

    if( success ) {
      setFilms( films );
    } else {
      // alertar erro...
    }

    setLoading( false );
  };

  useEffect(() => {
    if( isFocused )
      startGetFilms();
  }, [ isFocused ]);

  return (
    <KeyboardAvoidingView style={ Styles.container }>
      {
        !loading
          ? films.length !== 0
              ? <ScrollView contentContainerStyle={ Styles.scrollView }>
                  {
                    films.map( film =>
                      <CardFilms
                        key={ film?.episode_id }
                        title={ film?.title }
                        ep={ film?.episode_id }
                        release={ film?.release_date }
                        director={ film?.director }
                        producer={ film?.producer }
                      />
                    )
                  }
                </ScrollView>
              : <View style={ Styles.emptyView }>
                  <Text style={ Styles.empty }>Empty...</Text>
                </View>
          : <View style={ Styles.emptyView }>
              <ActivityIndicator size={ 80 } color="#D9D9D9" />
            </View>
      }
    </KeyboardAvoidingView>
  );
};

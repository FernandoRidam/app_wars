import React, { useState, useEffect } from 'react';

import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {
  getFilms,
} from '../../services';

import {
  CardFilms, Loading,
} from '../../components';

import Styles from './styles';

export function Films({ navigation }) {
  const [ loading, setLoading ] = useState( false );

  const [ films, setFilms ] = useState([]);

  function handleNavigatin( id ) {
    navigation.navigate('FilmDetails', { id, type: 'films'});
  };

  async function startGetFilms() {
    setLoading( true );

    const { success, message, films } = await getFilms();

    if( success ) {
      setFilms( films );
    } else {
      showMessage({
        message: message,
        type: 'danger',
        backgroundColor: 'rgba(217, 217, 217, .6)',
        color: '#FFF',
        icon: 'danger',
        titleStyle: {
          fontSize: 16,
        }
      });
    }

    setLoading( false );
  };

  useEffect(() => {
    startGetFilms();
  }, []);

  return (
    <KeyboardAvoidingView style={ Styles.container }>
      {
        !loading
          ? films.length !== 0
              ? <ScrollView contentContainerStyle={ Styles.scrollView }>
                  {
                    films.map(( film, index ) =>
                      <CardFilms
                        key={ film?.episode_id }
                        title={ film?.title }
                        ep={ film?.episode_id }
                        release={ film?.release_date }
                        director={ film?.director }
                        producer={ film?.producer }
                        openDetails={() => handleNavigatin( film.url.substr( -2, 1 ))}
                      />
                    )
                  }
                </ScrollView>
              : <View style={ Styles.emptyView }>
                  <Text style={ Styles.empty }>Empty...</Text>
                </View>
          : <Loading />
      }
    </KeyboardAvoidingView>
  );
};

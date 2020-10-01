import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';

import {
  KeyboardAvoidingView,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { showMessage } from "react-native-flash-message";

import {
  Card,
  List,
  Loading,
} from '../../components';

import {
  getFilm,
} from '../../services';

import Styles from './styles';

export function Details({ navigation, route }) {
  const { id } = route.params;

  const [ loading, setLoading ] = useState( false );

  const [ film, setFilm ] = useState({});
  const [ producers, setProducers ] = useState([]);
  const [ release, setRelease ] = useState([]);

  async function startGetFilm() {
    setLoading( true );

    const { success, message, film } = await getFilm( id );

    if( success ) {
      setFilm( film );
      setProducers( film?.producer.split(', '));
      setRelease( format( new Date( film?.release_date ), 'MMMM dd, yyyy'));
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
    startGetFilm();
  }, [ id ]);

  return (
    <KeyboardAvoidingView style={ Styles.container }>
      {
        !loading
          ? <ScrollView contentContainerStyle={ Styles.scrollView }>
              <Text style={ Styles.title }>{ film?.title }</Text>

              <View style={ Styles.information }>
                <View style={ Styles.opening }>
                  <Text style={ Styles.label }>Opening Crawl</Text>

                  <Text style={ Styles.opening }>{ film?.opening_crawl }</Text>
                </View>

                <View style={ Styles.info }>
                  <Text style={ Styles.label }>Episode { film?.episode_id }</Text>

                  <Text style={ Styles.label }>Release Date</Text>
                  <Text style={ Styles.infoText }>{ release }</Text>

                  <Text style={ Styles.label }>Director</Text>
                  <Text style={ Styles.infoText }>{ film?.director }</Text>

                  <Text style={ Styles.label }>{ producers.length > 1 ? 'Producers' : 'Producer'}</Text>
                  {
                    producers.map( item => <Text key={ item } style={ Styles.infoText }>{ item }</Text>)
                  }
                </View>
              </View>

              <View style={ Styles.divider } />

              <List
                title="Characters"
                list={ film?.characters }
                type="people"
              />

              <List
                title="Planets"
                list={ film?.planets }
                type="planets"
              />

              <List
                title="Starships"
                list={ film?.starships }
                type="starships"
              />

              <List
                title="Vehicles"
                list={ film?.vehicles }
                type="vehicles"
              />

              <List
                title="Species"
                list={ film?.species }
                type="species"
              />
            </ScrollView>
          : <Loading />
      }
    </KeyboardAvoidingView>
  );
};

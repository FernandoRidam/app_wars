import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';

import {
  KeyboardAvoidingView,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import { showMessage } from "react-native-flash-message";

import {
  Card,
  List,
  Loading,
} from '../../components';

import {
  getDetails,
} from '../../services';

import Styles from './styles';

export function FilmDetails({ navigation, route }) {
  const { id, type, item } = route.params;

  const isFocused = useIsFocused();

  const [ loading, setLoading ] = useState( false );

  const [ film, setFilm ] = useState({});
  const [ producers, setProducers ] = useState([]);
  const [ release, setRelease ] = useState([]);

  function handleNavigation(route, item ) {
    navigation.navigate( route, { item });
  };

  async function startGetDetails() {
    setLoading( true );

    const { success, message, data } = await getDetails( id, type );

    if( success ) {
      setFilm( data );
      setProducers( data?.producer.split(', '));
      setRelease( format( new Date( data?.release_date ), 'MMMM dd, yyyy'));
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
    setFilm( item );
  }, [ item ]);

  useEffect(() => {
    if( isFocused )
      startGetDetails();
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

              {
                film?.characters?.length > 0
                  ? <List
                      title="Characters"
                      list={ film?.characters }
                      type="people"
                      handleNavigation={ handleNavigation }
                      route="CharacterDetails"
                    />
                  : <></>
              }

              {
                film?.planets?.length > 0
                  ? <List
                      title="Planets"
                      list={ film?.planets }
                      type="planets"
                      handleNavigation={ handleNavigation }
                      route="PlanetDetails"
                    />
                  : <></>
              }

              {
                film?.starships?.length > 0
                  ? <List
                      title="Starships"
                      list={ film?.starships }
                      type="starships"
                      handleNavigation={ handleNavigation }
                      route="StarshipDetails"
                    />
                  : <></>
              }

              {
                film?.vehicles?.length > 0
                  ? <List
                      title="Vehicles"
                      list={ film?.vehicles }
                      type="vehicles"
                      handleNavigation={ handleNavigation }
                      route="VehicleDetails"
                    />
                  : <></>
              }

              {
                film?.species?.length > 0
                  ? <List
                      title="Species"
                      list={ film?.species }
                      type="species"
                      handleNavigation={ handleNavigation }
                      route="SpecieDetails"
                    />
                  : <></>
              }
            </ScrollView>
          : <Loading />
      }
    </KeyboardAvoidingView>
  );
};

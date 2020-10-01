import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {
  getItemList,
} from '../../services';

import {
  Card,
} from '../index';

import Styles from './styles';

export function List({ title, list, type }) {
  const [ loading, setLoading ] = useState( false );

  const [ characters, setCharacters ] = useState([]);

  async function startGetCharacters() {
    setLoading( true );

    const people = await Promise.all(
      list.map( async item => {
        const id = item.replace(`http://swapi.dev/api/${ type }/`, '').replace('/', '');

        const { success, data } = await getItemList( id, type );

        if( success ) {
          return data;
        } else {
          return false;
        }
      })
    );

    setCharacters([ ...characters, ...people ]);

    setLoading( false );
  };

  useEffect(() => {
    if( list?.length > 0 && characters.length === 0 )
      startGetCharacters();
  }, [ list ]);

  return (
    <SafeAreaView style={ Styles.listView }>
      <Text style={ Styles.title }>{ title }</Text>

      {
        !loading
          ? <FlatList
              contentContainerStyle={ Styles.flatList }
              data={ characters }
              keyExtractor={ item => item.name }
              showsHorizontalScrollIndicator={ false }
              horizontal
              renderItem={({ item }) => {
                return (
                  <Card
                    text={ item?.name }
                  />
                );
              }}
            />
          : <ActivityIndicator size={ 45 } color="#D9D9D9" />
      }
    </SafeAreaView>
  );
};

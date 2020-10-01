import React, { useState, useEffect } from 'react';

import {
  KeyboardAvoidingView,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {
  List,
  Loading,
} from '../../components';

import Styles from  './styles';

export function CharacterDetails({ navigation, route }) {
  const { item } = route.params;

  const [ loading, setLoading ] = useState( false );

  const [ character, setCharacter ] = useState({});

  function handleNavigation(route, item ) {
    navigation.navigate( route, { item });
  };

  useEffect(() => {
    setCharacter( item );
  }, [ item ]);

  return (
    <KeyboardAvoidingView style={ Styles.container }>
      {
        !loading
          ? <ScrollView contentContainerStyle={ Styles.scrollView }>
              <Text style={ Styles.title }>{ character?.name }</Text>

              <View style={ Styles.information }>
                <View style={ Styles.info }>
                  <Text style={ Styles.label }>Height</Text>
                  <Text style={ Styles.infoText }>{ character?.height } cm</Text>

                  <Text style={ Styles.label }>Mass</Text>
                  <Text style={ Styles.infoText }>{ character?.mass } kg</Text>

                  <Text style={ Styles.label }>Hair Color</Text>
                  <Text style={ Styles.infoText }>{ character?.hair_color }</Text>
                </View>

                <View style={ Styles.info }>
                  <Text style={ Styles.label }>Skin Color</Text>
                  <Text style={ Styles.infoText }>{ character?.skin_color }</Text>

                  <Text style={ Styles.label }>Eye Color</Text>
                  <Text style={ Styles.infoText }>{ character?.eye_color }</Text>
                </View>

                <View style={ Styles.info }>
                  <Text style={ Styles.label }>Birth Year</Text>
                  <Text style={ Styles.infoText }>{ character?.birth_year }</Text>

                  <Text style={ Styles.label }>Gender</Text>
                  <Text style={ Styles.infoText }>{ character?.gender }</Text>
                </View>
              </View>

              <View style={ Styles.divider } />

              {
                character?.films?.length > 0
                  ? <List
                      title="Films"
                      list={ character?.films }
                      type="films"
                      handleNavigation={ handleNavigation }
                      route="FilmDetails"
                    />
                  : <></>
              }

              {
                character?.species?.length > 0
                  ? <List
                      title="Species"
                      list={ character?.species }
                      type="species"
                      handleNavigation={ handleNavigation }
                      route="SpecieDetails"
                    />
                  : <></>
              }

              {
                character?.vehicles?.length > 0
                  ? <List
                      title="Vehicles"
                      list={ character?.vehicles }
                      type="vehicles"
                      handleNavigation={ handleNavigation }
                      route="VehicleDetails"
                    />
                  : <></>
              }

              {
                character?.starships?.length > 0
                  ? <List
                      title="Starships"
                      list={ character?.starships }
                      type="starships"
                      handleNavigation={ handleNavigation }
                      route="StarshipsDetails"
                    />
                  : <></>
              }
            </ScrollView>
          : <Loading />
      }
    </KeyboardAvoidingView>
  );
};

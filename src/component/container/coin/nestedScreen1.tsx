import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {nestescreen1RouterProps} from '../../../types';

export const NestedScreen1 = () : JSX.Element => {
  const route = useRoute<nestescreen1RouterProps>();
  const title = route.params.title;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

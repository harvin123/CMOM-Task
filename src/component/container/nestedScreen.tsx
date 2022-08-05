import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {nestescreenRouterProps} from '../../types';

export const NestedScreen = () : JSX.Element => {
  const route = useRoute<nestescreenRouterProps>();
  const title = route.params.title;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

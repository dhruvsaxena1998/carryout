import React from 'react';
import {View, StatusBar} from 'react-native';

export default ({children}) => {
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} />
      {children}
    </View>
  );
};

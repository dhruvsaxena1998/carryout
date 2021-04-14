import React from 'react';
import {View, StatusBar} from 'react-native';
import {Colors} from '@utils/Theme';

export default ({style, children}) => {
  return (
    <View style={style}>
      <StatusBar backgroundColor={Colors.black} />
      {children}
    </View>
  );
};

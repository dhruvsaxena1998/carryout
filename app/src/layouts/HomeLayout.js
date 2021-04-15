import React from 'react';
import {Dimensions, StatusBar, SafeAreaView} from 'react-native';
import {Div} from 'react-native-magnus';
import {Colors} from '@utils/Theme';

// Components
import Header from '@components/HomeHeader';

const {height} = Dimensions.get('window');
export default ({style, children}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.black} />
      <Div bg="black" h={height} style={{...style}}>
        <Header />
        {children}
      </Div>
    </SafeAreaView>
  );
};

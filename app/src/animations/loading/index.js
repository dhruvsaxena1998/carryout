import React from 'react';
import {StyleSheet} from 'react-native';
import {Div} from 'react-native-magnus';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  loading: {
    height: 100,
    width: 100,
  },
});

export default () => {
  return (
    <Div
      bg="background"
      w={'100%'}
      h={'100%'}
      justifyContent="center"
      alignItems="center">
      <LottieView
        source={require('./loading.json')}
        autoPlay
        loop
        style={styles.loading}
      />
    </Div>
  );
};

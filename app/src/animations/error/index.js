import React from 'react';
import {StyleSheet} from 'react-native';
import {Div, Text} from 'react-native-magnus';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  error: {
    height: 200,
    width: 200,
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
        source={require('./error.json')}
        autoPlay
        loop
        style={styles.error}
      />
      <Text color="danger" fontSize="4xl" fontWeight="bold">
        Something went wrong!
      </Text>
    </Div>
  );
};

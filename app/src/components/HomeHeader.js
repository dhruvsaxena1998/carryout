import React from 'react';
import {Pressable} from 'react-native';
import {Div, Text} from 'react-native-magnus';

export default () => {
  const onPressHandler = () => {
    console.log('HomeHeader -> onPressHandler');
  };
  return (
    <Div row m="xl" mt={40} justifyContent="space-between">
      <Div flex={1} flexWrap="wrap">
        <Text color="white" fontWeight="bold" fontSize="6xl">
          Welcome Dhruv,
        </Text>
        <Text color="light" fontWeight="bold" fontSize="lg">
          Hope you are in good mood of ordering...
        </Text>
      </Div>
      <Pressable onPress={onPressHandler}>
        <Div
          w={70}
          h={70}
          rounded={35}
          bgImg={{uri: 'https://i.imgur.com/Va6EpGY.jpg'}}
          bgMode="cover"
          shadow="2xl"
          borderColor="accent"
        />
      </Pressable>
    </Div>
  );
};

import React from 'react';
import {Pressable} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

import Strings from '@common/strings';

export default () => {
  const onPressHandler = () => {
    console.log('HomeHeader -> onPressHandler');
  };
  return (
    <Div row my={30} justifyContent="space-between">
      <Div>
        <Text fontWeight="bold" color="white" fontSize={28}>
          {Strings.greeting} Dhruv,
        </Text>
        <Text fontWeight="500" color="light" fontSize="lg">
          {Strings.welcomeLine}
        </Text>
      </Div>
      <Pressable onPress={onPressHandler}>
        <Div w={70} h={70} rounded={35} borderColor="dark" borderWidth={2}>
          <Image
            h={65}
            w={65}
            rounded="circle"
            source={{uri: 'https://i.imgur.com/Va6EpGY.jpg'}}
          />
        </Div>
      </Pressable>
    </Div>
  );
};

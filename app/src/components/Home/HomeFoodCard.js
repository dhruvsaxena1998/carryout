import React from 'react';
import {Pressable} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';

// Components
import UIPrice from '@components/UI/UiPrice';

export default ({item, index, style, onPress, ...rest}) => {
  return (
    <Pressable onPress={onPress}>
      <Div
        row
        my={10}
        p={20}
        bg="dark"
        rounded="xl"
        shadow="xl"
        justifyContent="space-between"
        alignItems="stretch">
        <Div flex={1} justifyContent="space-between">
          <Div>
            <Text fontSize="4xl" color="white" fontWeight="bold">
              Thali 1
            </Text>
            <Text fontSize="lg" color="light" mr={10}>
              Mix daal and vegetable with rice and 6 chapatis
            </Text>
          </Div>
          <UIPrice w={100} />
        </Div>
        <Div bg="dark" ml={10} rounded="circle" shadow="md">
          <Image
            h={170}
            w={170}
            rounded="circle"
            source={{uri: 'https://i.imgur.com/QDjtvYA.jpg'}}
          />
        </Div>
      </Div>
    </Pressable>
  );
};

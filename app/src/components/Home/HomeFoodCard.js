import React from 'react';
import {Pressable} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';

// Helpers
import {baseURL} from '@helpers/constants';

// Components
import UIPrice from '@components/UI/UiPrice';

/**
 * @param {import('@src/@types/Menu').Menu} item
 */
export default ({item, index, style, onPress, ...rest}) => {
  return (
    <Pressable onPress={onPress}>
      <Div
        row
        my={10}
        p={20}
        bg="dark"
        rounded="xl"
        shadow="sm"
        justifyContent="space-between"
        alignItems="stretch">
        <Div flex={1} justifyContent="space-between">
          <Div>
            <Text fontSize="4xl" color="white" fontWeight="bold">
              {item.name}
            </Text>
            <Text fontSize="lg" color="light" mr={10}>
              {item.description}
            </Text>
          </Div>
          <UIPrice w={100} price={item.price} />
        </Div>
        <Div bg="dark" ml={10} rounded="circle" shadow="md">
          <Image
            h={170}
            w={170}
            rounded="circle"
            source={{uri: baseURL + item.image.url}}
          />
        </Div>
      </Div>
    </Pressable>
  );
};

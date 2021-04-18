import React from 'react';
import {Pressable} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';

// Helpers
import {baseURL} from '@helpers/constants';

// Components
import UIPrice from '@components/UI/UiPrice';

export default ({item, index, style, onPress, ...rest}) => {
  const handleOnPress = () => {
    onPress(index);
  };
  return (
    <Pressable onPress={handleOnPress}>
      <Div
        row
        my={10}
        p={20}
        bg="secondary"
        rounded="xl"
        shadow="sm"
        justifyContent="space-between"
        alignItems="stretch">
        <Div flex={1} justifyContent="space-between">
          <Div>
            <Text fontSize="4xl" color="foreground" fontWeight="bold">
              {item.name}
            </Text>
            <Text fontSize="lg" color="foreground" mr={10} numberOfLines={2}>
              {item.description}
            </Text>
          </Div>
          <UIPrice w={100} price={item.price} />
        </Div>
        <Div bg="secondary" ml={10} rounded="circle">
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

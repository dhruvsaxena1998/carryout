import React from 'react';
import {Pressable} from 'react-native';
import {Div, Text} from 'react-native-magnus';

export default ({item, index, style, onPress, ...rest}) => {
  return (
    <Div mr={10} py={5} {...rest}>
      <Pressable onPress={onPress}>
        <Div
          p={10}
          rounded="xl"
          bg="secondary"
          justifyContent="center"
          shadow="sm"
          style={style}>
          <Text px={10} fontSize="lg" fontWeight="bold" color="foreground">
            {item.label}
          </Text>
        </Div>
      </Pressable>
    </Div>
  );
};

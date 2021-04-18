import React from 'react';
import {Button, Div, Text, Icon} from 'react-native-magnus';

export default ({item, index, slug, onPress}) => {
  const handleOnMinusPress = () => {
    onPress(slug, index, 'minus');
  };
  return (
    <Div
      bg="secondary"
      row
      mt={5}
      mb={15}
      p={15}
      rounded={15}
      alignItems="center">
      <Div flex={1}>
        <Text color="foreground" fontSize="xl" fontWeight="700">
          Mix Daal
        </Text>
        <Text color="accent" fontSize="md">
          20/p
        </Text>
      </Div>
      <Div
        row
        w={150}
        p="md"
        alignItems="center"
        justifyContent="space-between"
        rounded="xl"
        bg="background">
        <Button bg="secondary" rounded="md">
          <Icon name="minus" fontFamily="Feather" />
        </Button>
        <Text color="accent" fontSize="xl" fontWeight="bold">
          10
        </Text>
        <Button bg="secondary" rounded="md">
          <Icon name="plus" fontFamily="Feather" />
        </Button>
      </Div>
    </Div>
  );
};

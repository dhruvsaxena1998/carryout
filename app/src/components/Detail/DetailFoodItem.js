import React from 'react';
import {Button, Div, Text, Icon} from 'react-native-magnus';

export default ({item, slug, index, onPress}) => {
  const handleOnMinusPress = () => {
    onPress({which: index, what: 'minus', where: slug});
  };
  const handleOnAddPress = () => {
    onPress({which: index, what: 'add', where: slug});
  };
  return (
    <Div
      bg="secondary"
      row
      mt={5}
      mb={15}
      px={15}
      py={10}
      rounded={15}
      alignItems="center">
      <Div flex={1}>
        <Text color="foreground" fontSize="xl" fontWeight="700">
          {item.name}
        </Text>
        <Text color="accent" fontSize="md" fontWeight="700">
          ₹ {item.price}/p
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
        <Button bg="secondary" rounded="md" onPress={handleOnMinusPress}>
          <Icon name="minus" fontFamily="Feather" />
        </Button>
        <Text color="accent" fontSize="xl" fontWeight="bold">
          {item.currentQty}
        </Text>
        <Button bg="secondary" rounded="md" onPress={handleOnAddPress}>
          <Icon name="plus" fontFamily="Feather" />
        </Button>
      </Div>
    </Div>
  );
};

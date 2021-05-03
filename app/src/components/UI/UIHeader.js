import React from 'react';
import {Header, Button, Icon, Text} from 'react-native-magnus';

export default ({goBack, label}) => {
  return (
    <Header
      p="sm"
      h={10}
      bg="background"
      alignment="center"
      prefix={
        <Button bg="transparent" onPress={goBack}>
          <Icon
            name="arrow-left"
            color="foreground"
            fontFamily="Feather"
            fontSize="2xl"
          />
        </Button>
      }>
      <Text
        color="foreground"
        fontSize="2xl"
        fontWeight="bold"
        letterSpacing={2}>
        {label}
      </Text>
    </Header>
  );
};

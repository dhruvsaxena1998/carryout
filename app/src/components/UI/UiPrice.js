import React from 'react';
import {Badge, Div, Text} from 'react-native-magnus';

const UIPrice = ({price, ...rest}) => (
  <Div
    bg="accent"
    rounded="xl"
    p={10}
    alignItems="center"
    justifyContent="center"
    {...rest}>
    <Text color="dark" fontSize="xl" px={10} fontWeight="bold">
      ₹{price}
    </Text>
  </Div>
);

export default ({badge, price, ...rest}) => {
  return (
    <>
      {badge ? (
        <Badge bg="red500" right={-5} top={-5} h={20} w={20}>
          <UIPrice price={price} {...rest} />
        </Badge>
      ) : (
        <UIPrice price={price} {...rest} />
      )}
    </>
  );
};

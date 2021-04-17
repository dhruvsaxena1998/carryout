import React from 'react';
import {Badge, Div, Text} from 'react-native-magnus';

const UIPrice = ({...rest}) => (
  <Div
    bg="accent"
    rounded="xl"
    p={10}
    alignItems="center"
    justifyContent="center"
    {...rest}>
    <Text color="dark" fontSize="xl" px={10} fontWeight="bold">
      ₹62
    </Text>
  </Div>
);

export default ({badge, ...rest}) => {
  return (
    <>
      {badge ? (
        <Badge bg="red500" right={-5} top={-5} h={20} w={20}>
          <UIPrice />
        </Badge>
      ) : (
        <UIPrice {...rest} />
      )}
    </>
  );
};

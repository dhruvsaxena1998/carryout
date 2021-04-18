import React from 'react';
import {Div, Text, Image} from 'react-native-magnus';

import {baseURL} from '@helpers/constants';

export default ({item = {}}) => {
  const {name, description, image = {}} = item;
  return (
    <Div bg="secondary" mt={10} p={20} rounded={15}>
      <Div rounded={25} shadow="xl">
        <Image
          h={350}
          w={'100%'}
          rounded={25}
          source={{
            uri: baseURL + image.url,
          }}
        />
      </Div>
      <Div alignItems="flex-end" mt={10}>
        <Text
          color="foreground"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing={1.2}>
          {name}
        </Text>
        <Text color="foreground" fontSize="md" fontWeight="100">
          {description}
        </Text>
      </Div>
    </Div>
  );
};

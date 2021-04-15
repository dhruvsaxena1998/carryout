import React from 'react';
import HomeLayout from '@layouts/HomeLayout';
import {Div, Text} from 'react-native-magnus';

const HomePage = () => {
  return (
    <HomeLayout>
      <Div>
        <Text fontSize="6xl">Welcome</Text>
      </Div>
    </HomeLayout>
  );
};
export default HomePage;

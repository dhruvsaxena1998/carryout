import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import {View, Text, StyleSheet} from 'react-native';

const HomePage = () => {
  return (
    <HomeLayout style={styles.container}>
      <Text>Hello from HomeLayout</Text>
    </HomeLayout>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

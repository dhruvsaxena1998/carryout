import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Div} from 'react-native-magnus';
import {Colors} from '@utils/Theme';

export default ({goBack, style, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.background} />
      <Div m={10}>{children}</Div>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {Div} from 'react-native-magnus';
import {Colors} from '@utils/Theme';

// Components
import Header from '@components/Home/HomeHeader';

export default ({style, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.background} />
      <Div style={{...style}} p={20}>
        <Header />
        {children}
      </Div>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

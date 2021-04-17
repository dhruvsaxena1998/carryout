import React from 'react';
import {FlatList} from 'react-native';
import {Div} from 'react-native-magnus';

// Layout
import HomeLayout from '@layouts/HomeLayout';

// Components
import HomeTagOption from '@components/Home/HomeTagOptions';
import HomeFoodCard from '@components/Home/HomeFoodCard';

const DATA = [
  {slug: 'tiffin', label: 'Tiffins'},
  {slug: 'fast-food', label: 'Fast Food'},
];

const HomePage = () => {
  return (
    <HomeLayout>
      <Div mt={30} row>
        <FlatList
          data={DATA}
          horizontal={true}
          keyExtractor={item => item.slug}
          renderItem={({item, index}) => (
            <HomeTagOption item={item} index={index} onPress={() => {}} />
          )}
        />
      </Div>
      <Div mt={20}>
        {['1'].map(i => (
          <HomeFoodCard key={i} />
        ))}
      </Div>
    </HomeLayout>
  );
};
export default HomePage;

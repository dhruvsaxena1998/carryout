import React, {useEffect} from 'react';
import {Div} from 'react-native-magnus';
import {FlatList} from 'react-native';
import LoadingIndicator from '@animations/loading';

import {useSelector, useDispatch} from 'react-redux';
import {init} from '@store/menu';

import {DetailPage} from '@navigator/Routes';

// Api
import {find} from '@helpers/api';
import {routes} from '@helpers/constants';

// Layout
import HomeLayout from '@layouts/HomeLayout';

// Components
import HomeTagOption from '@components/Home/HomeTagOptions';
import HomeFoodCard from '@components/Home/HomeFoodCard';

const DATA = [
  {slug: 'tiffin', label: 'Tiffins'},
  {slug: 'fast-food', label: 'Fast Food'},
];

const HomePage = props => {
  const {menus} = useSelector(state => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const {success, data} = await find(routes.menu);
      if (!success) {
        dispatch(init(null));
      }
      dispatch(init(data));
    })();
  }, [dispatch]);

  const handleFoodCardClick = _id => {
    props.navigation.navigate(DetailPage, {_id});
  };

  // Render Functions
  if (!menus) {
    // return error message
  }

  if (menus.length <= 0) {
    return <LoadingIndicator />;
  }

  return (
    <HomeLayout>
      <Div row>
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
        <FlatList
          data={menus}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <HomeFoodCard item={item} onPress={handleFoodCardClick} />
          )}
        />
      </Div>
    </HomeLayout>
  );
};
export default HomePage;

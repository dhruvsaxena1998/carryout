import React, {useState, useEffect, useCallback} from 'react';
import {Div, Snackbar, Icon} from 'react-native-magnus';
import {FlatList} from 'react-native';

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
const snackbarRef = React.createRef();

const HomePage = props => {
  const {menus} = useSelector(state => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const {success, data, message} = await find(routes.menu, {
        populate: true,
      });
      if (!success) {
        if (snackbarRef.current) {
          snackbarRef.current.show(message, {
            duration: 2000,
            suffix: (
              <Icon
                name="checkcircle"
                color="secondary"
                fontSize="md"
                fontFamily="AntDesign"
              />
            ),
          });
        }
        dispatch(init(null));
      }
      dispatch(init(data));
    })();
  }, [dispatch]);

  const handleFoodCardClick = index => {
    props.navigation.navigate(DetailPage, {index});
  };
  return (
    <>
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
            renderItem={({item, index}) => (
              <HomeFoodCard
                item={item}
                index={index}
                onPress={handleFoodCardClick}
              />
            )}
          />
        </Div>
      </HomeLayout>
      <Snackbar ref={snackbarRef} bg="danger" color="secondary" />
    </>
  );
};
export default HomePage;

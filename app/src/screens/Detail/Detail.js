import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Div, Text} from 'react-native-magnus';
import {FlatList} from 'react-native';

import SimpleLayout from '@src/layouts/DetailLayout';

import DetailImageCard from '@components/Detail/DetailImageCard';
import DetailFoodItem from '@components/Detail/DetailFoodItem';

const DetailPage = props => {
  const {index} = props.route.params;

  const [currentMenu, setCurrentMenu] = useState({});
  const menu = useSelector(state => state.menu.menus[index]);

  useEffect(() => {
    setCurrentMenu(menu);
  }, [menu]);

  const handleOnPress = (which, index, what) => {};
  return (
    <SimpleLayout>
      <DetailImageCard item={currentMenu} />
      <Div mt={20}>
        <Text ml={10} color="accent" fontSize="2xl" fontWeight="bold">
          Items
        </Text>
        {/* FIXME: Change to flatlist or sectionlist */}
        {currentMenu?.items?.map((item, i) => (
          <DetailFoodItem
            key={item._id}
            item={item}
            index={i}
            slug="items"
            onPress={handleOnPress}
          />
        ))}
      </Div>
    </SimpleLayout>
  );
};

export default DetailPage;

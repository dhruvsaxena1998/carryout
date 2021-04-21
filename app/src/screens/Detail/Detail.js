import React, {useState, useEffect} from 'react';
import {Div, Text, Button} from 'react-native-magnus';
import {SectionList} from 'react-native';
import {LoadingIndicator, ErrorIndicator} from '@animations';

// Api
import {findOne} from '@helpers/api';
import {routes} from '@helpers/constants';

// Layout
import DetailLayout from '@src/layouts/DetailLayout';

// Components
import UIPrice from '@components/UI/UiPrice';
import DetailImageCard from '@components/Detail/DetailImageCard';
import DetailFoodItem from '@components/Detail/DetailFoodItem';

const DetailPage = props => {
  const {_id} = props.route.params;
  const [currentMenu, setCurrentMenu] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const {success, data} = await findOne(routes.menu, _id, {populate: true});
      if (!success) {
        setCurrentMenu(null);
      }
      setCurrentMenu(data);
      setPrice(data.price);
    })();
  }, [_id]);

  /**
   *
   * @param {Number} which index
   * @param {String} what add or minus
   * @param {String} where items or optional
   */
  const handleOnPress = ({which, what, where}) => {
    const menu = {...currentMenu};
    const item = menu[where][which];

    if (what === 'add') {
      item.currentQty =
        item.currentQty + 1 >= item.maxQty ? item.maxQty : item.currentQty + 1;
    } else {
      item.currentQty = item.currentQty - 1 <= 0 ? 0 : item.currentQty - 1;
    }

    setCurrentMenu({...menu});
  };

  // Render functions
  if (!currentMenu) {
    return <ErrorIndicator />;
  }

  if (!currentMenu._id) {
    return <LoadingIndicator />;
  }
  return (
    <>
      <DetailLayout>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={[
            {title: 'items', data: currentMenu.items},
            {title: 'optional', data: currentMenu.optional},
          ]}
          keyExtractor={(item, i) => item._id + i}
          ListHeaderComponent={<DetailImageCard item={currentMenu} />}
          renderItem={({item, section, index}) => (
            <DetailFoodItem
              key={item._id}
              item={item}
              index={index}
              slug={section.title}
              onPress={handleOnPress}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Div mt={20} mb={15}>
              <Text
                ml={10}
                color="accent"
                fontSize="2xl"
                fontWeight="bold"
                textTransform="capitalize">
                {title}
              </Text>
            </Div>
          )}
        />
      </DetailLayout>
      <Div p={10} pt={0} bg="background" row justifyContent="space-between">
        <Button bg="accent" color="secondary" rounded="xl" flex={1}>
          <Text fontSize="2xl" fontWeight="bold">
            Checkout
          </Text>
        </Button>
        <UIPrice ml="md" w={100} price={price} badge={false} />
      </Div>
    </>
  );
};

export default DetailPage;

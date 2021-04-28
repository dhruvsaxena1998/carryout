import React, {useState, useEffect} from 'react';
import {Div, Text, Button, Modal, Input, Icon} from 'react-native-magnus';
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
  const [modalVisible, setModalVisible] = useState(false);

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

  const __calculatePrice = (items, optional) => {
    let __price = price;
    [...items, ...optional].forEach(item => {
      if (item.currentQty > item.defaultQty) {
        __price += (item.currentQty - item.defaultQty) * item.price;
      }
    });
    return __price;
  };

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

    menu.price = __calculatePrice(menu.items, menu.optional);
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
        <Button
          h={50}
          bg="accent"
          color="secondary"
          rounded="xl"
          flex={1}
          loading={false}
          loaderSize="2xl"
          loaderColor="secondary"
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
            Checkout
          </Text>
        </Button>
        <UIPrice
          ml="md"
          h={50}
          w={100}
          price={currentMenu.price}
          badge={currentMenu.price !== price}
        />
      </Div>
      <Modal
        isVisible={modalVisible}
        bg="secondary"
        h={420} // 420 (on error)
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down">
        <Div py="xl" px="md" justifyContent="flex-end">
          {/* Promo */}
          <Div borderBottomWidth={2} borderBottomColor="accent" pb="2xl">
            <Text ml="md" color="accent" fontSize="2xl" fontWeight="bold">
              Offers
            </Text>
            <Div row mt="md">
              <Input
                p={10}
                bg="background"
                color="foreground"
                borderWidth={0}
                placeholder="Promo Code"
                flex={1}
                mr={10}
              />
              <Button bg="background" color="accent" shadow="xl">
                Apply
              </Button>
            </Div>
            <Text mt="md" ml="md" color="danger">
              Invalid promo code!
            </Text>
          </Div>
          {/* Item Information */}
          <Div mt="2xl">
            <Text ml="md" color="accent" fontSize="2xl" fontWeight="bold">
              Confirm checkout!
            </Text>
            <Div px="md" row justifyContent="space-between">
              <Text color="foreground" fontSize="xl">
                Thali 1
              </Text>
              <Text color="foreground" fontSize="xl">
                62
              </Text>
            </Div>
            <Div px="md" row justifyContent="space-between">
              <Text color="foreground" fontSize="xl">
                Additional 1
              </Text>
              <Text color="foreground" fontSize="xl">
                3
              </Text>
            </Div>
            <Div px="md" row justifyContent="space-between">
              <Text color="accent" fontSize="xl" fontWeight="bold">
                Grand Total
              </Text>
              <Text color="accent" fontSize="xl">
                65
              </Text>
            </Div>
          </Div>
          <Button mt="xl" bg="accent" color="secondary" block rounded="xl">
            Checkout
          </Button>
        </Div>
      </Modal>
    </>
  );
};

export default DetailPage;

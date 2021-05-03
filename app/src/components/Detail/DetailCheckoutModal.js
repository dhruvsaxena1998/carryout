import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {Div, Text, Button, Input, Modal} from 'react-native-magnus';

const Offers = ({error, setError}) => (
  <Div>
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
      <Button bg="background" color="accent" shadow="xl" onPress={setError}>
        Apply
      </Button>
    </Div>
    {error && (
      <Text mt="md" ml="md" color="danger">
        Invalid promo code!
      </Text>
    )}
  </Div>
);

const ConfirmCheckout = ({item}) => (
  <Div>
    <Text ml="md" color="accent" fontSize="2xl" fontWeight="bold">
      Confirm checkout!
    </Text>
    <Div px="md" row justifyContent="space-between">
      <Text color="foreground" fontSize="xl">
        {item.name}
      </Text>
      <Text color="foreground" fontSize="xl">
        {item.defaultPrice}
      </Text>
    </Div>
    {item.price - item.defaultPrice > 0 && (
      <Div px="md" row justifyContent="space-between">
        <Text color="foreground" fontSize="xl">
          Additionals
        </Text>
        <Text color="foreground" fontSize="xl">
          {item.price - item.defaultPrice}
        </Text>
      </Div>
    )}
    <Div px="md" row justifyContent="space-between">
      <Text color="accent" fontSize="xl" fontWeight="bold">
        Grand Total
      </Text>
      <Text color="accent" fontSize="xl">
        {item.price}
      </Text>
    </Div>
  </Div>
);

export default ({isVisible, hide, item}) => {
  const [currentView, setCurrentView] = useState('offers');
  const [error, setError] = useState(null);

  const __calculateHeight = () => {
    if (currentView === 'offers') {
      return error ? 250 : 220;
    } else {
      return item.price - item.defaultPrice > 0 ? 270 : 250;
    }
  };
  return (
    <Modal
      isVisible={isVisible}
      bg="secondary"
      h={__calculateHeight()}
      onSwipeComplete={hide}
      swipeDirection="down">
      <Div py="xl" px="md" flexDir="column" justifyContent="space-between">
        <Div>
          {currentView === 'offers' ? (
            <Offers error={error} setError={() => setError(!error)} />
          ) : (
            <ConfirmCheckout item={item} />
          )}
        </Div>
        <Div>
          {currentView === 'offers' && (
            <Button
              mt="xl"
              bg="accent"
              color="secondary"
              block
              rounded="xl"
              onPress={() => setCurrentView('checkout')}>
              <Text fontSize="xl" fontWeight="bold" textTransform="uppercase">
                Skip
              </Text>
            </Button>
          )}
          {currentView === 'checkout' && (
            <Div>
              <Pressable onPress={() => setCurrentView('offers')}>
                <Div p="md" alignItems="flex-end">
                  <Text color="accent">Have a promocode?</Text>
                </Div>
              </Pressable>
              <Button mt="md" bg="accent" color="secondary" block rounded="xl">
                <Text fontSize="xl" fontWeight="bold" textTransform="uppercase">
                  Checkout
                </Text>
              </Button>
            </Div>
          )}
        </Div>
      </Div>
    </Modal>
  );
};

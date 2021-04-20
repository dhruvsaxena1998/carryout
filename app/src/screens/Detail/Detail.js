import React, {useState, useEffect} from 'react';
import {Div, Text} from 'react-native-magnus';
import {SectionList} from 'react-native';
import LoadingIndicator from '@animations/loading';

// Api
import {findOne} from '@helpers/api';
import {routes} from '@helpers/constants';

// Layout
import DetailLayout from '@src/layouts/DetailLayout';

// Components
import DetailImageCard from '@components/Detail/DetailImageCard';
import DetailFoodItem from '@components/Detail/DetailFoodItem';

const DetailPage = props => {
  const {_id} = props.route.params;
  const [currentMenu, setCurrentMenu] = useState({});

  useEffect(() => {
    (async () => {
      const {success, data} = await findOne(routes.menu, _id, {populate: true});
      if (!success) {
        setCurrentMenu(null);
      }
      setCurrentMenu(data);
    })();
  }, [_id]);

  const handleOnPress = (which, index, what) => {};

  // Render functions
  if (!currentMenu) {
    // Return error message
  }

  if (!currentMenu._id) {
    return <LoadingIndicator />;
  }
  return (
    <DetailLayout>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={[
          {title: 'Items', data: currentMenu.items},
          {title: 'Optional', data: currentMenu.optional},
        ]}
        keyExtractor={(item, i) => item._id + i}
        ListHeaderComponent={<DetailImageCard item={currentMenu} />}
        renderItem={({item, i}) => (
          <DetailFoodItem
            key={item._id}
            item={item}
            index={i}
            slug="items"
            onPress={handleOnPress}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Div mt={20}>
            <Text ml={10} color="accent" fontSize="2xl" fontWeight="bold">
              {title}
            </Text>
          </Div>
        )}
      />
    </DetailLayout>
  );
};

export default DetailPage;

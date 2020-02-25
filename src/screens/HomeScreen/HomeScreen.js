// Core
import React, { useCallback, useState } from 'react';
// UI
import { FlatList } from 'react-native';
// Components
import DonateNowModal from '../../components/DonateNowModal/DonateNowModal';
import HorizontalFlatList from './components/HorizontalFlatList/HorizontalFlatList';
import MainScreenPost from './components/MainScreenPost/MainScreenPost';
import VerticalFlatList from './components/VerticalFlatList/VerticalFlatList';
// Styles
import styles from './HomeScreenStyles';

function HomeScreen() {
  const [homeScreenComponents] = useState([
    { id: 'MainScreenPost', component: MainScreenPost },
    { id: 'HorizontalFlatList', component: HorizontalFlatList },
    { id: 'VerticalFlatList', component: VerticalFlatList },
    { id: 'DonateNowModal', component: DonateNowModal },
  ]);

  const renderItem = useCallback(({ item }) => (
    <item.component key={item.id} />
  ), []);

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <FlatList
      data={homeScreenComponents}
      renderItem={renderItem}
      style={styles.container}
      keyExtractor={keyExtractor}
    />
  );
}

export default HomeScreen;

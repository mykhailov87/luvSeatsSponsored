// Core
import React, { useCallback, useEffect } from 'react';
// UI
import { FlatList, View } from 'react-native';
// Components
import H2 from '../../../../components/Typography/H2/H2';
import HorizontalFlatListItem from './components/HorizontalFlatListItem/HorizontalFlatListItem';
// Hooks
import { useData } from './hooks/useData';
// Styles
import styles from './HorizontalFlatListStyles';

function HorizontalFlatList() {
  const { data, getData } = useData();

  const renderItem = useCallback(({ item }) => (
    <HorizontalFlatListItem key={item.id} item={item} />
  ), []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <H2>Home Charities</H2>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default HorizontalFlatList;

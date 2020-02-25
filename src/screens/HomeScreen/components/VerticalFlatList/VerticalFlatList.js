// Core
import React, { useCallback, useEffect } from 'react';
// UI
import { FlatList, View } from 'react-native';
// Components
import H2 from '../../../../components/Typography/H2/H2';
import VerticalFlatListItem from './components/VerticalFlatListItem/VerticalFlatListItem';
// Hooks
import { useData } from './hooks/useData';
// Styles
import styles from './VerticalFlatListStyles';

function VerticalFlatList() {
  const { data, getData } = useData();

  const renderItem = useCallback(({ item, index }) => {
    const even = index % 2 === 0;
    const style = even ? styles.even : styles.odd;

    return (
      <VerticalFlatListItem
        style={style}
        key={item.id}
        item={item}
      />
    );
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <H2>Partner Charities</H2>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

export default VerticalFlatList;

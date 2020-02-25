// Core
import React from 'react';
// UI
import { Text, View } from 'react-native';
// Icons
import ArrowDown from '../../../../svg/ArrowDown';
// Hooks
import { useSelection } from './hooks/useSelection';
// Styles
import styles from './ModalBodyPickerComponentStyles';

function ModalBodyPickerComponent() {
  const [selection] = useSelection();
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        {selection}
      </Text>
      <View style={styles.arrowDownContainer}>
        <ArrowDown />
      </View>
    </View>
  );
}

export default ModalBodyPickerComponent;

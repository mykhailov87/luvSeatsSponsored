// Core
import React from 'react';
// UI
import { Text } from 'react-native';
// Styles
import styles from './H2Styles';

function H2(props) {
  const { children } = props;
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default H2;

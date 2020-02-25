// Core
import React from 'react';
// UI
import { Text, View } from 'react-native';
// Components
import HeartCheck from '../../../../../../svg/HeartCheck';
// Styles
import styles from './TextNodeStyles';

function TextNode(props) {
  const { children, textIndent } = props;
  return (
    <Text style={styles.text}>
      {textIndent && (
        <View style={styles.textIndent}>
          <HeartCheck />
        </View>
      )}
      {children}
    </Text>
  );
}

export default TextNode;

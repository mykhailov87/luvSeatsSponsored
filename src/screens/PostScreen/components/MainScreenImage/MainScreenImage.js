// Core
import React from 'react';
// UI
import { Image, View } from 'react-native';
// Styles
import styles from './MainScreenImageStyles';

function MainScreenImage() {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: 'https://picsum.photos/214/375/' }} />
    </View>
  );
}

export default MainScreenImage;

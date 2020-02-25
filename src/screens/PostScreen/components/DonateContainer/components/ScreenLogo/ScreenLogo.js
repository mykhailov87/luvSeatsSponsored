// Core
import React from 'react';
// UI
import { Image, View } from 'react-native';
// Images
import image from '../../../../../../static/images/acs/ACS.png';
// Styles
import styles from './ScreenLogoStyles';

function ScreenLogo() {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

export default ScreenLogo;

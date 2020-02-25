// Core
import React from 'react';
// UI
import { View } from 'react-native';
// Components
import DonateButton from './components/DonateButton/DonateButton';
import ScreenLogo from './components/ScreenLogo/ScreenLogo';
// Styles
import styles from './DonateContainerStyles';

function DonateContainer() {
  return (
    <View style={styles.container}>
      <ScreenLogo />
      <DonateButton />
    </View>
  );
}

export default DonateContainer;

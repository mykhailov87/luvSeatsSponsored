// Core
import React from 'react';
// UI
import { Text, View } from 'react-native';
// Components
import DonateContainer from './components/DonateContainer/DonateContainer';
import MainScreenDescription from './components/MainScreenDescription/MainScreenDescription';
import MainScreenImage from './components/MainScreenImage/MainScreenImage';
// Styles
import styles from './PostScreenStyles';

function PostScreen() {
  return (
    <View style={styles.screen}>
      <MainScreenImage />
      <View style={styles.container}>
        <DonateContainer />
        <MainScreenDescription />
      </View>
    </View>
  );
}

export default PostScreen;

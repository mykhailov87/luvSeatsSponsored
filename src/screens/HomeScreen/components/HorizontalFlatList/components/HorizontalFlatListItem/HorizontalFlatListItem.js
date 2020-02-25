// Core
import React from 'react';
// UI
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Components
import DonateNowButton from '../../../../../../components/DonateNowButton/DonateNowButton';
// Hooks
import { useImageGradient } from '../../../../../../hooks/useImageGradient';
// Styles
import styles from './HorizontalFlatListItemStyles';

function HorizontalFlatListItem(props) {
  const { item } = props;
  const gradientProps = useImageGradient(styles.imageContainer);

  return (
    <View style={styles.imageContainer}>
      <LinearGradient {...gradientProps}>
        <View style={styles.imageCaptionContainer}>
          <Text numberOfLines={2} style={styles.imageCaption}>
            {item.title}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <DonateNowButton selection={item.title} />
        </View>
      </LinearGradient>
    </View>
  );
}

export default HorizontalFlatListItem;

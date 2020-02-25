// Core
import React, { useState } from 'react';
// UI
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Components
import DonateNowButton from '../../../../../../components/DonateNowButton/DonateNowButton';
// Hooks
import { useImageGradient } from '../../../../../../hooks/useImageGradient';
// Styles
import styles from './VerticalFlatListItemStyles';

function VerticalFlatListItem(props) {
  const { item, style } = props;
  const gradientProps = useImageGradient(styles.imageContainer);
  const imageContainerStyles = useState([styles.imageContainer, style]);

  return (
    <View style={imageContainerStyles}>
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

export default VerticalFlatListItem;

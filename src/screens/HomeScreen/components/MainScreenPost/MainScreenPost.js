// Core
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// UI
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native';
// Components
import H2 from '../../../../components/Typography/H2/H2';
import DonateNowButton from '../../../../components/DonateNowButton/DonateNowButton';
// Engine
import Navigation from '../../../../engine/services/navigation';
// Hooks
import { useImageGradient } from '../../../../hooks/useImageGradient';
import { useData } from '../../hooks/useData';
// Styles
import styles from './MainScreenPostStyles';

function MainScreenPost() {
  const { data, getData, isLoading } = useData();
  const gradientProps = useImageGradient(styles.imageContainer);
  const imageBackgroundStyles = useState([styles.imageContainerBackground, styles.imageContainer]);
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <H2>Featured Charity</H2>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#d41200" />
        </View>
      ) : (
        data.map((item) => {
          const { textDescription, id } = item;
          return (
            <ImageBackground key={id} source={{ uri: `https://picsum.photos/id/${id}/346/163` }} style={imageBackgroundStyles}>
              <TouchableWithoutFeedback
                onPress={() => {
                  const postScreen = Navigation.screens.post;
                  navigation.navigate(postScreen, { id });
                }}
              >
                <LinearGradient {...gradientProps}>
                  <View style={styles.imageCaptionContainer}>
                    <Text style={styles.imageCaption}>{textDescription}</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <DonateNowButton selection={textDescription} />
                  </View>
                </LinearGradient>
              </TouchableWithoutFeedback>
            </ImageBackground>
          );
        })
      )}
    </View>
  );
}

export default MainScreenPost;

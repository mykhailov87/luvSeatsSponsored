// Core
import React, { useMemo, useState } from 'react';
// UI
import { StatusBar, Text, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowBack from '../../svg/ArrowBack';
// Styles
import styles from './HeaderStyles';

function Header(props) {
  const { scene, shadow, previous, navigation } = props;
  const { options } = scene.descriptor;

  const title = useMemo(() => {
    const keys = {
      headerTitle: 'headerTitle',
      title: 'title',
    };
    switch (true) {
      case keys.headerTitle in options: {
        return options[keys.headerTitle];
      }
      case keys.title in options: {
        return options[keys.title];
      }
      default: {
        return scene.route.name;
      }
    }
  }, [options, scene.route.name]);

  const [gradientProps] = useState({
    colors: ['#d01302', '#d01302', '#ff8210'],
    end: { x: -498.076, y: 427.331 },
    start: { x: -533.088, y: 63.425 },
    style: styles.gradient,
    locations: [0, 1, 1],
  });

  return (
    <View style={shadow ? styles.shadow : null}>
      <StatusBar barStyle="light-content" />
      <LinearGradient {...gradientProps}>
        <View style={styles.backButtonContainer}>
          {previous && (
            <TouchableWithoutFeedback onPressIn={navigation.goBack}>
              <ArrowBack />
            </TouchableWithoutFeedback>
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

Header.defaultProps = {
  shadow: true,
};

export default Header;

// Core
import React, { useCallback, useState } from 'react';
// UI
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
// Styles
import styles from './DonateButtonStyles';

function DonateButton() {
  const [gradient] = useState({
    colors: ['#d41200', '#d41200', '#ff8210'],
    locations: [0, 1, 1],
    start: { x: -124.481, y: 25.753 },
    end: { x: -112.144, y: 133.922 },
    style: styles.gradient,
  });

  const onPressHandler = useCallback(() => {
    // TODO: add handler
  }, []);

  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
      <LinearGradient {...gradient}>
        <Text style={styles.buttonText}>Donate now</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default DonateButton;

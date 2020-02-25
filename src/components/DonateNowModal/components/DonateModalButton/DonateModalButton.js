// Core
import React, { useState } from 'react';
// UI
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Styles
import styles from './DonateModalButtonStyles';

function DonateModalButton() {
  const [gradient] = useState({
    colors: ['#d41200', '#d41200', '#ff8210'],
    locations: [0, 1, 1],
    start: { x: -124.481, y: 25.753 },
    end: { x: -112.144, y: 133.922 },
    style: styles.gradient,
  });

  return (
    <View style={styles.shadow}>
      <TouchableOpacity style={styles.button}>
        <LinearGradient {...gradient}>
          <Text style={styles.buttonText}>Donation</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default DonateModalButton;

// Core
import React, { useCallback, useState } from 'react';
// UI
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Hooks
import { useModal } from '../DonateNowModal/hooks/useModal';
import { useSelection } from '../DonateNowModal/components/ModalBodyPickerComponent/hooks/useSelection';
// Styles
import styles from './DonateNowButtonStyles';

function DonateNowButton(props) {
  const { selection } = props;

  const [gradient] = useState({
    colors: ['#d41200', '#d41200', '#ff8210'],
    locations: [0, 1, 1],
    start: { x: -124.481, y: 25.753 },
    end: { x: -112.144, y: 133.922 },
    style: styles.gradient,
  });

  const [, setIsModalOpen] = useModal();
  const [, setModalSelection] = useSelection();

  const onPressHandler = useCallback(() => {
    setModalSelection(selection);
    setIsModalOpen(true);
  }, [selection, setIsModalOpen, setModalSelection]);

  return (
    <View style={styles.shadow}>
      <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <LinearGradient {...gradient}>
          <Text style={styles.buttonText}>Donate Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

DonateNowButton.defaultProps = {
  selection: '',
};

export default DonateNowButton;

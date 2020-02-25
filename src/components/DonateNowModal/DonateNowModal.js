// Core
import React, { useCallback, useState } from 'react';
// UI
import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// Components
import Close from '../../svg/Close';
import ModalBodyPickerComponent from './components/ModalBodyPickerComponent/ModalBodyPickerComponent';
import DonateModalButton from './components/DonateModalButton/DonateModalButton';
// Hooks
import { useModal } from './hooks/useModal';
// Styles
import styles from './DonateNowModalStyles';

function DonateNowModal() {
  const [isOpen, setIsOpen] = useModal();
  const [inputValue, setInputValue] = useState('$25.00');

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Modal animationType="slide" transparent visible={isOpen}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.flexOne} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainerShadow}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.modalHeaderCloseBtn}>
            <Close />
          </TouchableOpacity>
          <View style={styles.modelHeader}>
            <Text style={styles.modalHeaderText}>Donation</Text>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.modalBodyTitleContainer}>
              <Text style={styles.modalBodyTitle}>
                <Text style={styles.modalBodyTitleBold}>LuvSeats </Text>
                will transfer the amount from your balance to the account of the selected charity.
              </Text>
            </View>
            <View style={styles.modalBodyTextInputBlock}>
              <View style={styles.modalBodyTextInputContainer}>
                <TextInput
                  style={styles.modalBodyTextInput}
                  onChangeText={setInputValue}
                  keyboardType="number-pad"
                  maxLength={10}
                  value={inputValue}
                />
              </View>
              <View style={styles.modalBodyTextInputBlockBorder} />
            </View>
            <View style={styles.modalBodyPickerContainer}>
              <ModalBodyPickerComponent />
              <View style={styles.modalBodyTextInputBlockBorder} />
            </View>
            <View style={styles.donateModalButtonContainer}>
              <DonateModalButton />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default DonateNowModal;

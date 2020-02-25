// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../libs/helpers/rem';

const styles = EStyleSheet.create({
  flexOne: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    flex: 1,
  },
  modalBody: {
    marginTop: rem(32),
    marginHorizontal: rem(50),
  },
  modalBodyTitle: {
    color: '$gray',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: rem(18),
    lineHeight: rem(20),
    textAlign: 'center',
  },
  modalBodyTextInputBlock: {
    height: rem(49),
    marginBottom: rem(18),
    marginHorizontal: rem(2),
  },
  modalBodyTextInputBlockBorder: {
    bottom: 0,
    borderColor: '#797979',
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderWidth: rem(0.7),
    height: rem(4),
    position: 'absolute',
    width: '100%',
  },
  modalBodyTextInput: {
    color: '$black',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: rem(17),
    height: rem(31),
    lineHeight: rem(31),
  },
  modalBodyTextInputContainer: {
    marginHorizontal: rem(5),
  },
  modalBodyTitleBold: {
    fontWeight: '800',
  },
  modalBodyTitleContainer: {
    height: rem(70),
    marginBottom: rem(25),
  },
  modalContainer: {
    backgroundColor: '$white',
    borderColor: '#e0e0e0',
    borderRadius: rem(14),
    borderStyle: 'solid',
    borderWidth: rem(0.5),
    position: 'relative',
  },
  modalContainerShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.2366)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: rem(37),
    elevation: 1,
  },
  modelHeader: {
    marginTop: rem(20),
    marginHorizontal: rem(91),
    height: rem(23.62),
  },
  modalHeaderCloseBtn: {
    position: 'absolute',
    right: rem(21),
    top: rem(21),
  },
  modalHeaderText: {
    color: '$black',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: rem(16),
    lineHeight: rem(22),
    textAlign: 'center',
  },
  modalBodyPickerContainer: {
    height: rem(49),
    marginBottom: rem(62),
    marginHorizontal: rem(2),
  },
  donateModalButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: rem(51),
  },
});

export default styles;

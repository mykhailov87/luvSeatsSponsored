// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  image: {
    height: rem(68),
    width: rem(120),
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: '$white',
    bottom: rem(3),
    borderColor: '#d8d8d8',
    borderRadius: rem(7),
    borderStyle: 'solid',
    borderWidth: rem(1),
    height: rem(124),
    justifyContent: 'center',
    position: 'absolute',
    shadowColor: '$black',
    shadowOffset: {
      height: rem(2),
      width: rem(2),
    },
    shadowOpacity: 0.5,
    shadowRadius: rem(29),
    width: rem(122),
  },
});

export default styles;

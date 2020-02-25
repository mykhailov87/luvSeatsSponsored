// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../libs/helpers/rem';

const styles = EStyleSheet.create({
  button: {
    borderRadius: rem(3),
    height: rem(27),
    elevation: rem(5),
    overflow: 'hidden',
    position: 'relative',
    width: rem(92),
  },
  buttonText: {
    color: '$white',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: rem(12),
    textAlign: 'center',
    lineHeight: rem(16),
    position: 'absolute',
    top: '20.69%',
    width: '100%',
  },
  gradient: {
    height: '100%',
  },
  shadow: {
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: rem(7),
    },
    shadowOpacity: rem(0.396258),
    shadowRadius: rem(3.84),
  },
});

export default styles;

// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  button: {
    height: rem(43),
    width: rem(168),
  },
  buttonText: {
    color: '#f5f6f8',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: rem(17),
    textAlign: 'center',
  },
  gradient: {
    alignItems: 'center',
    borderRadius: rem(5),
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  shadow: {
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: rem(6),
    },
    shadowOpacity: rem(0.396258),
    shadowRadius: rem(3.84),
  },
});

export default styles;

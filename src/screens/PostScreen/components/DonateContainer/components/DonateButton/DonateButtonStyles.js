// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  button: {
    borderRadius: rem(5),
    height: rem(40),
    overflow: 'hidden',
    marginLeft: 'auto',
    width: rem(123),
  },
  buttonText: {
    color: '#f5f6f8',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: rem(17),
    lineHeight: rem(23),
    textAlign: 'center',
  },
  gradient: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;

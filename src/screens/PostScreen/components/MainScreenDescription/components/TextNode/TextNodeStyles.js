// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  text: {
    color: '$lightGray',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: rem(16),
    lineHeight: rem(21),
    letterSpacing: rem(-0.3),
    marginBottom: rem(20),
  },
  textIndent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    transform: [{ rotateY: '180deg' }],
    width: rem(40),
  },
});

export default styles;

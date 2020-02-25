// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  arrowDownContainer: {
    bottom: rem(2),
    position: 'absolute',
    right: rem(12),
  },
  container: {
    height: rem(31),
    marginBottom: rem(14),
    marginLeft: rem(5),
  },
  text: {
    bottom: 0,
    color: '$black',
    fontFamily: '$avenir',
    fontSize: rem(17),
    fontStyle: 'normal',
    fontWeight: 'normal',
    position: 'absolute',
    paddingRight: rem(30),
  },
});

export default styles;

// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: rem(20),
  },
  textContainer: {
    height: rem(30),
    marginBottom: rem(4),
  },
  even: {
    marginRight: rem(9),
  },
  odd: {
    marginLeft: rem(9),
  },
});

export default styles;

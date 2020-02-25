// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: rem(34),
  },
  textContainer: {
    height: rem(30),
    marginBottom: rem(5),
  },
});

export default styles;

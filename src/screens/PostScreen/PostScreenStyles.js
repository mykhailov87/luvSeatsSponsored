// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../libs/helpers/rem';

const styles = EStyleSheet.create({
  screen: {
    backgroundColor: '#f2f2f2',
  },
  container: {
    marginBottom: rem(23),
    marginLeft: rem(30),
    marginRight: rem(31),
  },
});

export default styles;

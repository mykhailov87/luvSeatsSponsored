// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../libs/helpers/rem';

const styles = EStyleSheet.create({
  text: {
    color: '$lightGray',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: rem(20),
  },
});

export default styles;

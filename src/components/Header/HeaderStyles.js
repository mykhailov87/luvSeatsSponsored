// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../libs/helpers/rem';

const styles = EStyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    left: '5.87%',
    right: '92%',
    top: '55.56%',
    bottom: '25.56%',
  },
  gradient: {
    height: rem(90),
    position: 'relative',
  },
  titleContainer: {
    position: 'absolute',
    left: '10.93%',
    right: '10.93%',
    top: '51.11%',
    bottom: '11.11%',
  },
  title: {
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: rem(21),
    textAlign: 'center',
    color: '$white',
  },
  shadow: {
    elevation: rem(5),
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: rem(4),
    },
    shadowOpacity: rem(0.25),
    shadowRadius: rem(3.84),
  },
});

export default styles;

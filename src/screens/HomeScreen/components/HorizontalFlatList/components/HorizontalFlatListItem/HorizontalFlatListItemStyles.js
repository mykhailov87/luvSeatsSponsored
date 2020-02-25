// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../../../libs/helpers/rem';

const imageContainerHeight = 218;
const imageCaptionContainerHeight = 54;

const styles = EStyleSheet.create({
  buttonContainer: {
    bottom: rem(12),
    position: 'absolute',
    left: rem(27),
    right: rem(26),
  },
  imageCaption: {
    color: '$white',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: rem(17),
    lineHeight: rem(19),
    textAlign: 'center',
  },
  imageCaptionContainer: {
    position: 'absolute',
    height: rem(imageCaptionContainerHeight),
    left: '6.85%',
    right: '6.16%',
    top: rem(imageContainerHeight / 2 - imageCaptionContainerHeight / 2 + 43),
  },
  imageContainer: {
    height: rem(imageContainerHeight),
    marginRight: rem(15),
    position: 'relative',
    width: rem(146),
  },
});

export default styles;

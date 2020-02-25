// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../../../libs/helpers/rem';

const imageContainerHeight = 132;
const imageContainerWidth = 164;
const imageCaptionContainerHeight = 35;

const styles = EStyleSheet.create({
  buttonContainer: {
    bottom: rem(7.94),
    position: 'absolute',
    left: rem(33),
    right: rem(38),
  },
  imageCaption: {
    color: '$white',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(14),
    textAlign: 'center',
  },
  imageCaptionContainer: {
    position: 'absolute',
    height: rem(imageCaptionContainerHeight),
    left: '6.85%',
    right: '6.16%',
    top: rem(imageContainerHeight / 2 - imageCaptionContainerHeight / 2 + 12.5),
  },
  imageContainer: {
    height: rem(imageContainerHeight),
    position: 'relative',
    marginBottom: rem(15),
    width: rem(imageContainerWidth),
  },
});

export default styles;

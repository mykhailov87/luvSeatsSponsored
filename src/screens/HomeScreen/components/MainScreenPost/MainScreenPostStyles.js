// Core
import EStyleSheet from 'react-native-extended-stylesheet';
// Helpers
import { rem } from '../../../../libs/helpers/rem';

const imageContainerHeight = 163;
const imageContainerWidth = 346;
const imageCaptionContainerHeight = 34;

const styles = EStyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    left: '36.54%',
    right: '36.58%',
    top: '74.74%',
    bottom: '7.47%',
  },
  container: {
    position: 'relative',
    marginBottom: rem(26),
  },
  textContainer: {
    height: rem(30),
    marginBottom: rem(3),
  },
  imageContainer: {
    borderRadius: rem(5),
    height: rem(imageContainerHeight),
    overflow: 'hidden',
    position: 'relative',
    width: rem(imageContainerWidth),
    zIndex: 1,
  },
  imageContainerBackground: {
    height: '100%',
    width: '100%',
  },
  imageCaptionContainer: {
    position: 'absolute',
    height: rem(imageCaptionContainerHeight),
    left: '18.79%',
    right: '18.79%',
    top: rem(imageContainerHeight / 2 - imageCaptionContainerHeight / 2 + 21.5),
    marginBottom: rem(1.83),
  },
  imageCaption: {
    color: '$white',
    fontFamily: '$avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: rem(17),
    lineHeight: rem(23),
    textAlign: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    height: rem(imageContainerHeight),
    justifyContent: 'center',
    width: rem(imageContainerWidth),
  },
});

export default styles;

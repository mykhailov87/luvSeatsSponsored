// Core
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const REM = width > 340 ? 18 : 16;

export function rem(pixels, context = REM) {
  return `${pixels / context}rem`;
}

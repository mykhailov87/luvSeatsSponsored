// Core
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Engine
import { fonts } from '../../config/fonts';

export function initStyles() {
  const { width } = Dimensions.get('window');

  EStyleSheet.build({
    $theme: 'light',
    $rem: width > 340 ? 18 : 16,
    // Colors
    $black: '#000',
    $lightGray: '#222',
    $gray: '#575757',
    $white: '#fff',
    // Fonts
    $avenir: fonts.avenir,
  });
}

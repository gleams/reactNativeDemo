import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const System = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    ios: Platform.OS === 'ios',
    Android: Platform.OS === 'android'
};
export { System }

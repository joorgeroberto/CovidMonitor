import {StyleSheet} from 'react-native';
import {
  Dimensions,
} from 'react-native';
import Colors from '../../Config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

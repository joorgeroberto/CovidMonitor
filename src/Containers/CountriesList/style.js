import {Dimensions, Animated} from 'react-native';
import Colors from '../../Config/Colors';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');

export const CountriesModal = styled(Animated.View)`
  width: ${width};
  height: ${height};
  padding-top: 16px;
  background-color: ${Colors.white};
  border-radius: 40px;
`;

export const ModalIndicator = styled.View`
  width: 15%;
  align-self: center;
  background-color: ${Colors.divider_light};
  height: 6px;
  border-radius: 20px;
`;
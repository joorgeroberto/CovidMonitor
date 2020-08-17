import {Dimensions, Animated} from 'react-native';
import Colors from '../../Config/Colors';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width};
  height: ${height};
  padding-top: 16px;
  background-color: ${Colors.white};
  border-radius: 40px;
`;
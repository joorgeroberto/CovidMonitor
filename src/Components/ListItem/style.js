import {Dimensions} from 'react-native';
import Colors from '../../Config/Colors';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: ${width};
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.divider_light};
`;

export const CodeSquare = styled.View`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${Colors.text_light};
`;

export const TextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.text_strong};
`;

export const TextBoldInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.text_strong};
`;

export const TextLight = styled.Text`
  font-size: 14px;
  color: ${Colors.text_light};
`;
export const TextCodeSquare = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${Colors.text_light};
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
  margin-left: 10px;
`;


export const CasesContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
`;

export const CountryNameContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
`;

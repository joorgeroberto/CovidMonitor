import {Dimensions} from 'react-native';
import Colors from '../../Config/Colors';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: ${width};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextStrong = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.text_strong};
`;

export const TextLight = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.text_light};
`;

export const Title = styled(TextStrong)`
  font-size: 35px;
`;

export const TotalConfirmed = styled(TextStrong)`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${Colors.divider_light};
  padding: 25px 0;
`;

export const TotalConfirmedInfo = styled(TotalConfirmed)`
  color: ${Colors.text_light};
`;

export const SubTitle = styled(TextLight)`
  font-size: 16px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0;
  padding-bottom: 10px;
`;

export const TextInfoStrong = styled(TextStrong)`
  font-size: 18px;
  width: 100%;
  text-align: center;
`;

export const TextInfoLight = styled(TextInfoStrong)`
  color: ${Colors.text_light};
  font-size: 15px;
  margin-top: 2px;
  margin-bottom: 20px;
`;

export const DeathColumn = styled.View`
  flex-direction: column;
  width: 50%;

`;

export const RecoveredColumn = styled(DeathColumn)`
`;


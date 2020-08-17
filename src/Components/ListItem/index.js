import React from 'react';
import {View, Text} from 'react-native';

import {
  Container,
  CasesContainer,
  CodeSquare,
  TextBold,
  TextLight,
  TextBoldInfo,
  TextCodeSquare,
  CountryNameContainer,
  InfoContainer,
} from './style';

const ListItem = ({data, navigation}) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('CountryInfo', {
          initialCountryData: data,
        });
      }}>
      <CodeSquare>
        <TextCodeSquare>{data.CountryCode}</TextCodeSquare>
      </CodeSquare>
      <InfoContainer>
        <CountryNameContainer>
          <TextBold>{data.Country}</TextBold>
        </CountryNameContainer>
        <CasesContainer>
          <TextBoldInfo>
            New cases    <TextLight>{data.NewConfirmed}</TextLight>
          </TextBoldInfo>
          <TextBoldInfo>
            Total cases   <TextLight>{data.TotalConfirmed}</TextLight>
          </TextBoldInfo>
        </CasesContainer>
      </InfoContainer>
    </Container>
  );
}

export {ListItem};
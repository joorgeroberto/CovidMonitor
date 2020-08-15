import React from 'react';
import {getCurrentDate} from '../../Config/Utils'
import {
  Container,
  Title,
  SubTitle,
  TotalConfirmed,
  TotalConfirmedInfo,
  InfoContainer,
  TextInfoStrong,
  TextInfoLight,
  DeathColumn,
  RecoveredColumn,
} from './style';

const GlobalHeader = ({data}) => {
  return (
    <Container>
      <Title>Global</Title>
      <SubTitle>{getCurrentDate()}</SubTitle>
      <TotalConfirmed>
        Total       <TotalConfirmedInfo>{data.TotalConfirmed}</TotalConfirmedInfo>
      </TotalConfirmed>
      <InfoContainer>
        <RecoveredColumn>
          <TextInfoStrong>New recovered</TextInfoStrong>
          <TextInfoLight>{data.NewRecovered}</TextInfoLight>
          
          <TextInfoStrong>Total recovered</TextInfoStrong>
          <TextInfoLight>{data.TotalRecovered}</TextInfoLight>
        </RecoveredColumn>
        <DeathColumn>
          <TextInfoStrong>New deaths</TextInfoStrong>
          <TextInfoLight>{data.NewDeaths}</TextInfoLight>

          <TextInfoStrong>Total deaths</TextInfoStrong>
          <TextInfoLight>{data.TotalDeaths}</TextInfoLight>
        </DeathColumn>
      </InfoContainer>
    </Container>
  );
}

export {GlobalHeader};
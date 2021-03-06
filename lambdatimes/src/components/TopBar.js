import React from 'react';
import styled from 'styled-components';

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanLeft = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const SpanCenter = styled.div`
  cursor: pointer;
  margin-right: 5%;

  :hover {
    text-decoration: underline;
  }
`;

const SpanRight = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <ContainerLeft>
          <SpanLeft>TOPICS</SpanLeft>
          <SpanLeft>SEARCH</SpanLeft>
        </ContainerLeft>
        <ContainerCenter>
          <SpanCenter>GENERAL</SpanCenter>
          <SpanCenter>BROWNBAG</SpanCenter>
          <SpanCenter>RANDOM</SpanCenter>
          <SpanCenter>MUSIC</SpanCenter>
          <SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </ContainerCenter>
        <ContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </ContainerRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;
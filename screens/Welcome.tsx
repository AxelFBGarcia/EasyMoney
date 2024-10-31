import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//Custom components
import { Container } from "../components/shared";
import { colors } from "@/components/colors";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
`;

// Image
import background from "../assets/images/kurp2.jpg";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection></TopSection>
        <TopImage source={background}></TopImage>
        <BottomSection>=</BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
import React, { FunctionComponent, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import BigText from "@/components/Texts/BigText";

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
  justify-content: flex-end;
`;

// Image
import background from "../assets/images/kurp2.jpg";
import RegularButton from "@/components/Buttons/RegularButton";
import SmallText from "@/components/Texts/SmallText";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background}></TopImage>
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Easy Money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            A money management app for tracking, optimizing, and receiving
            updates on investment performance and growth.
          </SmallText>
          <RegularButton onPress={() => {}}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  topBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 200,
    height: 80,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  otherContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});

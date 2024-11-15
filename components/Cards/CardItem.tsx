import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// components
import { ScreenWidth } from "../shared";
import { colors } from "../colors";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  width: 100%;
  border-radius: 25px;
`;

const ToucableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  flex: 1;
`;

// images
import card_bg from "../../assets/images/kurp2.jpg";

// types
import { CardProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const CardItem: FunctionComponent<CardProps> = (props) => {
  const handlePress = () => {};

  return (
    <CardBackground source={card_bg} imageStyle={{ borderRadius: 25 }}>
      <CardTouchable onPress={handlePress}>
        <LinearGradient
          colors={["#227d9c", "#17c3b3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            borderRadius: 25,
            padding: 30,
            justifyContent: "space-between",
          }}
        >
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
              {props.accountNo}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ marginBottom: 5, color: colors.graylight }}
              >
                Total balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19 }}>
                ${props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </LinearGradient>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;

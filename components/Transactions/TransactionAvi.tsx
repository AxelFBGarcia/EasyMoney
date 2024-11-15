import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// icons
import { Ionicons } from "@expo/vector-icons";

// custom components
import { colors } from "../colors";

const StyledView = styled.View`
  heigth: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// types
import { TransactionAviProps } from "./types";

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} />
    </StyledView>
  );
};

export default TransactionAvi;

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  width: 100%;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

// types
import { TransactionProps } from "./types";

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi background={props.art.background} icon={} />
      </LeftView>
      <RightView></RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

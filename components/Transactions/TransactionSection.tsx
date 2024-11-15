import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const TransactionSectionBackground = styled.View`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

// types
import { TransactionSectionProps } from "./types";

const TransactionSection: FunctionComponent<TransactionSectionProps> = (
  props
) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent <Ionicons name="caret-down" size={13} />
        </SmallText>
      </TransactionRow>

      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;

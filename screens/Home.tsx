import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "@/components/colors";
import { Container } from "@/components/shared";
import CardSection from "@/components/Cards/CardSection";
import TransactionSection from "@/components/Transactions/TransactionSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

// card logos
import logo_mc from "./../assets/images/mc.png";
import logo_visa from "./../assets/images/visa.png";

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      balance: 20000.15,
      accountNo: "Nu",
      alias: "Work Debit",
      logo: logo_mc,
    },
    {
      id: 2,
      balance: 20000.15,
      accountNo: "Bancomer",
      alias: "Personal Prepaid",
      logo: logo_mc,
    },
    {
      id: 3,
      balance: 20000.15,
      accountNo: "Wala",
      alias: "School Prepaid",
      logo: logo_visa,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2021",
      title: "Shopping",
      subtitle: "Ali express",
      art: {
        background: colors.tertiary,
        icon: "car",
      },
    },
    {
      id: 3,
      amount: "-$386.00",
      date: "14 Aug 2021",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent,
        icon: "car",
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
    </HomeContainer>
  );
};

export default Home;

import { ImageSourcePropType } from "react-native";

export interface CardProps {
  id: number;
  balance: number;
  accountNo: string;
  alias?: string;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}

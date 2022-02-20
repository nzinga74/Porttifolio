import React from "react";
import { PropsType } from "./types";
import { ChipSpan } from "./styles";
const Chip: React.FC<PropsType> = ({ text }) => {
  return <ChipSpan>{text}</ChipSpan>;
};
export default Chip;

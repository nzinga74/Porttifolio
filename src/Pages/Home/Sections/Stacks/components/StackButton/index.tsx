import React from "react";
import { ButtonStack, ButtonStackTitle, ButtonStackContent } from "./styles";
import { Props } from "./types";
const StackButton: React.FC<Props> = (props) => {
  const { onClick, data, isActive } = props;
  return (
    <ButtonStack isActive={isActive} onClick={onClick}>
      <ButtonStackTitle>{data.title}</ButtonStackTitle>
      <ButtonStackContent>{data.content}</ButtonStackContent>
    </ButtonStack>
  );
};
export default StackButton;

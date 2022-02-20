import React from "react";
import { ButtonStack, ButtonStackTitle, ButtonStackContent } from "./styles";
const StackButton: React.FC = () => {
  return (
    <ButtonStack>
      <ButtonStackTitle>Front-End</ButtonStackTitle>
      <ButtonStackContent>
        Eu desenvolvo front-end com um código muito limpo
      </ButtonStackContent>
    </ButtonStack>
  );
};
export default StackButton;
